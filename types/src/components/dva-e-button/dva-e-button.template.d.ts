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
export declare const dvaButtonTemplate: (args: DvaButtonTemplateArgs) => "" | import("lit-html").TemplateResult<1>;
