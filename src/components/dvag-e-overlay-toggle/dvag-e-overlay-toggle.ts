import { Component, prop, uiEvent } from "@kluntje/core";
import { find } from "@kluntje/js-utils/lib/dom-helpers";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";

export class DvagOverlayToggle extends Component {
  @prop({ type: "string", defaultValue: "" })
  target: string;

  @uiEvent("this", "click")
  handleClick() {
    if (this.target === "") return;
    const curTarget = find<DvagBasicOverlay>(document.body, this.target);
    if (curTarget === null) return;
    curTarget.open();
  }

  @uiEvent("this", "keydown")
  handleKeyDown(e: KeyboardEvent) {
    e.preventDefault();
    if (e.key !== "Enter") return;
    this.handleClick();
  }
}

customElements.define("dvag-e-overlay-toggle", DvagOverlayToggle);
