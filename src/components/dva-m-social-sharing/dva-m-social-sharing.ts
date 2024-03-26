import { throttle } from '@kluntje/js-utils/lib/function-helpers/decorators';
import { Component } from '@kluntje/core';
import { ViewportObserver } from '@kluntje/services';
import { toggleClass } from '@kluntje/js-utils/lib/dom-helpers';
import { fetchJSON } from '@kluntje/js-utils/lib/api-helpers';
import { ACTIVE, HIDDEN } from 'Constants/cssClasses';
import { IN_VIEWPORT_EVENT, OUT_VIEWPORT_EVENT } from 'Constants/eventTypes';

class DvaSocialSharing extends Component {
  viewportObserver = ViewportObserver.getInstance();
  constructor() {
    super({
      ui: {
        stickyBox: '.dva-js-social-sharing__sticky :-one',
        stickyToggle: '.dva-js-social-sharing__sticky-icon :-one',
        shareLink: '.dva-js-social-sharing__share-link',
      },
      events: [
        {
          event: 'scroll',
          target: 'window',
          handler: 'onScroll',
        },
        {
          event: 'click',
          target: 'stickyToggle',
          handler: 'toggleSticky',
        },
        {
          event: IN_VIEWPORT_EVENT,
          target: 'this',
          handler: 'handleInVP',
        },
        {
          event: OUT_VIEWPORT_EVENT,
          target: 'this',
          handler: 'handleOutVP',
        },
        {
          event: 'click',
          target: 'shareLink',
          handler: 'handleShare',
        },
      ],
      initialStates: {
        isActive: true,
        isVisible: true,
      },
      reactions: {
        isActive: ['onActiveChange'],
        isVisible: ['onVisibleChange'],
      },
    });
  }

  /**
   * Returns value of share-event-url Attribute needed
   * to count shares in BE
   * @returns {string}
   */
  get sharingUrl(): string {
    return this.getAttribute('share-event-url') || '';
  }

  /**
   * return current ScrollY Position of window
   * @returns {Number}
   */
  get pageScrollY(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * return whether scrollup-button should be visible
   * @returns {Boolean}
   */
  get shouldBeActive(): boolean {
    return this.pageScrollY < 50;
  }

  /**
   * sets initial sticky state
   */
  afterComponentRender(): void {
    this.viewportObserver.observe(this);
    this.setState({ isActive: this.shouldBeActive });
  }

  /**
   * handles page-scroll, by setting active-state and updating lastScroll-value
   */
  @throttle(100)
  onScroll(): void {
    this.setState({ isActive: this.shouldBeActive });
  }

  /**
   * scrolls page to top
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /**
   * handles click on sticky-bar by toggeling the isActive-state
   */
  toggleSticky(): void {
    this.setState({ isActive: !this.state.isActive });
  }

  /**
   * handle active-state-chage, by toggleing ACTIVE-class
   * @param {state.isActive} state.isActive
   */
  onActiveChange({ isActive }: any): void {
    toggleClass(this.ui.stickyBox, ACTIVE, isActive);
  }

  /**
   * handles kl-in-vp event, by setting isVisible-state
   */
  handleInVP(): void {
    this.setState({ isVisible: false });
  }

  /**
   * handles kl-out-vp event, by setting isVisible-state
   */
  handleOutVP() {
    this.setState({ isVisible: true });
  }

  /**
   * handles isVisible-state change,
   * by setting HIDDEN class to stickyBox
   */
  onVisibleChange({ isVisible }: any) {
    toggleClass(this.ui.stickyBox, HIDDEN, !isVisible);
  }

  /**
   * Handles click on sharing Link, by fetching sharing URL
   * in order to count Article share
   */
  handleShare(): void {
    if (this.sharingUrl !== '') fetchJSON(this.sharingUrl);
  }
}

customElements.define('dva-m-social-sharing', DvaSocialSharing);
