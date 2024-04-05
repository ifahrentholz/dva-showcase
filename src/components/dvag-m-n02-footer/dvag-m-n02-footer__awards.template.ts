import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";
import { html } from "lit-html";

export const renderFooterAwardsTemplate = () => {
  return html`
    <h5 class="dvag-m-n02-footer__headline">Bestnoten in Beratung, Service und Karriere</h5>
    <div class="dvag-m-n02-footer__awards">
      <a href="#" aria-label="Weiter zum Service Rating">
        ${renderLazyImage({
          src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/service-rating-footer.svg",
          alt: "Service Rating",
          cssClasses: "dvag-m-n02-footer__award-image",
        })}
      </a>
      <a href="#" aria-label="Weiter zu den Kundenchampions">
        ${renderLazyImage({
          src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/kundenchampions-footer.svg",
          alt: "Kundenchampions",
          cssClasses: "dvag-m-n02-footer__award-image",
        })}
      </a>
    </div>
  `;
};
