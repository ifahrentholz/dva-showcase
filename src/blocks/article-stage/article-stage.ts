import { html, render } from "lit";
import "~/Components/dva-e-lazy-image/dva-e-lazy-image";

const template = () => {
  return html`<div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    <div class="dva-grid">
      <div class="dva-grid-row">
        <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
          <div class="dva-m-article-stage__image">
            <dva-e-lazy-image
              class="dva-e-lazy-image dva-js-lazy-image"
              src="https://placehold.co/880x367"
              loading-placeholder="https://placehold.co/880x367"
              aspect-ratio="2:1"
            ></dva-e-lazy-image>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  block.innerHTML = "";
  block.style.removeProperty("display");
  render(template(), block);
}
