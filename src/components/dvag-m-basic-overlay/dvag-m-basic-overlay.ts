import { Component, uiElement, uiEvent } from "@kluntje/core";
import { addClass, onEvent, removeClass, removeEvent, waitFor } from "@kluntje/js-utils/lib/dom-helpers";
import { ACTIVE, ANIMATING } from "Constants/cssClasses";
import { OVERLAY_CLOSE_EVENT, OVERLAY_OPEN_EVENT } from "Constants/eventTypes";
import { disableScrollLock, enableScrollLock } from "Helpers/domHelper/scrollLock";
import FocusService from "Services/FocusService";
import LightboxService from "Services/LightboxService";

export class DvagBasicOverlay extends Component {
  @uiElement(".dvag-m-basic-overlay__close")
  closeBtn: HTMLButtonElement;

  public async close() {
    disableScrollLock();

    removeClass(this, ANIMATING);
    await waitFor(300);
    removeClass(this, ACTIVE);
    removeEvent(window, "keyup", this.handleKeyboardsEvents, this);
    FocusService.unTrapFocusIn(this);
    LightboxService.destroyLightbox();
    this.dispatchEvent(new CustomEvent(OVERLAY_CLOSE_EVENT));
  }

  public async open() {
    enableScrollLock();

    addClass(this, ACTIVE);
    await waitFor(100);
    addClass(this, ANIMATING);
    onEvent(window, "keyup", this.handleKeyboardsEvents, this);
    FocusService.trapFocusIn(this);
    this.dispatchEvent(new CustomEvent(OVERLAY_OPEN_EVENT));
  }

  handleKeyboardsEvents(e: KeyboardEvent) {
    if (e.key !== "Escape") return;
    this.close();
  }

  handleCookieChange() {
    // to fix inheritance bug with kluntje decorators
    // @TODO: Remove later
  }

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  handleOverlayClick(_e: Event) {
    // to fix inheritance bug with kluntje decorators
    // @TODO: Remove later
  }

  @uiEvent("closeBtn", "click")
  handleCloseBtnClick() {
    this.close();
  }
}

customElements.define("dvag-m-basic-overlay", DvagBasicOverlay);
