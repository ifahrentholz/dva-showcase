import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./c01d-teaser.scss";

interface TeaserTemplateArgs {
  subheadlineRight?: string | null;
}

const teaserTemplateOverview = (args: TeaserTemplateArgs) => {
  return html`
    <div class="c01d-teaser teaser dvag-h-background--gradient
      dvag-h-margin-bottom--none
      dvag-h-text--right
      dvag-h-headline--bold">
      <div class="dvag-m-c01d-teaser" style="--gradient-color:#CCDDE4">
        <div class="dvag-m-c01d-teaser__image-wrapper">
          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--mobile"
            src="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9-mobil.jpg"
            alt="teaser-ki-klopp-21_9-mobil.jpg"
            srcset="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-ki-klopp-21_9-mobil.jpg 480w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-ki-klopp-21_9-mobil.jpg 760w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-ki-klopp-21_9-mobil.jpg 1024w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-ki-klopp-21_9-mobil.jpg 1440w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9-mobil.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9-mobil.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9">
          </dva-e-lazy-image>

          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--desktop dva-state-initialized dva-state-invp dva-state-loaded"
            src="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9.jpg"
            alt="teaser-ki-klopp-21_9.jpg"
            srcset="/content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-ki-klopp-21_9.jpg 480w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-ki-klopp-21_9.jpg 760w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-ki-klopp-21_9.jpg 1024w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-ki-klopp-21_9.jpg 1440w, /content/dam/projects/dvag/bilder/klopp/teaser-ki-klopp-21_9.jpg/_jcr_content/renditions/original./teaser-ki-klopp-21_9.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9">
          </dva-e-lazy-image>
        </div>
        <div class="dvag-m-c01d-teaser__grid-wrapper">
          <div class="dvag-m-c01d-teaser__content-wrapper">
            <h4 class="dvag-m-c01d-teaser__subheadline">${args.subheadlineRight}</h4>
            <div class="dvag-m-c01d-teaser__headline">Welchen Lebenstraum verfolgen Sie?</div>
            <div class="dvag-m-c01d-teaser__text">
              <p>
                Manchmal ist es nur eine einzige Entscheidung, die zu einem ganz anderen Leben führt.&nbsp;Gerade in den
                entscheidenden Momenten ist es wichtig, jemanden an seiner Seite zu haben, dem man vertrauen kann. Der
                einen coacht. Und der einem hilft, das Beste aus seinem Leben rauszuholen.&nbsp;
              </p>
              <p>
                Wie auch immer Sie Ihr Leben leben wollen: Ich helfe Ihnen, die richtigen finanziellen Entscheidungen
                zu&nbsp;treffen.
              </p>
            </div>
            <div class="dvag-m-c01d-teaser__button-wrapper">
              <dvag-e-c26-vb-contact-overlay-toggle
                id="contact_genericLink"
                class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-state-active"
                deeplinking-target="kontakt"
                tabindex="0"
                no-cookie-hide="no-cookie-hide">
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

export default function renderTeaser(block: HTMLElement) {
  const subheadlineRightElement = block.querySelector(".dvag-m-c01d-teaser__subheadline");
  const subheadlineRight = subheadlineRightElement ? subheadlineRightElement.textContent : null;
  
  if (!subheadlineRight) {
    console.error("Subheadline not found");
    return;
  }

  cleanUpBlock(block);
  render(teaserTemplateOverview({ subheadlineRight }), block);
}
