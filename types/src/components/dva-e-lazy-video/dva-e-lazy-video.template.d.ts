type TemplateParameter = {
    sources: Map<string, MQDef>;
};
type MQDef = {
    sources: Array<HTMLElement>;
    mqs: number[];
    fallbackSrc?: string;
};
export declare const template: (args: TemplateParameter) => string;
export {};
