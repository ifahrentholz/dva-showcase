import { Component } from "@kluntje/core";
import { DvagC01eTeaserOverlay } from "Components/dvag-m-c01e-teaser-overlay/dvag-m-c01e-teaser-overlay";
import { DvagC01eTeaser } from "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
export declare class DvagC07RatingTeaserSlider extends Component {
    teasers: Array<DvagC01eTeaser>;
    overlay: DvagC01eTeaserOverlay;
    constructor();
    /**
     * returns the index of the last available teaser
     * @returns {number}
     */
    get lastTeaser(): number;
    /**
     * Triggers Overlay Rendering, by setting overlayTeaser-state
     */
    openOverlay({ detail }: any): void;
    /**
     * renders Overlay with needed data of given teaser
     */
    renderOverlay({ overlayTeaser }: any): void;
    /**
     * Handles Overlay Navigation event, by setting overlayTeaser-state
     */
    handleOverlayNav({ detail }: any): void;
    /**
     * Handles Overly closing event, by resetting overlayTeaser-state
     * to its initial value
     */
    handleOverlayClosed(): void;
}
