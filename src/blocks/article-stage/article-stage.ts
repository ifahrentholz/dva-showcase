import { html, render } from "lit";
import "./article-stage.scss";
import "../../components/dva-e-lazy-image/dva-e-lazy-image";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { addClasses } from "Utils/addClasses.ts";

const template = (picture: HTMLPictureElement | undefined) => {
  return html` <div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    <div class="dva-grid">
      <div class="dva-grid-row">
        <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
          <div class="dva-m-article-stage__image">${picture}</div>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  const picture = block.querySelector("picture") ?? undefined;
  if (picture) {
    addClasses(picture, "attachment-wide, size-wide");
  }

  cleanUpBlock(block);
  render(template(picture), block);
}
