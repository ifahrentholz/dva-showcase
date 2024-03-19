import { Component } from "@kluntje/core";
export declare class DVAGN01Navigation extends Component {
    LEVEL_2_OPEN_CLASS: string;
    private _animateSubNavigation;
    closeBtn: HTMLAnchorElement;
    backBtn: HTMLAnchorElement;
    ctas: HTMLElement;
    itemLinks: Array<HTMLAnchorElement>;
    get animateSubNavigation(): boolean;
    set animateSubNavigation(value: boolean);
    afterComponentRender(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    resetSubNavigation(): Promise<void>;
    setAppCustomPropertyHeight(): void;
    handleKeyboardsEvents(e: KeyboardEvent): void;
    handleCloseBtnClick(): void;
    handleBackBtnClick(): void;
    handleContactCtaClick(): void;
    handleComponentClick(e: Event): void;
    handleWindowClick(): void;
    handleWindowResize(): void;
    handleWindowScroll(e: Event): void;
    handleItemLinksClick(e: Event): Promise<void>;
    openSubNavigation(subnavId: string): Promise<void>;
}
