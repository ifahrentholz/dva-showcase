import { html, render } from "lit";
import "./article-stage.scss";
import "../../components/dva-e-lazy-image/dva-e-lazy-image";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";

const template = (imageSrc: string, alt: string) => {
  return html`<div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    <div class="dva-grid">
      <div class="dva-grid-row">
        <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
          <div class="dva-m-article-stage__image">
            ${renderLazyImage({
              src: imageSrc,
              aspectRatio: "2:1",
              alt,
            })}
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  const image: HTMLImageElement | null = block.querySelector("picture > img");
  const src = image?.src || "";
  const alt = image?.alt || "";
  block.innerHTML = "";
  block.style.removeProperty("display");
  render(template(src, alt), block);
}
