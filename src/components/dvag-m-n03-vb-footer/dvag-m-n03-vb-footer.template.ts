import { html } from "lit-html";
import { dvaButtonTemplate } from "Components/dva-e-button/dva-e-button.template";
import { renderLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image.template";

import { VbContactWithMapArgs } from "../../blocks/vb-contact-with-map/vb-contact-with-map";

export const renderVBFooter = ({
  headline,
  direction,
  address,
  phone,
  mobile,
  email,
  imageSrc,
}: VbContactWithMapArgs) => {
  return html`
    <div class="dvag-m-n03-vb-footer">
      <!-- VB Contact Section -->
      <div class="dvag-m-n03-vb-footer__contact-section">
        <div class="dvag-m-n03-vb-footer__vb-infos">
          <h4 class="dvag-m-n03-vb-footer__topline">Meine Kontaktdaten</h4>
          <h3 class="dvag-m-n03-vb-footer__headline">${headline}</h3>
          <p class="dvag-m-n03-vb-footer__direction">${direction}</p>

          <address class="dvag-m-n03-vb-footer__address">
            ${address.map(line => {
              return html` <span>${line}<span> </span></span> `;
            })}
          </address>

          <!-- contact-options for MQ1-3 -->
          <div class="dvag-m-n03-vb-footer__contact-ctas">
            ${dvaButtonTemplate({
              target: "#",
              label: "Telefon",
              iconID: "dva-icon-phone-24px",
              cssClasses:
                "dva-e-button--rebrush dva-e-button--secondary dva-e-button--small dvag-m-n03-vb-footer__contact-cta",
            })}
            ${dvaButtonTemplate({
              target: "#",
              label: "Mobil",
              iconID: "dva-icon-mobile-phone-24px",
              cssClasses:
                "dva-e-button--rebrush dva-e-button--secondary dva-e-button--small dvag-m-n03-vb-footer__contact-cta",
            })}
            ${dvaButtonTemplate({
              target: "mailto:abc@dvag.de",
              label: "E-Mail schreiben",
              iconID: "dva-icon-mail-24px",
              cssClasses:
                "dva-e-button--rebrush dva-e-button--secondary dva-e-button--small dvag-m-n03-vb-footer__contact-cta",
            })}
          </div>

          <!-- contact-options for MQ4-5 -->
          <dl class="dvag-m-n03-vb-footer__contact-links">
            <div class="dvag-m-n03-vb-footer__contact-row">
              <dt class="dvag-m-n03-vb-footer__contact-type">Telefon</dt>
              <dd class="dvag-m-n03-vb-footer__contact-value">
                <a href="tel:${phone}" class="dvag-m-n03-vb-footer__contact-link">${phone}</a>
              </dd>
            </div>
            <div class="dvag-m-n03-vb-footer__contact-row">
              <dt class="dvag-m-n03-vb-footer__contact-type">Mobil</dt>
              <dd class="dvag-m-n03-vb-footer__contact-value">
                <a href="tel:${mobile}" class="dvag-m-n03-vb-footer__contact-link">${mobile}</a>
              </dd>
            </div>
            <div class="dvag-m-n03-vb-footer__contact-row">
              <dt class="dvag-m-n03-vb-footer__contact-type">E-Mail</dt>
              <dd class="dvag-m-n03-vb-footer__contact-value">
                <a href="mailto:${email}" class="dvag-m-n03-vb-footer__contact-link">${email}</a>
              </dd>
            </div>
          </dl>

          <dvag-e-c26-vb-contact-overlay-toggle
            class="dva-e-button dva-e-button--rebrush dva-e-button--small dvag-e-c26-vb-contact-overlay-toggle dvag-m-n03-vb-footer__overlay-cta"
            deeplinking-target="termin"
          >
            <div class="dva-e-button__background"></div>
            <span class="dva-e-button__label">Termin vereinbaren</span>
          </dvag-e-c26-vb-contact-overlay-toggle>
        </div>
        <div class="dvag-m-n03-vb-footer__google-maps">
          ${renderLazyImage({
            src: imageSrc,
            alt: "Google Maps Screenshot",
            aspectRatio: "cover",
          })}
        </div>
      </div>
    </div>
  `;
};
