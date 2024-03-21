import { html, render } from "lit";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import "./article-stage.scss";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template.ts";
import { ifDefined } from "lit-html/directives/if-defined";
const renderArticleStageImageGrid = lazyImage => {
  return html`<div class="dva-grid">
    <div class="dva-grid-row">
      <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
        <div class="dva-m-article-stage__image">${lazyImage}</div>
      </div>
    </div>
  </div>`;
};

const renderArticleStage = (imageGridTemplate?: unknown | any) => {
  return html` <div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    ${ifDefined(imageGridTemplate)}
  </div>`;
};

export default function (block: HTMLElement) {
  const image = block.querySelector("img");

  if (image === null) {
    cleanUpBlock(block);
    render(renderArticleStage(), block);
    return;
  }

  const aspectRatio = "2:1";
  const { src, alt } = image;
  const lazyImageTemplate = renderLazyImage({ src, alt, aspectRatio });
  const imageGridTemplate = renderArticleStageImageGrid(lazyImageTemplate);

  cleanUpBlock(block);
  render(renderArticleStage(imageGridTemplate), block);
}
