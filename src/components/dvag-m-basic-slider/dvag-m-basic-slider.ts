import { Component, MQBasedRendered, uiElement, uiElements, uiEvent } from "@kluntje/core";
import { addClass, getParent, removeClass, toggleClass } from "@kluntje/js-utils/lib/dom-helpers";
import { DRAGGING, INACTIVE, VISIBLE } from "Constants/cssClasses";
import ViewportObserverService from "Services/ViewportObserverService";
import mqDefinitions from "Config/mediaQueries";
import { IN_VIEWPORT_EVENT, MQ_CHANGE_EVENT, OUT_VIEWPORT_EVENT, SLIDE_CHANGED_EVENT } from "Constants/eventTypes";
import { MediaQueryService, ViewportObserver } from "@kluntje/services";
import LazyConnectService from "Services/LazyConnectService";
import AEMPanelcontainerService from "Services/AEMPanelcontainerService";
import { PanelcontainerMessageData } from "Services/AEMPanelcontainerService.types";
import { waitForScrollEnd } from "Helpers/domHelper/waitForScrollEnd";
import TrackingService from "Services/TrackingService";
@MQBasedRendered(mqDefinitions)
export class DvagBasicSlider extends Component {
  viewportObserver = ViewportObserver.getInstance();

  @uiElements(".dvag-m-basic-slider__slide")
  slides: Array<HTMLDivElement>;

  @uiElement(".dvag-m-basic-slider__slides")
  slidesContainer: HTMLDivElement;

  @uiElement(".dvag-m-basic-slider__scroll-bar")
  scrollBar: HTMLButtonElement;

  @uiElement(".dvag-m-basic-slider__scroll-indicator")
  scrollIndicator?: HTMLButtonElement;

  @uiElement(".dvag-m-basic-slider__nav-button--prev")
  prevBtn: HTMLButtonElement;

  @uiElement(".dvag-m-basic-slider__nav-button--next")
  nextBtn: HTMLButtonElement;

  activeSlideIndicator: HTMLSpanElement;

  private _inDraggingMode = false;
  private initialDragOffset = 0;
  private lastScrollIndicatorOffset = 0;
  private _activeSlideIdx = 0;
  private _firstSlideVisible: boolean;
  private _lastSlideVisible: boolean;

  protected activeSlideMap: WeakMap<HTMLDivElement, boolean> = new WeakMap();

  mqService: MediaQueryService = MediaQueryService.getInstance(mqDefinitions);
  autoplayInterval: NodeJS.Timeout | null = null;
  lastInteractionType?: "click" | "swipe" | "dragScrollIndicator" | "autoplay";

  get autoplay(): boolean {
    return this.hasAttribute("autoplay") && this.getAttribute("autoplay") !== "false";
  }

  get autoplayDelay(): number {
    return parseInt(this.getAttribute("autoplay-delay") || "2000", 10);
  }

  get activeSlideIdx(): number {
    return this._activeSlideIdx;
  }

  set activeSlideIdx(newIdx: number) {
    if (newIdx < 0 || newIdx >= this.slides.length) return;
    this._activeSlideIdx = newIdx;
  }

  get firstActiveSlide() {
    const activeSlides = this.slides.filter(slide => this.activeSlideMap.get(slide) === true);
    if (activeSlides.length === 0) return null;

    return activeSlides[0];
  }

  get firstSlideVisible() {
    return this._firstSlideVisible;
  }

  set firstSlideVisible(newState: boolean) {
    if (this._firstSlideVisible === newState) return;

    toggleClass(this.prevBtn, VISIBLE, !newState);
    this._firstSlideVisible = newState;
    this.updateSliderActive();
  }

  get lastSlideVisible() {
    return this._lastSlideVisible;
  }

  set lastSlideVisible(newState: boolean) {
    if (this._lastSlideVisible === newState) return;

    toggleClass(this.nextBtn, VISIBLE, !newState);
    this._lastSlideVisible = newState;
    this.updateSliderActive();
  }

  async updateSliderActive() {
    await waitForScrollEnd(this.slidesContainer);

    if (this.firstSlideVisible === true && this.lastSlideVisible === true) {
      addClass(this, INACTIVE);
    } else {
      removeClass(this, INACTIVE);
    }
  }

  afterComponentRender() {
    this.viewportObserver.observe(this);
    LazyConnectService.subscribe(this, () => {
      this.setScrollIndicatorWidth();
      this.initControls();
      this.initActiveSlideObserver();
      this.initEditMode();
    });
  }

  initEditMode() {
    AEMPanelcontainerService.observeMessages("cmp-carousel", (data: PanelcontainerMessageData) =>
      this.handlePanelcontainerMessage(data),
    );
  }

  handlePanelcontainerMessage(data: PanelcontainerMessageData) {
    let panelcontainerId = this.dataset.cmpPanelcontainerId;

    if (panelcontainerId === undefined) {
      const parentCarousel = getParent<HTMLElement>(this, ".cmp-carousel");
      panelcontainerId = parentCarousel?.dataset.cmpPanelcontainerId || undefined;
    }

    if (data.id !== panelcontainerId) return;

    removeClass(this.slides, "cmp-carousel__item--active");
    addClass(this.slides[data.index], "cmp-carousel__item--active");
    this.goToSlide(data.index);
  }

