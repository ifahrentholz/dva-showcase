import{c as g}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as p,x as h}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as _}from"../__chunks__/unsafe-html.tmuruS4o.js";import{g as a}from"../__chunks__/getSrcset.ehtWqR_R.js";import{r as s}from"../__chunks__/dva-e-lazy-image.template.ZrSM01wa.js";import"../__chunks__/if-defined.JfW-uEqn.js";import"../__chunks__/cssClasses.CIN72OsW.js";import"../__chunks__/dva-e-icon.template.tppk8KWP.js";const x=e=>h`<div class="c01d-teaser teaser dvag-h-background--gradient dvag-h-margin-bottom--none dvag-h-text--${e.variant==="text-left"?"left":"right"} dvag-h-headline--bold"><div class="dvag-m-c01d-teaser" style="--gradient-color:${e.gradientColor}"><div class="dvag-m-c01d-teaser__image-wrapper">${s({cssClasses:"dvag-m-c01d-teaser__image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--mobile",src:e.imgMobile,alt:"",srcset:a(e.imgMobile,[480,760,1024,1280,1440,1460]),sizes:"(min-width: 1460px) 1460px, 100vw",aspectRatio:"21:9"})} ${s({cssClasses:"dvag-m-c01d-teaser__image dva-h-preload dvag-m-c01d-teaser__image dva-h-preload--21-9 dvag-m-c01d-teaser__image--desktop",src:e.imgDesktop,alt:"teaser-ki-klopp-21_9.jpg",srcset:a(e.imgDesktop,[480,760,1024,1280,1440,1460]),sizes:"(min-width: 1460px) 1460px, 100vw",aspectRatio:"21:9"})}</div><div class="dvag-m-c01d-teaser__grid-wrapper"><div class="dvag-m-c01d-teaser__content-wrapper"><h4 class="dvag-m-c01d-teaser__subheadline">${e.subheadline}</h4><div class="dvag-m-c01d-teaser__headline">${e.headline}</div><div class="dvag-m-c01d-teaser__text">${_(e.text)}</div><div class="dvag-m-c01d-teaser__button-wrapper"><a class="dva-e-button dva-e-button--rebrush dva-e-button--small" href="${e.btnUrl}"><div class="dva-e-button__background"></div><span class="dva-e-button__label">${e.btnText}</span></a></div></div></div></div></div>`;function B(e){const d=e.classList.contains("text-left")?"text-left":"text-right",i=e.children[0].textContent||"",r=e.children[1].textContent||"",n=e.children[2].textContent||"",t=e.children[3].getElementsByTagName("a")[0],o=e.children[3].textContent||"",c=(t==null?void 0:t.href)||"",m=e.children[4].getElementsByTagName("img")[0].src,l=e.children[5].getElementsByTagName("img")[0].src,v=e.children[6].textContent||"#CCDDE4";g(e),p(x({subheadline:i,headline:r,text:n,btnText:o,btnUrl:c,variant:d,imgDesktop:m,imgMobile:l,gradientColor:v}),e)}export{B as default};
//# sourceMappingURL=c01d-teaser.js.map
