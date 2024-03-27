import { find } from "@kluntje/js-utils/lib/dom-helpers";

import ConsentManagementService from "./ConsentManagementService";

export interface TrackingEventDetails {
  timestamp: number;
  pageUrl: string;
  [ind: string]: any;
}

export type TrackingEvent = {
  eventName: string;
  eventDetails: object;
};

export class TrackingService {
  private pageContainer: HTMLElement;

  static get ANALYTICS_CONSENT_CAT_NAME() {
    return "adobe-analytics";
  }

  constructor() {
    this.pageContainer = find(document.body, ".dva-page") || find(document.body, ".page.container") || document.body;
  }

  dispatch(trackingEvent: TrackingEvent): void {
    if (!ConsentManagementService.getConsent(TrackingService.ANALYTICS_CONSENT_CAT_NAME)) return;

    this.pageContainer.dispatchEvent(
      new CustomEvent(trackingEvent.eventName, {
        detail: this.prepareTrackingEvent(trackingEvent.eventDetails),
      }),
    );
  }

  prepareTrackingEvent(eventDetails: object): TrackingEventDetails {
    return {
      timestamp: new Date().getTime(),
      pageUrl: window.location.href,
      ...eventDetails,
    };
  }
}

export default new TrackingService();
