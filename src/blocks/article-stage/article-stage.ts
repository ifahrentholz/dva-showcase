import { html, render } from "lit";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import "./article-stage.scss";
import { renderLazyImage, RenderLazyImageParameter } from "Components/dva-e-lazy-image/dva-e-lazy-image.template.ts";

const renderArticleStageImageGrid = (args: RenderLazyImageParameter) => {
  return html`<div class="dva-grid">
    <div class="dva-grid-row">
      <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
        <div class="dva-m-article-stage__image">${renderLazyImage(args)}</div>
      </div>
    </div>
  </div>`;
};

const renderArticleStage = (args?: RenderLazyImageParameter) => {
  return html` <div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    ${args ?? renderArticleStageImageGrid(args!)}
  </div>`;
};

export default function (block: HTMLElement) {
  const image = block.querySelector("img");

  if (image === null) {
    cleanUpBlock(block);
    render(renderArticleStage(), block);
    return;
  }

  const { src, alt } = image;

  cleanUpBlock(block);
  render(renderArticleStage({ src, alt, aspectRatio: "2:1" }), block);
}
