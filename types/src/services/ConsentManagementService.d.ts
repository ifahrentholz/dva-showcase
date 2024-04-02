export declare class ConsentManagementService {
    consentCategories: Set<string>;
    constructor();
    setConsent(categoryKey: string, newConsent: boolean): void;
    getConsent(categoryKey: string): boolean;
    getAllCategories(): string[];
    observeCategory(categoryKey: string, callback: () => void): void;
    unobserveCategory(categoryKey: string, callback: () => void): void;
    private getStorageKey;
}
declare const _default: ConsentManagementService;
export default _default;
