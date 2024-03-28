export interface TrackingEventDetails {
    timestamp: number;
    pageUrl: string;
    [ind: string]: any;
}
export type TrackingEvent = {
    eventName: string;
    eventDetails: object;
};
export declare class TrackingService {
    private pageContainer;
    static get ANALYTICS_CONSENT_CAT_NAME(): string;
    constructor();
    dispatch(trackingEvent: TrackingEvent): void;
    prepareTrackingEvent(eventDetails: object): TrackingEventDetails;
}
declare const _default: TrackingService;
export default _default;
