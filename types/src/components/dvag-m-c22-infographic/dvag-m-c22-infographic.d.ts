import { Component } from "@kluntje/core";
import { MediaQueryService } from "@kluntje/services";
export declare class DvagC22Infographic extends Component {
    viewportObserver: IntersectionObserver;
    mqService: MediaQueryService;
    currentMode: string;
    loaded: boolean;
    constructor();
    /**
     * Returns URL of SVG for desktop viewports provided as attribute
     * @returns {string}
     */
    get desktopUrl(): string;
    /**
     * Returns (optional) URL of SVG for mobile viewports provided as attribute
     * @returns {string}
     */
    get mobileUrl(): string;
    /**
     * Returns current MQ
     * @returns {string}
     */
    get currentMQ(): string;
    /**
     * adds viewportObserver
     * @override
     */
    afterComponentRender(): void;
    /**
     * Adds svg-data and triggers animation
     * @param {string} svgData
     */
    addSvgMarkup(svgData: string): Promise<void>;
    /**
     * Adds image-markup in case file is not a .svg-file
     * @param {string} url
     */
    addImageMarkup(url: string): void;
    /**
     * Loads SVG-file from given attribute
     * @param {string} url
     */
    loadFile(url: string): Promise<void>;
    /**
     * Updates loaded file regarding to currentMQ
     * @param {string} mq
     */
    updateFile(mq: string): void;
    handleIntersectionChange(): void;
    handleMQChange(): void;
}
