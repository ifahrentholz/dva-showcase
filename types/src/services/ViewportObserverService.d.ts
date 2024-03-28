type Callback = () => void;
type IObserverCallbackType = "in" | "out" | "both";
export interface ViewportObserverServiceOptions {
    targetElement: HTMLElement;
    callback: Callback;
    context: HTMLElement;
    observerConfig?: IntersectionObserverInit;
}
interface IntersectionObserverCallback {
    type: IObserverCallbackType;
    callback: Callback;
    context: HTMLElement;
}
declare class ViewportObserverService {
    private intersectionObserverMap;
    private rootElementKeyMap;
    private getIObserverData;
    private getIObserverKey;
    private getSerializableObserverConfig;
    private getRootElementKey;
    static removeCallback(callbacks: Array<IntersectionObserverCallback>, callback: IntersectionObserverCallback): IntersectionObserverCallback[];
    static callbackExists(callbacks: Array<IntersectionObserverCallback>, callback: IntersectionObserverCallback): boolean;
    observe(targetElement: HTMLElement, callback: IntersectionObserverCallback, observerConfig?: IntersectionObserverInit): void;
    observeIn({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    unobserveIn({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    observeOut({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    unobserveOut({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    observeBoth({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    unobserveBoth({ targetElement, callback, context, observerConfig }: ViewportObserverServiceOptions): void;
    unobserve(targetElement: HTMLElement, callback: IntersectionObserverCallback, observerConfig?: IntersectionObserverInit): void;
    handleVPChange(entries: Array<IntersectionObserverEntry>, observerKey: string): void;
    fireCallbacks(callbacks: Array<IntersectionObserverCallback>, isIntersecting: boolean): void;
}
declare const _default: ViewportObserverService;
export default _default;
