import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./c01d-teaser.scss";

interface TeaserTemplateArgs {
  subheadline?: string | null;
  headline?: string | null;
  textFirstPart?: string | null;
  textSecondPart?: string | null;
}

const teaserTemplateOverview = (args: TeaserTemplateArgs, alignment: "left" | "right" = "right") => {
  const textAlignmentClass = alignment === "left" ? "dvag-h-text--left" : "dvag-h-text--right";
  return html`
    <div
      class="c01d-teaser teaser dvag-h-background--gradient dvag-h-margin-bottom--none dvag-h-headline--bold ${textAlignmentClass}"
    >
      <div class="dvag-m-c01d-teaser  " style="--gradient-color:#CCDDE4">
        <div class="dvag-m-c01d-teaser__image-wrapper">
          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--mobile dva-state-initialized dva-state-invp dva-state-loaded"
            src="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9-mobil.jpg"
            alt="teaser-ki-klopp-21_9-mobil.jpg"
            srcset="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-ki-klopp-21_9-mobil.jpg 480w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-ki-klopp-21_9-mobil.jpg 760w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-ki-klopp-21_9-mobil.jpg 1024w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-ki-klopp-21_9-mobil.jpg 1440w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9-mobil.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9"
          >
          </dva-e-lazy-image>
          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--desktop dva-state-initialized dva-state-invp dva-state-loaded"
            src="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9.jpg"
            alt="teaser-ki-klopp-21_9.jpg"
            srcset="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-ki-klopp-21_9.jpg 480w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-ki-klopp-21_9.jpg 760w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-ki-klopp-21_9.jpg 1024w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-ki-klopp-21_9.jpg 1440w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9"
          >
          </dva-e-lazy-image>
        </div>
        <div class="dvag-m-c01d-teaser__grid-wrapper">
          <div class="dvag-m-c01d-teaser__content-wrapper">
            <h4 class="dvag-m-c01d-teaser__subheadline">bla bla bla</h4>
            <div class="dvag-m-c01d-teaser__headline">${args.headline}</div>
            <div class="dvag-m-c01d-teaser__text">
              <p>${args.textFirstPart}</p>
              <p>${args.textSecondPart}</p>
            </div>
            <div class="dvag-m-c01d-teaser__button-wrapper">
              <dvag-e-c26-vb-contact-overlay-toggle
                id="contact_genericLink"
                class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-state-active"
                deeplinking-target="kontakt"
                tabindex="0"
                no-cookie-hide="no-cookie-hide"
              >
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">Jetzt Termin vereinbaren</span>
              </dvag-e-c26-vb-contact-overlay-toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default function renderTeaser(block: HTMLElement, alignment: "left" | "right" = "right") {
  const subheadline = block.children[0].textContent;
  const headline = block.children[1].textContent;
  const textFirstPart = block.children[2].textContent;
  const textSecondPart = block.children[3].textContent;

  cleanUpBlock(block);
  render(teaserTemplateOverview({ subheadline, headline, textFirstPart, textSecondPart }, alignment), block);
}
