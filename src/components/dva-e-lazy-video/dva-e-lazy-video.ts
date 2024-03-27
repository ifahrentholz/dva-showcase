import { Component, MQBasedRendered } from "@kluntje/core";
import { ViewportObserver } from "@kluntje/services";
import { removeEvent, addClass, findAll, onEvent, removeClass, getCurrentMQ } from "@kluntje/js-utils/lib/dom-helpers";
import { LOADED, INITIALIZED, IN_VIEWPORT } from "Constants/cssClasses";
import { removeAllBS } from "@kluntje/js-utils/lib/string-helpers";
import { pushIfNew, hasElement } from "@kluntje/js-utils/lib/array-helpers";
import mqDefinitions from "Config/mediaQueries";
import { IN_VIEWPORT_EVENT, MQ_CHANGE_EVENT } from "Constants/eventTypes";

import { template } from "./dva-e-lazy-video.template";

type MQDef = {
  sources: Array<HTMLElement>;
  mqs: number[];
};

@MQBasedRendered(mqDefinitions)
class DvaLazyVideo extends Component {
  viewportObserver = ViewportObserver.getInstance();
  videoSources?: Map<string, MQDef>;

  constructor() {
    super({
      ui: {
        video: ".dva-js-lazy-video__video",
      },
      events: [
        {
          event: IN_VIEWPORT_EVENT,
          target: "this",
          handler: "handleIntersectionChange",
        },
        {
          event: MQ_CHANGE_EVENT,
          target: "window",
          handler: "handleMQChange",
        },
        {
          event: "beforeunload",
          target: "window",
          handler: "unloadVideo",
        },
        {
          event: "pageshow",
          target: "window",
          handler: "handleVideoLoad",
        },
      ],
      initialStates: {
        activeRendition: null,
      },
      reactions: {
        activeRendition: ["loadVideo"],
      },
    });
  }

  /**
   * Lifecycle-Hook: Returns Rendering Template
   * @returns {string}
   */
  renderingTemplate(): string {
    return template({ sources: this.sources });
  }

  /**
   * Lifecycle-Hook: Initializes Component after render
   * @override
   */
  afterComponentRender(): void {
    this.viewportObserver.observe(this);
  }

  /**
   * Returns Map containing all Sources strutured
   * by MQs
   * @returns {Map<String, MQDef>}
   */
  get sources(): Map<string, MQDef> {
    // if video-Sources-Map was created before, return it
    if (this.videoSources) {
      return this.videoSources;
    }

    const sourceNodes = findAll(this, "source");
    const sources = new Map();

    sourceNodes.forEach((sourceNode: HTMLElement) => {
      let currentMq = sourceNode.dataset.dvaMq;
      if (currentMq === undefined) {
        currentMq = "1-5";
      }

      if (sources.has(currentMq)) {
        const mqDef = sources.get(currentMq);
        mqDef.sources.push(sourceNode);
        sources.set(currentMq, mqDef);
      } else {
        sources.set(currentMq, {
          sources: [sourceNode],
          mqs: this.getMQs(currentMq),
        });
      }
    });

    const fallbackImgs = findAll(this, "img");

    fallbackImgs.forEach((fallbackImg: HTMLElement) => {
      let currentMq = fallbackImg.dataset.dvaMq;
      if (currentMq === undefined) {
        currentMq = "1-5";
      }

      const fallbackSrc = fallbackImg.dataset.src;

      if (sources.has(currentMq) && fallbackSrc !== undefined) {
        const mqDef = sources.get(currentMq);
        mqDef.fallbackSrc = fallbackSrc;
        sources.set(currentMq, mqDef);
      }
    });

    this.videoSources = sources;
    return sources;
  }

  /**
   * Returns index of the Video (SourceSet) that should be
   * active on the current mq
   * @returns {number}
   */
  get activeVideo(): number {
    const currentMQ = parseInt(getCurrentMQ(mqDefinitions).slice(2), 10);
    const foundVideos: number[] = [];
    let idx = 0;

    this.sources.forEach((mqDef: MQDef) => {
      if (hasElement(mqDef.mqs, currentMQ)) {
        foundVideos.push(idx);
      }
      idx += 1;
    });
    return foundVideos.length ? foundVideos[0] : 0;
  }

  /**
   * Handles Intersection Change, by removing viewportObserver
   * and initializing ImageLoad
   */
  handleIntersectionChange(): void {
    this.viewportObserver.unobserve(this);
    addClass(this, IN_VIEWPORT);
    removeEvent(this, IN_VIEWPORT_EVENT, this.handleIntersectionChange, this);
    this.setState({ activeRendition: this.activeVideo });
  }

  /**
   * Handles MQ-Change, by setting activeRendition-State
   */
  handleMQChange(): void {
    this.setState({ activeRendition: this.activeVideo });
  }

  /**
   * Finishes loading, by displaying video and removing loading layer
   *
   * @param {Event} e
   */
  handleVideoLoad(e: any): void {
    removeEvent(e.target, "loadeddata", this.handleVideoLoad, this);
    addClass(this, LOADED);
    addClass(this, INITIALIZED);
    addClass(this.ui.video[this.state.activeRendition], LOADED);
  }

  /**
   * Handles Video-Loading-Error, by making poster visible
   *
   * @param {Event} e
   */
  handleVideoLoadingError(e: any): void {
    removeEvent(e.target, "error", this.handleVideoLoadingError, this);
    const currentVideo = this.ui.video[this.state.activeRendition];

    addClass(this, LOADED);
    addClass(this, INITIALIZED);
    addClass(currentVideo, LOADED);
  }

  /**
   * Loads Active Rendition of Video by loading its sources
   */
  loadVideo(): void {
    if (this.ui.video.length <= this.state.activeRendition) return;

    // unload loaded Rendition and show loading-layer
    this.unloadVideo();

    const currentVideo = this.ui.video[this.state.activeRendition];
    const currentSources = findAll(currentVideo, "source");

    onEvent(currentVideo, "loadeddata", this.handleVideoLoad, this);
    onEvent(currentSources[currentSources.length - 1], "error", this.handleVideoLoadingError, this);

    // add src-Attributes to allow loading
    currentSources.forEach((source: HTMLElement) => {
      const currentSrc = source.dataset.src;
      if (currentSrc !== undefined) {
        source.setAttribute("src", currentSrc);
      }
    });

    // load Video
    currentVideo.load();
  }

  /**
   *  Remove all loaded indicating classes to show loading layer
   */
  unloadVideo(): void {
    // remove all loaded indicating classes to show loading layer
    removeClass(this.ui.video, LOADED);
    removeClass(this, LOADED);
    removeClass(this, INITIALIZED);
  }

  /**
   * Returns Array of MQs for given MQDef
   * @param {string} mqDefs - string describing a Range of Mq (eg '1-3', '1,2,4', '5')
   * @returns {number[]}
   */
  getMQs(mqDefs: string): number[] {
    let mqs: number[] = [];
    removeAllBS(mqDefs)
      .split(",")
      .forEach((mqDef: string) => {
        if (mqDef.length === 1) {
          mqs = pushIfNew(mqs, parseInt(mqDef, 10));
        } else if (mqDef.length > 1) {
          const mqRange = mqDef.split("-");
          const mqRangeStart = parseInt(mqRange[0], 10);
          const mqRangeEnd = parseInt(mqRange[1], 10);
          for (let mq = mqRangeStart; mq <= mqRangeEnd; mq++) {
            mqs = pushIfNew(mqs, mq);
          }
        }
      });
    return mqs;
  }
}

customElements.define("dva-e-lazy-video", DvaLazyVideo);
