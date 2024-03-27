import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./recommendation-bar.scss";

interface RecommendationBarTemplateArgs {
  headline?: string;
  text?: string;
  url?: string;
  rating: number;
}

const recommendationBarTemplate = (args: RecommendationBarTemplateArgs) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        html`<dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon>`,
      );
    }
    return stars;
  };
  return html`
    <div class="dvag-m-recommendation-bar">
      <div class="dvag-grid">
        <div class="dvag-grid-row">
          <div class="dvag-grid-col-1-12 dvag-grid-col-3-7 dvag-grid-col-4-8">
            <h3 class="dvag-m-recommendation-bar__headline">${args.headline}</h3>
            <p class="dvag-m-recommendation-bar__text">${args.text}</p>
          </div>
          <div class="dvag-m-recommendation-bar__cta-wrapper dvag-grid-col-1-12 dvag-grid-col-3-5 dvag-grid-col-4-4">
            <div class="dvag-m-recommendation-bar__rating-wrapper">
              <dva-m-rating-box class="dva-m-rating-box" rating="${args.rating}" edit-mode="false">
                <div class="dva-m-rating-box__ratingstar-wrapper">${generateStars(args.rating)}</div>
              </dva-m-rating-box>
              <p class="dvag-m-recommendation-bar__rating-label">${args.rating} von 5 Sternen</p>
            </div>
            <dvag-e-overlay-toggle
              class="dvag-e-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-e-button--white"
              target="#recommendationOverlay"
              tabindex="0"
            >
              <div class="dva-e-button__background"></div>
              <span class="dva-e-button__label">Jetzt weiterempfehlen</span>
            </dvag-e-overlay-toggle>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const headline = block.children[0].textContent || "";
  const text = block.children[1].textContent || "";
  const url = block.children[2].textContent || "";
  const rating = block.children[3].textContent || "";
  cleanUpBlock(block);

  render(recommendationBarTemplate({ headline, text, url, rating }), block);
}
