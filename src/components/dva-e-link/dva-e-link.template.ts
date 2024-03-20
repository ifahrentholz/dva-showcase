import { html } from "lit-html";

export type DvaLinkTemplateArgs = {
  target: string;
  cssClasses?: string;
  newWindow?: boolean;
  label?: string;
  iconID?: string;
  shouldRender?: boolean;
};

const renderLabel = (args: DvaLinkTemplateArgs) => {
  if (args.label === undefined) return "";

  return html` <span class="dva-e-link__label">${args.label}</span> `;
};

const renderIcon = (args: DvaLinkTemplateArgs) => {
  if (args.iconID === undefined) return "";

  return html` <dva-e-icon class="dva-e-icon" icon-id="${args.iconID}"></dva-e-icon> `;
};

export const dvaLinkTemplate = (args: DvaLinkTemplateArgs) => {
  if (args.shouldRender === false) return "";
  return html`
    <a
      class="dva-e-link${args.cssClasses ? ` ${args.cssClasses}` : ""}"
      href="${args.target}"
      target="${args.newWindow !== true ? "_self" : "_blank"}"
    >
      ${renderLabel(args)} ${renderIcon(args)}
    </a>
  `;
};
