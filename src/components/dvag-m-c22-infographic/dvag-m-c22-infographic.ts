import { Component, uiEvent } from "@kluntje/core";
import { addClass, getCurrentMQ, waitFor } from "@kluntje/js-utils/lib/dom-helpers";
import { MediaQueryService, ViewportObserver } from "@kluntje/services";
import mqDefinitions from "Config/mediaQueries";
import { ANIMATING } from "Constants/cssClasses";
import { IN_VIEWPORT_EVENT, MQ_CHANGE_EVENT } from "Constants/eventTypes";

export class DvagC22Infographic extends Component {
  viewportObserver = ViewportObserver.getInstance();
  mqService: MediaQueryService = MediaQueryService.getInstance(mqDefinitions);
  currentMode = "";
  loaded = false;

  constructor() {
    super({});
    this.currentMode = "";
    this.loaded = false;
  }

  /**
   * Returns URL of SVG for desktop viewports provided as attribute
   * @returns {string}
   */
  get desktopUrl(): string {
    return this.getAttribute("desktop-url") || "";
  }

  /**
   * Returns (optional) URL of SVG for mobile viewports provided as attribute
   * @returns {string}
   */
  get mobileUrl(): string {
    return this.getAttribute("mobile-url") || this.desktopUrl;
  }

  get alt(): string {
    return this.getAttribute("alt") || "";
  }

  /**
   * Returns current MQ
   * @returns {string}
   */
  get currentMQ() {
    return getCurrentMQ(mqDefinitions);
  }

  /**
   * adds viewportObserver
   * @override
   */
  afterComponentRender(): void {
    this.viewportObserver.observe(this);
  }

  /**
   * Adds svg-data and triggers animation
   * @param {string} svgData
   */
  async addSvgMarkup(svgData: string) {
    if (svgData) this.innerHTML = svgData;
    await waitFor(500);
    addClass(this, ANIMATING);
  }

  /**
   * Adds image-markup in case file is not a .svg-file
   * @param {string} url
   */
  addImageMarkup(url: string) {
    const imageMarkup = `<dva-e-lazy-image
        class="dva-e-lazy-image"
        src=${url}
        alt=${this.alt}
      ></dva-e-lazy-image>`;
    this.loaded = true;
    this.innerHTML = imageMarkup;
  }

  /**
   * Loads SVG-file from given attribute
   * @param {string} url
   */
  async loadFile(url: string) {
    if (url !== "") {
      if (url.endsWith(".svg")) {
        const svgData = await fetch(url).then(response => {
          if (!response.ok) {
            throw Error(`SVG Animation ${url} could not be loaded: ${response.statusText}`);
          }
          return response.text();
        });
        this.loaded = true;
        this.addSvgMarkup(svgData);
      } else {
        this.addImageMarkup(url);
      }
    }
  }

  /**
   * Updates loaded file regarding to currentMQ
   * @param {string} mq
   */
  updateFile(mq: string) {
    const bpNum = parseInt(mq.charAt(2), 10);
    if (bpNum < 3 && this.currentMode !== "mobile") {
      // switch to mobile mode
      this.currentMode = "mobile";
      this.loaded = false;
      this.loadFile(this.mobileUrl);
    } else if (bpNum >= 3 && this.currentMode !== "desktop") {
      this.currentMode = "desktop";
      this.loaded = false;
      this.loadFile(this.desktopUrl);
    }
  }

  @uiEvent("this", IN_VIEWPORT_EVENT)
  handleIntersectionChange() {
    this.viewportObserver.unobserve(this);
    if (!this.loaded) this.updateFile(this.currentMQ);
  }

  @uiEvent("window", MQ_CHANGE_EVENT)
  handleMQChange() {
    this.updateFile(this.currentMQ);
  }
}

customElements.define("dvag-m-c22-infographic", DvagC22Infographic);
