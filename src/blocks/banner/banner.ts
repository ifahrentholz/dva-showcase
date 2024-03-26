import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { html, render } from "lit";
import { renderIcon } from "Components/icon/dva-e-icon.template.ts";

import { IconName } from "../../icons.types.ts";

interface BannerArgs {
  buttonLabel: string;
  color: string;
  iconName: IconName;
  image?: HTMLImageElement;
  advisorName: string;
  text: string;
}

const template = ({ buttonLabel, color, iconName, image, text, advisorName }: BannerArgs) => {
  return html` <div
    class="c19-ctablock teaser dvag-h-typography--light
dvag-h-primary-button--white
dvag-h-margin-top--small
dvag-h-margin-bottom--small"
  >
    <div class="dvag-m-c19-cta-block" id="c19-cta-block" style="--background-color:${color}">
      <div class="dvag-m-c19-cta-block__vb-content dva-state-hidden">
        <div class="dvag-m-c19-cta-block__content-wrapper">
          <div class="dvag-m-c19-cta-block__inner-content-wrapper">
            <div class="dvag-m-c19-cta-block__image-wrapper dvag-m-c19-cta-block__image-wrapper--vb-image">
              <!-- render image over render function -->
              <dva-e-lazy-image
                class="dva-e-lazy-image dva-js-lazy-image dvag-m-c19-cta-block__vb-image"
                src="${image.src}"
                alt="${image.alt}"
                aspect-ratio="1:1"
                wrapper="circle"
              ></dva-e-lazy-image>
            </div>
            <div class="dvag-m-c19-cta-block__image-wrapper dvag-m-c19-cta-block__image-wrapper--vb-fallback">
              <!-- render image over render function -->
              <dva-e-lazy-image
                class="dva-e-lazy-image dva-js-lazy-image"
                src="${renderIcon(iconName)}"
                alt="sprechblase.svg"
                aspect-ratio="1:1"
              >
              </dva-e-lazy-image>
            </div>
            <div class="dvag-m-c19-cta-block__text-wrapper">
              <div class="dvag-m-c19-cta-block__text">
                <h2>${text}</h2>
              </div>
              <p class="dvag-m-c19-cta-block__vb-info">
                Ihr Finanzcoach
                <span class="dvag-m-c19-cta-block__vb-name">${advisorName}</span>
              </p>
              <div class="dvag-m-c19-cta-block__button-wrapper">
                <dvag-e-c26-vb-contact-overlay-toggle
                  id="contact_c19-cta-block"
                  class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small"
                  deeplinking-target="kontakt"
                  tabindex="0"
                >
                  <div class="dva-e-button__background"></div>
                  <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="dva-icon-speechbubbles-24px"></dva-e-icon>
                  <span class="dva-e-button__label">${buttonLabel}</span>
                </dvag-e-c26-vb-contact-overlay-toggle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  const bannerArgs: BannerArgs = {
    image: block.querySelector("img") || undefined,
    advisorName: block.children[0].textContent || "",
    text: block.children[1].textContent || "",
    buttonLabel: block.children[2].textContent || "",
    iconName: (block.children[3].textContent as IconName) || "dva-icon-speechbubble-24px",
    color: block.children[4].textContent || "",
  };

  cleanUpBlock(block);
  render(template(bannerArgs), block);
}
