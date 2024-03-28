import { CONSENT_MANAGEMENT_READY_EVENT } from "Constants/eventTypes";

import StorageService from "./StorageService";

export class ConsentManagementService {
  consentCategories: Set<string> = new Set();

  constructor() {
    window._dvaConsentManagementService = this;
    document.body.dispatchEvent(new CustomEvent(CONSENT_MANAGEMENT_READY_EVENT));
  }

  setConsent(categoryKey: string, newConsent: boolean): void {
    this.consentCategories.add(categoryKey);
    return StorageService.addItem(this.getStorageKey(categoryKey), newConsent.toString());
  }

  getConsent(categoryKey: string): boolean {
    this.consentCategories.add(categoryKey);
    return StorageService.getItem(this.getStorageKey(categoryKey)) === "true";
  }

  getAllCategories() {
    return Array.from(this.consentCategories);
  }

  observeCategory(categoryKey: string, callback: () => void) {
    StorageService.observeItem(this.getStorageKey(categoryKey), callback);
  }

  unobserveCategory(categoryKey: string, callback: () => void) {
    StorageService.unobserveItem(this.getStorageKey(categoryKey), callback);
  }

  private getStorageKey(categoryKey: string): string {
    return `dva-consent-${categoryKey}`;
  }
}

export default new ConsentManagementService();
