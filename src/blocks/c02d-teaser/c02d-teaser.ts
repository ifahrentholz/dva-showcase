import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./c01d-teaser.scss";

interface TeaserTemplateArgs {
  subheadline?: string | null;
  headline?: string | null;
}

const teaserTemplateOverview = (args: TeaserTemplateArgs) => {
  return html`
    <div
      class="c02d-teaser teaser dvag-h-background--gradient
dvag-h-margin-bottom--none
dvag-h-headline--bold"
    >
      <div class="dvag-m-c02d-teaser  " style="--gradient-color:#eff7ff">
        <div class="dvag-m-c02d-teaser__image-wrapper">
          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--mobile dva-state-initialized dva-state-invp dva-state-loaded"
            src="/content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original./teaser-karriere-mobil.jpg"
            alt="teaser-karriere-mobil.jpg"
            srcset="/content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-karriere-mobil.jpg 480w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-karriere-mobil.jpg 760w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-karriere-mobil.jpg 1024w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-karriere-mobil.jpg 1440w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-mobil.jpg/_jcr_content/renditions/original./teaser-karriere-mobil.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9"
          >
          </dva-e-lazy-image>

          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--desktop dva-state-initialized dva-state-invp dva-state-loaded"
            src="/content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original./teaser-karriere-desktop.jpg"
            alt="teaser-karriere-desktop.jpg"
            srcset="/content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original.image_file.480.206.file/teaser-karriere-desktop.jpg 480w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original.image_file.760.326.file/teaser-karriere-desktop.jpg 760w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original.image_file.1024.439.file/teaser-karriere-desktop.jpg 1024w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg./cq5dam.web.1280.1280.jpeg 1280w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original.image_file.1440.617.file/teaser-karriere-desktop.jpg 1440w, /content/dam/projects/dvag/bilder/vb-hp/startseite/teaser-karriere-desktop.jpg/_jcr_content/renditions/original./teaser-karriere-desktop.jpg 1460w"
            sizes="(min-width: 1460px) 1460px, 100vw"
            aspect-ratio="21:9"
          >
          </dva-e-lazy-image>
        </div>
        <div class="dvag-m-c01d-teaser__grid-wrapper">
          <div class="dvag-m-c01d-teaser__content-wrapper">
            <h4 class="dvag-m-c01d-teaser__subheadline">${args.headline}</h4>
            <div class="dvag-m-c01d-teaser__headline">Interessiert an einer Karriere als Vermögensberater/-in?</div>
            <div class="dvag-m-c01d-teaser__text"></div>
            <div class="dvag-m-c01d-teaser__button-wrapper">
              <!-- linkType: external -->

              <a
                class="dva-e-button dva-e-button--rebrush dva-e-button--small"
                href="https://www.dvag-karriere.de/Benjamin.Rube"
              >
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">Alles über die Karriere als Finanzcoach erfahren</span>
              </a>

              <!-- linkType: internal -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const subheadline = block.children[0].textContent;
  const headline = block.children[1].textContent;

  cleanUpBlock(block);
  render(teaserTemplateOverview({ subheadline, headline }), block);
}
