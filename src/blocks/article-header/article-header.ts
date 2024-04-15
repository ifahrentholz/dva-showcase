import { html, nothing, render } from "lit";
import "./article-header.scss";
import { cleanUpBlock } from "Utils/cleanUpBlock";
import { undefinedOnEmpty } from "Utils/undefinedOnEmpty";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { DebuggerService } from "@kluntje/services";

interface ArticleHeaderTemplateArgs {
  date?: string;
  headline?: string;
  text?: string;
}

const renderTopline = (date?: string) => {
  if (!date) return nothing;
  let dateIsoString: string | undefined, formattedDate: string;
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  try {
    dateIsoString = new Date(date).toISOString();
    formattedDate = new Date(date).toLocaleDateString("de-DE", options);
  } catch (error) {
    DebuggerService.warn("Could not parse date", date);
    dateIsoString = undefined;
    formattedDate = date;
  }

  return html`
    <div class="dva-m-article-header__topline">
      <time class="dva-m-article-header__date">
        <time class="text-dimmed" datetime="${ifDefined(dateIsoString)}"> ${formattedDate} </time>
      </time>
    </div>
  `;
};

const renderHeadline = (headline?: string) => {
  if (!headline) return nothing;

  return html` <h1 class="dva-m-article-header__headline">${headline}</h1> `;
};

const renderText = (text?: string) => {
  if (!text) return nothing;

  return html` <p class="dva-m-article-header__text">${text}</p> `;
};

const articleHaderTemplate = (args: ArticleHeaderTemplateArgs) => {
  const date = undefinedOnEmpty(args.date || "");
  const headline = undefinedOnEmpty(args.headline || "");
  const text = undefinedOnEmpty(args.text || "");

  if (!date && !headline && !text) return nothing;

  return html`
    <header class="dva-m-article-header">
      <div class="dva-grid">
        <div class="dva-grid-row">
          <div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">
            ${renderTopline(date)} ${renderHeadline(headline)} ${renderText(text)}
          </div>
        </div>
      </div>
    </header>
  `;
};

export default function (block: HTMLElement) {
  const date = block.children[0].textContent || "";
  const headline = block.children[1].textContent || "";
  const text = block.children[2].textContent || "";

  cleanUpBlock(block);

  render(articleHaderTemplate({ date, headline, text }), block);
}
