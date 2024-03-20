import { html } from "lit-html";
import data from './dvag-m-n02-footer__data.json';
import { renderIcon } from "Components/icon/dva-e-icon.template";
import { IconName } from "../../icons.types";

export const renderFooterSocialLinksTemplate = () => {
  return html`
    <h5 class="dvag-m-n02-footer__headline">Finden Sie uns in den sozialen Netzwerken</h5>
    
    <div class="dvag-m-n02-footer__social-links">
      ${data.socialLinks.map((socialLink) => {
        return html`
        <a href="#" class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-e-button--rebrush dvag-m-n02-footer__social-link">
          <div class="dva-e-button__background"></div>
          ${renderIcon(socialLink.icon as IconName, "dva-e-button__icon")}
        </a>
        `;
      })}
    </div>
  `;
};
