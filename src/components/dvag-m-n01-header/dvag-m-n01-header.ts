import { Component, uiElement, uiElements, uiEvent } from '@kluntje/core';
import { addClass, removeClass } from '@kluntje/js-utils/lib/dom-helpers';
import { DVAGN01Navigation } from "Components/dvag-m-n01-navigation/dvag-m-n01-navigation";
import { HIDDEN, VISIBLE } from 'Constants/cssClasses';
import CookieService from 'Services/CookieService';

export class DVAGN01Header extends Component {
  @uiElement('.dvag-m-n01-header__burger-menu')
  burgerAnchor: HTMLAnchorElement;

  @uiElements('.dvag-m-n01-header__header-navigation-link')
  headerLinks: Array<HTMLAnchorElement>;

  @uiElement('.dvag-m-n01-navigation')
  navigation: DVAGN01Navigation;

  @uiElement('.dvag-m-n01-header__vb-info')
  vbInfo: HTMLElement;

  @uiElement('.dvag-m-n01-header__logo-wrapper')
  logoWrapper: HTMLElement;

  get vbFileUrl(): string {
    return this.getAttribute('vb-file-url') || '';
  }

  afterComponentRender(): void {
    this.insertVbContent();
  }

  async insertVbContent(): Promise<void> {
    if (!CookieService.isCookieSet('VBPathCookie')) return;
    if (this.vbFileUrl === '') return;
    if (CookieService.isVbPage) {
      CookieService.setCookie('VBPathCookie', CookieService.vbPath, 20);
    }
    const cookiePath = CookieService.getCookie('VBPathCookie')?.endsWith('/')
      ? CookieService.getCookie('VBPathCookie')
      : `${CookieService.getCookie('VBPathCookie')}/`;
    const url = cookiePath + this.vbFileUrl;

    // fetch markup from server
    const responseData = await fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(`Data from ${url} could not be loaded: ${response.statusText}`);
        return response.text();
      })
      .catch((error) => {
        console.error('Error while fetching data from vb-file ', error);
      });

    this.logoWrapper.insertAdjacentHTML('beforeend', responseData as string);
    this.updateUI();
    this.updateEvents();
  }

  @uiEvent('burgerAnchor', 'click')
  handleBurgerAnchorClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.navigation.open();
    this.burgerAnchor.blur();
  }

  @uiEvent('headerLinks', 'click')
  handleHeaderLinksClick(e: Event) {
    const link = e.currentTarget as HTMLLinkElement;
    if (link.href === undefined || link.href === '' || link.href.charAt(link.href.length - 1) === '#') {
      e.preventDefault();
      e.stopPropagation();
      const subnavId = link.dataset.subnavId as string;
      this.navigation.openSubNavigation(subnavId);
      link.blur();
    }
  }

  /**
   * handles scroll on window, triggers animation for VB-version
   */
  @uiEvent('window', 'scroll')
  handleScroll() {
    if (this.vbInfo === null) return;
    const vbCookieSet = CookieService.vbPathSet;
    if (!vbCookieSet) {
      addClass(this.vbInfo, HIDDEN);
      return;
    }
    const showScrollPosition = 100;
    if (window.scrollY > showScrollPosition) {
      addClass(this.vbInfo, VISIBLE);
    } else {
      removeClass(this.vbInfo, VISIBLE);
    }
  }
}

customElements.define('dvag-m-n01-header', DVAGN01Header);
