import { TemplateResult } from "lit-html";
import { RatingTeaserData } from "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
export declare class DvagC01eTeaserOverlay extends DvagBasicOverlay {
    prevBtn: HTMLAnchorElement;
    nextBtn: HTMLAnchorElement;
    constructor();
    /**
     * default overlayArgs needed for initial render
     * @returns {RatingTeaserData}
     */
    get defaultArgs(): RatingTeaserData;
    /**
     * override renderAsync method of parent
     * initially render overlay to add needed event to ui elements
     * @override
     */
    renderAsync(): Promise<void>;
    loadTemplate(): Promise<(args: RatingTeaserData) => TemplateResult>;
    /**
     * renders overlay with given args and opens it by adding ACTIVE Class to it
     */
    openOverlay({ args }: any): Promise<void>;
    /**
     * closes Overlay by removing ACTIVE Class from it,
     * additionally resets overlayArgs to null
     * @override
     */
    close(): Promise<void>;
    /**
     * Handles prev-btn click event, by dispatching navigation event
     */
    loadPrevTeaser(): void;
    /**
     * Handles next-btn click event, by dispatching navigation event
     */
    loadNextTeaser(): void;
    /**
     * Adds KeyboardEvent-reactions for arrow keys
     * @override
     */
    handleKeyup(e: KeyboardEvent): void;
}
