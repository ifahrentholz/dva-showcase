import { DvagBasicSlider } from "Components/dvag-m-basic-slider/dvag-m-basic-slider";
import { LottiePlayer, AnimationItem } from "lottie-web";
import { DvagProgressBar } from "Components/dvag-e-progress-bar/dvag-e-progress-bar";
export declare class DvagLottieSlider extends DvagBasicSlider {
    viewportObserver: IntersectionObserver;
    private animationLoaded;
    animation: AnimationItem;
    lottie: LottiePlayer;
    animationBox: HTMLDivElement;
    progressBar: DvagProgressBar;
    get segmentLength(): number;
    get animationPath(): string;
    set lastSlideVisible(newState: boolean);
    updateActiveSlide(): void;
    afterComponentRender(): void;
    moveOneSlide(dir: number): void;
    handleNextBtnClick(): void;
    handlePrevBtnClick(): void;
    playSegment(prev: number, curr: number): void;
    updateProgressBar(): Promise<void>;
    loadAnimation(): Promise<void>;
    loadLottiePlayer(): Promise<LottiePlayer>;
    startAutoplay(): Promise<void>;
    /**
     * moves slider to position
     * @override
     */
    moveSliderTo(offsetLeft: number): Promise<void>;
    startSliderAutoPlayInterval(): void;
    detectHorizontalScrolling(e: WheelEvent): void;
}
