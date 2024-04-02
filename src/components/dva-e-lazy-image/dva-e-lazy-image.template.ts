import { html, nothing } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { ANIMATE } from "Constants/cssClasses";
import { renderIcon } from "Components/icon/dva-e-icon.template";
import { renderCssClasses } from "Utils/renderCssClasses";

import { DVALazyImage } from "./dva-e-lazy-image";
import dvaELazyImageShadowScss from "./dva-e-lazy-image.shadow.scss?inline";
import { RenderLazyImageArgs } from "./dva-e-lazy-image.types";

type LazyImageTemplateParameter = {
  alt?: string;
  srcset?: string;
  sizes?: string;
  wrapper?: string;
  component: DVALazyImage;
};

const getObjectFitVal = (aspectRatio: string | null) => {
  if (aspectRatio === "cover") return "cover";
  if (aspectRatio === "contain") return "contain";
  return "fill";
};

const getObjectPositionVal = () => {
  return "50% 50%";
};

const getAspectRatioClass = (aspectRatio: string | null) => {
  if (aspectRatio === "21:9") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9";
  if (aspectRatio === "16:9") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9";
  if (aspectRatio === "4:3") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3";
  if (aspectRatio === "3:2") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--3-2";
  if (aspectRatio === "1:1") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1";
  if (aspectRatio === "2:3") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3";
  if (aspectRatio === "4:5") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--4-5";
  if (aspectRatio === "cover") return "dva-e-lazy-image__no-ratio dva-e-lazy-image__cover";
  if (aspectRatio === "contain") return "dva-e-lazy-image__no-ratio dva-e-lazy-image__contain";
  return "dva-e-lazy-image__no-ratio";
};

const shouldRenderErrorPlaceholder = (args: LazyImageTemplateParameter) => {
  return !(args.component.hasError === false || args.component.loadingPlaceholderLoaded === true);
};

const renderErrorPlaceholder = (args: LazyImageTemplateParameter, forceRender = false) => {
  if (forceRender === false && !shouldRenderErrorPlaceholder(args)) return "";

  return html`
    <div class="dva-e-lazy-image__error-placeholder-box ${args.component.hasError ? ANIMATE : ""}">
      ${renderIcon("dva-icon-image-gallery-72px", "dva-e-lazy-image__error-placeholder")}
    </div>
  `;
};

const renderPlaceholder = (args: LazyImageTemplateParameter) => {
  if (args.component.noPlaceholder === true) return nothing;
  if (args.component.loadingPlaceholder === "" || args.component.loadingPlaceholderLoadingError === true) {
    return renderErrorPlaceholder(args, true);
  }

  return html`
    <img
      draggable="false"
      class="dva-e-lazy-image__img dva-e-lazy-image__img--placeholder"
      src="${args.component.loadingPlaceholder}"
      @load=${() => {
        args.component.loadingPlaceholderLoaded = true;
        args.component.loadingPlaceholderLoadingError = false;
      }}
      @error=${() => {
        args.component.loadingPlaceholderLoaded = false;
        args.component.loadingPlaceholderLoadingError = true;
      }}
      data-object-fit=${getObjectFitVal(args.component.imgAspectRatio)}
      data-object-position=${getObjectPositionVal()}
    />
  `;
};

export const lazyImageTemplate = (args: LazyImageTemplateParameter) => {
  return html`
    <style>
      ${dvaELazyImageShadowScss}
    </style>
    <div class="${getAspectRatioClass(args.component.imgAspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        ${renderPlaceholder(args)}
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src=""
          srcset="${args.srcset}"
          alt="${args.alt}"
          sizes="${args.sizes}"
          data-object-fit=${getObjectFitVal(args.component.imgAspectRatio)}
          data-object-position=${getObjectPositionVal()}
        />
        ${renderErrorPlaceholder(args)}
      </div>
    </div>
  `;
};

export const renderLazyImage = (args: RenderLazyImageArgs) => {
  return html`
    <dva-e-lazy-image
      class="dva-e-lazy-image${renderCssClasses(args.cssClasses)}"
      src="${args.src}"
      alt=${ifDefined(args.alt)}
      srcset=${ifDefined(args.srcset)}
      sizes=${ifDefined(args.sizes)}
      loading-placeholder=${ifDefined(args.loadingPlaceholder)}
      aspect-ratio=${ifDefined(args.aspectRatio)}
      wrapper=${ifDefined(args.wrapper)}
    >
    </dva-e-lazy-image>
  `;
};

export interface RenderLazyImagePlaceholderArgs {
  cssClasses?: string;
  aspectRatio: string;
}

export const renderLazyImagePlaceholder = (args: RenderLazyImagePlaceholderArgs) => {
  return html`
    <div
      class="dva-e-lazy-image dva-e-lazy-image--placeholder${renderCssClasses(args.cssClasses)}"
      aspect-ratio="${args.aspectRatio}"
    >
      <div class="dva-e-lazy-image__placeholder-content">
        ${renderIcon("dva-icon-image-gallery-72px", "dva-e-lazy-image__placeholder-icon")}
      </div>
    </div>
  `;
};
