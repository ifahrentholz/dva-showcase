import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { html, render } from 'lit';
import './quicklinks.scss';
import { renderLazyImage } from 'Components/dva-e-lazy-image/dva-e-lazy-image.template';

interface QuicklinkTemplateArgs {
  url?: string;
  name?: string;
  src?: string;
}

const quicklinkTemplateOverview = (args: QuicklinkTemplateArgs[]) => {
  return html`
    <div class="dvag-m-c24-quicklinks dvag-m-skew-component" id="quicklinks">
      <div class="dva-h-skew--in"></div>
      <div class="dvag-m-skewed-box__content">
        <div class="dvag-m-section-header"></div>
        <div class="dvag-m-c24-quicklinks__content-wrapper wcm-io-parsys">
          ${args.map(
            (item) => html`
              <dvag-m-c24-quicklink-item
                class="dvag-m-c24-quicklink-item dvag-m-c24-quicklink-item--overlay-opener dva-state-active"
                no-cookie-hide="no-cookie-hide"
              >
                <a class="dvag-m-c24-quicklink-item__link" target="_self" href="${item.url}">
                  ${renderLazyImage({
                    src: item.src || '',
                    alt: 'Icon',
                    aspectRatio: '1:1',
                    cssClasses: 'dvag-m-c24-quicklink-item__icon',
                  })}
                  <p class="dvag-m-c24-quicklink-item__label">${item.name}</p>
                </a>
              </dvag-m-c24-quicklink-item>
            `
          )}
        </div>
      </div>
      <div class="dva-h-skew--out"></div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const rows = [...block.children];
  const templateArgs = rows.map((row) => {
    const image = row.children[0].querySelector<HTMLImageElement>('picture > img');
    const src = image?.src || '';
    const name = row.children[1].textContent || '';
    const url = row.children[2].textContent || '';
    return { name, url, src };
  });

  cleanUpBlock(block);
  render(quicklinkTemplateOverview(templateArgs), block);
}
