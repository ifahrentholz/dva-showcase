import { html } from "lit-html";

export type dvagBasicOverlayAsLightboxTemplateArgs = {
  cssClasses?: string;
  imageUrl?: string;
};

export const renderBasicOverlayAsLightbox = (args: dvagBasicOverlayAsLightboxTemplateArgs) => {
  return html`
    <dvag-m-basic-overlay class="dvag-m-basic-overlay ${args.cssClasses}" role="dialog" aria-modal="true">
      <button type="button" class="dva-e-button dvag-m-basic-overlay__close dva-e-button--icon-only">
        <div class="dva-e-button__background"></div>
        <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="dva-icon-close"></dva-e-icon>
      </button>
      <div class="dvag-m-basic-overlay__content">
        <div class="dvag-m-basic-overlay__inner-content">
          <dva-e-lazy-image class="dva-e-lazy-image dva-js-lazy-image" src="${args.imageUrl}" alt="">
          </dva-e-lazy-image>
        </div>
      </div>
    </dvag-m-basic-overlay>
  `;
};
