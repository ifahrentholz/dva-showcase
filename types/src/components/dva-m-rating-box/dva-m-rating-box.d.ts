import { Component } from "@kluntje/core";
export declare class DvaRatingBox extends Component {
    viewportObserver: IntersectionObserver;
    editMode: boolean;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    afterComponentRender(): void;
    get rating(): number;
    set rating(newRating: number);
    get name(): string;
    /**
     * Handles Intersection Change, by removing viewportObserver
     * and initializing ImageLoad
     */
    handleIntersectionChange(): void;
    /**
     * initially renders the containing stars
     */
    renderComponent(): void;
    validate(): void;
}
