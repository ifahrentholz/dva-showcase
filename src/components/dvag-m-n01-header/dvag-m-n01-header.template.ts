import { renderIcon } from "Components/icon/dva-e-icon.template";
import { html } from "lit-html";

export const headerTemplate = () => {
  return html`
    <dvag-m-n01-header class="dvag-m-n01-header" vb-file-url="/async-includes/subbar.html">
      <div class="dvag-m-n01-header__logo-wrapper">
        <div class="dvag-m-n01-header__logo-mobile">
          <a href="#" title="Deutsche Vermögensberatung" aria-label="home"> ${renderIcon("dva-icon-header-logo-s")} </a>
        </div>
        <div class="dvag-m-n01-header__logo-desktop">
          <!-- @BE: iconId for allfinanz: "dva-icon-header-logo-allfinanz-xl" -->
          <a href="#" title="Deutsche Vermögensberatung" aria-label="home">
            ${renderIcon("dva-icon-header-logo-dvag-xl")}
          </a>
        </div>
        <!-- if VB-page or US-page with VBPathCookie is set, content of data-vb-file will be rendered here and will be shown on scroll -->
      </div>
      <div class="dvag-m-n01-header__menu-wrapper">
        <div class="dvag-m-n01-header__header-navigation-wrapper">
          <ul class="dvag-m-n01-header__header-navigation-list">
            <li class="dvag-m-n01-header__header-navigation-item">
              <a class="dvag-m-n01-header__header-navigation-link" href="#" title="Lorem">Lorem</a>
            </li>
            <li class="dvag-m-n01-header__header-navigation-item">
              <a class="dvag-m-n01-header__header-navigation-link" href="#" title="Ipsum">Ipsum</a>
            </li>
          </ul>
        </div>
        <!-- toggle-buttons to open overlay for vb-finder (dvag.de) or contact-overlay (VB-pages) -->
        <!-- {{> dvag-e-n06-vb-finder-overlay-toggle 
          cssClasses="dvag-m-n01-header__cta"
          iconID="dva-icon-speechbubble-24px"
          label="Jetzt beraten lassen"
        }}
        {{> dvag-e-c26-vb-contact-overlay-toggle 
          cssClasses="dvag-m-n01-header__cta"
          noCookieHide=true
          iconID="dva-icon-speechbubble-24px"
          label="Kontakt" 
        }} -->
        <a class="dvag-m-n01-header__burger-menu" href="#">
          ${renderIcon("dva-icon-burger-24px")}
          <span class="dvag-m-n01-header__burger-label">Menü</span>
        </a>
      </div>

      <!-- navigation -->
      <div class="dvag-m-n01-header__navigation-wrapper">
        <!-- {{> dvag-m-n01-navigation}} -->
      </div>
    </dvag-m-n01-header>
  `;
};
