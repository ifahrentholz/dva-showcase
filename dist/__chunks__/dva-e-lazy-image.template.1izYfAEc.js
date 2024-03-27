import{x as i}from"./lit-element.XkUWx5ik.js";import{o as e}from"./if-defined.JfW-uEqn.js";const t=a=>a===void 0?"":` ${a}`,_=':host{display:block}.dva-e-lazy-image__mask{position:relative;overflow:hidden;width:100%;height:0;pointer-events:none}.dva-e-lazy-image__mask--16-9{padding-bottom:56.25%}.dva-e-lazy-image__mask--21-9{padding-bottom:42.8571429%}.dva-e-lazy-image__mask--9-16{padding-bottom:177.78%}.dva-e-lazy-image__mask--4-3{padding-bottom:75%}.dva-e-lazy-image__mask--2-3{padding-bottom:150%}.dva-e-lazy-image__mask--1-1{padding-bottom:100%}.dva-e-lazy-image__mask--2-1{padding-bottom:50%}.dva-e-lazy-image__wrapper{opacity:1;line-height:0;transition:opacity .3s ease-in-out}.dva-e-lazy-image__wrapper.dva-state-hidden{display:none}.dva-e-lazy-image__wrapper.dva-state-loading{position:relative;min-height:200px;opacity:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper.dva-state-loading{position:initial;min-height:initial}.dva-e-lazy-image__img{width:100%}.dva-e-lazy-image__wrapper--has-overwidth .dva-e-lazy-image__img{width:inherit;height:100%;object-fit:cover;object-position:50% 50%}.dva-e-lazy-image__no-ratio,.dva-e-lazy-image__no-ratio .dva-e-lazy-image__wrapper{width:inherit;height:inherit}.dva-e-lazy-image__no-ratio .dva-e-lazy-image__img{width:inherit;max-width:100%;height:inherit}.dva-e-lazy-image__cover{position:absolute;top:0;left:0;width:100%;height:100%}.dva-e-lazy-image__cover .dva-e-lazy-image__img{object-fit:cover}.dva-e-lazy-image__contain .dva-e-lazy-image__img{object-fit:contain;object-position:100% 100%}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:42.8571428571%;pointer-events:none}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:56.25%;pointer-events:none}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:177.7777777778%;pointer-events:none}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:75%;pointer-events:none}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:150%;pointer-events:none}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:50%;pointer-events:none}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:100%;pointer-events:none}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper{position:absolute;width:100%;height:auto}.dva-e-lazy-image--circle{overflow:hidden;width:100%;padding:4px;border:1px solid #c8aa22;border-radius:100%;background:#fff}.dva-e-lazy-image--circle .dva-e-lazy-image__mask{display:block;overflow:hidden;width:100%;border-radius:100%}',d=a=>a==="cover"?"cover":a==="contain"?"contain":"fill",o=a=>a==="contain"?"100% 100%":"50% 50%",l=a=>a==="circle"?"dva-e-lazy-image--circle":"",m=a=>a==="21:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9":a==="16:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9":a==="4:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3":a==="1:1"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1":a==="2:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3":a==="9:16"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--9-16":a==="cover"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__cover":a==="contain"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__contain":"dva-e-lazy-image__no-ratio",v=a=>i`
    <style>
      ${_}
    </style>
    <!--<div class="${l(a.wrapper)}">-->
    <div class="${m(a.aspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src="${a.fallbackImg}"
          srcset="${a.srcset}"
          alt="${a.alt}"
          sizes="${a.sizes}"
          data-object-fit=${d(a.aspectRatio)}
          data-object-position=${o(a.aspectRatio)}
        />
      </div>
    </div>
    <!--</div>-->
  `,g=a=>i`
    <dva-e-lazy-image
      class="dva-e-lazy-image dva-js-lazy-image${t(a.cssClasses)}"
      src="${a.src}"
      alt=${e(a.alt)}
      srcset="${e(a.srcset)}"
      sizes="${e(a.sizes)}"
      aspect-ratio="${e(a.aspectRatio)}"
      wrapper="${e(a.wrapper)}"
    >
    </dva-e-lazy-image>
  `;export{g as r,v as t};
//# sourceMappingURL=dva-e-lazy-image.template.1izYfAEc.js.map
