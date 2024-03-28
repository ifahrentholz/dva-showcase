import { StorageServiceOptions } from "./StorageService.types";
declare class StorageService {
    observedItemsMap: Map<string, Set<() => void>>;
    constructor();
    addItem(storageKey: string, storageValue: string): void;
    getItem(storageKey: string): string | null;
    removeItem(storageKey: string, options?: StorageServiceOptions): void;
    observeItem(storageKey: string, callback: () => void): void;
    unobserveItem(storageKey: string, callback: () => void): void;
    private handleStorageChange;
    private getKeyCallbacks;
    private fireCallbacks;
    private getStorage;
}
declare const _default: StorageService;
export default _default;
