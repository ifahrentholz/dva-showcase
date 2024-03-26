import { renderIcon } from "Components/icon/dva-e-icon.template";
import { html } from "lit-html";
import { dvaLinkTemplate } from "Components/dva-e-link/dva-e-link.template";

import data from "./dvag-m-n02-footer__data.json";

export const renderFooterNavigationTemplate = () => {
  return html` <dvag-m-c11-accordion class="dvag-m-c11-accordion dvag-m-n02-footer__navigation" active-on-mq="1-3">
    ${data.navigationSections.map(section => {
      return html` <div class="dvag-m-c11-accordion__block">
        <button class="dvag-m-c11-accordion__toggle" tabindex="-1">
          ${renderIcon("dva-icon-chevron-down-16px", "dvag-m-c11-accordion__toggle-icon")}
          <span class="dvag-m-c11-accordion__toggle-label"> ${section.headline.label} </span>
        </button>
        <div class="dvag-m-c11-accordion__content">
          <div class="dvag-m-c11-accordion__content-wrapper">
            <ul class="dvag-m-n02-footer__list">
              ${section.items.map(item => {
                return html` <li class="dvag-m-n02-footer__list-item">
                  ${dvaLinkTemplate({ target: item.link, label: item.label })}
                </li>`;
              })}
            </ul>
          </div>
        </div>
      </div>`;
    })}
  </dvag-m-c11-accordion>`;
};
