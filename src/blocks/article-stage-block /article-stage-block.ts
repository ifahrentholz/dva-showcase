import { html, render } from "lit";

const template = () => {
  return html` <div class="dva-m-article-stage">
    <div class="dva-m-article-stage__background">
      <div class="dva-m-skewed-box__content"></div>
      <div class="dva-h-skew--out"></div>
    </div>
    <div class="dva-grid">
      <div class="dva-grid-row">
        <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
          <div class="dva-m-article-stage__image"></div>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  const image = block.querySelector("img");
  image?.setAttribute("loading", "eager");

  block.innerHTML = "";
  block.style.removeProperty("display");
  render(template(), block);
}
