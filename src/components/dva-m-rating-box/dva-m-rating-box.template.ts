import { html } from "lit-html";

import { DvaRatingBox } from "./dva-m-rating-box";

type FilledOptions = "no" | "half" | "full";

const renderRatingStar = (filled: FilledOptions, starIdx: number, ratingBox: DvaRatingBox) => {
  return html`
    <dva-e-icon
      class="dva-e-rating-star${filled !== "no" ? ` dva-e-rating-star--${filled}` : ""}"
      icon-id="dva-icon-star"
      ?half-filled=${filled === "half"}
      @click=${() => {
        if (ratingBox.editMode) ratingBox.rating = starIdx + 1;
      }}
    ></dva-e-icon>
  `;
};

type RatingBoxTemplateArgs = {
  curRating: number;
  ratingBox: DvaRatingBox;
};

/**
 * True, if given star should be shown as Full Star
 * @param {number} rating - current rating
 * @param {number} index - index of given star
 * @returns {boolean}
 */
const isFullStar = (rating: number, index: number): boolean => {
  return index + 0.5 < rating;
};

/**
 * True, if given star should be shown as Half Star
 * @param {number} rating - current rating
 * @param {number} index - index of given star
 * @returns {boolean}
 */
const isHalfStar = (rating: number, index: number): boolean => {
  return index + 1 > rating && index + 0.1 <= rating;
};

const getStarOptions = (args: RatingBoxTemplateArgs): Array<FilledOptions> => {
  return new Array(5).fill(true).map((_value, idx) => {
    if (isFullStar(args.curRating, idx)) return "full";
    if (isHalfStar(args.curRating, idx)) return "half";
    return "no";
  });
};

export const ratingBoxTemplate = (args: RatingBoxTemplateArgs) => {
  return html`
    <div class="dva-m-rating-box__ratingstar-wrapper">
      ${getStarOptions(args).map((filled: FilledOptions, starIdx: number) =>
        renderRatingStar(filled, starIdx, args.ratingBox),
      )}
    </div>
    <span class="dvag-e-form-field__error">
      <dva-e-icon class="dvag-e-form-field__error-icon" icon-id="dva-icon-error-16px"></dva-e-icon> Bitte bewerten Sie.
    </span>
  `;
};
