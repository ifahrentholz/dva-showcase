import { html, render } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import "Components/dvag-m-c11-accordion/dvag-m-c11-accordion";
import "./accordion.scss";
import { cleanUpBlock } from "Utils/cleanUpBlock";

interface AccordionItem {
  toggleLabel: string;
  content: string;
}

interface AccordionTemplateArgs {
  subheadline: string;
  headline: string;
  items: AccordionItem[];
}

const accordionTemplate = (args: AccordionTemplateArgs) => {
  return html`
    <div
      class="wcm-io-parsys dvag-h-margin-bottom--none
dvag-h-margin-top--none"
    >
      <div class="dvag-m-c06-page-section dvag-m-skew-component  " id="FAQ">
        <div class="dva-h-skew--in"></div>

        <div class="dvag-m-skewed-box__content">
          <div class="dvag-m-section-header">
            <h3 class="dvag-m-section-header__subheadline">${args.subheadline}</h3>
            <h2 class="dvag-m-section-header__headline">${args.headline}</h2>
          </div>
          <div class="dvag-m-c06-page-section__content-wrapper wcm-io-parsys">
            <div class="wcm-io-parsys">
              <div class="dvag-m-c28-content-container dvag-m-c28-content-container--8-cols ">
                <div class="dvag-m-c28-content-container__content-wrapper wcm-io-parsys">
                  <div class="c11-accordion accordion">
                    <dvag-m-c11-accordion
                      id="c11-accordion-aaaeab2c44"
                      active-on-mq="1-5"
                      class="cmp-accordion dvag-m-c11-accordion"
                      data-cmp-is="accordion"
                      data-cmp-single-expansion=""
                      data-placeholder-text="false"
                    >
                      ${args.items.map(item => {
                        return html`
                          <div
                            class="cmp-accordion__item dvag-m-c11-accordion__block "
                            data-cmp-hook-accordion="item"
                            id="c11-accordion-aaaeab2c44-item-367f5d042d"
                          >
                            <button
                              id="c11-accordion-aaaeab2c44-item-367f5d042d-button"
                              class="cmp-accordion__button  dvag-m-c11-accordion__toggle"
                              aria-controls="c11-accordion-aaaeab2c44-item-367f5d042d-panel"
                              data-cmp-hook-accordion="button"
                            >
                              <dva-e-icon
                                class="dva-e-icon dvag-m-c11-accordion__toggle-icon"
                                icon-id="dva-icon-chevron-down-16px"
                              ></dva-e-icon>
                              <span class="dvag-m-c11-accordion__toggle-label"> ${item.toggleLabel} </span>
                            </button>
                            <div class="dvag-m-c11-accordion__content" style="--accordion-content-height: 108px;">
                              <div class="dvag-m-c11-accordion__content-wrapper">
                                <div
                                  data-cmp-hook-accordion="panel"
                                  id="c11-accordion-aaaeab2c44-item-367f5d042d-panel"
                                  class="cmp-accordion__panel cmp-accordion__panel--hidden"
                                  role="region"
                                  aria-labelledby="c11-accordion-aaaeab2c44-item-367f5d042d-button"
                                >
                                  <div class="richText text">
                                    <div class="dvag-e-richtext ">${unsafeHTML(item.content)}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
                      })}
                    </dvag-m-c11-accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="dvag-m-c06-page-section__button-wrapper">
            <!-- linkType: internal -->

            <!-- linkType: internal -->
          </div>
        </div>

        <div class="dva-h-skew--out"></div>
      </div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const subheadline = block.children[0].textContent || "";
  const headline = block.children[1].textContent || "";
  const items = [...block.children].slice(2).map(item => {
    return {
      toggleLabel: item.children[0].textContent || "",
      content: item.children[1].innerHTML,
    };
  });

  cleanUpBlock(block);

  render(accordionTemplate({ subheadline, headline, items }), block);
}
