import { html, render } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import "./icon-list.scss";
import { cleanUpBlock } from "Utils/cleanUpBlock";

type variantName = "squared" | "round" | "question" | "exclamation" | "checkmark" | "cross" | "star";

interface IconListTemplateArgs {
  headline: string;
  listItems: HTMLLIElement[];
  variant: variantName;
}

const iconListTemplate = (args: IconListTemplateArgs) => {
  return html`
    <div class="article-text text parbase">
      <div class="dva-e-list--${args.variant || "star"}">      
        <h2>${args.headline}</h2>
        <ul>
          ${args.listItems.map(item => html`<li>${unsafeHTML(item.innerHTML)}</li>`)}
        </ul>
      </div>
    </div>`
};

export default function(block: HTMLElement) {
  const headline = block.children[0].querySelector("p")?.textContent || "";
  const listItems = [...block.children[0].querySelectorAll("li")];
  const variant = [...block.classList].filter(classValue => classValue !== "block" && classValue !== "icon-list")[0] as IconListTemplateArgs["variant"];
  cleanUpBlock(block);
  render(iconListTemplate({headline, listItems, variant}), block);
}