import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./recommendation-bar.scss";

interface RecommendationBarTemplateArgs {
  headline?: string;
  text?: string;
  url?: string;
  rating: number;
  modalHeadline?: string;
  modalText?: string;
}

function openModal() {
  const overlay = document.getElementById("recommendationOverlay");
  if (overlay) {
    overlay.classList.add("dva-state-active");
    console.log("correct");
  }
}

const recommendationBarTemplate = (args: RecommendationBarTemplateArgs) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        html`<dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon>`,
      );
    }
    return stars;
  };
  return html`
    <div class="dvag-m-recommendation-bar">
      <div class="dvag-grid">
        <div class="dvag-grid-row">
          <div class="dvag-grid-col-1-12 dvag-grid-col-3-7 dvag-grid-col-4-8">
            <h3 class="dvag-m-recommendation-bar__headline">${args.headline}</h3>
            <p class="dvag-m-recommendation-bar__text">${args.text}</p>
          </div>
          <div class="dvag-m-recommendation-bar__cta-wrapper dvag-grid-col-1-12 dvag-grid-col-3-5 dvag-grid-col-4-4">
            <div class="dvag-m-recommendation-bar__rating-wrapper">
              <dva-m-rating-box class="dva-m-rating-box" rating="${args.rating}" edit-mode="false">
                <div class="dva-m-rating-box__ratingstar-wrapper">${generateStars(args.rating)}</div>
              </dva-m-rating-box>
              <p class="dvag-m-recommendation-bar__rating-label">${args.rating} von 5 Sternen</p>
            </div>
            <dvag-e-overlay-toggle
              class="dvag-e-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dva-e-button--white"
              target="#recommendationOverlay"
              tabindex="0"
              @click=${openModal}
            >
              <div class="dva-e-button__background"></div>
              <span class="dva-e-button__label">Jetzt weiterempfehlen</span>
            </dvag-e-overlay-toggle>
          </div>
        </div>
      </div>
      <dvag-m-basic-overlay
        class="dvag-m-basic-overlay dvag-m-recommendation-bar__overlay dva-state-animating"
        role="dialog"
        aria-modal="true"
        id="recommendationOverlay"
      >
        <div class="dvag-m-basic-overlay__content">
          <div class="dvag-m-basic-overlay__inner-content">
            <button
              type="button"
              class="dva-e-button dvag-m-basic-overlay__close dvag-m-recommendation-bar__overlay-close dva-e-button--icon-only"
            >
              <div class="dva-e-button__background"></div>
              <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="dva-icon-close"></dva-e-icon>
            </button>
            <div class="dvag-m-recommendation-bar__overlay-rating-wrapper">
              <dva-m-rating-box class="dva-m-rating-box" rating="5" edit-mode="false">
                <div class="dva-m-rating-box__ratingstar-wrapper">${generateStars(args.rating)}</div>
              </dva-m-rating-box>
              <p class="dvag-m-recommendation-bar__overlay-rating-label">${args.rating} von 5 Sternen</p>
            </div>
            <h3 class="dvag-m-recommendation-bar__overlay-headline">${args.modalHeadline}</h3>
            <p class="dvag-m-recommendation-bar__overlay-text">${args.modalText}</p>
            <div class="dvag-m-recommendation-bar__recommendation-items-wrapper">
              <a
                class="dva-e-button dva-e-button--secondary dva-e-button--rebrush dva-e-button--icon-only dvag-m-recommendation-bar__recommendation-item"
                href="mailto:%20?subject=Ein%20Tipp%20von%20mir&amp;body=Hallo%21%0A%0AOb%20Arzt%2C%20Steuerberater%20oder%20Handwerker%20%E2%80%93%20es%20ist%20nicht%20einfach%2C%20den%20richtigen%20zu%20finden.%20Ich%20kenne%20jemanden%2C%20auf%20den%20ich%20mich%20bei%20allen%20Fragen%20rund%20um%20Finanzen%2C%20Vorsorge%20und%20Absicherung%20100-prozentig%20verlassen%20kann.%0A%0ASchau%20dir%20mal%20diese%20Seite%20an%3A%20https://www.dvag.de/Benjamin.Rube%0A%0AIch%20bin%20top%20zufrieden.%20Das%20wirst%20du%20auch%20sein%21%0A%0AProbiere%20es%20mal%20aus%20%E2%80%93%20du%20kannst%20einen%20Termin%20zum%20Kennenlernen%20direkt%20auf%20der%20Seite%20vereinbaren.%0A%0AViele%20Gr%C3%BC%C3%9Fe"
                target="_blank"
              >
                <div class="dva-e-button__background"></div>
                <dva-e-icon class="dva-e-icon dva-e-button__icon" icon-id="dva-icon-mail-32px"></dva-e-icon>
              </a>
            </div>
          </div>
        </div>
      </dvag-m-basic-overlay>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const headline = block.children[0].textContent || "";
  const text = block.children[1].textContent || "";
  const url = block.children[2].textContent || "";
  const rating = block.children[3].textContent || "";
  const modalHeadline = block.children[4].textContent || "";
  const modalText = block.children[5].textContent || "";
  cleanUpBlock(block);

  render(recommendationBarTemplate({ headline, text, url, rating, modalHeadline, modalText }), block);
}
