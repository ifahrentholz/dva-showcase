import { html } from "lit-html";
import { ifDefined } from "lit-html/directives/if-defined.js";

import dvaELazyImageShadowScss from "./dva-e-lazy-image.shadow.scss?inline";
import { renderCssClasses } from "Utils/renderCssClasses";

interface TemplateParameter {
  src?: string;
  alt?: string;
  srcset?: string;
  sizes?: string;
  aspectRatio?: string;
  wrapper?: string;
  fallbackImg: string;
};

interface renderLazyImageParameter {
  src: string;
  alt?: string;
  srcset?: string;
  sizes?: string;
  aspectRatio?: string;
  wrapper?: string;
  cssClasses?: string;
};



const getObjectFitVal = (aspectRatio: string | undefined) => {
  if (aspectRatio === "cover") return "cover";
  if (aspectRatio === "contain") return "contain";
  return "fill";
};

const getObjectPositionVal = (aspectRatio: string | undefined) => {
  if (aspectRatio === "contain") return "100% 100%";
  return "50% 50%";
};

const getWrapperClass = (wrapper: string | undefined) => {
  if (wrapper === "circle") return "dva-e-lazy-image--circle";
  return "";
};

const getAspectRatioClass = (aspectRatio: string | undefined) => {
  if (aspectRatio === "21:9") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9";
  if (aspectRatio === "16:9") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9";
  if (aspectRatio === "4:3") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3";
  if (aspectRatio === "1:1") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1";
  if (aspectRatio === "2:3") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3";
  if (aspectRatio === "9:16") return "dva-e-lazy-image__mask dva-e-lazy-image__mask--9-16";
  if (aspectRatio === "cover") return "dva-e-lazy-image__no-ratio dva-e-lazy-image__cover";
  if (aspectRatio === "contain") return "dva-e-lazy-image__no-ratio dva-e-lazy-image__contain";
  if (aspectRatio === "fill") return "dva-e-lazy-image__no-ratio";
  return "dva-e-lazy-image__no-ratio";
};

export const template = (args: TemplateParameter) => {
  return html`
    <style>
      ${dvaELazyImageShadowScss}
    </style>
    <!--<div class="${getWrapperClass(args.wrapper)}">-->
    <div class="${getAspectRatioClass(args.aspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src="${args.fallbackImg}"
          srcset="${args.srcset}"
          alt="${args.alt}"
          sizes="${args.sizes}"
          data-object-fit=${getObjectFitVal(args.aspectRatio)}
          data-object-position=${getObjectPositionVal(args.aspectRatio)}
        />
      </div>
    </div>
    <!--</div>-->
  `;
};

export const renderLazyImage = (args: renderLazyImageParameter) => {
  return html`
    <dva-e-lazy-image 
      class="dva-e-lazy-image dva-js-lazy-image${renderCssClasses(args.cssClasses)}"
      src="${args.src}"
      alt=${ifDefined(args.alt)}
      srcset="${ifDefined(args.srcset)}"
      sizes="${ifDefined(args.sizes)}"
      aspect-ratio="${ifDefined(args.aspectRatio)}"
      wrapper="${ifDefined(args.wrapper)}">
    </dva-e-lazy-image>
  `;
};
