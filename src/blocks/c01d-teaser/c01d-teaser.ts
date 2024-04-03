import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import "./c01d-teaser.scss";
import { getSrcset } from "Utils/getSrcset";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";

type variantName = "text-left" | "text-right";

interface TeaserTemplateArgs {
  subheadline?: string;
  headline?: string;
  text?: string;
  btnText: string;
  btnUrl?: string;
  variant?: variantName;
  imgDesktop: string;
  imgMobile: string;
  gradientColor: string;
}

const teaserTemplateOverview = (args: TeaserTemplateArgs) => {
  return html`
    <div
      class="c01d-teaser teaser dvag-h-background--gradient
dvag-h-margin-bottom--none
dvag-h-text--${args.variant === "text-left" ? "left" : "right"}
dvag-h-headline--bold"
    >
      <div class="dvag-m-c01d-teaser  " style="--gradient-color: ${args.gradientColor}">
        <div class="dvag-m-c01d-teaser__image-wrapper">
          ${renderLazyImage({
            cssClasses:
              "dvag-m-c01d-teaser__image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--mobile",
            src: args.imgMobile,
            alt: "",
            srcset: getSrcset(args.imgMobile, [480, 760, 1024, 1280, 1440, 1460]),
            sizes: "(min-width: 1460px) 1460px, 100vw",
            aspectRatio: "21:9",
          })}
          ${renderLazyImage({
            cssClasses:
              "dvag-m-c01d-teaser__image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--desktop",
            src: args.imgDesktop,
            alt: "teaser-ki-klopp-21_9.jpg",
            srcset: getSrcset(args.imgDesktop, [480, 760, 1024, 1280, 1440, 1460]),
            sizes: "(min-width: 1460px) 1460px, 100vw",
            aspectRatio: "21:9",
          })}
        </div>
        <div class="dvag-m-c01d-teaser__grid-wrapper">
          <div class="dvag-m-c01d-teaser__content-wrapper">
            <h4 class="dvag-m-c01d-teaser__subheadline">${args.subheadline}</h4>
            <div class="dvag-m-c01d-teaser__headline">${args.headline}</div>
            <div class="dvag-m-c01d-teaser__text">${unsafeHTML(args.text)}</div>
            <div class="dvag-m-c01d-teaser__button-wrapper">
              <!-- linkType: vbcontactoverlay -->
              <a class="dva-e-button dva-e-button--rebrush dva-e-button--small" href="${args.btnUrl}">
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label">${args.btnText}</span>
              </a>

              <!-- linkType: internalCrossContext -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default function renderTeaser(block: HTMLElement) {
  const variant = block.classList.contains("text-left") ? "text-left" : "text-right";
  const subheadline = block.children[0].textContent || "";
  const headline = block.children[1].textContent || "";
  const text = block.children[2].textContent || "";
  const link = block.children[3].getElementsByTagName("a")[0];
  const btnText = block.children[3].textContent || "";
  const btnUrl = link?.href || "";
  const imgDesktop = block.children[4].getElementsByTagName("img")[0].src;
  const imgMobile = block.children[5].getElementsByTagName("img")[0].src;
  const gradientColor = block.children[6].textContent || "#CCDDE4";

  cleanUpBlock(block);

  const args: TeaserTemplateArgs = {
    subheadline,
    headline,
    text,
    btnText,
    btnUrl,
    variant,
    imgDesktop,
    imgMobile,
    gradientColor,
  };

  render(teaserTemplateOverview(args), block);
}
