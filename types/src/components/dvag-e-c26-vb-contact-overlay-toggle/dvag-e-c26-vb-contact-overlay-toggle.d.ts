import { Component } from "@kluntje/core";
export declare class DvagC26VbContactOverlayToggle extends Component {
    defaultContactOverlayHash: string;
    get noCookieHideActive(): boolean;
    get deeplinkingTarget(): string;
    afterComponentRender(): void;
    handleCookieChange(): void;
    loadOverlay(): void;
}
