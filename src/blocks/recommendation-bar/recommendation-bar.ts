import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";

import "./recommendation-bar.scss";

interface RecommendationBarTemplateArgs {
  headline?: string;
  text?: string;
  url?: string;
  rating: number;
  modalHeadline?: string;
  modalText?: string;
  socialMediaLinks: { [key: string]: string };
}

function openModal() {
  const overlay = document.getElementById("recommendationOverlay");
  if (overlay) {
    overlay.classList.add("dva-state-active");
  }
}

function closeModal() {
  const overlay = document.getElementById("recommendationOverlay");
  if (overlay) {
    overlay.classList.remove("dva-state-active");
  }
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

  const generateSocialMediaIcons = (socialMediaLinks: { [key: string]: string }) => {
    return Object.entries(socialMediaLinks).map(([name, link]) => {
      const iconName = `dva-icon-${name}-24px`;
      return html`
        <a
          class="dva-e-button dva-e-button--secondary dva-e-button--rebrush dva-e-button--icon-only dvag-m-recommendation-bar__recommendation-item"
          href="${link}"
          target="_blank"
        >
          <div class="dva-e-button__background"></div>
          <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="${iconName}"></dva-e-icon>
        </a>
      `;
    });
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
              @click=${openModal}
            >
              <div class="dva-e-button__background"></div>
              <span class="dva-e-button__label">Jetzt weiterempfehlen</span>
            </dvag-e-overlay-toggle>
          </div>
        </div>
      </div>
      <dvag-m-basic-overlay
        class="dvag-m-basic-overlay dvag-m-recommendation-bar__overlay dva-state-animating"
        role="dialog"
        aria-modal="true"
        id="recommendationOverlay"
      >
        <div class="dvag-m-basic-overlay__content">
          <div class="dvag-m-basic-overlay__inner-content">
            <button
              type="button"
              class="dva-e-button dvag-m-basic-overlay__close dvag-m-recommendation-bar__overlay-close dva-e-button--icon-only"
              @click=${closeModal}
            >
              <div class="dva-e-button__background"></div>
              <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="dva-icon-close"></dva-e-icon>
            </button>
            <div class="dvag-m-recommendation-bar__overlay-rating-wrapper">
              <dva-m-rating-box class="dva-m-rating-box" rating="5" edit-mode="false">
                <div class="dva-m-rating-box__ratingstar-wrapper">${generateStars(args.rating)}</div>
              </dva-m-rating-box>
              <p class="dvag-m-recommendation-bar__overlay-rating-label">${args.rating} von 5 Sternen</p>
            </div>
            <h3 class="dvag-m-recommendation-bar__overlay-headline">${args.modalHeadline}</h3>
            <p class="dvag-m-recommendation-bar__overlay-text">${args.modalText}</p>
            <div class="dvag-m-recommendation-bar__recommendation-items-wrapper">
              ${generateSocialMediaIcons(args.socialMediaLinks)}
            </div>
          </div>
        </div>
      </dvag-m-basic-overlay>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const headline = block.children[0].textContent || "";
  const text = block.children[1].textContent || "";
  const url = block.children[2].textContent || "";
  const rating = block.children[3].textContent || "";
  const modalHeadline = block.children[4].textContent || "";
  const modalText = block.children[5].textContent || "";
  const socialMediaLinks: { [key: string]: string } = {};

  for (let i = 6; i < block.children.length; i++) {
    const nameElement = block.children[i].querySelector("div");
    const linkElement = block.children[i].querySelector("div + div");
    if (nameElement && linkElement) {
      const socialMediaName = nameElement.textContent?.trim().toLowerCase();
      const socialMediaLink = linkElement.textContent || "";

      if (socialMediaName && socialMediaName !== "#") {
        socialMediaLinks[socialMediaName] = socialMediaLink;
      }
    }
  }
  cleanUpBlock(block);
  render(recommendationBarTemplate({ headline, text, url, rating, modalHeadline, modalText, socialMediaLinks }), block);
}
