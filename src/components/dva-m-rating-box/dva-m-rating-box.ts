import { Component, prop } from "@kluntje/core";
import { ViewportObserver } from "@kluntje/services";
import { removeEvent, toggleClass } from "@kluntje/js-utils/lib/dom-helpers";
import { render } from "lit-html";
import { ERROR } from "Constants/cssClasses";
import { IN_VIEWPORT_EVENT } from "Constants/eventTypes";

import { ratingBoxTemplate } from "./dva-m-rating-box.template";

export class DvaRatingBox extends Component {
  viewportObserver = ViewportObserver.getInstance();

  @prop
  editMode = false;

  constructor() {
    super({
      events: [
        {
          event: IN_VIEWPORT_EVENT,
          target: "this",
          handler: "handleIntersectionChange",
        },
      ],
      initialStates: {
        loaded: false,
        inValidationMode: false,
      },
      reactions: {
        inValidationMode: ["renderComponent"],
      },
    });
  }

  static get observedAttributes() {
    return ["rating"];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === "rating" && oldValue !== newValue && this.state.initialized) {
      this.renderComponent();
    }
  }

  afterComponentRender(): void {
    this.viewportObserver.observe(this);
  }

  get rating() {
    return parseFloat((this.getAttribute("rating") || "5").replace(",", "."));
  }

  set rating(newRating: number) {
    this.setAttribute("rating", newRating.toString());
  }

  get name(): string {
    return this.getAttribute("name") || "";
  }

  /**
   * Handles Intersection Change, by removing viewportObserver
   * and initializing ImageLoad
   */
  handleIntersectionChange(): void {
    this.viewportObserver.unobserve(this);
    removeEvent(this, IN_VIEWPORT_EVENT, this.handleIntersectionChange, this);
    if (!this.state.loaded) {
      this.renderComponent();
    }
  }

  /**
   * initially renders the containing stars
   */
  renderComponent(): void {
    if (this.state.inValidationMode) {
      toggleClass(this, ERROR, this.rating === 0);
    }
    render(ratingBoxTemplate({ curRating: this.rating, ratingBox: this }), this);
  }

  validate() {
    if (this.editMode) this.setState({ inValidationMode: true });
  }
}

customElements.define("dva-m-rating-box", DvaRatingBox);
