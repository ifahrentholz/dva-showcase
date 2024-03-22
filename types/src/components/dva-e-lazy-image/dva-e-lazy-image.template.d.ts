interface TemplateParameter {
    src?: string;
    alt?: string;
    srcset?: string;
    sizes?: string;
    aspectRatio?: string;
    wrapper?: string;
    fallbackImg: string;
}
export interface RenderLazyImageParameter {
    src: string;
    alt?: string;
    srcset?: string;
    sizes?: string;
    aspectRatio?: string;
    wrapper?: string;
    cssClasses?: string;
}
export declare const template: (args: TemplateParameter) => import("lit-html").TemplateResult<1>;
export declare const renderLazyImage: (args: RenderLazyImageParameter) => import("lit-html").TemplateResult<1>;
export {};
