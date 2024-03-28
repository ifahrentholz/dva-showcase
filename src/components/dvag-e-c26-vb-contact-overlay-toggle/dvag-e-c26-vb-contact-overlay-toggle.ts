import { Component, uiEvent } from "@kluntje/core";
import { toggleClass } from "@kluntje/js-utils/lib/dom-helpers";
// import { DvagC26VbContactOverlay } from "Components/dvag-m-c26-vb-contact-overlay/dvag-m-c26-vb-contact-overlay";
import { ACTIVE, HIDDEN } from "Constants/cssClasses";
import { COOKIE_CHANGE_EVENT } from "Constants/eventTypes";
import CookieService from "Services/CookieService";

export class DvagC26VbContactOverlayToggle extends Component {
  defaultContactOverlayHash = "kontakt";

  get noCookieHideActive(): boolean {
    return this.hasAttribute("no-cookie-hide");
  }

  get deeplinkingTarget(): string {
    return this.getAttribute("deeplinking-target") || this.defaultContactOverlayHash;
  }

  // get contactOverlay(): DvagC26VbContactOverlay {
  //  const contactOverlay = find(document.body, ".dvag-m-c26-vb-contact-overlay") as DvagC26VbContactOverlay;
  //  return contactOverlay;
  // }

  afterComponentRender() {
    this.handleCookieChange();
  }

  @uiEvent("window", COOKIE_CHANGE_EVENT)
  handleCookieChange() {
    if (this.noCookieHideActive) {
      const vbCookieSet = CookieService.vbPathSet;
      toggleClass(this, ACTIVE, vbCookieSet);
      toggleClass(this, HIDDEN, !vbCookieSet);
    }
  }

  @uiEvent("this", "click")
  loadOverlay() {
    window.location.hash = this.deeplinkingTarget;
    //  const overlay = this.contactOverlay;
    //  overlay.showDeepLinkLayer(this.deeplinkingTarget);
    //  overlay.open();
  }
}

customElements.define("dvag-e-c26-vb-contact-overlay-toggle", DvagC26VbContactOverlayToggle);
