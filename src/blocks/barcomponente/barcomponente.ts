import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { html, render } from "lit";

interface Bar {
  image?: HTMLImageElement;
  header: string;
  text: string;
}

interface barComponentArgs {
  subheader: string;
  header: string;
  bars: Bar[];
}

enum blockRows {
  subheader,
  header,
  barImages,
  barHeader,
  barText,
}

const template = (args: barComponentArgs) => {
  return html`
    <div class="dvag-m-c06-page-section dvag-m-skew-component  ">
      <div class="dva-h-skew--in"></div>

      <div class="dvag-m-skewed-box__content">
        <div class="dvag-m-section-header">
          <h3 class="dvag-m-section-header__subheadline">Individuelles Finanzcoaching</h3>
          <h2 class="dvag-m-section-header__headline">Ihre Vorteile auf einen Blick</h2>
        </div>

        <div class="dvag-m-c06-page-section__content-wrapper wcm-io-parsys">
          <!-- primary - resourceType:  -->

          <!-- secondary - resourceType:  -->

          <!-- c08_barcomponent - resourceType: dvag/core/components/content/c08-barcomponent -->
          <div class="wcm-io-parsys dvag-h-margin-bottom--none">
            <div class="dvag-m-c08-barcomponent">
              <div class="dvag-grid">
                <div class="dvag-grid-row wcm-io-parsys">
                  <div class="dvag-grid-col-1-12 dvag-grid-col-3-4">
                    <!-- c05_listentry - resourceType: dvag/core/components/content/c05-listentry -->
                    <div class="c05-listentry">
                      <div class="dvag-m-c05-list-entry">
                        <div class="dvag-m-c05-list-entry__image-wrapper">
                          <dva-e-lazy-image
                            class="dva-e-lazy-image dva-js-lazy-image dvag-m-c05-list-entry__image dva-state-initialized dva-state-invp dva-state-loaded"
                            src="/content/dam/projects/dvag/bilder/icons/absicherung.svg"
                            alt="Icon"
                            aspect-ratio="cover"
                          ></dva-e-lazy-image>
                        </div>
                        <div class="dvag-m-c05-list-entry__content">
                          <h4 class="dvag-m-c05-list-entry__headline">Ihre Wünsche &amp; Ziele im Fokus</h4>
                          <p class="dvag-m-c05-list-entry__text">
                            Es geht um Sie! Als Ihr Finanzcoach nehme ich mir Zeit, Ihre Situation kennenzulernen und zu
                            verstehen, was Sie erreichen möchten. Und dann mit Ihnen gemeinsam das möglich zu machen,
                            was möglich ist.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="dvag-grid-col-1-12 dvag-grid-col-3-4">
                    <!-- c05_listentry_copy - resourceType: dvag/core/components/content/c05-listentry -->
                    <div class="c05-listentry">
                      <div class="dvag-m-c05-list-entry">
                        <div class="dvag-m-c05-list-entry__image-wrapper">
                          <dva-e-lazy-image
                            class="dva-e-lazy-image dva-js-lazy-image dvag-m-c05-list-entry__image dva-state-initialized dva-state-invp dva-state-loaded"
                            src="/content/dam/projects/dvag/bilder/icons/allfinanzkonzept.svg"
                            alt="Icon"
                            aspect-ratio="cover"
                          ></dva-e-lazy-image>
                        </div>
                        <div class="dvag-m-c05-list-entry__content">
                          <h4 class="dvag-m-c05-list-entry__headline">Professionelle Konzeptberatung</h4>
                          <p class="dvag-m-c05-list-entry__text">
                            Sparen, Geldanlage, Versicherungen, Vorsorge – ich helfe Ihnen, bei allen Finanzthemen den
                            Überblick zu behalten und erarbeite für Sie ein personalisiertes, branchenübergreifendes
                            Konzept für Ihren finanziellen Erfolg.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="dvag-grid-col-1-12 dvag-grid-col-3-4">
                    <!-- c05_listentry_copy_1622722722 - resourceType: dvag/core/components/content/c05-listentry -->
                    <div class="c05-listentry">
                      <div class="dvag-m-c05-list-entry">
                        <div class="dvag-m-c05-list-entry__image-wrapper">
                          <dva-e-lazy-image
                            class="dva-e-lazy-image dva-js-lazy-image dvag-m-c05-list-entry__image dva-state-initialized dva-state-invp dva-state-loaded"
                            src="/content/dam/projects/dvag/bilder/icons/coach.svg"
                            alt="Icon"
                            aspect-ratio="cover"
                          ></dva-e-lazy-image>
                        </div>
                        <div class="dvag-m-c05-list-entry__content">
                          <h4 class="dvag-m-c05-list-entry__headline">Ein Ansprechpartner für alles</h4>
                          <p class="dvag-m-c05-list-entry__text">
                            Als ihr persönlicher Finanzcoach kümmere ich mich für Sie um alles Wichtige. Berate Sie,
                            wenn sich etwas in Ihrem Leben verändert und helfe Ihnen, Ihre Spar- und Vorsorgeziele in
                            die Tat umzusetzen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- buttons - resourceType: dvag/components/content/buttons -->
          <div class="buttons">
            <ul class="button-list bleed-m bleed-l">
              <li class="button-list-item col-s-12 col-m-4 col-l-m-4-offset col-l-4 col-l-4-offset">
                <!-- vb-contact-overlay-toggle isContactOverlayCta -->
                <!-- dvag button.html is getPrio1Cta: y -->

                <dvag-e-c26-vb-contact-overlay-toggle
                  class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-state-active"
                  id="contact_button"
                  no-cookie-hide="no-cookie-hide"
                >
                  <!-- template vb-contact-overlay-toggle -->
                  <div class="dva-e-button__background"></div>
                  <span class="dva-e-button__label"> Jetzt Kontakt aufnehmen </span>
                </dvag-e-c26-vb-contact-overlay-toggle>

                <!--  Fallback to VB Finder if requested by vbFinderFallback-Flag and if there is no VB Context given -->
              </li>
            </ul>
          </div>
        </div>

        <div class="dvag-m-c06-page-section__button-wrapper">
          <!-- linkType: internal -->

          <!-- linkType: internal -->
        </div>
      </div>

      <div class="dva-h-skew--out"></div>
    </div>
  `;
};

const getChildNodeText = (element: HTMLElement | Element, index: number): string => {
  const childNode = element.children[index];
  return childNode.textContent?.trim() ?? "";
};

const getBars = (block: HTMLElement): Bar[] => {
  return [...block.children[blockRows.barImages].children].map((imageRow, index) => {
    return {
      image: imageRow.querySelector("img") || undefined,
      header: getChildNodeText(block.children[blockRows.barHeader], index),
      text: getChildNodeText(block.children[blockRows.barText], index),
    };
  });
};
export default function (block: HTMLElement) {
  const args: barComponentArgs = {
    subheader: getChildNodeText(block, blockRows.subheader),
    header: getChildNodeText(block, blockRows.barHeader),
    bars: getBars(block),
  };

  cleanUpBlock(block);
  render(template(args), block);
}
