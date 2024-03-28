export type ObserverCallback<T = any> = (data?: T) => void;
declare class ObserverService {
    observerMap: Map<string, Set<ObserverCallback>>;
    observe(observedKey: string, callback: ObserverCallback): void;
    unobserve(observedKey: string, callback: ObserverCallback): void;
    notifyObservers<T>(observedKey: string, data?: T): void;
    private getCallbacks;
}
declare const _default: ObserverService;
export default _default;
