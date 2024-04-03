/**
 * Global helper service to assist with lightboxes for single images
 */
declare class LightboxService {
    private lightboxInstance;
    createLightbox(lightboxImageUrl: string): void;
    destroyLightbox(): void;
    private renderLightbox;
    private loadOverlayTemplate;
}
declare const _default: LightboxService;
export default _default;
