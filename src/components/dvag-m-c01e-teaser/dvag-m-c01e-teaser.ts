import { Component, uiElement, uiEvent } from "@kluntje/core";
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

export class DvagC01eTeaser extends Component {
  @uiElement(".dvag-m-c01e-teaser__cta")
  overlayCta: HTMLAnchorElement;

  @uiElement(".dva-m-rating-box")
  ratingBox: DvaRatingBox;

  @uiElement(".dvag-m-c01e-teaser__rating-date")
  ratingDate: HTMLSpanElement;

  @uiElement(".dvag-m-c01e-teaser__headline")
  ratingHeadline: HTMLHeadingElement;

  @uiElement(".dvag-m-c01e-teaser__full-text")
  text: HTMLParagraphElement;

  @uiElement(".dvag-m-c01e-teaser__customer-name")
  customerDisplayName: HTMLParagraphElement;

  @uiElement(".dvag-m-c01e-teaser__customer-information")
  customerInformation: HTMLSpanElement;

  @uiElement(".dvag-m-c01e-teaser__rating-date")
  createdDate: HTMLSpanElement;

  /**
   * Returns main rating of teaser
   * @returns {string}
   */
  get mainRating(): string {
    return this.ratingBox.rating.toString();
  }

  /**
   * Returns date of rating
   * @returns {string}
   */
  get date(): string {
    return (this.ratingDate.innerText || "").trim();
  }

  /**
   * Returns headline of rating
   * @returns {string}
   */
  get headline(): string {
    return (this.ratingHeadline.innerText || "").trim();
  }

  /**
   * Returns ful text of rating
   * @returns {string}
   */
  get fullText(): string {
    return (this.text.innerText || "").trim();
  }

  /**
   * Returns customer info text of rating
   * @returns {string}
   */
  get customerInfo(): string {
    return (this.customerInformation.innerText || "").trim();
  }

  /**
   * Returns customer name text of rating
   * @returns {string}
   */
  get customerName(): string {
    return (this.customerDisplayName.innerText || "").trim();
  }

  /**
   * Returns given consulting-rating
   * @returns {string}
   */
  get consultingRating(): string {
    return (this.getAttribute("consulting-rating") || "0").trim();
  }

  /**
   * Returns given satisfaction-rating
   * @returns {string}
   */
  get satisfactionRating(): string {
    return (this.getAttribute("satisfaction-rating") || "0").trim();
  }

  /**
   * Returns given service-rating
   * @returns {string}
   */
  get serviceRating(): string {
    return (this.getAttribute("service-rating") || "0").trim();
  }

  /**
   * Returns given vb-name
   * @returns {string}
   */
  get vbName(): string {
    return (this.getAttribute("vb-name") || "0").trim();
  }

  /**
   * Returns given vb-image-url
   * @returns {string}
   */
  get vbImage(): string {
    return (this.getAttribute("vb-image-url") || "0").trim();
  }

  /**
   * Returns given vb-homepage-url
   * @returns {string}
   */
  get vbHomepage(): string {
    return (this.getAttribute("vb-homepage-url") || "0").trim();
  }

  /**
   * Returns given vb-location
   * @returns {string}
   */
  get vbLocation(): string {
    return (this.getAttribute("vb-location") || "0").trim();
  }

  /**
   * Returns given teaser-index
   * @returns {number}
   */
  get teaserIdx(): number {
    return parseInt(this.getAttribute("teaser-index") || "0", 10);
  }

  /**
   * Tells, whether this teaser is not
   * the first teaser in the container
   * @returns {boolean}
   */
  get hasPrevTeaser(): boolean {
    return this.parentElement?.previousElementSibling !== null;
  }

  /**
   * Tells, whether this teaser is not
   * the first teaser in the container
   * @returns {boolean}
   */
  get hasNextTeaser(): boolean {
    return this.parentElement?.nextElementSibling !== null;
  }

  /**
   * Returns all information needed for the overlay
   * @returns {RatingTeaserData}
   */
  get teaserData(): RatingTeaserData {
    return {
      vbImg: this.vbImage,
      vbName: this.vbName,
      vbHomepage: this.vbHomepage,
      vbLocation: this.vbLocation,
      mainRating: this.mainRating,
      date: this.date,
      headline: this.headline,
      text: this.fullText,
      customerName: this.customerName,
      customerInfo: this.customerInfo,
      ratings: {
        consulting: this.consultingRating,
        satisfaction: this.satisfactionRating,
        service: this.serviceRating,
      },
      hasPrevTeaser: this.hasPrevTeaser,
      hasNextTeaser: this.hasNextTeaser,
    };
  }

  afterComponentRender(): void {
    this.convertDate();
  }

  convertDate(): void {
    const dateAsInt = parseInt(this.createdDate.getAttribute("date") || "0", 10);
    const date = new Date(dateAsInt);

    const intervals = [
      { label: "Jahr", labelPlural: "Jahren", seconds: 3600 * 24 * 365 },
      { label: "Monat", labelPlural: "Monaten", seconds: 3600 * 24 * 30 },
      { label: "Woche", labelPlural: "Wochen", seconds: 3600 * 24 * 7 },
      { label: "Tag", labelPlural: "Tagen", seconds: 3600 * 24 },
      { label: "Stunde", labelPlural: "Stunden", seconds: 3600 },
      { label: "Minute", labelPlural: "Minuten", seconds: 60 },
      { label: "Sekunde", labelPlural: "Sekunden", seconds: 1 },
    ];

    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    if (interval !== undefined) {
      const count = Math.floor(seconds / interval.seconds);
      const label = count > 1 ? interval.labelPlural : interval.label;
      this.createdDate.innerHTML = `vor ${count} ${label}`;
    } else {
      this.createdDate.innerHTML = `${date.toLocaleDateString("de-DE")}`;
    }
  }

  /**
   * Handles CTA-click, by dispatching 'dva-open-overlay' event
   * @param {Event} e
   */
  @uiEvent("overlayCta", "click")
  openOverlay(e: any) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("dva-open-overlay", {
        detail: {
          target: this,
          data: this.teaserData,
          teaserIdx: this.teaserIdx,
        },
      }),
    );
  }
}

customElements.define("dvag-m-c01e-teaser", DvagC01eTeaser);
