declare class LazyConnectService {
    componentMap: WeakMap<object, any>;
    intersectionObserver: IntersectionObserver;
    constructor();
    subscribe(target: HTMLElement, intersectionCallback: () => void): void;
    unsubscribe(target: HTMLElement): void;
    handleIntersectionChange(entries: Array<IntersectionObserverEntry>): void;
}
declare const _default: LazyConnectService;
export default _default;
