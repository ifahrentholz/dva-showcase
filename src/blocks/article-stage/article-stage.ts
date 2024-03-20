import { html, render } from "lit";
import { createOptimizedPicture } from "Utils/createOptimizedPicture.ts";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import "article-stage.scss";

const pictureTemplate = (picture: HTMLPictureElement) => {
  return html`<div class="dva-grid">
    <div class="dva-grid-row">
      <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
        <div class="dva-m-article-stage__image">${picture}</div>
      </div>
    </div>
  </div>`;
};

const template = (picture?: HTMLPictureElement) => {
  return html` <div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    ${picture ?? pictureTemplate(picture!)}
  </div>`;
};

export default function (block: HTMLElement) {
  console.log("  this is a test");
  let picture: HTMLPictureElement | undefined;
  const image = block.querySelector("img");

  if (image) {
    image.setAttribute("loading", "eager");
    const { src, alt } = image;
    picture = createOptimizedPicture({ src, alt, width: 880, height: 367 });
  }

  cleanUpBlock(block);
  render(template(picture), block);
}
