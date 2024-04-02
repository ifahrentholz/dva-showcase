import { Component } from "@kluntje/core";
import { DvagC26VbContactOverlay } from "Components/dvag-m-c26-vb-contact-overlay/dvag-m-c26-vb-contact-overlay";
export declare class DvagC26VbContactOverlayToggle extends Component {
    defaultContactOverlayHash: string;
    get noCookieHideActive(): boolean;
    get deeplinkingTarget(): string;
    get contactOverlay(): DvagC26VbContactOverlay;
    afterComponentRender(): void;
    handleCookieChange(): void;
    loadOverlay(): void;
}
