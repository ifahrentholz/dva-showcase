import { Component } from "@kluntje/core";
import { DvagC26VbContactOverlay } from "Components/dvag-m-c26-vb-contact-overlay/dvag-m-c26-vb-contact-overlay";
export declare class DvagC24QuicklinkItem extends Component {
    link: HTMLAnchorElement;
    get noCookieHideActive(): boolean;
    get isOverlayOpenener(): boolean;
    get contactOverlay(): DvagC26VbContactOverlay;
    afterComponentRender(): void;
    handleCookieChange(): void;
    openOverlay(e: Event): void;
}
