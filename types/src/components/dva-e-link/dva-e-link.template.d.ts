export type DvaLinkTemplateArgs = {
    target: string;
    cssClasses?: string;
    newWindow?: boolean;
    label?: string;
    iconID?: string;
    shouldRender?: boolean;
};
export declare const dvaLinkTemplate: (args: DvaLinkTemplateArgs) => "" | import("lit-html").TemplateResult;
