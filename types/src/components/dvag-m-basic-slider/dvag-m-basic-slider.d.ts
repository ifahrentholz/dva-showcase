/// <reference types="node" />
import { Component } from "@kluntje/core";
import { MediaQueryService } from "@kluntje/services";
import { PanelcontainerMessageData } from "Services/AEMPanelcontainerService.types";
export declare class DvagBasicSlider extends Component {
    viewportObserver: IntersectionObserver;
    slides: Array<HTMLDivElement>;
    slidesContainer: HTMLDivElement;
    scrollBar: HTMLButtonElement;
    scrollIndicator?: HTMLButtonElement;
    prevBtn: HTMLButtonElement;
    nextBtn: HTMLButtonElement;
    activeSlideIndicator: HTMLSpanElement;
    private _inDraggingMode;
    private initialDragOffset;
    private lastScrollIndicatorOffset;
    private _activeSlideIdx;
    private _firstSlideVisible;
    private _lastSlideVisible;
    protected activeSlideMap: WeakMap<HTMLDivElement, boolean>;
    mqService: MediaQueryService;
    autoplayInterval: NodeJS.Timeout | null;
    lastInteractionType?: "click" | "swipe" | "dragScrollIndicator" | "autoplay";
    get autoplay(): boolean;
    get autoplayDelay(): number;
    get activeSlideIdx(): number;
    set activeSlideIdx(newIdx: number);
    get firstActiveSlide(): HTMLDivElement | null;
    get firstSlideVisible(): boolean;
    set firstSlideVisible(newState: boolean);
    get lastSlideVisible(): boolean;
    set lastSlideVisible(newState: boolean);
    updateSliderActive(): Promise<void>;
    afterComponentRender(): void;
    initEditMode(): void;
    handlePanelcontainerMessage(data: PanelcontainerMessageData): void;
    setScrollIndicatorWidth(): void;
    initControls(): void;
    initItemObserver(): void;
    handleFirstSlideInVp(): void;
    handleFirstSlideOutVp(): void;
    initActiveSlideObserver(): void;
    handleSlideInVp(slide: HTMLDivElement): void;
    handleSlideOutVp(slide: HTMLDivElement): void;
    updateActiveSlide(): void;
    dispatchSlideChangedEvent(): Promise<void>;
    get vpObserverConfig(): IntersectionObserverInit;
    get inDraggingMode(): boolean;
    set inDraggingMode(newState: boolean);
    get currentScrollIndicatorOffset(): number;
    goToSlide(slideIdx: number): void;
    moveSliderTo(offsetLeft: number): Promise<void>;
    /**
     * uses lifecycle-hook to destroy slider
     */
    destroyComponent(): void;
    handleMQChange(): void;
    handlePrevBtnClick(): void;
    handleNextBtnClick(): void;
    handleScrollBarClick(e: MouseEvent): Promise<void>;
    handleDragStart(e: MouseEvent): void;
    handleDragMove(e: MouseEvent): void;
    handleDragEnd(): Promise<void>;
    healSliderPosition(): Promise<void>;
    handleSlidesContainerScroll(): void;
    updateScrollIndicatorOffset(relativeScrollOffset: number): void;
    getScrollIndicatorOffset(relativeScrollOffset: number): number;
    updateSlidesContainerOffset(relativeScrollOffset: number): void;
    getSlidesContainerOffset(relativeScrollOffset: number): number;
    handleTouchMove(): void;
    stopAutoPlay(): void;
    detectHorizontalScrolling(e: WheelEvent): void;
    startAutoplay(): void;
    startSliderAutoPlayInterval(): void;
    moveOneSlide(dir: number): void;
    private getRelativeScrollContainerOffset;
    private getRelativeScrollIndicatorOffset;
}
