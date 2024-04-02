import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./recommendation-bar.scss";
import { renderIcon } from "Components/icon/dva-e-icon.template";
import "Components/dva-m-rating-box/dva-m-rating-box.ts";
import "Components/dvag-e-overlay-toggle/dvag-e-overlay-toggle.ts";
import "Components/dvag-m-basic-overlay/dvag-m-basic-overlay.ts";

import { IconName } from "../../icons.types";

interface SocialMediaLink {
  name: string;
  url: string;
}

interface RecommendationBarTemplateArgs {
  headline?: string;
  text?: string;
  rating: string;
  modalHeadline?: string;
  modalText?: string;
  socialMediaLinks: SocialMediaLink[];
}

const renderSocialMediaLinks = (socialMediaLinks: SocialMediaLink[]) => {
  return socialMediaLinks.map(socialMediaLink => {
    const iconName = `dva-icon-${socialMediaLink.name.toLowerCase()}-24px` as IconName;
    return html`
      <a
        class="dva-e-button dva-e-button--secondary dva-e-button--rebrush dva-e-button--icon-only dvag-m-recommendation-bar__recommendation-item"
        href="${socialMediaLink.url}"
        target="_blank"
      >
        <div class="dva-e-button__background"></div>
        ${renderIcon(iconName, "dva-e-button__icon")}
      </a>
    `;
  });
};

const recommendationBarTemplate = (args: RecommendationBarTemplateArgs) => {
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
              <dva-m-rating-box class="dva-m-rating-box" rating="${args.rating}"> </dva-m-rating-box>
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
            >
              <div class="dva-e-button__background"></div>
              ${renderIcon("dva-icon-close", "dva-e-button__icon")}
            </button>
            <div class="dvag-m-recommendation-bar__overlay-rating-wrapper">
              <dva-m-rating-box class="dva-m-rating-box" rating="${args.rating}"></dva-m-rating-box>
              <p class="dvag-m-recommendation-bar__overlay-rating-label">${args.rating} von 5 Sternen</p>
            </div>
            <h3 class="dvag-m-recommendation-bar__overlay-headline">${args.modalHeadline}</h3>
            <p class="dvag-m-recommendation-bar__overlay-text">${args.modalText}</p>
            <div class="dvag-m-recommendation-bar__recommendation-items-wrapper">
              ${renderSocialMediaLinks(args.socialMediaLinks)}
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
  const rating = block.children[2].textContent || "";
  const modalHeadline = block.children[3].textContent || "";
  const modalText = block.children[4].textContent || "";
  const socialMediaLinksItems = block.children[5].getElementsByTagName("li");
  const socialMediaLinks: SocialMediaLink[] = Array.from(socialMediaLinksItems).map(socialMediaLink => {
    const link = socialMediaLink.getElementsByTagName("a")[0];
    return {
      name: link.textContent || "",
      url: link.href || "",
    };
  });

  cleanUpBlock(block);

  render(recommendationBarTemplate({ headline, text, rating, modalHeadline, modalText, socialMediaLinks }), block);
}
