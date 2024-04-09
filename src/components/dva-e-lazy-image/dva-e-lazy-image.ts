import { Component, MQBasedRendered, uiEvent } from "@kluntje/core";
import { ViewportObserver, IN_VP_EVENT, LazyConnectService } from "@kluntje/services";
import { LOADING, LOADED, INITIALIZED, IN_VIEWPORT, HIDDEN, ERROR } from "Constants/cssClasses";
import { removeClass, addClass, onEvent, removeEvent, toggleClass } from "@kluntje/js-utils/lib/dom-helpers";
import { render } from "lit-html";
import mqDefinitions from "Config/mediaQueries";
import { getSrcset } from "Utils/getSrcset";

import { lazyImageTemplate } from "./dva-e-lazy-image.template";

export type ImageInitType = "lazy" | "explicit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@MQBasedRendered(mqDefinitions)
export class DVALazyImage extends Component {
  viewportObserver = ViewportObserver.getInstance();

  _hasError = false;
  _loadingPlaceholderLoaded = false;
  _loadingPlaceholderLoadingError = false;

  constructor() {
    super({
      ui: {
        image: ".dva-js-lazy-image__img :-one",
        placeholder: ".dva-e-lazy-image__img--placeholder :-one",
        wrapper: ".dva-js-lazy-image__wrapper :-one",
      },
      initialStates: {
        imgLoaded: false,
      },
      useShadowDOM: true,
    });
  }

  connectedCallback() {
    if (this.initType === "lazy") {
      LazyConnectService.subscribe(this, () => super.connectedCallback());
    } else {
      super.connectedCallback();
    }
  }

  get DEFAULT_FALLBACK_IMAGE(): string {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";
  }

  get fallbackImg(): string {
    return this.getAttribute("fallback-image") || this.DEFAULT_FALLBACK_IMAGE;
  }

  /**
   * Returns value of 'src'-Attribute
   * @returns {string}
   */
  get imgSrc(): string {
    return this.getAttribute("src") || "";
  }

  /**
   * Returns value of 'srcset'-Attribute
   * @returns {string}
   */
  get imgSrcSet(): string {
    return this.getAttribute("srcset") || this.getSrcsetFromSrc();
  }

  /**
   * Returns value of 'sizes'-Attribute
   * @returns {string}
   */
  get imgSizes(): string {
    return this.getAttribute("sizes") || "";
  }

  /**
   * Returns value of 'alt'-Attribute
   * @returns {string}
   */
  get imgAlt(): string {
    return this.getAttribute("alt") || "";
  }

  /**
   * Returns value of 'aspect-ratio'-Attribute
   * @returns {string}
   */
  get imgAspectRatio(): string | null {
    return this.getAttribute("aspect-ratio");
  }

  /**
   * Returns value of 'wrapper'-Attribute
   * @returns {string}
   */
  get imgWrapper(): string {
    return this.getAttribute("wrapper") || "";
  }

  get noPlaceholder(): boolean {
    return this.hasAttribute("no-placeholder") && this.getAttribute("no-placeholder") !== "false";
  }

  /**
   * Returns, whether loaded image is Wider than needed
   * @returns {boolean}
   */
  get hasOverWidth(): boolean {
    return this.ui.image.offsetHeight < this.offsetHeight;
  }

  get hasError(): boolean {
    return this._hasError;
  }

  set hasError(newErrorState: boolean) {
    if (this.hasError === newErrorState) return;
    this._hasError = newErrorState;
    this.updateComponent();
    toggleClass(this.ui.wrapper, ERROR, newErrorState);
  }

  get hasLoadingPlaceholder(): boolean {
    return this.loadingPlaceholder !== "";
  }

  get loadingPlaceholderLoaded(): boolean {
    return !this.hasLoadingPlaceholder || this._loadingPlaceholderLoaded;
  }

  set loadingPlaceholderLoaded(newLoadedState: boolean) {
    if (this.loadingPlaceholderLoaded === newLoadedState) return;
    this._loadingPlaceholderLoaded = newLoadedState;
  }

  get loadingPlaceholderLoadingError(): boolean {
    return !this.hasLoadingPlaceholder || this._loadingPlaceholderLoadingError;
  }

  set loadingPlaceholderLoadingError(newErrorState: boolean) {
    if (this.loadingPlaceholderLoadingError === newErrorState) return;
    this._loadingPlaceholderLoadingError = newErrorState;
    this.updateComponent();
  }

  /**
   * Webcomponents Helper to observe Attribute Changes
   * @override
   * @returns {string[]}
   */
  static get observedAttributes(): string[] {
    return ["src", "srcset", "aspect-ratio"];
  }

  /**
   * Returns given init-type, default to lazy
   * @returns {ImageInitType}
   */
  get initType(): ImageInitType {
    switch (this.getAttribute("init")) {
      case "explicit":
        return "explicit";
      default:
        return "lazy";
    }
  }

  get fetchPriority(): string | null {
    return this.getAttribute("fetchpriority");
  }

  get loading(): string | null {
    return this.getAttribute("loading");
  }

