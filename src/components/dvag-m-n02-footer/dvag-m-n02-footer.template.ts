import { html } from "lit-html";
import { dvaLinkTemplate } from "Components/dva-e-link/dva-e-link.template";

import { renderFooterAwardsTemplate } from "./dvag-m-n02-footer__awards.template";
import { renderFooterSocialLinksTemplate } from "./dvag-m-n02-footer__social-links.template";
import { renderFooterNavigationTemplate } from "./dvag-m-n02-footer__navigation.template";

export const renderFooter = (borderTop = false) => {
  return html`
    <!-- @TODO BE - add css-class "dvag-m-n02-footer--border-top" to footer in case there is no dvag-m-recommendation-bar on top -->
    <footer class="dvag-m-n02-footer${borderTop ? " dvag-m-n02-footer--border-top" : ""}">
      <div class="dva-grid">
        <div class="dva-grid-row">
          <div class="dva-grid-col-1-12">${renderFooterNavigationTemplate()}</div>
        </div>
        <div class="dva-grid-row">
          <!-- @TODO BE - social links are only visible on non-vb-pages -->
          <div class="dva-grid-col-1-12 dva-grid-col-4-6">${renderFooterAwardsTemplate()}</div>
          <div class="dva-grid-col-1-12 dva-grid-col-4-6">${renderFooterSocialLinksTemplate()}</div>
        </div>
      </div>
      <div class="dvag-m-n02-footer__skew-area">
        <div class="dvag-h-skew--in"></div>
        <div class="dvag-m-skewed-box__content">
          <div class="dva-grid">
            <div class="dva-grid-row">
              <div class="dva-grid-col-1-12">
                <div class="dvag-m-n02-footer__legal-links">
                  ${dvaLinkTemplate({ target: "#", label: "Datenschutz", cssClasses: "dvag-m-n02-footer__legal-link" })}
                  ${dvaLinkTemplate({ target: "#", label: "Impressum", cssClasses: "dvag-m-n02-footer__legal-link" })}
                  ${dvaLinkTemplate({
                    target: "#",
                    label: "Cookies bearbeiten",
                    cssClasses: "dvag-m-n02-footer__legal-link",
                  })}
                  <!-- <dvag-e-overlay-toggle class="dvag-e-overlay-toggle dva-e-link dvag-m-n02-footer__legal-link" target="#cookie-settings-overlay" tabindex="0">Cookies bearbeiten</dvag-e-overlay-toggle> -->
                </div>
                <p class="dvag-m-n02-footer__copyright">&copy; 2023 Deutsche Vermögensberatung AG (DVAG)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
};
