import { Component, MQBasedRendered, uiElement, uiElements, uiEvent } from "@kluntje/core";
import { MQ_CHANGE_EVENT, ViewportObserver } from "@kluntje/services";
import {
  addClass,
  find,
  getCurrentMQ,
  getParent,
  onEvent,
  removeEvent,
  waitFor,
} from "@kluntje/js-utils/lib/dom-helpers";
import { IN_VIEWPORT_EVENT } from "Constants/eventTypes";
import { IN_VIEWPORT } from "Constants/cssClasses";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
import mqDefinitions from "Config/mediaQueries";
import { DVALazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image";

@MQBasedRendered(mqDefinitions)
export class DvagC25VbAboutMe extends Component {
  viewportObserver = ViewportObserver.getInstance();

  @uiElements(".dvag-m-c25-vb-about-me__gallery-slide")
  gallerySlides: Array<HTMLDivElement>;

  @uiElements(".dvag-m-c25-vb-about-me__gallery-slide .dva-e-lazy-image")
  galleryImages: Array<DVALazyImage>;

  @uiElements(".dvag-m-c25-vb-about-me__gallery-overlay-toggle")
  galleryOverlayToggles: Array<HTMLDivElement>;

  @uiElement(".dvag-m-c25-vb-about-me__gallery-button-counter")
  galleryCounter: HTMLSpanElement;

  @uiElement(".dvag-m-c25-vb-about-me__overlay")
  overlay: DvagBasicOverlay;

  afterComponentRender(): void {
    this.viewportObserver.observe(this);
    onEvent(this.galleryImages, "dva-image-loaded", this.handleLoadedImages, this);
    this.initGalleryButton();
  }

  initGalleryButton(): void {
    if (this.gallerySlides.length < 4) return;
    this.galleryCounter.innerHTML = `${this.gallerySlides.length}`;
  }

  handleLoadedImages({ detail }: any): void {
    const image = detail.target;
    this.setCaptionWidth(image);
  }

  setCaptionWidth(image: DVALazyImage): void {
    const imageWidth = image.offsetWidth;
    const parentSlide = getParent(image, ".dvag-m-basic-slider__slide");
    const text = find(parentSlide, ".dvag-m-basic-slider__slide-text");
    if (text === null) return;
    text.setAttribute("style", `width: ${imageWidth}px;`);
  }

  @uiEvent("galleryOverlayToggles", "click")
  handleOverlayTogglesClick() {
    if (getCurrentMQ(mqDefinitions) <= "MQ3") return;
    this.overlay.open();
  }

  @uiEvent("this", IN_VIEWPORT_EVENT)
  handleViewportChange() {
    this.viewportObserver.unobserve(this);
    removeEvent(this, IN_VIEWPORT_EVENT, this.handleViewportChange, this);
    waitFor(100).then(() => addClass(this.gallerySlides, IN_VIEWPORT));
  }

  @uiEvent("window", MQ_CHANGE_EVENT)
  handleMQChange() {
    this.galleryImages.forEach((image: DVALazyImage) => {
      this.setCaptionWidth(image);
    });
  }
}

customElements.define("dvag-m-c25-vb-about-me", DvagC25VbAboutMe);
