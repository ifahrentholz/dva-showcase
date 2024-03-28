import { Component } from "@kluntje/core";
export declare class DvagProgressBar extends Component {
    progressIndicator: HTMLDivElement;
    get startValue(): number;
    afterComponentRender(): void;
    updateProgressIndicator(percentage: number, duration: number): void;
}