  setScrollIndicatorWidth() {
    const scrollIndicatorRelWidth = this.slidesContainer.offsetWidth / this.slidesContainer.scrollWidth;
    if (this.scrollIndicator) this.scrollIndicator.style.width = `${scrollIndicatorRelWidth * 100}%`;
  }

  initControls() {
    if (this.slides.length === 0) return;
    this.initItemObserver();
  }

  initItemObserver() {
    const firstSlide = this.slides[0];
    ViewportObserverService.observeIn({
      targetElement: firstSlide,
      callback: () => (this.firstSlideVisible = true),
      context: this,
      observerConfig: this.vpObserverConfig,
    });
    ViewportObserverService.observeOut({
      targetElement: firstSlide,
      callback: () => (this.firstSlideVisible = false),
      context: this,
      observerConfig: this.vpObserverConfig,
    });

    const lastSlide = this.slides[this.slides.length - 1];
    ViewportObserverService.observeIn({
      targetElement: lastSlide,
      callback: () => (this.lastSlideVisible = true),
      context: this,
      observerConfig: this.vpObserverConfig,
    });
    ViewportObserverService.observeOut({
      targetElement: lastSlide,
      callback: () => (this.lastSlideVisible = false),
      context: this,
      observerConfig: this.vpObserverConfig,
    });
  }

  handleFirstSlideInVp() {
    removeClass(this.prevBtn, VISIBLE);
  }

  handleFirstSlideOutVp() {
    addClass(this.prevBtn, VISIBLE);
  }

  initActiveSlideObserver() {
    this.slides.forEach(slide => {
      ViewportObserverService.observeIn({
        targetElement: slide,
        callback: () => this.handleSlideInVp(slide),
        context: this,
        observerConfig: this.vpObserverConfig,
      });
      ViewportObserverService.observeOut({
        targetElement: slide,
        callback: () => this.handleSlideOutVp(slide),
        context: this,
        observerConfig: this.vpObserverConfig,
      });
    });
  }

  handleSlideInVp(slide: HTMLDivElement) {
    this.activeSlideMap.set(slide, true);
    this.updateActiveSlide();
  }

  handleSlideOutVp(slide: HTMLDivElement) {
    this.activeSlideMap.set(slide, false);
    this.updateActiveSlide();
  }

  updateActiveSlide() {
    if (this.activeSlideIdx === this.slides.findIndex(slide => this.activeSlideMap.get(slide) === true)) return;
    this.activeSlideIdx = this.slides.findIndex(slide => this.activeSlideMap.get(slide) === true);
    this.dispatchSlideChangedEvent();
  }

  async dispatchSlideChangedEvent() {
    await waitForScrollEnd(this.slidesContainer);

    const trackingData = {
      slidesTotal: this.slides.length,
      currentSlide: this.activeSlideIdx,
      target: this,
      interactionType: this.lastInteractionType || "",
      autoplay: this.autoplay,
    };

    TrackingService.dispatch({
      eventName: SLIDE_CHANGED_EVENT,
      eventDetails: trackingData,
    });
  }

  get vpObserverConfig(): IntersectionObserverInit {
    return { rootMargin: "0px -100px", root: this.slidesContainer };
  }

  get inDraggingMode(): boolean {
    return this._inDraggingMode;
  }

  set inDraggingMode(newState: boolean) {
    if (newState === this.inDraggingMode) return;
    this._inDraggingMode = newState;
  }

  get currentScrollIndicatorOffset(): number {
    if (!this.scrollIndicator) return 0;
    return this.scrollIndicator.getBoundingClientRect().left;
  }

  goToSlide(slideIdx: number) {
    if (this.slides.length <= slideIdx) return;
    const slideOffset = this.slides[slideIdx].offsetLeft;
    this.moveSliderTo(slideOffset);
  }

  async moveSliderTo(offsetLeft: number) {
    this.slidesContainer.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
    await waitForScrollEnd(this.slidesContainer);
  }

  /**
   * uses lifecycle-hook to destroy slider
   */
  destroyComponent(): void {
    this.activeSlideMap = new WeakMap();
  }

  @uiEvent("window", MQ_CHANGE_EVENT)
  handleMQChange() {
    this.setScrollIndicatorWidth();
    this.handleSlidesContainerScroll();
    this.updateSliderActive();
  }

  @uiEvent("prevBtn", "click")
  handlePrevBtnClick() {
    this.lastInteractionType = "click";
    this.moveSliderTo(this.slidesContainer.scrollLeft - this.slidesContainer.offsetWidth);
    this.stopAutoPlay();
  }

  @uiEvent("nextBtn", "click")
  handleNextBtnClick() {
    this.lastInteractionType = "click";
    this.moveSliderTo(this.slidesContainer.scrollLeft + this.slidesContainer.offsetWidth);
    this.stopAutoPlay();
  }