  getLoadingPlaceholderFromSrc(): string {
    const imgSrcUrl = new URL(this.imgSrc);
    const width = imgSrcUrl.searchParams.get("width");
    if (width) {
      imgSrcUrl.searchParams.set("width", "60");
      return imgSrcUrl.href;
    }
    return this.imgSrc;
  }

  getSrcsetFromSrc(): string {
    const imgSrcUrl = new URL(this.imgSrc);
    const width = imgSrcUrl.searchParams.get("width");
    if (width) {
      return getSrcset(imgSrcUrl.href, [480, 760, 1024, 1280, 1440, 1460, 2000]);
    }
    return "";
  }

  get loadingPlaceholder(): string {
    return this.getAttribute("loading-placeholder") || this.getLoadingPlaceholderFromSrc();
  }

  /**
   * Handles change of observed Attributes
   * @override
   * @param {string} name - name of Attribute, that changed
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue || !this.state.initialized) return;

    switch (name) {
      case "src":
        this.setState({ imgLoaded: false });
        this.loadImage();
        break;
      case "srcset":
        this.setState({ imgLoaded: false });
        this.loadImage();
        break;
      case "aspect-ratio":
        this.renderComponent();
        this.handleOverwidth();
        break;
    }
  }

  /**
   * Renders Component via lit-html
   */
  renderComponent(): void {
    render(
      lazyImageTemplate({
        alt: this.imgAlt,
        srcset: "",
        sizes: this.imgSizes,
        component: this,
        wrapper: this.imgWrapper,
      }),
      this.getUiRoot(),
    );
  }

  /**
   * Rerenders Component via lit-html
   */
  updateComponent(): void {
    render(
      lazyImageTemplate({
        alt: this.imgAlt,
        srcset: this.imgSrcSet,
        sizes: this.imgSizes,
        component: this,
      }),
      this.getUiRoot(),
    );
  }

  /**
   * Lifecycle-Hook: Initializes Component after render
   * @override
   */
  afterComponentRender(): void {
    addClass(this, INITIALIZED);
    removeClass(this.ui.wrapper, HIDDEN);
    if (this.initType !== "explicit") this.viewportObserver.observe(this);
    if (this.initType === "explicit") this.loadImage();
  }

  /**
   * Lifecycle-Hook for removing markup on destroy
   */
  beforeComponentDisconnects(): void {
    addClass(this.ui.wrapper, HIDDEN);
  }

  /**
   * Lifecycle-Hook for removing markup on destroy
   */
  destroyComponent(): void {
    this.setState({ imgLoaded: false });
  }

  /**
   * Initiates Image Load, by add src(-set) to img in shadow-DOM
   */
  @uiEvent("this", IN_VP_EVENT)
  loadImage(): void {
    this.viewportObserver.unobserve(this);
    if (this.state.imgLoaded) return;
    addClass(this, IN_VIEWPORT);
    addClass(this.ui.wrapper, LOADING);
    const currentImage = this.ui.image;
    this.attachImageEvents(currentImage); // attach loading events
    // trigger image loading
    if (this.imgSrc || this.imgSrcSet) {
      if (this.imgSrc) currentImage.setAttribute("src", this.imgSrc);
      if (this.imgSrcSet) currentImage.setAttribute("srcset", this.imgSrcSet);
    } else {
      console.warn("LazyImage: no src/srcset provided for", currentImage);
    }
  }

  /**
   * Handles any ImageLoading-Errors
   */
  handleImageLoadingError(): void {
    const currentImg = this.ui.image;

    removeEvent(currentImg, "error", this.handleImageLoadingError, this);
    // currentImg.setAttribute("src", this.fallbackImg);
    // currentImg.setAttribute("srcset", "");
    this.hasError = true;
    this.dispatchEvent(
      new CustomEvent("dva-image-error", {
        detail: {
          target: this,
        },
      }),
    );
    console.log("lazyImg error:", currentImg);
  }

  /**
   * Handles ImageLoad-Event, by setting/removing needed Classes
   */
  handleImageLoad(): void {
    this.handleOverwidth();

    this.hasError = false;
    removeEvent(this.ui.image, "load", this.handleImageLoad, this);
    removeClass(this.ui.wrapper, LOADING);
    addClass(this, LOADED);
    addClass(this.ui.image, LOADED);
    addClass(this.ui.placeholder, HIDDEN);

    this.dispatchEvent(
      new CustomEvent("dva-image-loaded", {
        detail: {
          target: this,
        },
      }),
    );
    this.setState({ imgLoaded: true });
  }

  /**
   * Adds needed Events for ImageLoading
   * @param {Node} img - image in Shadow-DOM
   */
  attachImageEvents(img: HTMLImageElement): void {
    onEvent(img, "load", this.handleImageLoad, this);
    onEvent(img, "error", this.handleImageLoadingError, this);
  }

  /**
   * Checks if image has Overwidth and optinally adds needed class
   */
  handleOverwidth(): void {
    removeClass(this.ui.wrapper, "dva-e-lazy-image__wrapper--has-overwidth");
    if (this.hasOverWidth) {
      addClass(this.ui.wrapper, "dva-e-lazy-image__wrapper--has-overwidth");
    }
  }
}

customElements.define("dva-e-lazy-image", DVALazyImage);
