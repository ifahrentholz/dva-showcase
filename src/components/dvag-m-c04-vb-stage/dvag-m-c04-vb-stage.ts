import { Component, uiElement, uiEvent } from "@kluntje/core";
import { addClass, removeClass, getCurrentMQ, hasClass } from "@kluntje/js-utils/lib/dom-helpers";
import mqDefinitions from "Config/mediaQueries";
import { MQ_CHANGE_EVENT } from "Constants/eventTypes";

export class DvagC04VbStage extends Component {
  @uiElement(".dvag-m-c04-vb-stage__cta")
  stageCta: HTMLAnchorElement;

  afterComponentRender() {
    this.checkButtonModifier();
    this.setButtonClass();
  }

  /**
   * handles css-classes for CTA on no-vb-image-variant
   */
  checkButtonModifier(): void {
    if (hasClass(this, "dvag-m-c04-vb-stage--no-vb-image")) {
      addClass(this.stageCta, "dva-e-button--white");
    }
  }

  /**
   * handles css-classes for CTA on vb-image-variant depending on MQ
   */
  @uiEvent("window", MQ_CHANGE_EVENT)
  setButtonClass(): void {
    if (hasClass(this, "dvag-m-c04-vb-stage--no-vb-image")) return;
    const curMQ = getCurrentMQ(mqDefinitions);
    if (curMQ === "MQ4" || curMQ === "MQ5") {
      addClass(this.stageCta, "dva-e-button--white");
    } else {
      removeClass(this.stageCta, "dva-e-button--white");
    }
  }
}

customElements.define("dvag-m-c04-vb-stage", DvagC04VbStage);
