import { truncateText } from "Utils/truncateText";
import { html, render } from "lit";
import { v4 as uuidv4 } from "uuid";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import fetchService from "Services/fetch.service";
import "./rating-teaser-slider.scss";
import "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
import "Components/dva-m-rating-box/dva-m-rating-box";
import "Components/dvag-m-c07-rating-teaser-slider/dvag-m-c07-rating-teaser-slider";
import "Components/dvag-m-basic-slider/dvag-m-basic-slider";
import "Components/dvag-m-c01e-teaser-overlay/dvag-m-c01e-teaser-overlay";
import { DebuggerService } from "@kluntje/services";
import { cleanUpBlock } from "Utils/cleanUpBlock";

interface RatingTeaserSliderTemplateArgs {
  sliderId: string;
  subheadline: string;
  headline: string;
  text: string;
  slides: RatingTeaserSlideTemplateArgs[];
  ctaLabel: string;
  ctaUrl: string;
}

interface RatingTeaserSlideTemplateArgs {
  sliderId: string;
  slideIndex: number;
  slidesLength: number;
  consultingRating: string;
  satisfactionRating: string;
  serviceRating: string;
  rating: string;
  vbName: string;
  vbImageUrl: string;
  vbHomepageUrl: string;
  vbLocation: string;
  headline: string;
  text: string;
  reviewFrom: string;
  reviewerCustomerSince: string;
  ratingDate: string;
}

const ratingTeaserSlideTemplate = (args: RatingTeaserSlideTemplateArgs) => {
  return html`
    <div
      id="c07-ratingteaserslider-${args.sliderId}-slide-${args.slideIndex + 1}"
      class="dvag-m-basic-slider__slide"
      aria-roledescription="slide"
      aria-label=${`Slide ${args.slideIndex + 1} of ${args.slidesLength}`}
    >
      <dvag-m-c01e-teaser
        class="dvag-m-c01e-teaser"
        teaser-index="${args.slideIndex}"
        consulting-rating="${args.consultingRating}"
        satisfaction-rating="${args.satisfactionRating}"
        service-rating="${args.serviceRating}"
        vb-name="${args.vbName}"
        vb-image-url="${args.vbImageUrl}"
        vb-homepage-url="${args.vbHomepageUrl}"
        vb-location="${args.vbLocation}"
      >
        <div class="dvag-m-c01e-teaser__content">
          <div class="dvag-m-c01e-teaser__rating-wrapper">
            <dva-m-rating-box
              class="dva-m-rating-box dvag-m-c01e-teaser__main-rating"
              rating="${args.rating}"
            ></dva-m-rating-box>
            <p class="dvag-m-c01e-teaser__rating-label">${args.rating} von 5 Sternen</p>
          </div>

          <h3 class="dvag-m-c01e-teaser__headline">${args.headline}</h3>
          <p class="dvag-m-c01e-teaser__text">${truncateText(args.text, 157)}</p>
          <p class="dvag-m-c01e-teaser__full-text">${args.text}</p>

          <a href="#" class="dva-e-link dvag-m-c01e-teaser__cta">
            <span class="dva-e-link__label">Mehr erfahren</span>
            <dva-e-icon class="dva-e-icon" icon-id="dva-icon-arrow-right-48px"></dva-e-icon>
          </a>
        </div>
        <div class="dvag-m-c01e-teaser__footer">
          <h4 class="dvag-m-c01e-teaser__customer-label">Bewertet von:</h4>
          <p class="dvag-m-c01e-teaser__customer-name">${args.reviewFrom}</p>
          <p class="dvag-m-c01e-teaser__customer-info">
            <span class="dvag-m-c01e-teaser__rating-date" date="${args.ratingDate}">${args.ratingDate}</span>,
            <span class="dvag-m-c01e-teaser__customer-information">Kunde seit ${args.reviewerCustomerSince}</span>
          </p>
        </div>
      </dvag-m-c01e-teaser>
    </div>
  `;
};

