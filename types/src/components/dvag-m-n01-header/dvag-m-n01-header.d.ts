import { Component } from "@kluntje/core";
import { DVAGN01Navigation } from "Components/dvag-m-n01-navigation/dvag-m-n01-navigation";
export declare class DVAGN01Header extends Component {
    burgerAnchor: HTMLAnchorElement;
    headerLinks: Array<HTMLAnchorElement>;
    navigation: DVAGN01Navigation;
    vbInfo: HTMLElement;
    logoWrapper: HTMLElement;
    get vbFileUrl(): string;
    afterComponentRender(): void;
    insertVbContent(): Promise<void>;
    handleBurgerAnchorClick(e: Event): void;
    handleHeaderLinksClick(e: Event): void;
    /**
     * handles scroll on window, triggers animation for VB-version
     */
    handleScroll(): void;
}