  @uiEvent("scrollBar", "click")
  async handleScrollBarClick(e: MouseEvent) {
    if (e.target === this.scrollIndicator) return;

    const relativeScrollOffset = (e.pageX - this.scrollBar.getBoundingClientRect().left) / this.scrollBar.offsetWidth;
    await this.moveSliderTo(relativeScrollOffset * this.slidesContainer.scrollWidth);
    this.healSliderPosition();
  }

  @uiEvent("scrollIndicator", "mousedown")
  handleDragStart(e: MouseEvent) {
    this.initialDragOffset = e.pageX + this.scrollBar.getBoundingClientRect().left;
    this.inDraggingMode = true;
    addClass(this, DRAGGING);
    this.lastScrollIndicatorOffset = this.currentScrollIndicatorOffset;
  }

  @uiEvent("window", "mousemove")
  handleDragMove(e: MouseEvent) {
    if (this.inDraggingMode === false) return;

    this.lastInteractionType = "dragScrollIndicator";
    const relativeScrollOffset = this.getRelativeScrollIndicatorOffset(e.pageX);
    this.updateScrollIndicatorOffset(relativeScrollOffset);
    this.updateSlidesContainerOffset(relativeScrollOffset);
  }

  @uiEvent("window", "mouseup")
  async handleDragEnd() {
    if (this.inDraggingMode === false) return;
    this.inDraggingMode = false;
    this.lastScrollIndicatorOffset = this.currentScrollIndicatorOffset;
    await this.healSliderPosition();
    removeClass(this, DRAGGING);
  }

  async healSliderPosition() {
    const lastActiveSlide = this.firstActiveSlide;
    if (lastActiveSlide === null) return;
    await this.moveSliderTo(lastActiveSlide.offsetLeft);
  }

  @uiEvent("slidesContainer", "scroll")
  handleSlidesContainerScroll() {
    if (this.inDraggingMode === true) return;
    const relativeScrollOffset = this.getRelativeScrollContainerOffset();
    this.updateScrollIndicatorOffset(relativeScrollOffset);
    this.lastScrollIndicatorOffset = this.currentScrollIndicatorOffset;
  }

  updateScrollIndicatorOffset(relativeScrollOffset: number) {
    if (this.scrollIndicator)
      this.scrollIndicator.style.transform = `translateX(${this.getScrollIndicatorOffset(relativeScrollOffset)}%)`;
  }

  getScrollIndicatorOffset(relativeScrollOffset: number) {
    if (!this.scrollIndicator) return 0;
    if (relativeScrollOffset === 0) return 0;
    return (relativeScrollOffset * this.scrollBar.offsetWidth) / this.scrollIndicator.offsetWidth;
  }

  updateSlidesContainerOffset(relativeScrollOffset: number) {
    this.slidesContainer.scrollLeft = this.getSlidesContainerOffset(relativeScrollOffset);
  }

  getSlidesContainerOffset(relativeScrollOffset: number) {
    if (relativeScrollOffset !== 0) {
      relativeScrollOffset /= 100;
    }
    return relativeScrollOffset * this.slidesContainer.scrollWidth;
  }

  @uiEvent("slidesContainer", "touchmove")
  handleTouchMove() {
    this.stopAutoPlay();
    this.lastInteractionType = "swipe";
  }

  @uiEvent("this", OUT_VIEWPORT_EVENT)
  stopAutoPlay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  @uiEvent("slidesContainer", "wheel")
  detectHorizontalScrolling(e: WheelEvent) {
    if (e.deltaX !== 0) {
      this.lastInteractionType = "swipe";
      this.stopAutoPlay();
    }
  }

  @uiEvent("this", IN_VIEWPORT_EVENT)
  startAutoplay() {
    if (this.autoplay) {
      this.lastInteractionType = "autoplay";
      this.startSliderAutoPlayInterval();
    }
  }

  startSliderAutoPlayInterval(): void {
    if (this.autoplayInterval === null) {
      this.autoplayInterval = setInterval(() => {
        this.moveOneSlide(1);
      }, this.autoplayDelay);
    }
  }

  moveOneSlide(dir: number): void {
    this.goToSlide(this.activeSlideIdx + dir);
  }

  private getRelativeScrollContainerOffset() {
    return (this.slidesContainer.scrollLeft / this.slidesContainer.scrollWidth) * 100;
  }

  private getRelativeScrollIndicatorOffset(curPageOffset: number): number {
    if (!this.scrollIndicator) return 0;
    let absoluteScrollOffset = curPageOffset - this.initialDragOffset + this.lastScrollIndicatorOffset;
    if (absoluteScrollOffset < 0) return 0;
    if (absoluteScrollOffset + this.scrollIndicator.offsetWidth > this.scrollBar.offsetWidth) {
      absoluteScrollOffset = this.scrollBar.offsetWidth - this.scrollIndicator.offsetWidth;
    }
    return (absoluteScrollOffset / this.scrollBar.offsetWidth) * 100;
  }
}

customElements.define("dvag-m-basic-slider", DvagBasicSlider);
