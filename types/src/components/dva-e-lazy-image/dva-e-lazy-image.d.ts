import { Component } from "@kluntje/core";
export type ImageInitType = "lazy" | "explicit";
export declare class DVALazyImage extends Component {
    viewportObserver: IntersectionObserver;
    _hasError: boolean;
    _loadingPlaceholderLoaded: boolean;
    _loadingPlaceholderLoadingError: boolean;
    constructor();
    connectedCallback(): void;
    get DEFAULT_FALLBACK_IMAGE(): string;
    get fallbackImg(): string;
    /**
     * Returns value of 'src'-Attribute
     * @returns {string}
     */
    get imgSrc(): string;
    /**
     * Returns value of 'srcset'-Attribute
     * @returns {string}
     */
    get imgSrcSet(): string;
    /**
     * Returns value of 'sizes'-Attribute
     * @returns {string}
     */
    get imgSizes(): string;
    /**
     * Returns value of 'alt'-Attribute
     * @returns {string}
     */
    get imgAlt(): string;
    /**
     * Returns value of 'aspect-ratio'-Attribute
     * @returns {string}
     */
    get imgAspectRatio(): string | null;
    /**
     * Returns value of 'wrapper'-Attribute
     * @returns {string}
     */
    get imgWrapper(): string;
    get noPlaceholder(): boolean;
    /**
     * Returns, whether loaded image is Wider than needed
     * @returns {boolean}
     */
    get hasOverWidth(): boolean;
    get hasError(): boolean;
    set hasError(newErrorState: boolean);
    get hasLoadingPlaceholder(): boolean;
    get loadingPlaceholderLoaded(): boolean;
    set loadingPlaceholderLoaded(newLoadedState: boolean);
    get loadingPlaceholderLoadingError(): boolean;
    set loadingPlaceholderLoadingError(newErrorState: boolean);
    /**
     * Webcomponents Helper to observe Attribute Changes
     * @override
     * @returns {string[]}
     */
    static get observedAttributes(): string[];
    /**
     * Returns given init-type, default to lazy
     * @returns {ImageInitType}
     */
    get initType(): ImageInitType;
    getLoadingPlaceholderFromSrc(): string;
    get loadingPlaceholder(): string;
    /**
     * Handles change of observed Attributes
     * @override
     * @param {string} name - name of Attribute, that changed
     * @param {string} oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Renders Component via lit-html
     */
    renderComponent(): void;
    /**
     * Rerenders Component via lit-html
     */
    updateComponent(): void;
    /**
     * Lifecycle-Hook: Initializes Component after render
     * @override
     */
    afterComponentRender(): void;
    /**
     * Lifecycle-Hook for removing markup on destroy
     */
    beforeComponentDisconnects(): void;
    /**
     * Lifecycle-Hook for removing markup on destroy
     */
    destroyComponent(): void;
    /**
     * Initiates Image Load, by add src(-set) to img in shadow-DOM
     */
    loadImage(): void;
    /**
     * Handles any ImageLoading-Errors
     */
    handleImageLoadingError(): void;
    /**
     * Handles ImageLoad-Event, by setting/removing needed Classes
     */
    handleImageLoad(): void;
    /**
     * Adds needed Events for ImageLoading
     * @param {Node} img - image in Shadow-DOM
     */
    attachImageEvents(img: HTMLImageElement): void;
    /**
     * Checks if image has Overwidth and optinally adds needed class
     */
    handleOverwidth(): void;
}
