import { Component } from "@kluntje/core";
import { DvaLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image";
export declare class DVAGC19CtaBlock extends Component {
    vbContent: HTMLDivElement;
    nonVbContent: HTMLDivElement;
    vbName: HTMLSpanElement;
    vbImage: DvaLazyImage;
    vbImageWrapper: HTMLDivElement;
    vbFallbackWrapper: HTMLDivElement;
    get vbFileUrl(): string;
    afterComponentRender(): void;
}
