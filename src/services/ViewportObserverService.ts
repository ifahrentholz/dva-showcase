import { v4 as uuidv4 } from "uuid";

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

interface ViewportObserverData {
  iObserverInstance: IntersectionObserver;
  callbackMap: WeakMap<HTMLElement, Array<IntersectionObserverCallback>>;
}

class ViewportObserverService {
  private intersectionObserverMap: Map<string, ViewportObserverData> = new Map();
  private rootElementKeyMap: WeakMap<Element | Document, string> = new WeakMap();

  private getIObserverData(observerConfig: IntersectionObserverInit = {}): ViewportObserverData {
    const observerKey = this.getIObserverKey(observerConfig);

    const iObserver = this.intersectionObserverMap.get(observerKey);
    if (iObserver !== undefined) return iObserver;
    return {
      iObserverInstance: new IntersectionObserver(
        (e: Array<IntersectionObserverEntry>) => this.handleVPChange(e, observerKey),
        observerConfig,
      ),
      callbackMap: new WeakMap(),
    };
  }

  private getIObserverKey(observerConfig: IntersectionObserverInit): string {
    return JSON.stringify(this.getSerializableObserverConfig(observerConfig));
  }

  private getSerializableObserverConfig(observerConfig: IntersectionObserverInit) {
    if (observerConfig.root === undefined || observerConfig.root === null) return observerConfig;

    return {
      ...observerConfig,
      root: this.getRootElementKey(observerConfig.root),
    };
  }

  private getRootElementKey(rootElement: Element | Document) {
    const rootElementKey = this.rootElementKeyMap.get(rootElement);
    if (rootElementKey !== undefined) return rootElementKey;

    const generatedKey = uuidv4();
    this.rootElementKeyMap.set(rootElement, generatedKey);
    return generatedKey;
  }

  static removeCallback(callbacks: Array<IntersectionObserverCallback>, callback: IntersectionObserverCallback) {
    return callbacks.filter(
      curCallback =>
        curCallback.type !== callback.type ||
        curCallback.callback.toString() !== callback.callback.toString() ||
        curCallback.context !== callback.context,
    );
  }

  static callbackExists(callbacks: Array<IntersectionObserverCallback>, callback: IntersectionObserverCallback) {
    return (
      callbacks.find(cb => {
        return (
          cb.type === callback.type &&
          cb.callback.toString() === callback.callback.toString() &&
          cb.context === callback.context
        );
      }) !== undefined
    );
  }

  observe(
    targetElement: HTMLElement,
    callback: IntersectionObserverCallback,
    observerConfig: IntersectionObserverInit = {},
  ) {
    const iObserverData = this.getIObserverData(observerConfig);
    const callbacks = iObserverData.callbackMap.get(targetElement) || [];
    const callbackExists = ViewportObserverService.callbackExists(callbacks, callback);
    if (callbackExists) return;
    callbacks.push(callback);
    iObserverData.callbackMap.set(targetElement, callbacks);
    this.intersectionObserverMap.set(this.getIObserverKey(observerConfig), iObserverData);

    iObserverData.iObserverInstance.observe(targetElement);
  }

  observeIn({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.observe(
      targetElement,
      {
        type: "in",
        callback,
        context,
      },
      observerConfig,
    );
  }

  unobserveIn({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.unobserve(
      targetElement,
      {
        type: "in",
        callback,
        context,
      },
      observerConfig,
    );
  }

  observeOut({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.observe(
      targetElement,
      {
        type: "out",
        callback,
        context,
      },
      observerConfig,
    );
  }

  unobserveOut({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.unobserve(
      targetElement,
      {
        type: "out",
        callback,
        context,
      },
      observerConfig,
    );
  }

  observeBoth({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.observe(
      targetElement,
      {
        type: "both",
        callback,
        context,
      },
      observerConfig,
    );
  }

  unobserveBoth({ targetElement, callback, context, observerConfig = {} }: ViewportObserverServiceOptions) {
    this.unobserve(
      targetElement,
      {
        type: "both",
        callback,
        context,
      },
      observerConfig,
    );
  }

  unobserve(
    targetElement: HTMLElement,
    callback: IntersectionObserverCallback,
    observerConfig: IntersectionObserverInit = {},
  ) {
    const iObserverData = this.getIObserverData(observerConfig);
    let callbacks = iObserverData.callbackMap.get(targetElement) || [];
    const callbackExists = ViewportObserverService.callbackExists(callbacks, callback);
    if (callbackExists === false) return;
    callbacks = ViewportObserverService.removeCallback(callbacks, callback);
    iObserverData.callbackMap.set(targetElement, callbacks);
    this.intersectionObserverMap.set(this.getIObserverKey(observerConfig), iObserverData);
    iObserverData.iObserverInstance.unobserve(targetElement);
  }

  handleVPChange(entries: Array<IntersectionObserverEntry>, observerKey: string) {
    entries.forEach(intersectionEntry => {
      const target = intersectionEntry.target as HTMLElement;
      const iObserverData = this.intersectionObserverMap.get(observerKey);

      if (iObserverData === undefined) return;
      const callbacks = iObserverData.callbackMap.get(target);
      if (callbacks === undefined) return;
      this.fireCallbacks(callbacks, intersectionEntry.isIntersecting);
    });
  }

  fireCallbacks(callbacks: Array<IntersectionObserverCallback>, isIntersecting: boolean) {
    const callbackTypes: Array<IObserverCallbackType> = ["both", isIntersecting ? "in" : "out"];
    const toFire = callbacks.filter(callback => callbackTypes.includes(callback.type));
    toFire.forEach(cb => {
      const curCallback = cb.callback.bind(cb.context);
      curCallback();
    });
  }
}

export default new ViewportObserverService();
