import "./vb-stage.scss";
import { cleanUpBlock } from "Utils/cleanUpBlock.ts";
import { html, render } from "lit";
import "Components/dva-e-lazy-video/dva-e-lazy-video.ts";
import "Components/dva-m-rating-box/dva-m-rating-box.ts";
import "Components/dvag-m-c04-vb-stage/dvag-m-c04-vb-stage.ts";
import "Components/dva-e-lazy-image/dva-e-lazy-image";
import "Components/icon/dva-e-icon.ts";

type Stars = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

interface VBStageArgs {
  picture?: HTMLPictureElement;
  videoFallback?: HTMLImageElement;
  videoName: string;
  name: string;
  description: string;
  titel: string;
  rating: Stars;
  shared: number;
  buttonLabel: string;
}

enum blockRows {
  picture,
  videoFallback,
  videoName,
  name,
  description,
  titel,
  rating,
  shared,
  buttonLabel,
}

const getPublicVideoPath = (fileName: string) => {
  return `${window.hlx.codeBasePath}/dist/video/${fileName}`;
};

const template = ({ description, picture, name, rating, titel, videoFallback, videoName }: VBStageArgs) => {
  picture?.classList.add("dvag-m-c04-vb-stage__vb-portrait");

  return html`
    <div class="c04-vbstage dvag-h-margin-bottom--none">
      <dvag-m-c04-vb-stage class="dvag-m-c04-vb-stage " id="c04-vb-stage">
        <div class="dvag-m-c04-vb-stage__background-wrapper">
          <dva-e-lazy-video
            class="dva-e-lazy-video dva-h-preload dva-h-preload__4-3--mq-1-3 dva-h-preload__21-9--mq-4-and-up dvag-m-c04-vb-stage__background-video"
          >
            <source data-src="${getPublicVideoPath(videoName)}.754.564.mp4" type="dist/video/mp4" data-dva-mq="4-5" />
            <img data-src="${videoFallback?.src}" alt="${videoFallback?.alt}" />
            <source data-src="${getPublicVideoPath(videoName)}.1200.500.mp4" type="dist/video/mp4" data-dva-mq="1-3" />
            <img data-src="${videoFallback?.src}" alt=${videoFallback?.alt} />
          </dva-e-lazy-video>

          <div class="dvag-m-c04-vb-stage__skewed-box">
            <div class="dva-h-skew--in"></div>
            <div class="dva-m-skewed-box__content"></div>
            <div class="dva-h-skew--out"></div>
          </div>
        </div>

        <div class="dvag-m-c04-vb-stage__content-wrapper">
          <div class="dvag-m-c04-vb-stage__vb-image">
            <div class="dvag-m-c04-vb-stage__vb-image-wrapper">${picture}</div>
          </div>

          <div class="dvag-m-c04-vb-stage__vb-content">
            <div class="dvag-m-c04-vb-stage__vb-inner-content">
              <div class="dvag-m-c04-vb-stage__rating-wrapper">
                <dva-m-rating-box class="dva-m-rating-box" rating="${rating}"></dva-m-rating-box>
                <p class="dvag-m-c04-vb-stage__rating-label">
                  5 von 5 Sternen<a class="dvag-m-c04-vb-stage__rating-link" href="#">15 Bewertungen</a>
                </p>
              </div>

              <p class="dvag-m-c04-vb-stage__vb-name">${name}</p>
              <p class="dvag-m-c04-vb-stage__vb-info">${description}</p>
              <p class="dvag-m-c04-vb-stage__vb-title">${titel}</p>

              <dvag-e-c26-vb-contact-overlay-toggle
                class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dvag-m-c04-vb-stage__cta dva-e-button--white"
                id="contact_c04-vb-stage"
                no-cookie-hide="no-cookie-hide"
              >
                <div class="dva-e-button__background"></div>
                <span class="dva-e-button__label"> Kontakt aufnehmen </span>

                <dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-contact-new"></dva-e-icon>
              </dvag-e-c26-vb-contact-overlay-toggle>
            </div>
          </div>
        </div>
      </dvag-m-c04-vb-stage>
    </div>
  `;
};

const getChildNodeText = (element: HTMLElement, index: number): string => {
  const childNode = element.children[index];
  return childNode.textContent?.trim() ?? "";
};

const getChildNodeInt = (element: HTMLElement, index: number): number => {
  return parseInt(getChildNodeText(element, index), 10) || 0;
};

const getChildNodeFloat = (element: HTMLElement, index: number): number => {
  return parseFloat(getChildNodeText(element, index)) || 0;
};

const getStars = (element: HTMLElement, index: number): Stars => {
  const value = getChildNodeFloat(element, index);
  const clampedValue = Math.min(Math.max(value, 0.5), 5);

  return (Math.round(clampedValue * 2) / 2) as Stars;
};

export default function (block: HTMLElement) {
  const args: VBStageArgs = {
    picture: block.children[blockRows.picture].querySelector("picture") ?? undefined,
    videoFallback: block.children[blockRows.videoFallback].querySelector("img") ?? undefined,
    videoName: getChildNodeText(block, blockRows.videoName),
    name: getChildNodeText(block, blockRows.name),
    description: getChildNodeText(block, blockRows.description),
    titel: getChildNodeText(block, blockRows.titel),
    rating: getStars(block, blockRows.rating),
    shared: getChildNodeInt(block, blockRows.shared),
    buttonLabel: getChildNodeText(block, blockRows.buttonLabel),
  };

  const image = args.picture?.querySelector("img") ?? undefined;

  image?.setAttribute("loading", "eager");
  image?.setAttribute("fetchpriority", "high");

  cleanUpBlock(block);
  render(template(args), block);
}
