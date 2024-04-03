import { Component } from "@kluntje/core";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
import { DVALazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image";
export declare class DvagC25VbAboutMe extends Component {
    viewportObserver: IntersectionObserver;
    gallerySlides: Array<HTMLDivElement>;
    galleryImages: Array<DVALazyImage>;
    galleryOverlayToggles: Array<HTMLDivElement>;
    galleryCounter: HTMLSpanElement;
    overlay: DvagBasicOverlay;
    afterComponentRender(): void;
    initGalleryButton(): void;
    handleLoadedImages({ detail }: any): void;
    setCaptionWidth(image: DVALazyImage): void;
    handleOverlayTogglesClick(): void;
    handleViewportChange(): void;
    handleMQChange(): void;
}
