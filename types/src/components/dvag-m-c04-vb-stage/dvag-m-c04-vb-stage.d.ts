import { Component } from "@kluntje/core";
export declare class DvagC04VbStage extends Component {
    stageCta: HTMLAnchorElement;
    afterComponentRender(): void;
    /**
     * handles css-classes for CTA on no-vb-image-variant
     */
    checkButtonModifier(): void;
    /**
     * handles css-classes for CTA on vb-image-variant depending on MQ
     */
    setButtonClass(): void;
}