const ratingTeaserSliderTemplate = (args: RatingTeaserSliderTemplateArgs) => {
  return html`
    <div
      class="c07-ratingteaserslider carousel dvag-h-margin-bottom--none
dvag-h-margin-top--none
dvag-h-background--grey
dvag-h-skew--top"
    >
      <dvag-m-c07-rating-teaser-slider
        class="dvag-m-c07-rating-teaser-slider dvag-m-skew-component cmp-carousel  "
        id="c07-ratingteaserslider-${args.sliderId}"
        role="group"
        data-cmp-is="carousel"
      >
        <div class="dva-h-skew--in"></div>

        <div class="dvag-m-skewed-box__content">
          <div class="dvag-m-c07-rating-teaser-slider__grid-wrapper">
            <div class="dvag-m-section-header">
              <h3 class="dvag-m-section-header__subheadline">${args.subheadline}</h3>
              <h2 class="dvag-m-section-header__headline">${args.headline}</h2>
              <div class="dvag-m-section-header__text dvag-e-richtext">${unsafeHTML(args.text)}</div>
            </div>
          </div>

          <dvag-m-basic-slider
            class="dvag-m-basic-slider dvag-m-teaser-slider cmp-carousel"
            title="Das sagen meine Kunden"
            id="c07-ratingteaserslider-${args.sliderId}-slider"
            role="group"
            aria-live="polite"
            aria-roledescription="carousel"
            data-cmp-is="carousel"
          >
            <div class="dvag-m-basic-slider__slides">${args.slides.map(slide => ratingTeaserSlideTemplate(slide))}</div>

            <div class="dvag-m-basic-slider__controls">
              <button
                class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--prev"
              >
                <div class="dva-e-button__background"></div>
                <dva-e-icon class="dva-e-icon" icon-id="dva-icon-chevron-left"></dva-e-icon>
              </button>
              <button
                class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--next dva-state-visible"
              >
                <div class="dva-e-button__background"></div>
                <dva-e-icon class="dva-e-icon" icon-id="dva-icon-chevron-right"></dva-e-icon>
              </button>
            </div>

            <div class="dvag-m-basic-slider__grid-container-wrapper">
              <div class="dvag-m-basic-slider__scroll-bar">
                <button
                  class="dvag-m-basic-slider__scroll-indicator"
                  tabindex="-1"
                  style="width: 19.9077%; transform: translateX(0%);"
                ></button>
              </div>
            </div>
          </dvag-m-basic-slider>

          <dvag-m-c01e-teaser-overlay class="dvag-m-c01e-teaser-overlay"></dvag-m-c01e-teaser-overlay>

          <div class="dvag-m-c07-rating-teaser-slider__grid-wrapper">
            <div class="dvag-m-c07-rating-teaser-slider__button-wrapper">
              <!-- linkType: internalCrossContext -->
              <a class="dva-e-button dva-e-button--rebrush " href="${args.ctaUrl}">
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">${args.ctaLabel}</span>
              </a>
              <!-- linkType: internal -->
            </div>
          </div>
        </div>

        <div class="dva-h-skew--out"></div>
      </dvag-m-c07-rating-teaser-slider>
    </div>
  `;
};

export interface SlidesJsonResponse {
  total: number;
  offset: number;
  limit: number;
  data: SlidesJsonResponseItem[];
  ":type": string;
}

export interface SlidesJsonResponseItem {
  consultingRating: string;
  satisfactionRating: string;
  serviceRating: string;
  rating: string;
  vbName: string;
  vbImageUrl: string;
  vbHomepageUrl: string;
  vbLocation: string;
  headline: string;
  text: string;
  reviewFrom: string;
  reviewerCustomerSince: string;
  ratingDate: string;
}

const getSlidesTemplateArgs = (slides: SlidesJsonResponse, sliderId: string): RatingTeaserSlideTemplateArgs[] => {
  return slides.data.map((slide, index) => ({
    sliderId,
    slideIndex: index,
    slidesLength: slides.data.length,
    consultingRating: slide.consultingRating,
    satisfactionRating: slide.satisfactionRating,
    serviceRating: slide.serviceRating,
    rating: slide.rating,
    vbName: slide.vbName,
    vbImageUrl: slide.vbImageUrl,
    vbHomepageUrl: slide.vbHomepageUrl,
    vbLocation: slide.vbLocation,
    headline: slide.headline,
    text: slide.text,
    reviewFrom: slide.reviewFrom,
    reviewerCustomerSince: slide.reviewerCustomerSince,
    ratingDate: slide.ratingDate,
  }));
};

export default async function (block: HTMLElement) {
  try {
    const sliderId = uuidv4();
    const subheadline = block.children[0].textContent || "";
    const headline = block.children[1].textContent || "";
    const text = block.children[2].innerHTML || "";
    const slidesEndpoint = block.children[3].textContent || "";
    const slides = await fetchService.fetchJson<SlidesJsonResponse>(slidesEndpoint.trim());
    const cta = block.children[4].getElementsByTagName("a")[0];
    const ctaLabel = cta.textContent || "";
    const ctaUrl = cta.getAttribute("href") || "";

    cleanUpBlock(block);

    render(
      ratingTeaserSliderTemplate({
        sliderId,
        subheadline,
        headline,
        text,
        slides: getSlidesTemplateArgs(slides, sliderId),
        ctaLabel,
        ctaUrl,
      }),
      block,
    );
  } catch (error) {
    DebuggerService.error("rating-teaser-slider", error);
  }
}
