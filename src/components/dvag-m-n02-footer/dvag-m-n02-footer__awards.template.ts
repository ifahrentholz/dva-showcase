import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";
import { html } from "lit-html";

export const renderFooterAwardsTemplate = () => {
  return html`
    <h5 class="dvag-m-n02-footer__headline">Bestnoten in Beratung, Service und Karriere</h5>
    <div class="dvag-m-n02-footer__awards">
      <a href="#">
        ${renderLazyImage({
          src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/service-rating-footer.svg",
          alt: "Service Rating Footer",
          cssClasses: "dvag-m-n02-footer__award-image",
        })}
      </a>
      <a href="#">
        ${renderLazyImage({
          src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/kundenchampions-footer.svg",
          alt: "Kundenchampions Footer",
          cssClasses: "dvag-m-n02-footer__award-image",
        })}
      </a>
    </div>
  `;
};
