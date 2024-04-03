import { html } from "lit-html";
import { RatingTeaserData } from "Components/dvag-m-c01e-teaser/dvag-m-c01e-teaser";
import { HIDDEN } from "Constants/cssClasses";

export const ratingOverlayTemplate = (args: RatingTeaserData) => {
  return html`
    <div class="dvag-grid">
      <div class="dvag-grid-row">
        <div
          class="dvg-grid-col-1-12 dvag-grid-col-5-8 dvag-grid-offset-5-2 dvag-m-c01e-teaser-overlay__content-wrapper"
        >
          <div class="dvag-m-c01e-teaser-overlay__sticky-header">
            <dva-e-icon class="dva-e-icon dvag-m-basic-overlay__close" icon-id="dva-icon-close"></dva-e-icon>
          </div>
          <div class="dvag-m-c01e-teaser-overlay__scrollable-content">
            <!-- scrollable area start -->
            <div class="dvag-m-c01e-teaser-overlay__rating-wrapper">
              <dva-m-rating-box
                class="dva-m-rating-box dvag-m-c01e-teaser-overlay__main-rating"
                rating="${args.mainRating}"
              ></dva-m-rating-box>
              <p class="dvag-m-c01e-teaser-overlay__rating-label">${args.mainRating} von 5 Sternen</p>
            </div>
            <h3 class="dvag-m-c01e-teaser-overlay__headline">${args.headline}</h3>
            <p class="dvag-m-c01e-teaser-overlay__text">${args.text}</p>
            <dl class="dvag-m-c01e-teaser-overlay__ratings">
              <div class="dvag-m-c01e-teaser-overlay__rating-row">
                <dt class="dvag-m-c01e-teaser-overlay__rating-category">Beratungskompetenz</dt>
                <dd class="dvag-m-c01e-teaser-overlay__rating-value">
                  <dva-m-rating-box
                    class="dva-m-rating-box dvag-m-c01e-teaser-overlay__sub-rating"
                    rating="${args.ratings.consulting}"
                  ></dva-m-rating-box>
                </dd>
              </div>
              <div class="dvag-m-c01e-teaser-overlay__rating-row">
                <dt class="dvag-m-c01e-teaser-overlay__rating-category">Zufriedenheit im Angebot</dt>
                <dd class="dvag-m-c01e-teaser-overlay__rating-value">
                  <dva-m-rating-box
                    class="dva-m-rating-box dvag-m-c01e-teaser-overlay__sub-rating"
                    rating="${args.ratings.satisfaction}"
                  ></dva-m-rating-box>
                </dd>
              </div>
              <div class="dvag-m-c01e-teaser-overlay__rating-row">
                <dt class="dvag-m-c01e-teaser-overlay__rating-category">Servicequalität</dt>
                <dd class="dvag-m-c01e-teaser-overlay__rating-value">
                  <dva-m-rating-box
                    class="dva-m-rating-box dvag-m-c01e-teaser-overlay__sub-rating"
                    rating="${args.ratings.service}"
                  ></dva-m-rating-box>
                </dd>
              </div>
            </dl>

            <div class="dvag-m-c01e-teaser-overlay__footer">
              <div class="dvag-m-c01e-teaser-overlay__vb-wrapper">
                <a href="${args.vbHomepage}" class="dvag-m-c01e-teaser-overlay__image-wrapper">
                  <dva-e-lazy-image
                    class="dva-e-lazy-image dva-h-preload dva-h-preload__1-1"
                    src="${args.vbImg}"
                    alt="${args.vbName}}"
                    aspect-ratio="1:1"
                  ></dva-e-lazy-image>
                </a>
                <div class="dvag-m-c01e-teaser-overlay__vb-info">
                  <p class="dvag-m-c01e-teaser-overlay__vb-label">Bewertung für:</p>
                  <h4 class="dvag-m-c01e-teaser-overlay__vb-name">
                    <a
                      href="${args.vbHomepage}"
                      class="dva-m-rating-teaser__vb-hp-link dva-js-rating-teaser__vb-hp-link"
                    >
                      ${args.vbName}
                    </a>
                  </h4>
                  <p class="dvag-m-c01e-teaser-overlay__vb-label">aus ${args.vbLocation}</p>
                </div>
              </div>

              <div class="dvag-m-c01e-teaser-overlay__customer-wrapper">
                <h4 class="dvag-m-c01e-teaser-overlay__customer-label">Wurde bewertet von:</h4>
                <p class="dvag-m-c01e-teaser-overlay__customer-name">${args.customerName}</p>
                <p class="dvag-m-c01e-teaser-overlay__customer-info">
                  <span class="dvag-m-c01e-teaser-overlay__rating-date">${args.date}</span>,
                  <span class="dvag-m-c01e-teaser-overlay__customer-information">${args.customerInfo}</span>
                </p>
              </div>
            </div>

            <div class="dvag-m-c01e-teaser-overlay__navigation">
              <button
                type="button"
                aria-label="prev"
                class="dva-e-button
                      dva-e-button--secondary
                      dva-e-button--small
                      dva-e-button--rebrush
                      dvag-m-c01e-teaser-overlay__nav-btn
                      dvag-m-c01e-teaser-overlay__nav-btn--prev
                      ${args.hasPrevTeaser ? "" : HIDDEN}"
              >
                <div class="dva-e-button__background"></div>
                <dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-thin-arrow-left"></dva-e-icon>
                <span class="dva-e-button__label">Vorherige</span>
              </button>

              <button
                type="button"
                aria-label="next"
                class="dva-e-button
                      dva-e-button--secondary
                      dva-e-button--small
                      dva-e-button--rebrush
                      dvag-m-c01e-teaser-overlay__nav-btn
                      dvag-m-c01e-teaser-overlay__nav-btn--next
                      ${args.hasNextTeaser ? "" : HIDDEN}"
              >
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">Nächste</span>
                <dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-thin-arrow-right"></dva-e-icon>
              </button>
            </div>
            <!-- scrollable area end -->
          </div>
        </div>
      </div>
    </div>
  `;
};
