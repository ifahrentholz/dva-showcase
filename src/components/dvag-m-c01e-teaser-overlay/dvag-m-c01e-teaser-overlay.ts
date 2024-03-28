import { render, TemplateResult } from "lit-html";
import { uiElement, uiEvent } from "@kluntje/core";
import { hasClass, removeClass, waitFor } from "@kluntje/js-utils/lib/dom-helpers";
import { ACTIVE, ANIMATING } from "Constants/cssClasses";
import { RatingTeaserData } from "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";

export class DvagC01eTeaserOverlay extends DvagBasicOverlay {
  @uiElement(".dvag-m-c01e-teaser-overlay__nav-btn--prev")
  prevBtn: HTMLAnchorElement;

  @uiElement(".dvag-m-c01e-teaser-overlay__nav-btn--next")
  nextBtn: HTMLAnchorElement;

  constructor() {
    super({
      initialStates: {
        args: null,
      },
      reactions: {
        args: ["openOverlay"],
      },
      asyncRendering: true,
    });
  }

  /**
   * default overlayArgs needed for initial render
   * @returns {RatingTeaserData}
   */
  get defaultArgs(): RatingTeaserData {
    return {
      vbImg: "",
      vbName: "",
      vbHomepage: "",
      vbLocation: "",
      mainRating: "0",
      date: "",
      headline: "",
      text: "",
      customerName: "",
      customerInfo: "",
      ratings: {
        consulting: "0",
        satisfaction: "0",
        service: "0",
      },
      hasPrevTeaser: false,
      hasNextTeaser: false,
    };
  }

  /**
   * override renderAsync method of parent
   * initially render overlay to add needed event to ui elements
   * @override
   */
  async renderAsync() {
    try {
      const ratingOverlayTemplate = await this.loadTemplate();
      render(ratingOverlayTemplate(this.defaultArgs), this);
    } catch (e) {
      console.error("Overlay:", e);
    }
  }

  async loadTemplate(): Promise<(args: RatingTeaserData) => TemplateResult> {
    const { ratingOverlayTemplate } = await import("./dvag-m-c01e-teaser-overlay.template");
    return ratingOverlayTemplate;
  }

  /**
   * renders overlay with given args and opens it by adding ACTIVE Class to it
   */
  async openOverlay({ args }: any): Promise<void> {
    if (args === null) return;
    const ratingOverlayTemplate = await this.loadTemplate();
    render(ratingOverlayTemplate(args), this);
    if (hasClass(this, ACTIVE)) return;
    super.open();
  }

  /**
   * closes Overlay by removing ACTIVE Class from it,
   * additionally resets overlayArgs to null
   * @override
   */
  async close() {
    this.setState({ args: null });
    removeClass(this, ANIMATING);
    await waitFor(300);
    removeClass(this, ACTIVE);
    this.dispatchEvent(
      new CustomEvent("dva-overlay-closed", {
        detail: {
          target: this,
        },
      }),
    );
    super.close();
  }

  /**
   * Handles prev-btn click event, by dispatching navigation event
   */
  @uiEvent("prevBtn", "click")
  loadPrevTeaser() {
    this.dispatchEvent(
      new CustomEvent("dvag-m-c01e-teaser-overlay-nav", {
        detail: {
          target: this,
          direction: "prev",
        },
      }),
    );
  }

  /**
   * Handles next-btn click event, by dispatching navigation event
   */
  @uiEvent("nextBtn", "click")
  loadNextTeaser(): void {
    this.dispatchEvent(
      new CustomEvent("dvag-m-c01e-teaser-overlay-nav", {
        detail: {
          target: this,
          direction: "next",
        },
      }),
    );
  }

  /**
   * Adds KeyboardEvent-reactions for arrow keys
   * @override
   */
  handleKeyup(e: KeyboardEvent): void {
    switch (e.key) {
      case "Escape":
        this.close();
        break;
      case "ArrowRight":
        if (hasClass(this, ACTIVE)) {
          this.loadNextTeaser();
        }
        break;
      case "ArrowLeft":
        if (hasClass(this, ACTIVE)) {
          this.loadPrevTeaser();
        }
        break;
    }
  }
}

customElements.define("dvag-m-c01e-teaser-overlay", DvagC01eTeaserOverlay);
