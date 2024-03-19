import { html } from 'lit';
import { IconName } from '../../icons.types.ts';

export const renderIcon = (iconId: IconName, cssClasses?: string) => {
  return html`<dva-e-icon class="dva-e-icon${cssClasses ? ` ${cssClasses}` : ''}" icon-id="${iconId}"></dva-e-icon>`;
};
