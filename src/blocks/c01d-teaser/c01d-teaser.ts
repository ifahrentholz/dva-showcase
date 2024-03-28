import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";

interface TeaserTemplateArgs {
  subheadline?: string | null;
  headline?: string | null;
  text?: string | null;
}

const teaserTemplateOverview = (args: TeaserTemplateArgs) => {
  return html`
    <div class="dvag-m-c01d-teaser  " style="--gradient-color:#CCDDE4">
      <div class="dvag-m-c01d-teaser__image-wrapper"></div>
      <div class="dvag-m-c01d-teaser__grid-wrapper">
        <div class="dvag-m-c01d-teaser__content-wrapper">
          <h4 class="dvag-m-c01d-teaser__subheadline">${args.subheadline}</h4>
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
            <!-- linkType: vbcontactoverlay -->

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
  `;
};

export default function (block: HTMLElement) {
  const subheadline = block.children[0].textContent;
  const headline = block.children[1].textContent;

  cleanUpBlock(block);
  render(teaserTemplateOverview({ subheadline, headline }), block);
}
