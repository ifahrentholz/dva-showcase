import { Component } from "@kluntje/core";
export declare class DvagBasicOverlay extends Component {
    closeBtn: HTMLButtonElement;
    close(): Promise<void>;
    open(): Promise<void>;
    handleKeyboardsEvents(e: KeyboardEvent): void;
    handleCookieChange(): void;
    handleOverlayClick(_e: Event): void;
    handleCloseBtnClick(): void;
}
