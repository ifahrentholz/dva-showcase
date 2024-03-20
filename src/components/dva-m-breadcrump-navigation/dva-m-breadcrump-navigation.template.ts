import { renderIcon } from "Components/icon/dva-e-icon.template";
import { getMetadata } from "Utils/getMetadata";
import { nothing } from "lit";
import { html } from "lit-html";

export const renderBreadcrumpNavigationTemplate = () => {
  if(getMetadata("breadcrumb") !== "true") return nothing;
  return html` 
  <div class="dva-grid">
    <div class="dva-grid-row">
      <div class="dva-grid-col-1-12">
        <nav class="dva-m-breadcrump-navigation">
          <ul class="dva-m-breadcrump-navigation__list">
            <li class="dva-m-breadcrump-navigation__item">
              <a href="#" class="dva-m-breadcrump-navigation__link">
                <span class="dva-m-breadcrump-navigation__label">Startseite</span>
              </a>
              ${renderIcon("dva-icon-chevron-right")}
            </li>
            <li class="dva-m-breadcrump-navigation__item">
              <a href="#" class="dva-m-breadcrump-navigation__link">
                <span class="dva-m-breadcrump-navigation__label">Allfinanzberatung</span>
              </a>
              ${renderIcon("dva-icon-chevron-right")}
            </li>
            <li class="dva-m-breadcrump-navigation__item">
              <a href="#" class="dva-m-breadcrump-navigation__link">
                <span class="dva-m-breadcrump-navigation__label">Firmenkunden</span>
              </a>
              ${renderIcon("dva-icon-chevron-right")}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  `;
};