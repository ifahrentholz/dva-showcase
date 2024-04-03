import { Component } from "@kluntje/core";
import { DvaRatingBox } from "Components/dva-m-rating-box/dva-m-rating-box";
export type RatingTeaserData = {
    vbImg: string;
    vbName: string;
    vbHomepage: string;
    vbLocation: string;
    mainRating: string;
    date: string;
    headline: string;
    text: string;
    customerName: string;
    customerInfo: string;
    ratings: {
        consulting: string;
        satisfaction: string;
        service: string;
    };
    hasPrevTeaser: boolean;
    hasNextTeaser: boolean;
};
export declare class DvagC01eTeaser extends Component {
    overlayCta: HTMLAnchorElement;
    ratingBox: DvaRatingBox;
    ratingDate: HTMLSpanElement;
    ratingHeadline: HTMLHeadingElement;
    text: HTMLParagraphElement;
    customerDisplayName: HTMLParagraphElement;
    customerInformation: HTMLSpanElement;
    createdDate: HTMLSpanElement;
    /**
     * Returns main rating of teaser
     * @returns {string}
     */
    get mainRating(): string;
    /**
     * Returns date of rating
     * @returns {string}
     */
    get date(): string;
    /**
     * Returns headline of rating
     * @returns {string}
     */
    get headline(): string;
    /**
     * Returns ful text of rating
     * @returns {string}
     */
    get fullText(): string;
    /**
     * Returns customer info text of rating
     * @returns {string}
     */
    get customerInfo(): string;
    /**
     * Returns customer name text of rating
     * @returns {string}
     */
    get customerName(): string;
    /**
     * Returns given consulting-rating
     * @returns {string}
     */
    get consultingRating(): string;
    /**
     * Returns given satisfaction-rating
     * @returns {string}
     */
    get satisfactionRating(): string;
    /**
     * Returns given service-rating
     * @returns {string}
     */
    get serviceRating(): string;
    /**
     * Returns given vb-name
     * @returns {string}
     */
    get vbName(): string;
    /**
     * Returns given vb-image-url
     * @returns {string}
     */
    get vbImage(): string;
    /**
     * Returns given vb-homepage-url
     * @returns {string}
     */
    get vbHomepage(): string;
    /**
     * Returns given vb-location
     * @returns {string}
     */
    get vbLocation(): string;
    /**
     * Returns given teaser-index
     * @returns {number}
     */
    get teaserIdx(): number;
    /**
     * Tells, whether this teaser is not
     * the first teaser in the container
     * @returns {boolean}
     */
    get hasPrevTeaser(): boolean;
    /**
     * Tells, whether this teaser is not
     * the first teaser in the container
     * @returns {boolean}
     */
    get hasNextTeaser(): boolean;
    /**
     * Returns all information needed for the overlay
     * @returns {RatingTeaserData}
     */
    get teaserData(): RatingTeaserData;
    afterComponentRender(): void;
    convertDate(): void;
    /**
     * Handles CTA-click, by dispatching 'dva-open-overlay' event
     * @param {Event} e
     */
    openOverlay(e: any): void;
}
