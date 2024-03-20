import { html } from "lit-html";

export type DvaButtonTemplateArgs = {
  target?: string;
  cssClasses?: string;
  newWindow?: boolean;
  iconOnly?: boolean;
  label?: string;
  iconID?: string;
  shouldRender?: boolean;
  isButton?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const renderLabel = (args: DvaButtonTemplateArgs) => {
  if (args.iconOnly || args.label === undefined) return "";

  return html` <span class="dva-e-button__label">${args.label}</span> `;
};

const renderIcon = (args: DvaButtonTemplateArgs) => {
  if (args.iconID === undefined) return "";

  return html` <dva-e-icon class="dva-e-button__icon" icon-id="${args.iconID}"></dva-e-icon> `;
};

export const dvaButtonTemplate = (args: DvaButtonTemplateArgs) => {
  if (args.shouldRender === false) return "";

  const isDisabled = args.disabled === true;

  if (args.isButton) {
    return html`
      <button
        aria-label="click"
        class="dva-e-button${args.cssClasses ? ` ${args.cssClasses}` : ""}"
        ?disabled="${isDisabled}"
        @click="${args.onClick}"
      >
        <div class="dva-e-button__background"></div>
        ${renderLabel(args)} ${renderIcon(args)}
      </button>
    `;
  }

  return html`
    <a
      class="dva-e-button${args.cssClasses ? ` ${args.cssClasses}` : ""}"
      href="${args.target || ""}"
      target="${args.newWindow !== true ? "_self" : "_blank"}"
      ?disabled="${isDisabled}"
      @click="${args.onClick}"
    >
      ${renderLabel(args)} ${renderIcon(args)}
    </a>
  `;
};
