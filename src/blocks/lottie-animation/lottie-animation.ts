import { renderIcon } from "Components/icon/dva-e-icon.template";
import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "Components/dvag-m-lottie-slider/dvag-m-lottie-slider";

type modifier = "background--grey" | "skew--top" | "skew--bottom" | "margin-bottom--none";

interface Slide {
  subheadline: string;
  headline: string;
  text: string;
}

interface LottieAnimationTemplateArgs {
  cssClasses: modifier[];
  headerSubheadline: string;
  headerHeadline: string;
  animationPath: string;
  slides: Slide[];
  ctaUrl?: string;
  ctaLabel?: string;
}

const renderModifiers = (cssClasses: modifier[]) => {
  return cssClasses.map(cssClass => `dvag-h-${cssClass}`).join(" ");
};

const lottieAnimationTemplate = (args: LottieAnimationTemplateArgs) => {
  return html` <div class="c33-animation ${renderModifiers(args.cssClasses)}">
    <div id="lottie-animation">
      <div class="dvag-m-c33-lottie-animation dvag-m-skew-component">
        <div class="dva-h-skew--in"></div>
        <div class="dvag-m-skewed-box__content">
          <div class="dvag-m-c33-lottie-animation__grid-wrapper">
            <div class="dvag-m-section-header">
              <h3 class="dvag-m-section-header__subheadline">${args.headerSubheadline}</h3>
              <h2 class="dvag-m-section-header__headline">${args.headerHeadline}</h2>
            </div>
          </div>
          <dvag-m-lottie-slider
            class="dvag-m-lottie-slider"
            title="${args.headerHeadline}"
            autoplay="true"
            animation-path="/dist/lottie/${args.animationPath.trim()}"
            segment-length="120"
          >
            <div class="dvag-m-lottie-slider__grid-wrapper">
              <div class="dvag-m-lottie-slider__animation-box">
                <!-- lottie animation is rendered dynamically here -->
              </div>
            </div>
            <dvag-e-progress-bar class="dvag-e-progress-bar" start-value="0">
              <div class="dvag-e-progress-bar__progress-indicator"></div>
            </dvag-e-progress-bar>
            <div class="dvag-m-basic-slider dvag-m-teaser-slider">
              <div class="dvag-m-basic-slider__slides">
                ${args.slides.map(slide => {
                  return html`
                    <div class="dvag-m-basic-slider__slide">
                      <div class="dvag-m-lottie-slider-slide">
                        <h4 class="dvag-m-lottie-slider-slide__subheadline">${slide.subheadline}</h4>
                        <h3 class="dvag-m-lottie-slider-slide__headline">${slide.headline}</h3>
                        <div class="dvag-m-lottie-slider-slide__text dvag-e-richtext">${slide.text}</div>
                      </div>
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
            </div>
          </dvag-m-lottie-slider>
          <!-- cta is optional -->
          <div class="dvag-m-c33-lottie-animation__grid-wrapper">
            <div class="dvag-m-c33-lottie-animation__cta-wrapper">
              <a class="dva-e-button dva-e-button--rebrush" href="${args.ctaUrl}">
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">${args.ctaLabel}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="dva-h-skew--out"></div>
      </div>
    </div>
  </div>`;
};

const getBlockModifiers = (block: HTMLElement) => {
  return [...block.classList] as modifier[];
};

export default function (block: HTMLElement) {
  const cssClasses = getBlockModifiers(block);
  const headerSubheadline = block.children[0].textContent || "";
  const headerHeadline = block.children[1].textContent || "";
  const animationPath = block.children[2].textContent || "";
  const slides = [...block.children].slice(4).map(slide => {
    return {
      subheadline: slide.querySelector("h4")?.textContent || "",
      headline: slide.querySelector("h3")?.textContent || "",
      text: slide.querySelector("p")?.textContent || "",
    };
  });
  const cta = block.children[4].querySelector("a");
  console.log(cta);
  const ctaUrl = cta?.getAttribute("href") || "";
  const ctaLabel = cta?.textContent || "";

  cleanUpBlock(block);

  render(
    lottieAnimationTemplate({ cssClasses, headerSubheadline, headerHeadline, animationPath, slides, ctaUrl, ctaLabel }),
    block,
  );
}
