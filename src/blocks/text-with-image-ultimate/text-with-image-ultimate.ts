import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import "./text-with-image-ultimate.scss";

interface TextWithImageUltimateTemplateArgs {
  imageSrc: string;
  imageAlt: string;
  title: string;
  listItems: string[];
}

const textWithImageUltimateTemplate = (args: TextWithImageUltimateTemplateArgs) => {
  return html`
    <div
      class="wcm-io-parsys dvag-h-background--grey
      dvag-h-skew--top
      dvag-h-margin-bottom--none
      dvag-h-padding-bottom--none"
    >
      <div class="dvag-m-c06-page-section dvag-m-skew-component">
        <div class="dva-h-skew--in"></div>
        <div class="dvag-m-skewed-box__content">
          <div class="dvag-m-section-header"></div>
          <div class="dvag-m-c06-page-section__content-wrapper wcm-io-parsys">
            <!-- primary - resourceType:  -->
            <!-- secondary - resourceType:  -->
            <!-- c28_contentcontainer - resourceType: dvag/core/components/content/c28-contentcontainer -->
            <div class="wcm-io-parsys">
              <div class="dvag-m-c28-content-container dvag-m-c28-content-container--10-cols ">
                <div class="dvag-m-c28-content-container__content-wrapper wcm-io-parsys">
                  <!-- text_with_image_ulti - resourceType: dvag/components/content/text-with-image-ultimate -->
                  <div class="text-with-image-ultimate text parbase">
                    <div class="col-wrapper text-with-image bleed-m bleed-l dva-e-list--checkmark">
                      <div class="col-s-12 col-m-2 col-l-2 image-container">
                        <img class="center" src="${args.imageSrc}" alt="${args.imageAlt}" loading="lazy" />
                      </div>
                      <div class="col-s-12 col-m-10 col-l-10 bleed-m bleed-l">
                        <h2>${args.title}<br /><br /></h2>
                        <ul>
                          ${args.listItems.map(item => html`<li>${unsafeHTML(item)}</li>`)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dvag-m-c06-page-section__button-wrapper"></div>
        </div>
        <div class="dva-h-skew--out"></div>
      </div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const imageSrc = block.querySelector("img")?.getAttribute("src") || "";
  const imageAlt = block.querySelector("img")?.getAttribute("alt") || "";
  const title = block.querySelector("h3")?.textContent || "";
  const listItems = [...block.querySelectorAll("ul li")].map(li => li.innerHTML);

  cleanUpBlock(block);

  render(textWithImageUltimateTemplate({ imageSrc, title, listItems, imageAlt }), block);
}
