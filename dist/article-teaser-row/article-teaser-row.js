import{a as _,r as b}from"../__chunks__/dva-e-lazy-image.template.zlMtuWyq.js";import{r as $}from"../__chunks__/dva-e-icon.template.tppk8KWP.js";import{j as x,x as a}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as c}from"../__chunks__/if-defined.JfW-uEqn.js";import{c as C}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import"../__chunks__/cssClasses.CIN72OsW.js";const U=e=>a`<div class="col-s-12 col-m-4 col-l-4"><div class="dva-m-teaser dva-m-article-teaser${_(e.cssClasses)}"><a href="${e.linkUrl}" class="dva-m-article-teaser__image-link">${b({src:e.imageSrc,alt:"header-finanz-und-versicherungscheck-beratung-frauen.jpg",cssClasses:"dva-m-article-teaser__image",aspectRatio:"21:9"})}</a><div class="dva-m-article-teaser__content">${c(e.topline?a`<h4 class="dva-m-teaser__topline">${e.topline}</h4>`:void 0)} ${c(e.headline?a`<h3 class="dva-m-teaser__headline">${e.headline}</h3>`:void 0)} ${c(e.text?a`<p class="dva-m-teaser__text">${e.text}</p>`:void 0)} ${c(e.linkLabel&&e.linkUrl?a`<a href="${e.linkUrl}" class="dva-e-link dva-m-teaser__cta" target="_self"><span class="dva-e-link__label">Weiterlesen</span> ${$("dva-icon-arrow-right")}</a>`:void 0)}</div></div></div>`,T=e=>a`<section class="section bg-darkgrey"><div class="section-content container"><div class="bleed-m bleed-l"><header class="section-header align-center col-s-12 col-m-10 col-m-1-offset col-m-1-push col-l-10 col-l-1-offset col-l-1-push"><h3 class="section-headline">${e.headline}</h3></header><div class="content-box clear col-s-12 col-m-12 col-l-12"><div class="bar"><div class="text"><div class="col-wrapper">${e.teasers.map(n=>U(n))}</div></div></div></div><footer class="section-footer clear col-s-12 col-m-12 col-l-12"><ul class="button-list bleed-m bleed-l"><li class="button-list-item col-m-4 col-m-4-offset col-l-4 col-l-4-offset"><a class="dva-e-button dva-e-button--rebrush" href="${e.ctaUrl}"><div class="dva-e-button__background"></div><span class="dva-e-button__label">${e.ctaLabel}</span></a></li></ul></footer></div></div></section>`;function R(e){const n=e.children[0].textContent||"",i=[...e.children[1].children].map((v,s)=>{const r=v.querySelector("img"),h=e.children[2].children[s].textContent||"",m=e.children[3].children[s].textContent||"",p=e.children[4].children[s].textContent||"",l=e.children[5].children[s].querySelector("a"),f=(l==null?void 0:l.getAttribute("href"))||"",u=(l==null?void 0:l.textContent)||"";return{linkUrl:f,imageSrc:(r==null?void 0:r.src)||"",topline:h,headline:m,text:p,linkLabel:u}}),t=e.children[6].querySelector("a"),o=(t==null?void 0:t.getAttribute("href"))||"",d=(t==null?void 0:t.textContent)||"";C(e),x(T({headline:n,teasers:i,ctaLabel:d,ctaUrl:o}),e)}export{R as default};
//# sourceMappingURL=article-teaser-row.js.map
