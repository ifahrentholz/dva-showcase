import { find } from "@kluntje/js-utils/lib/dom-helpers";
import { DvagBasicOverlay } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay";
import { render } from "lit-html";
import { dvagBasicOverlayAsLightboxTemplateArgs } from "Components/dvag-m-basic-overlay/dvag-m-basic-overlay.template";
import { waitForInitialization } from "Helpers/componentHelper/waitForInitialization";

/**
 * Global helper service to assist with lightboxes for single images
 */
class LightboxService {
  private lightboxInstance: DvagBasicOverlay | null = null;

  public createLightbox(lightboxImageUrl: string) {
    this.renderLightbox({
      imageUrl: lightboxImageUrl,
      cssClasses: "dvag-m-basic-overlay--lightbox",
    });
  }

  public destroyLightbox() {
    if (this.lightboxInstance === null) return;
    this.lightboxInstance.close();
    document.body.removeChild(this.lightboxInstance);
    this.lightboxInstance = null;
  }

  private async renderLightbox(args: dvagBasicOverlayAsLightboxTemplateArgs) {
    const renderDvagBasicOverlayAsLightbox = await this.loadOverlayTemplate();
    const lightboxWrapper = document.createElement("div");
    render(renderDvagBasicOverlayAsLightbox(args), lightboxWrapper);

    const overlay = find<DvagBasicOverlay>(lightboxWrapper, ".dvag-m-basic-overlay");
    if (overlay === null) return;
    document.body.appendChild(overlay);
    this.lightboxInstance = overlay;
    await waitForInitialization(overlay);
    overlay.open();
  }

  private async loadOverlayTemplate() {
    const { renderBasicOverlayAsLightbox } = await import(
      "Components/dvag-m-basic-overlay/dvag-m-basic-overlay.template"
    );
    return renderBasicOverlayAsLightbox;
  }
}

export default new LightboxService();
