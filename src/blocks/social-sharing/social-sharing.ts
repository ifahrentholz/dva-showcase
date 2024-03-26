import { html, render } from "lit";
import { ifDefined } from "lit-html/directives/if-defined.js";
import "./social-sharing.scss";
import { cleanUpBlock } from "Utils/cleanUpBlock";
import "Components/dva-m-social-sharing/dva-m-social-sharing";

interface SocialSharingTemplateArgs {
  name?: string | null;
  url?: string | null;
}

const socialTemplateOverview = (args: SocialSharingTemplateArgs[]) => {
  return html`
    <dva-m-social-sharing
      class="dva-m-social-sharing"
      data-analytics-articleshare="true"
      share-event-url="https://sma.dvag.de/count-service/v1/increase-share/wichtig-fuer-sie/vorsorge/attraktive-zusatzleistungen-vom-arbeitgeber-nutzen-bav-und-bkv"
    >
      <header class="dva-m-social-sharing__head">
        <dva-e-icon class="dva-m-social-sharing__head-icon" icon-id="dva-icon-share"></dva-e-icon>
        <h3 class="dva-m-social-sharing__headline">Artikel teilen</h3>
      </header>
      <div class="dva-m-social-sharing__icons">
        ${args.map(
          item => html`
            <a
              class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-m-social-sharing__button dva-js-social-sharing__share-link"
              href="${ifDefined(item.url)}"
              title="${ifDefined(item.name)}"
              target="_blank"
            >
              <div class="dva-e-button__background"></div>
              <dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-${item.name}"></dva-e-icon>
            </a>
          `,
        )}
      </div>
    </dva-m-social-sharing>
  `;
};
export default function (block: HTMLElement) {
  const rows = [...block.children];
  const templateArgs = rows.map(row => {
    const name = row.children[0].textContent;
    const url = row.children[1].textContent;
    return { name, url };
  });
  cleanUpBlock(block);
  render(socialTemplateOverview(templateArgs), block);
}
