import { StorageServiceOptions } from "./StorageService.types";

class StorageService {
  observedItemsMap: Map<string, Set<() => void>> = new Map();

  constructor() {
    window.addEventListener("storage", e => this.handleStorageChange(e));
  }

  addItem(storageKey: string, storageValue: string) {
    localStorage.setItem(storageKey, storageValue);
    this.fireCallbacks(storageKey);
  }

  getItem(storageKey: string): string | null {
    return localStorage.getItem(storageKey);
  }

  removeItem(storageKey: string, options: StorageServiceOptions = {}) {
    this.getStorage(options).removeItem(storageKey);
  }

  observeItem(storageKey: string, callback: () => void) {
    const keyCallbacks = this.getKeyCallbacks(storageKey);
    keyCallbacks.add(callback);
    this.observedItemsMap.set(storageKey, keyCallbacks);
  }

  unobserveItem(storageKey: string, callback: () => void) {
    const keyCallbacks = this.getKeyCallbacks(storageKey);
    keyCallbacks.delete(callback);
    this.observedItemsMap.set(storageKey, keyCallbacks);
  }

  private handleStorageChange(e: StorageEvent) {
    const storageKey = e.key;
    const oldValue = e.oldValue;
    const newValue = e.newValue;
    if (storageKey === null || oldValue === newValue || !this.observedItemsMap.has(storageKey)) return;

    this.fireCallbacks(storageKey);
  }

  private getKeyCallbacks(storageKey: string): Set<() => void> {
    return this.observedItemsMap.get(storageKey) || new Set();
  }

  private fireCallbacks(storageKey: string) {
    const callbacks = this.getKeyCallbacks(storageKey);
    callbacks.forEach(callback => callback());
  }

  private getStorage(options: StorageServiceOptions): Storage {
    const { useSessionStorage = false } = options;
    return useSessionStorage ? sessionStorage : localStorage;
  }
}

export default new StorageService();
