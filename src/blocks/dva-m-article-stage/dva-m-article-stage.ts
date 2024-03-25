import { html, nothing, render } from "lit";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import "./dva-m-article-stage.scss";
import { createOptimizedPicture } from "Utils/createOptimizedPicture.ts";
import { addClass } from "@kluntje/js-utils/lib/dom-helpers";

const renderPicture = (picture?: HTMLPictureElement) => {
  if (!picture) return nothing;

  return html` <div class="dva-grid">
    <div class="dva-grid-row">
      <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
        <div class="dva-m-article-stage__image">${picture} test</div>
      </div>
    </div>
  </div>`;
};

const renderBackground = () => {
  return html`
    <p>test</p>
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
  `;
};

const template = (picture?: HTMLPictureElement) => {
  return html` ${renderBackground()} teste ${renderPicture(picture)} `;
};
export default function (block: HTMLElement) {
  console.log("test");
  const image = block.querySelector("img");
  if (image === null) {
    cleanUpBlock(block);
    render(template(), block);
    return;
  }

  const { src, alt } = image;
  const breakpoints = [
    { media: "(max-width: 320px)", width: 320 },
    { media: "(max-width: 750px)", width: 750 },
    { media: "(min-width: 1024px)", width: 880 },
  ];
  const picture = createOptimizedPicture({
    src,
    alt,
    width: 880,
    height: 367,
    breakpoints,
  });

  addClass(picture!, "attachment-wide size-wide");

  cleanUpBlock(block);
  render(template(picture), block);
}
