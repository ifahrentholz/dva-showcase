import { cleanUpBlock } from "Utils/cleanUpBlock";
import { html, render } from "lit";
import "Components/dvag-m-c22-infographic/dvag-m-c22-infographic";
import "./infographic.scss";

interface InfographicTemplateArgs {
  desktopImage: string;
  mobileImage: string;
}

const infographicTemplate = (args: InfographicTemplateArgs) => {
  return html`
    <div class="dvag-m-c28-content-container dvag-m-c28-content-container--8-cols ">
      <div class="dvag-m-c28-content-container__content-wrapper wcm-io-parsys">
        <div class="c22-infographic">
          <dvag-m-c22-infographic 
            class="dvag-m-c22-infographic" 
            desktop-url="${args.desktopImage}" 
            mobile-url="${args.mobileImage}">
          </dvag-m-c22-infographic>
        </div>
      </div>
    </div>
  `;
};

export default function(block: HTMLElement) {
  const desktopImage = block.children[0].textContent || "";
  const mobileImage = block.children[1].textContent || "";

  cleanUpBlock(block);

  render(infographicTemplate({desktopImage, mobileImage}), block);
}
