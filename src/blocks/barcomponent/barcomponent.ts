import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { html, render } from "lit";

import "./barcomponent.scss";

import "Components/dva-e-lazy-image/dva-e-lazy-image";

interface Bar {
  image?: HTMLImageElement;
  header: string;
  text: string;
}

interface barComponentArgs {
  subheader: string;
  header: string;
  buttonLabel: string;
  bars: Bar[];
}

enum blockRows {
  subheader,
  header,
  buttonLabel,
  barImages,
  barHeaders,
  barTexts,
}

const renderBars = ({ header, image, text }: Bar) => {
  return html` <div class="dvag-grid-col-1-12 dvag-grid-col-3-4">
    <div class="c05-listentry">
      <div class="dvag-m-c05-list-entry">
        <div class="dvag-m-c05-list-entry__image-wrapper">
          <dva-e-lazy-image
            class="dva-e-lazy-image dva-js-lazy-image dvag-m-c05-list-entry__image dva-state-initialized dva-state-invp dva-state-loaded"
            src="${image?.src}"
            alt="${image?.alt}"
            aspect-ratio="cover"
          ></dva-e-lazy-image>
        </div>
        <div class="dvag-m-c05-list-entry__content">
          <h4 class="dvag-m-c05-list-entry__headline">${header}</h4>
          <p class="dvag-m-c05-list-entry__text">${text}</p>
        </div>
      </div>
    </div>
  </div>`;
};

const template = ({ bars, buttonLabel, header, subheader }: barComponentArgs) => {
  return html`
    <div class="dvag-m-c06-page-section dvag-m-skew-component  ">
      <div class="dva-h-skew--in"></div>

      <div class="dvag-m-skewed-box__content">
        <div class="dvag-m-section-header">
          <h3 class="dvag-m-section-header__subheadline">${subheader}</h3>
          <h2 class="dvag-m-section-header__headline">${header}</h2>
        </div>

        <div class="dvag-m-c06-page-section__content-wrapper wcm-io-parsys">
          <div class="wcm-io-parsys dvag-h-margin-bottom--none">
            <div class="dvag-m-c08-barcomponent">
              <div class="dvag-grid">
                <div class="dvag-grid-row wcm-io-parsys">${bars.map(bar => renderBars(bar))}</div>
              </div>
            </div>
          </div>

          <div class="buttons">
            <ul class="button-list bleed-m bleed-l">
              <li class="button-list-item col-s-12 col-m-4 col-l-m-4-offset col-l-4 col-l-4-offset">
                <dvag-e-c26-vb-contact-overlay-toggle
                  class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-state-active"
                  id="contact_button"
                  no-cookie-hide="no-cookie-hide"
                >
                  <div class="dva-e-button__background"></div>
                  <span class="dva-e-button__label">${buttonLabel}</span>
                </dvag-e-c26-vb-contact-overlay-toggle>
              </li>
            </ul>
          </div>
        </div>

        <div class="dvag-m-c06-page-section__button-wrapper"></div>
      </div>

      <div class="dva-h-skew--out"></div>
    </div>
  `;
};

const getChildNodeText = (element: HTMLElement | Element, index: number): string => {
  const childNode = element.children[index];
  return childNode.textContent?.trim() ?? "";
};

const getBars = (block: HTMLElement): Bar[] => {
  return [...block.children[blockRows.barImages].children].map((imageRow, index) => {
    return {
      image: imageRow.querySelector("img") || undefined,
      header: getChildNodeText(block.children[blockRows.barHeaders], index),
      text: getChildNodeText(block.children[blockRows.barTexts], index),
    };
  });
};
export default function (block: HTMLElement) {
  const args: barComponentArgs = {
    subheader: getChildNodeText(block, blockRows.subheader),
    header: getChildNodeText(block, blockRows.header),
    buttonLabel: getChildNodeText(block, blockRows.buttonLabel),
    bars: getBars(block),
  };

  cleanUpBlock(block);
  render(template(args), block);
}
