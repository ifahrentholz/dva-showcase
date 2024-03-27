import { cleanUpBlock } from 'Utils/cleanUpBlock';
import { html, render } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import './article-overview.scss';

interface ArticleOverviewTemplateArgs {
  readingTime: string;
  headline: string;
  listItems: HTMLLIElement[];
  footNote: string;
}

const articleTemplateOverview = (args: ArticleOverviewTemplateArgs) => {
  return html` <div class="container text">
    <div class="bleed-m bleed-l">
      <div class="col-s-12 col-m-10 col-m-1-offset col-l-8 col-l-2-offset">
        <div class="article-infobox">
          <dva-m-article-overview
            class="dva-m-article-overview"
            threshold-views="63"
            threshold-shares="1"
            share-text="Artikel teilen"
            info-url="https://sma.dvag.de/count-service/v1/counter/wichtig-fuer-sie/vorsorge/attraktive-zusatzleistungen-vom-arbeitgeber-nutzen-bav-und-bkv"
          >
            <header class="dva-m-article-overview__header">
              <div
                class="dva-m-article-overview__header-item dva-js-article-overview__header-item--time dva-state-loaded"
              >
                <dva-e-icon class="dva-e-icon" icon-id="dva-icon-clock"></dva-e-icon>
                <div class="dva-m-article-overview__header-text">
                  <span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count"
                    >${args.readingTime}</span
                  >
                  <span class="dva-js-article-overview__header-item-unit">Lesedauer</span>
                </div>
              </div>
              <div
                class="dva-m-article-overview__header-item dva-js-article-overview__header-item--views dva-state-loaded"
              >
                <dva-e-icon class="dva-e-icon" icon-id="dva-icon-eye"></dva-e-icon>
                <div class="dva-m-article-overview__header-text">
                  <span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count"
                    >8.051 mal</span
                  >
                  <span class="dva-js-article-overview__header-item-unit">gelesen</span>
                </div>
              </div>
              <div
                class="dva-m-article-overview__header-item dva-js-article-overview__header-item--shares dva-state-loaded"
              >
                <dva-e-icon class="dva-e-icon" icon-id="dva-icon-share"></dva-e-icon>
                <div class="dva-m-article-overview__header-text">
                  <span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count"
                    >119 mal</span
                  >
                  <span class="dva-js-article-overview__header-item-unit">geteilt</span>
                </div>
              </div>
            </header>
            <div class="dva-m-article-overview__content">
              <h3 class="dva-m-article-overview__headline">${args.headline}</h3>
              <ul>
                ${args.listItems.map((item) => html`<li>${unsafeHTML(item.innerHTML)}</li>`)}
              </ul>
              <p><small>${unsafeHTML(args.footNote)}</small></p>
            </div>
          </dva-m-article-overview>
        </div>
      </div>
    </div>
  </div>`;
};

export default function (block: HTMLElement) {
  const readingTime = block.children[0].textContent || '1 Minute';
  const headline = block.children[1].querySelector('p')?.textContent || '';
  const listItems = [...block.children[1].querySelectorAll('li')];
  const footNote = block.children[2].innerHTML || '';

  cleanUpBlock(block);

  render(articleTemplateOverview({ readingTime, headline, listItems, footNote }), block);
}
