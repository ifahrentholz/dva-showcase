import { Component } from "@kluntje/core";
export declare class DvagBasicOverlay extends Component {
  closeBtn: HTMLButtonElement;
  close(): Promise<void>;
  open(): Promise<void>;
  handleKeyboardsEvents(e: KeyboardEvent): void;
  handleCookieChange(): void;
  handleOverlayClick(e: Event): void;
  handleCloseBtnClick(): void;
}
export type dvagBasicOverlayAsLightboxTemplateArgs = {
  cssClasses?: string;
  imageUrl?: string;
};
export declare const renderBasicOverlayAsLightbox: (
  args: dvagBasicOverlayAsLightboxTemplateArgs,
) => import("lit-html").TemplateResult<1>;
