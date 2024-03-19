import { Component, uiElement, uiElements, uiEvent } from "@kluntje/core";
import {
  addClass,
  find,
  findAll,
  hasClass,
  onEvent,
  removeClass,
  removeEvent,
  waitFor,
} from "@kluntje/js-utils/lib/dom-helpers";
import { NAVIGATION_OPEN, OPEN, VISIBLE } from "Constants/cssClasses";
import { throttle } from "@kluntje/js-utils/lib/function-helpers/decorators";
import { disableScrollLock, enableScrollLock } from "Helpers/domHelper/scrollLock";
import FocusService from "Services/FocusService";

export class DVAGN01Navigation extends Component {
  LEVEL_2_OPEN_CLASS = "dvag-m-n01-navigation--level-2-open";
  private _animateSubNavigation = true;

  @uiElement(".dvag-m-n01-navigation__header-button--close")
  closeBtn: HTMLAnchorElement;

  @uiElement(".dvag-m-n01-navigation__header-button--back")
  backBtn: HTMLAnchorElement;

  @uiElements(".dvag-m-n01-navigation__cta")
  ctas: HTMLElement;

  @uiElements(".dvag-m-n01-navigation__item-link")
  itemLinks: Array<HTMLAnchorElement>;

  public get animateSubNavigation() {
    return this._animateSubNavigation;
  }

  public set animateSubNavigation(value) {
    this._animateSubNavigation = value;
  }

  afterComponentRender(): void {
    document.documentElement.style.setProperty("--nav-scroll-height", `0px`);
  }

  public async open() {
    enableScrollLock();
    addClass(this, OPEN);
    addClass(document.body, NAVIGATION_OPEN);
    await waitFor(50);
    addClass(this, VISIBLE);
    onEvent(window, "keyup", this.handleKeyboardsEvents, this);
    FocusService.trapFocusIn(this);
    this.scrollTop = 0;
    this.setAppCustomPropertyHeight();
  }

  public async close() {
    if (hasClass(this, VISIBLE)) {
      disableScrollLock();
      removeClass(this, VISIBLE);
      removeClass(document.body, NAVIGATION_OPEN);
      await waitFor(300);
      removeClass(this, OPEN);
      removeEvent(window, "keyup", this.handleKeyboardsEvents, this);
      FocusService.unTrapFocusIn(this);
      this.resetSubNavigation();
    }
  }

  async resetSubNavigation() {
    const subNav = findAll(this, ".dvag-m-n01-navigation__level-2");
    removeClass(subNav, VISIBLE);
    await waitFor(300);
    removeClass(subNav, OPEN);
    removeClass(this.backBtn, VISIBLE);
    await waitFor(100);
    removeClass(this, this.LEVEL_2_OPEN_CLASS);
  }

  setAppCustomPropertyHeight() {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
  }

  handleKeyboardsEvents(e: KeyboardEvent) {
    if (e.key === "Escape") this.close();
  }

  @uiEvent("closeBtn", "click")
  handleCloseBtnClick() {
    this.close();
  }

  @uiEvent("backBtn", "click")
  handleBackBtnClick() {
    this.resetSubNavigation();
  }

  @uiEvent("ctas", "click")
  handleContactCtaClick() {
    this.close();
  }

  @uiEvent("this", "click")
  handleComponentClick(e: Event) {
    e.stopPropagation();
  }

  @uiEvent("window", "click")
  handleWindowClick() {
    this.close();
  }

  @uiEvent("window", "resize")
  @throttle(100)
  handleWindowResize() {
    this.setAppCustomPropertyHeight();
  }

  @uiEvent("this", "scroll")
  @throttle(100)
  handleWindowScroll(e: Event) {
    document.documentElement.style.setProperty("--nav-scroll-height", `${(e?.target as HTMLElement).scrollTop}px`);
  }

  @uiEvent("itemLinks", "click")
  async handleItemLinksClick(e: Event) {
    const target = e.currentTarget as HTMLElement;
    if (target.nextElementSibling === null) return;
    const subNav = target.nextElementSibling as HTMLElement;
    if (hasClass(subNav, "dvag-m-n01-navigation__level-2")) {
      e.preventDefault();
      addClass(subNav, OPEN);
      if (this.animateSubNavigation) {
        await waitFor(100);
      }
      addClass(subNav, VISIBLE);
      if (this.animateSubNavigation) {
        await waitFor(300);
      }
      addClass(this, this.LEVEL_2_OPEN_CLASS);
      addClass(this.backBtn, VISIBLE);
    }
  }

  async openSubNavigation(subnavId: string) {
    const subNavToggle = find(this, `[data-subnav-id="${subnavId}"]`);
    if (subNavToggle === null) return;
    this.animateSubNavigation = false;
    this.open();
    subNavToggle.click();
    this.animateSubNavigation = true;
    await waitFor(100);
    this.backBtn.blur();
  }
}

customElements.define("dvag-m-n01-navigation", DVAGN01Navigation);
