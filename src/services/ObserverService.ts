// export type ObserverCallback = () => void;
export type ObserverCallback<T = any> = (data?: T) => void;

class ObserverService {
  observerMap: Map<string, Set<ObserverCallback>> = new Map();

  observe(observedKey: string, callback: ObserverCallback) {
    const curCallbacks = this.getCallbacks(observedKey);
    curCallbacks.add(callback);
    this.observerMap.set(observedKey, curCallbacks);
  }

  unobserve(observedKey: string, callback: ObserverCallback) {
    const curCallbacks = this.getCallbacks(observedKey);
    curCallbacks.delete(callback);
    this.observerMap.set(observedKey, curCallbacks);
  }

  notifyObservers<T>(observedKey: string, data?: T) {
    const callbacks = this.getCallbacks(observedKey);
    callbacks.forEach(callback => callback(data));
  }

  private getCallbacks(observedKey: string): Set<ObserverCallback> {
    return this.observerMap.get(observedKey) || new Set();
  }
}

export default new ObserverService();
