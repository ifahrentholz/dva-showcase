import{j as o,T as a,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{c}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{o as s}from"../__chunks__/if-defined.JfW-uEqn.js";import{m as l}from"../__chunks__/index.module.BEmWgxQc.js";function n(e){return e.trim()===""?void 0:e}const m=e=>{if(!e)return a;let t,r;try{t=new Date(e).toISOString(),r=new Date(e).toLocaleDateString()}catch{l.warn("Could not parse date",e),t=void 0,r=e}return i`<div class="dva-m-article-header__topline"><time class="dva-m-article-header__date"><time class="text-dimmed" datetime="${s(t)}">${r}</time></time></div>`},v=e=>e?i`<h1 class="dva-m-article-header__headline">${e}</h1>`:a,h=e=>e?i`<p class="dva-m-article-header__text">${e}</p>`:a,f=e=>{const t=n(e.date||""),r=n(e.headline||""),d=n(e.text||"");return!t&&!r&&!d?a:i`<header class="dva-m-article-header"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12 dva-grid-col-4-8 dva-grid-offset-4-2">${m(t)} ${v(r)} ${h(d)}</div></div></div></header>`};function $(e){const t=e.children[0].textContent||"",r=e.children[1].textContent||"",d=e.children[2].textContent||"";c(e),o(f({date:t,headline:r,text:d}),e)}export{$ as default};
//# sourceMappingURL=article-header.js.map
