type TemplateParameter = {
  sources: Map<string, MQDef>;
};

type MQDef = {
  sources: Array<HTMLElement>;
  mqs: number[];
  fallbackSrc?: string;
};

const getFallbackImg = (mq: MQDef): string => {
  if (mq.fallbackSrc !== undefined && mq.fallbackSrc !== "undefined") {
    return mq.fallbackSrc;
  }

  return "";
};

const renderVideos = (mqSources: Map<string, MQDef>) => {
  let markup = "";
  mqSources.forEach((mq: MQDef) => {
    markup += `<video class="dva-e-lazy-video__video dva-js-lazy-video__video"
                      autoplay muted loop playsinline
                      poster="${getFallbackImg(mq)}">`;
    mq.sources.forEach((sourceTag: HTMLElement) => {
      const test = sourceTag.outerHTML;
      markup += test;
    });
    markup += "</video>";
  });
  return markup;
};

export const template = (args: TemplateParameter) => {
  return `${renderVideos(args.sources)}`;
};
