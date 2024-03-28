import { ObserverCallback } from "./ObserverService";
declare class AEMPanelcontainerService {
    constructor();
    private subscribeToMessageChannel;
    private handleMessage;
    observeMessages(messageType: string, callback: ObserverCallback): void;
    unobserveMessages(messageType: string, callback: ObserverCallback): void;
    private getObserverKey;
}
declare const _default: AEMPanelcontainerService;
export default _default;
