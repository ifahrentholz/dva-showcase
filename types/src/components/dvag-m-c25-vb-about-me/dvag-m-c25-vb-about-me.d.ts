import { Component } from "@kluntje/core";
import { DvaLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
export declare class DvagC25VbAboutMe extends Component {
    viewportObserver: IntersectionObserver;
    gallerySlides: Array<HTMLDivElement>;
    galleryImages: Array<DvaLazyImage>;
    galleryOverlayToggles: Array<HTMLDivElement>;
    galleryCounter: HTMLSpanElement;
    overlay: DvagBasicOverlay;
    afterComponentRender(): void;
    initGalleryButton(): void;
    handleLoadedImages({ detail }: any): void;
    setCaptionWidth(image: DvaLazyImage): void;
    handleOverlayTogglesClick(): void;
    handleViewportChange(): void;
    handleMQChange(): void;
}
