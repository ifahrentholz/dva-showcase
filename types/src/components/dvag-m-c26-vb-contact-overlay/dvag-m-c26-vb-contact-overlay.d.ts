import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
import { DVAGTopicsGroup } from "Components/dvag-m-topics-group/dvag-m-topics-group";
import { DvagMultistepForm } from "Components/dvag-m-multistep-form/dvag-m-multistep-form";
export declare class DvagC26VbContactOverlay extends DvagBasicOverlay {
    defaultHash: string;
    constructor();
    layers: Array<HTMLDivElement>;
    deeplinkAnchors: Array<HTMLAnchorElement>;
    appointmentAnchor: HTMLAnchorElement;
    backAnchors: Array<HTMLAnchorElement>;
    closeButtons: Array<HTMLButtonElement>;
    innerContentWrapper: HTMLDivElement;
    topicsGroup: DVAGTopicsGroup;
    multiStepForm: DvagMultistepForm;
    static get observedAttributes(): string[];
    get noCookieHideActive(): boolean;
    get apiUrl(): string;
    get productName(): string;
    get productLabel(): string;
    get productSubLabel(): string;
    get vbPath(): string | null;
    afterComponentRender(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    renderAsync(): Promise<void>;
    loadContent(): Promise<void>;
    /**
     * compares contentLayer-IDs with URL hash to open overlay and show contentLayerID
     */
    handleSubLayerURLhashes(): void;
    handleCookieChange(): void;
    handleAppointmentAnchorClick(e: Event): void;
    handleDeepLinkAnchorClick(e: Event): void;
    showDeepLinkLayer(targetId: string): void;
    handleBackAnchorsClick(e: Event): void;
    handleCloseClick(): void;
    handleOverlayClick(e: Event): void;
    closeContactOverlay(): Promise<void>;
    resetContactOverlay(): void;
}
