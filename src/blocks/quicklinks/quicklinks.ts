import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "./quicklinks.scss";

interface QuicklinkTemplateArgs {
  url?: string | null;
  name?: string | null;
  src?: string | undefined;
}

const quicklinkTemplateOverview = (args: QuicklinkTemplateArgs[]) => {
  return html`
    <div class="dvag-m-c24-quicklinks dvag-m-skew-component" id="quicklinks">
      <div class="dva-h-skew--in"></div>
      <div class="dvag-m-skewed-box__content">
        <div class="dvag-m-section-header"></div>
        <div class="dvag-m-c24-quicklinks__content-wrapper wcm-io-parsys">
          ${args.map(
            item => html`
              <dvag-m-c24-quicklink-item
                class="dvag-m-c24-quicklink-item dvag-m-c24-quicklink-item--overlay-opener dva-state-active"
                no-cookie-hide="no-cookie-hide"
              >
                <a class="dvag-m-c24-quicklink-item__link" target="_self" href="${item.url}">
                  <dva-e-lazy-image
                    class="dva-e-lazy-image dva-js-lazy-image dvag-m-c24-quicklink-item__icon dva-state-initialized dva-state-invp dva-state-loaded"
                    src="${item.src}"
                    alt="Icon"
                    aspect-ratio="1:1"
                  ></dva-e-lazy-image>
                  <p class="dvag-m-c24-quicklink-item__label">${item.name}</p>
                </a>
              </dvag-m-c24-quicklink-item>
            `,
          )}
        </div>
      </div>
      <div class="dva-h-skew--out"></div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const rows = [...block.children];
  const templateArgs = rows.map(row => {
    const icon: HTMLImageElement | null = row.children[0].querySelector("picture > img");
    const src = icon?.src;
    const name = row.children[1].textContent;
    const url = row.children[2].textContent;
    return { name, url, src };
  });

  cleanUpBlock(block);
  render(quicklinkTemplateOverview(templateArgs), block);
}
