import{c as v}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as m,x as s}from"../__chunks__/lit-element.XkUWx5ik.js";const o=i=>s`<div class="dvag-m-c24-quicklinks dvag-m-skew-component" id="quicklinks"><div class="dva-h-skew--in"></div><div class="dvag-m-skewed-box__content"><div class="dvag-m-section-header"></div><div class="dvag-m-c24-quicklinks__content-wrapper wcm-io-parsys"><dvag-m-c24-quicklink-item class="dvag-m-c24-quicklink-item dvag-m-c24-quicklink-item--overlay-opener dva-state-active" no-cookie-hide="no-cookie-hide">${i.map(a=>s`<a class="dvag-m-c24-quicklink-item__link" target="_self" href="${a.url}"><dva-e-lazy-image class="dva-e-lazy-image dva-js-lazy-image dvag-m-c24-quicklink-item__icon dva-state-initialized dva-state-invp dva-state-loaded" src="${a.src}" alt="Icon" aspect-ratio="1:1"></dva-e-lazy-image><p class="dvag-m-c24-quicklink-item__label">${a.name}</p></a>`)}</dvag-m-c24-quicklink-item></div></div><div class="dva-h-skew--out"></div></div>`;function u(i){const t=[...i.children].map(e=>{const n=e.children[1].textContent,d=e.children[2].textContent,c=e.children[0].querySelector("picture > img"),l=c==null?void 0:c.src;return{name:n,url:d,src:l}});v(i),m(o(t),i)}export{u as default};
//# sourceMappingURL=quicklinks.js.map
