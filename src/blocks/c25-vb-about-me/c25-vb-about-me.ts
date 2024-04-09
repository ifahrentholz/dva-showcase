import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, nothing, render } from "lit";
import "./c25-vb-about-me.scss";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";
import { renderIcon } from "Components/icon/dva-e-icon.template";
import "Components/dvag-m-c25-vb-about-me/dvag-m-c25-vb-about-me";
import "Components/dvag-m-basic-slider/dvag-m-basic-slider";

interface AboutMeImage {
  src: string;
  alt: string;
  description: string;
  aspectRatio: string;
}

interface AboutMeTemplateArgs {
  name?: string;
  headline?: string;
  text?: string | null;
  images?: AboutMeImage[];
}

const aboutMeTemplateOverview = (args: AboutMeTemplateArgs) => {
  return html`
    <div
      class="c25-vbaboutme dvag-h-margin-top--none
dvag-h-margin-bottom--none"
    >
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
                <!-- linkType: internalCrossContext -->

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
                  ${args.images?.map((image, index) => {
                    return html`
                      <div
                        class="dvag-m-basic-slider__slide dvag-m-c25-vb-about-me__gallery-slide dvag-m-c25-vb-about-me__gallery-overlay-toggle"
                      >
                        ${renderLazyImage({
                          src: image.src,
                          alt: image.alt,
                          aspectRatio: image.aspectRatio,
                        })}
                        ${index === 0
                          ? html`<div class="dvag-m-c25-vb-about-me__gallery-button">
                              ${renderIcon(
                                "dva-icon-image-gallery-16px",
                                "dvag-m-c25-vb-about-me__gallery-button-icon",
                              )}<span class="dvag-m-c25-vb-about-me__gallery-button-counter">3</span> Fotos
                            </div>`
                          : nothing}

                        <p class="dvag-m-basic-slider__slide-text">${image.description}</p>
                      </div>
                    `;
                  })}
                </div>

                <div class="dvag-m-basic-slider__controls dvag-m-c25-vb-about-me__controls">
                  <button
                    class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--prev"
                  >
                    <div class="dva-e-button__background"></div>
                    ${renderIcon("dva-icon-chevron-left")}
                  </button>
                  <button
                    class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--next"
                  >
                    <div class="dva-e-button__background"></div>
                    ${renderIcon("dva-icon-chevron-right")}
                  </button>
                </div>

                <div class="dvag-m-basic-slider__grid-container-wrapper dvag-m-c25-vb-about-me__grid-container-wrapper">
                  <div class="dvag-m-basic-slider__scroll-bar">
                    <button class="dvag-m-basic-slider__scroll-indicator" tabindex="-1"></button>
                  </div>
                </div>
              </dvag-m-basic-slider>

              <!-- @BE: this is a duplicate of the button above, due to layout they will visually be toggled in CSS depending on "--has-gallery"-modifier -->
              <div class="dvag-m-c25-vb-about-me__button-wrapper">
                <!-- linkType: internalCrossContext -->

                <a class="dva-e-button dva-e-button--rebrush " href="/benjamin.rube/ueber-uns.html">
                  <div class="dva-e-button__background"></div>
                  <span class="dva-e-button__label">Mehr über mich erfahren</span>
                </a>
              </div>
            </div>

            <dvag-m-basic-overlay
              class="dvag-m-basic-overlay dvag-m-c25-vb-about-me__overlay"
              role="dialog"
              aria-modal="true"
            >
              <button type="button" class="dva-e-button dvag-m-basic-overlay__close dva-e-button--icon-only">
                <div class="dva-e-button__background"></div>
                ${renderIcon("dva-icon-close", "dva-e-button__icon")}
              </button>

              <div class="dvag-m-basic-overlay__content">
                <dvag-m-basic-slider
                  class="dvag-m-basic-slider dvag-m-c25-vb-about-me__overlay-slider"
                  active-on-mq="4-5"
                  title="Benjamin Rube - Lernen Sie mich kennen"
                >
                  <div class="dvag-m-basic-slider__slides dvag-m-c25-vb-about-me__overlay-slides">
                    ${args.images?.map(image => {
                      return html`
                        <div class="dvag-m-basic-slider__slide dvag-m-c25-vb-about-me__overlay-slide">
                          ${renderLazyImage({
                            src: image.src,
                            alt: image.alt,
                            aspectRatio: image.aspectRatio,
                          })}
                          <p class="dvag-m-basic-slider__slide-text">${image.description}</p>
                        </div>
                      `;
                    })}
                  </div>

                  <div class="dvag-m-basic-slider__controls">
                    <button
                      class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--prev"
                    >
                      <div class="dva-e-button__background"></div>
                      ${renderIcon("dva-icon-chevron-left")}
                    </button>
                    <button
                      class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--next"
                    >
                      <div class="dva-e-button__background"></div>
                      ${renderIcon("dva-icon-chevron-right")}
                    </button>
                  </div>

                  <div class="dvag-m-basic-slider__grid-container-wrapper">
                    <div class="dvag-m-basic-slider__scroll-bar">
                      <button class="dvag-m-basic-slider__scroll-indicator" tabindex="-1"></button>
                    </div>
                  </div>
                </dvag-m-basic-slider>
              </div>
            </dvag-m-basic-overlay>
          </div>
        </div>
        <div class="dva-h-skew--out"></div>
      </dvag-m-c25-vb-about-me>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const name = block.children[0].textContent || "";
  const headline = block.children[1].textContent || "";
  const text = block.children[2].textContent || "";

  const images = [3, 4, 5].map(imageRow => {
    const imageBlock = block.children[imageRow];
    const src = imageBlock.children[0].getElementsByTagName("img")[0].src || "";
    const alt = imageBlock.children[0].getElementsByTagName("img")[0].alt || "";
    const aspectRatio = imageRow === 3 ? "16:9" : "1:1";
    const description = imageBlock.children[1].textContent || "";

    return { src, description, aspectRatio, alt };
  });

  cleanUpBlock(block);
  render(
    aboutMeTemplateOverview({
      name,
      headline,
      text,
      images,
    }),
    block,
  );
}
