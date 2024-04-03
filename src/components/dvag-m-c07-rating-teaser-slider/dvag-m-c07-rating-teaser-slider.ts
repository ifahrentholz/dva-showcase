import { Component, uiElement, uiElements, uiEvent } from "@kluntje/core";
import { DvagC01eTeaserOverlay } from "Components/dvag-m-c01e-teaser-overlay/dvag-m-c01e-teaser-overlay";
import { DvagC01eTeaser } from "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";

export class DvagC07RatingTeaserSlider extends Component {
  @uiElements(".dvag-m-c01e-teaser")
  teasers: Array<DvagC01eTeaser>;

  @uiElement(".dvag-m-c01e-teaser-overlay")
  overlay: DvagC01eTeaserOverlay;

  constructor() {
    super({
      initialStates: {
        overlayTeaser: -1,
      },
      reactions: {
        overlayTeaser: ["renderOverlay"],
      },
    });
  }

  /**
   * returns the index of the last available teaser
   * @returns {number}
   */
  get lastTeaser(): number {
    return this.teasers.length - 1;
  }

  /**
   * Triggers Overlay Rendering, by setting overlayTeaser-state
   */
  @uiEvent("teasers", "dva-open-overlay")
  openOverlay({ detail }: any): void {
    this.setState({ overlayTeaser: detail.teaserIdx });
  }

  /**
   * renders Overlay with needed data of given teaser
   */
  renderOverlay({ overlayTeaser }: any): void {
    if (overlayTeaser < -1) {
      this.setState({ overlayTeaser: -1 }, { silent: true });
      return;
    }

    if (overlayTeaser === -1) return;

    if (overlayTeaser > this.lastTeaser) {
      this.setState({ overlayTeaser: this.lastTeaser }, { silent: true });
      return;
    }

    this.overlay.setState({ args: this.teasers[overlayTeaser].teaserData });
  }

  /**
   * Handles Overlay Navigation event, by setting overlayTeaser-state
   */
  @uiEvent("overlay", "dvag-m-c01e-teaser-overlay-nav")
  handleOverlayNav({ detail }: any): void {
    if (detail.direction === "prev" && this.state.overlayTeaser === 0) return;

    let nextOverlayTeaser = this.state.overlayTeaser + 1;
    if (detail.direction === "prev") nextOverlayTeaser -= 2;

    this.setState({ overlayTeaser: nextOverlayTeaser });
  }

  /**
   * Handles Overly closing event, by resetting overlayTeaser-state
   * to its initial value
   */
  @uiEvent("overlay", "dva-overlay-closed")
  handleOverlayClosed(): void {
    this.setState({ overlayTeaser: -1 });
  }
}

customElements.define("dvag-m-c07-rating-teaser-slider", DvagC07RatingTeaserSlider);
