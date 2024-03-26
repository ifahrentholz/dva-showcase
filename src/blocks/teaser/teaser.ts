import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { html, nothing, render } from "lit";
import { renderIcon } from "Components/icon/dva-e-icon.template.ts";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template.ts";

import { IconName } from "../../icons.types.ts";

import "./teaser.scss";

interface BannerArgs {
  buttonLabel: string;
  color: string;
  iconName: IconName;
  image?: HTMLImageElement;
  advisorName: string;
  text: string;
  advisorTitle: string;
  options: string;
}

const renderAdvisorImage = (image?: HTMLImageElement) => {
  if (!image?.src) return nothing;
  return html` <div class="dvag-m-c19-cta-block__image-wrapper dvag-m-c19-cta-block__image-wrapper--vb-image">
    ${renderLazyImage({
      aspectRatio: "1:1",
      cssClasses: "dvag-m-c19-cta-block__vb-image",
      wrapper: "circle",
      src: image ? image.src : "",
      alt: image ? image.alt : "",
    })}
  </div>`;
};
const template = ({ buttonLabel, color, iconName, image, text, advisorName, advisorTitle, options }: BannerArgs) => {
  return html` <div
    class="c19-ctablock teaser dvag-h-typography--light
${options}
"
  >
    <div class="dvag-m-c19-cta-block" id="c19-cta-block" style="--background-color:${color}">
      <div class="">
        <div class="dvag-m-c19-cta-block__content-wrapper">
          <div class="dvag-m-c19-cta-block__inner-content-wrapper">
            ${renderAdvisorImage(image)}
            <div class="dvag-m-c19-cta-block__text-wrapper">
              <div class="dvag-m-c19-cta-block__text">
                <h2>${text}</h2>
              </div>
              <p class="dvag-m-c19-cta-block__vb-info">
                ${advisorTitle}
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
                  ${renderIcon(iconName, "dva-e-button__icon")}
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

const addPrefix = (value: string) => {
  return `dvag-h-${value}`;
};

const getBlockOptions = (block: HTMLElement) => {
  console.log([...block.classList]);
  return [...block.classList]
    .filter(classValue => !["block", "teaser"].includes(classValue))
    .map(classValue =>
      classValue.includes("margin") || classValue.includes("typography") ? addPrefix(classValue) : classValue,
    )
    .join(" ");
};

export default function (block: HTMLElement) {
  const bannerArgs: BannerArgs = {
    image: block.querySelector("img") || undefined, // find a better solution
    advisorName: block.children[1].textContent?.trim() || "",
    text: block.children[2].textContent?.trim() || "",
    buttonLabel: block.children[4].textContent?.trim() || "",
    iconName: (block.children[3].textContent?.trim() as IconName) || "dva-icon-speechbubble-24px",
    color: block.children[5].textContent?.trim() || "",
    advisorTitle: block.children[6].textContent?.trim() || "",
    options: getBlockOptions(block),
  };

  cleanUpBlock(block);
  render(template(bannerArgs), block);
}
