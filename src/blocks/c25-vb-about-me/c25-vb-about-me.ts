import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./c25-vb-about-me.scss";

interface AboutMeTemplateArgs {
  name?: string | null;
  headline?: string | null;
  text?: string | null;
  img?: string | null;
}

const aboutMeTemplateOverview = (args: AboutMeTemplateArgs) => {
  return html`
    <div class="c25-vbaboutme dvag-h-margin-top--none dvag-h-margin-bottom--none">
      <dvag-m-c25-vb-about-me class="dvag-m-c25-vb-about-me dvag-m-skew-component dvag-m-c25-vb-about-me--has-gallery">
        <div class="dva-h-skew--in"></div>
        <div class="dvag-m-skewed-box__content">
          <div class="dvag-m-c25-vb-about-me__grid-wrapper">
            <div class="dvag-m-c25-vb-about-me__content-wrapper">
              <div class="dvag-m-section-header">
                <h3 class="dvag-m-section-header__subheadline">${args.name}</h3>
                <h2 class="dvag-m-section-header__headline">${args.headline}</h2>
              </div>
              <div class="dvag-m-c25-vb-about-me__intro-text dvag-e-richtext">
                <p>${args.text}</p>
              </div>
              <div class="dvag-m-c25-vb-about-me__button-wrapper">
                <a class="dva-e-button dva-e-button--rebrush " href="/benjamin.rube/ueber-uns.html">
                  <div class="dva-e-button__background"></div>
                  <span class="dva-e-button__label">Mehr über mich erfahren</span>
                </a>
              </div>
            </div>

            <div class="dvag-m-c25-vb-about-me__gallery-wrapper">
              <dvag-m-basic-slider
                class="dvag-m-basic-slider dvag-m-c25-vb-about-me__slider"
                active-on-mq="1-3"
                title="Benjamin Rube - Lernen Sie mich kennen"
              >
                <div class="dvag-m-basic-slider__slides dvag-m-c25-vb-about-me__slides">
                  <div
                    class="dvag-m-basic-slider__slide dvag-m-c25-vb-about-me__gallery-slide dvag-m-c25-vb-about-me__gallery-overlay-toggle dva-state-invp"
                  >
                    <dva-e-lazy-image
                      class="dva-e-lazy-image dva-js-lazy-image dva-state-initialized dva-state-invp dva-state-loaded"
                      src="/content/dam/vbdata/default-assets/images/editorConfigImageGallery-image-1.jpg/_jcr_content/renditions/original./editorConfigImageGallery-image-1.jpg"
                      alt="Immer im Mittelpunkt der Beratung: Unsere Kunden."
                      aspect-ratio="16:9"
                    ></dva-e-lazy-image>
                    <p class="dvag-m-basic-slider__slide-text" style="width: 535px;">
                      Immer im Mittelpunkt der Beratung: Unsere Kunden.
                    </p>
                  </div>

                  <div
                    class="dvag-m-basic-slider__slide dvag-m-c25-vb-about-me__gallery-slide dvag-m-c25-vb-about-me__gallery-overlay-toggle dva-state-invp"
                  >
                    <dva-e-lazy-image
                      class="dva-e-lazy-image dva-js-lazy-image dva-state-initialized dva-state-invp dva-state-loaded"
                      src="/content/dam/vbdata/default-assets/images/editorConfigImageGallery-image-2.jpg/_jcr_content/renditions/original./editorConfigImageGallery-image-2.jpg"
                      alt="Gemeinsam Finanzen gestalten."
                      aspect-ratio="1:1"
                    ></dva-e-lazy-image>
                    <p class="dvag-m-basic-slider__slide-text" style="width: 194px;">Gemeinsam Finanzen gestalten.</p>
                  </div>

                  <div
                    class="dvag-m-basic-slider__slide dvag-m-c25-vb-about-me__gallery-slide dvag-m-c25-vb-about-me__gallery-overlay-toggle dva-state-invp"
                  >
                    <dva-e-lazy-image
                      class="dva-e-lazy-image dva-js-lazy-image dva-state-initialized dva-state-invp dva-state-loaded"
                      src="/content/dam/vbdata/default-assets/images/editorConfigImageGallery-image-3.jpg/_jcr_content/renditions/original./editorConfigImageGallery-image-3.jpg"
                      alt="Finanzcoaching ist Lebensplanung."
                      aspect-ratio="1:1"
                    ></dva-e-lazy-image>
                    <p class="dvag-m-basic-slider__slide-text" style="width: 302px;">
                      Finanzcoaching ist Lebensplanung.
                    </p>
                  </div>
                </div>

                <div class="dvag-m-basic-slider__controls dvag-m-c25-vb-about-me__controls">
                  <button
                    class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--prev"
                  >
                    <div class="dva-e-button__background"></div>
                    <dva-e-icon class="dva-e-icon" icon-id="dva-icon-chevron-left"></dva-e-icon>
                  </button>
                  <button
                    class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--next"
                  >
                    <div class="dva-e-button__background"></div>
                    <dva-e-icon class="dva-e-icon" icon-id="dva-icon-chevron-right"></dva-e-icon>
                  </button>
                </div>

                <div class="dvag-m-basic-slider__grid-container-wrapper dvag-m-c25-vb-about-me__grid-container-wrapper">
                  <div class="dvag-m-basic-slider__scroll-bar">
                    <button
                      class="dvag-m-basic-slider__scroll-indicator"
                      tabindex="-1"
                      style="width: 57.7096%; transform: translateX(0%);"
                    ></button>
                  </div>
                </div>
              </dvag-m-basic-slider>
              </div>
            </div>
          </div>
        </div>
      </dvag-m-c25-vb-about-me>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const name = block.children[0].textContent;
  const headline = block.children[1].textContent;
  const text = block.children[2].textContent;
  const img = block.children[3].textContent;
  console.log(img)

  cleanUpBlock(block);
  render(aboutMeTemplateOverview({ name, headline, text, img }), block);
}
