import { findAll, onEvent, removeEvent } from "@kluntje/js-utils/lib/dom-helpers";

import DebuggerService from "./DebuggerService";

export interface TrapTargetOptions {
  activeElementBeforeTrapped: Element | null;
  tabableElements: Array<HTMLElement>;
}

class FocusService {
  static TABABLE_ELEMENTS_SELECTOR = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  private _focusTrapped = false;

  private tabableElementsMap: WeakMap<HTMLElement, TrapTargetOptions> = new WeakMap();

  private trapTargetList: Array<HTMLElement> = [];

  eventBindingMap = {};
  eventIdMap = new WeakMap();

  get focusTrapped() {
    return this._focusTrapped;
  }

  set focusTrapped(newValue) {
    if (this._focusTrapped === newValue) return;

    if (newValue === true) {
      onEvent(document.body, ["keydown"], this.handleKeyDown, this);
    } else {
      removeEvent(document.body, ["keydown"], this.handleKeyDown, this);
    }
    this._focusTrapped = newValue;
  }

  get currentTrapTarget(): HTMLElement | null {
    if (this.trapTargetList.length === 0) return null;

    return this.trapTargetList[this.trapTargetList.length - 1];
  }

  get firstTabableElement() {
    if (this.currentTrapTarget === null) return null;
    return this.getFirstTabableElementOf(this.currentTrapTarget);
  }

  get lastTabableElement() {
    if (this.currentTrapTarget === null) return null;
    return this.getLastTabableElementOf(this.currentTrapTarget);
  }

  get firstTabableElementActive() {
    if (this.currentTrapTarget === null) return false;
    return this.isFirstTabableElementActive(this.currentTrapTarget);
  }

  get lastTabableElementActive() {
    if (this.currentTrapTarget === null) return false;
    return this.isLastTabableElementActive(this.currentTrapTarget);
  }

  trapFocusIn(target: HTMLElement) {
    const tabableElements = this.tabableElementsIn(target);

    if (tabableElements.length === 0) return;

    this.trapTargetList.push(target);
    this.tabableElementsMap.set(target, {
      activeElementBeforeTrapped: document.activeElement,
      tabableElements,
    });
    this.focusTrapped = true;
    // eslint-disable-next-line no-unused-expressions
    this.firstTabableElement?.focus();
  }

  unTrapFocusIn(target: HTMLElement) {
    this.trapTargetList = this.trapTargetList.filter(trapElement => trapElement !== target);
    const activeElement = this.tabableElementsMap.get(target)?.activeElementBeforeTrapped || null;
    try {
      if (activeElement !== null) (activeElement as HTMLElement).focus();
    } catch (error) {
      DebuggerService.error("FocusService: ", error);
    }
    this.tabableElementsMap.delete(target);

    if (this.trapTargetList.length === 0) this.focusTrapped = false;
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key !== "Tab") return;

    if (e.shiftKey && this.firstTabableElementActive) {
      // eslint-disable-next-line no-unused-expressions
      this.lastTabableElement?.focus();
      e.preventDefault();
    } else if (e.shiftKey === false && this.lastTabableElementActive) {
      // eslint-disable-next-line no-unused-expressions
      this.firstTabableElement?.focus();
      e.preventDefault();
    }
  }

  private tabableElementsIn(target: HTMLElement) {
    return findAll(target, FocusService.TABABLE_ELEMENTS_SELECTOR);
  }

  private getFirstTabableElementOf(target: HTMLElement) {
    const tabableElements = this.tabableElementsMap.get(target)?.tabableElements || [];
    if (tabableElements.length === 0) return null;
    return tabableElements[0];
  }

  private getLastTabableElementOf(target: HTMLElement) {
    const tabableElements = this.tabableElementsMap.get(target)?.tabableElements || [];
    if (tabableElements.length === 0) return null;
    return tabableElements[tabableElements.length - 1];
  }

  private isFirstTabableElementActive(target: HTMLElement) {
    const firstTabableElement = this.getFirstTabableElementOf(target);
    if (firstTabableElement === null) return false;
    return firstTabableElement === document.activeElement;
  }

  private isLastTabableElementActive(target: HTMLElement) {
    const lastTabableElement = this.getLastTabableElementOf(target);
    if (lastTabableElement === null) return false;
    return lastTabableElement === document.activeElement;
  }
}

export default new FocusService();
