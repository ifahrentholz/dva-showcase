interface TemplateParameter {
    src?: string;
    alt?: string;
    srcset?: string;
    sizes?: string;
    aspectRatio?: string;
    wrapper?: string;
    fallbackImg: string;
}
interface renderLazyImageParameter {
    src: string;
    alt?: string;
    srcset?: string;
    sizes?: string;
    aspectRatio?: string;
    wrapper?: string;
    cssClasses?: string;
}
export declare const template: (args: TemplateParameter) => import("lit-html").TemplateResult;
export declare const renderLazyImage: (args: renderLazyImageParameter) => import("lit-html").TemplateResult;
export {};
