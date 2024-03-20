import { Component } from "@kluntje/core";
export declare class DvaIcon extends Component {
    constructor();
    connectedCallback(): void;
    get loadingAttr(): string;
    get iconId(): string;
    set iconId(newIconId: string);
    get halfFilled(): boolean;
    afterComponentRender(): void;
    getSvgString(name: string): Promise<string>;
    loadIcon(): Promise<void>;
    static get observedAttributes(): string[];
    appendSymbol(symbol: any): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    makeHalfFilled(): void;
}
