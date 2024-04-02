import { DVALazyImage } from "./dva-e-lazy-image";
type LazyImageTemplateParameter = {
    alt?: string;
    srcset?: string;
    sizes?: string;
    component: DVALazyImage;
};
export declare const lazyImageTemplate: (args: LazyImageTemplateParameter) => import("lit-html").TemplateResult<1>;
export declare const renderLazyImage: (args: RenderLazyImageArgs) => import("lit-html").TemplateResult<1>;
export interface RenderLazyImagePlaceholderArgs {
    cssClasses?: string;
    aspectRatio: string;
}
export declare const renderLazyImagePlaceholder: (args: RenderLazyImagePlaceholderArgs) => import("lit-html").TemplateResult<1>;
export {};
