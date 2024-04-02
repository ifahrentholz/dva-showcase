import { DvagBasicSlider } from "Components/dvag-m-basic-slider/dvag-m-basic-slider";
import { addClass, hasClass, removeClass, toggleClass } from "@kluntje/js-utils/lib/dom-helpers";
import { LottiePlayer, AnimationItem } from "lottie-web";
import { ACTIVE, LOADED, VISIBLE } from "Constants/cssClasses";
import { uiElement, uiEvent } from "@kluntje/core";
import { DvagProgressBar } from "Components/dvag-e-progress-bar/dvag-e-progress-bar";
import { LazyConnectService, ViewportObserver } from "@kluntje/services";
import { IN_VIEWPORT_EVENT } from "Constants/eventTypes";
import { waitForInitialization } from "Helpers/componentHelper/waitForInitialization";
import { waitForScrollEnd } from "Helpers/domHelper/waitForScrollEnd";

export class DvagLottieSlider extends DvagBasicSlider {
  viewportObserver = ViewportObserver.getInstance();

  private animationLoaded = false;

  animation: AnimationItem;
  lottie: LottiePlayer;

  @uiElement(".dvag-m-lottie-slider__animation-box")
  animationBox: HTMLDivElement;

  @uiElement(".dvag-e-progress-bar")
  progressBar: DvagProgressBar;

  // needed because currently lottie-web doesn't support playSegments with Markers
  get segmentLength(): number {
    return parseInt(this.getAttribute("segment-length") || "120", 10);
  }

  get animationPath(): string {
    return this.getAttribute("animation-path") || "";
  }

  set lastSlideVisible(newState: boolean) {
    toggleClass(this.nextBtn, VISIBLE, !newState);
    this.updateSliderActive();
    if (this.activeSlideIdx === this.slides.length - 1) {
      this.stopAutoPlay();
    }
  }

  updateActiveSlide(): void {
    if (this.activeSlideIdx === this.slides.findIndex(slide => this.activeSlideMap.get(slide) === true)) return;
    this.activeSlideIdx = this.slides.findIndex(slide => this.activeSlideMap.get(slide) === true);
    this.dispatchSlideChangedEvent();
    removeClass(this.slides, ACTIVE);
    addClass(this.slides[this.activeSlideIdx], ACTIVE);
    this.lastSlideVisible = this.activeSlideIdx === this.slides.length - 1;
    if (this.animationLoaded && this.animation) {
      this.playSegment(this.activeSlideIdx, this.activeSlideIdx + 1);
    }
    this.updateProgressBar();
  }

  afterComponentRender() {
    this.viewportObserver.observe(this);
    this.slidesContainer.scrollLeft = 0;
    LazyConnectService.subscribe(this, () => {
      this.initEditMode();
      this.initActiveSlideObserver();
      this.initControls();
    });

    addClass(this.slides[this.activeSlideIdx], ACTIVE);
    if (this.animationLoaded && this.animation) {
      this.playSegment(this.activeSlideIdx, this.activeSlideIdx + 1);
    }
    this.updateProgressBar();
  }

  moveOneSlide(dir: number): void {
    this.goToSlide(this.activeSlideIdx + dir);
  }

  handleNextBtnClick() {
    this.lastInteractionType = "click";
    this.moveOneSlide(1);
    this.stopAutoPlay();
  }

  handlePrevBtnClick() {
    this.lastInteractionType = "click";
    this.moveOneSlide(-1);
    this.stopAutoPlay();
  }

  playSegment(prev: number, curr: number) {
    this.animation.playSegments([prev * this.segmentLength + 1, curr * this.segmentLength + 1], true);
  }

  async updateProgressBar() {
    const progress = (100 / this.slides.length) * (this.activeSlideIdx + 1);
    await waitForInitialization(this.progressBar);
    this.progressBar.updateProgressIndicator(progress, this.segmentLength / 60);
  }

  async loadAnimation(): Promise<void> {
    if (this.animationPath === "" || this.animationLoaded) return;
    this.animationLoaded = true;
    this.lottie = await this.loadLottiePlayer();
    this.animation = this.lottie.loadAnimation({
      container: this.animationBox,
      autoplay: true,
      loop: false,
      renderer: "svg",
      path: this.animationPath,
    });
  }

  async loadLottiePlayer(): Promise<LottiePlayer> {
    const { default: lottie } = await import("lottie-web");
    return lottie;
  }

  @uiEvent("this", IN_VIEWPORT_EVENT)
  async startAutoplay() {
    if (hasClass(this, LOADED)) return;

    await this.loadAnimation();
    if (this.autoplay) {
      this.lastInteractionType = "autoplay";
      this.startSliderAutoPlayInterval();
    }
    addClass(this, LOADED);
    // necessary to play only first segment
    setTimeout(() => this.animation.goToAndStop(this.segmentLength, true), (this.segmentLength / 60) * 1000);
  }

  /**
   * moves slider to position
   * @override
   */
  async moveSliderTo(offsetLeft: number) {
    this.slidesContainer.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
    await waitForScrollEnd(this.slidesContainer);
  }

  startSliderAutoPlayInterval(): void {
    if (this.autoplayInterval === null) {
      this.autoplayInterval = setInterval(() => {
        this.moveOneSlide(1);
      }, (this.segmentLength / 60) * 1000 + this.autoplayDelay);
    }
  }

  @uiEvent("slidesContainer", "wheel")
  detectHorizontalScrolling(e: WheelEvent) {
    if (e.deltaX !== 0) {
      this.lastInteractionType = "swipe";
      this.stopAutoPlay();
    }
  }
}

customElements.define("dvag-m-lottie-slider", DvagLottieSlider);
