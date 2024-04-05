import{s as P,x as o,T as B,j as k}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as C,t as x}from"../__chunks__/property.0daVBkvz.js";import{o as p}from"../__chunks__/unsafe-html.tmuruS4o.js";import{f as E}from"../__chunks__/fetch.service.FjW5hVu3.js";import{r as d}from"../__chunks__/dva-e-icon.template.tppk8KWP.js";import"../__chunks__/dva-e-icon.JvN5hF7V.js";import"../__chunks__/dva-e-lazy-image.UCrOhMiV.js";import"../__chunks__/dvag-m-c11-accordion.rKKpSxDv.js";import{_ as T}from"../__chunks__/preload-helper.hlDPvxQM.js";import{r as y}from"../__chunks__/dva-e-lazy-image.template.ZrSM01wa.js";import"../__chunks__/component.module.D5fmAfIh.js";import"../__chunks__/index.module.BEmWgxQc.js";import"../__chunks__/LazyConnectService.yBR27czX.js";import"../__chunks__/eventTypes.voneREpA.js";import"../__chunks__/cssClasses.CIN72OsW.js";import"../__chunks__/mediaQueries.0eOxrCUs.js";import"../__chunks__/getSrcset.ehtWqR_R.js";import"../__chunks__/if-defined.JfW-uEqn.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(s){return C({...s,state:!0,attribute:!1})}function A({input:s,specifier:e,htmlTag:a}){return s.split(e).map((t,n)=>n%2===1?`<${a}>${t}</${a}>`:t).join("")}var q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,S=(s,e,a,t)=>{for(var n=t>1?void 0:t?D(e,a):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(n=(t?l(e,a,n):l(n))||n);return t&&n&&q(e,a,n),n};let f=class extends P{createRenderRoot(){return this}async firstUpdated(s){await this.fetchHeaderData()}async fetchHeaderData(){try{const s=await E.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:s.leftCol.data[0],rightCol:s.rightCol.data}}catch(s){console.error("HeaderComponent: ",s)}}render(){if(!this.headerData)return;const{leftCol:s,rightCol:e}=this.headerData,a=A({input:s.logoText,htmlTag:"strong",specifier:":::"}),t=p(a);return o`<a href="${s.logoLink}" class="logo">${t}</a><ul class="icons">${e.map(n=>o`<li><a href="${n.socialLink}" class="icon brands" aria-label="${n.socialLabel}">${d(n.socialIcon,"header-icon")} <span class="label">${n.socialLabel}</span></a></li>`)}</ul>`}};S([z()],f.prototype,"headerData",2);f=S([x("header-component")],f);function g(s){return s.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}class M{readBlockConfig(e){const a={};return e.querySelectorAll(":scope > div").forEach(t=>{if(t.children){const n=[...t.children];if(n[1]){const i=n[1],l=g(n[0].textContent??"");let c="";if(i.querySelector("a")){const r=[...i.querySelectorAll("a")];r.length===1?c=r[0].href:c=r.map(v=>v.href)}else if(i.querySelector("img")){const r=[...i.querySelectorAll("img")];r.length===1?c=r[0].src:c=r.map(v=>v.src)}else if(i.querySelector("p")){const r=[...i.querySelectorAll("p")];r.length===1?c=r[0].textContent:c=r.map(v=>v.textContent)}else c=t.children[1].textContent;a[l]=c}}}),a}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const a=e.classList[0];if(a){e.classList.add("block"),e.dataset.blockName=a;const t=e.parentElement;t==null||t.classList.add(`${a}-wrapper`);const n=e.closest(".section");n&&n.classList.add(`${a}-container`)}}}function F(s){return g(s).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class I{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(a=>{this.adjustMarkup(a),this.processSectionMetaData(a)})}processSectionMetaData(e){const a=e.querySelector("div.section-metadata");if(a){const t=this.blockService.readBlockConfig(a);Object.keys(t).forEach(n=>{n==="style"?t.style.split(",").filter(l=>l).map(l=>g(l.trim())).forEach(l=>e.classList.add(l)):e.dataset[F(n)]=t[n]}),a.parentElement&&a.parentElement.remove()}}adjustMarkup(e){const a=[];let t=!1;[...e.children].forEach(n=>{if(n.tagName==="DIV"||!t){const i=document.createElement("div");a.push(i),t=n.tagName!=="DIV",t&&i.classList.add("default-content-wrapper")}a[a.length-1].append(n)}),a.forEach(n=>e.append(n)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(a=>{const t=a.parentElement;t&&t.classList.add("image","main")})}}const U=()=>o`<dvag-m-n01-header class="dvag-m-n01-header" vb-file-url="/async-includes/subbar.html"><div class="dvag-m-n01-header__logo-wrapper"><div class="dvag-m-n01-header__logo-mobile"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${d("dva-icon-header-logo-s")}</a></div><div class="dvag-m-n01-header__logo-desktop"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${d("dva-icon-header-logo-dvag-xl")}</a></div></div><div class="dvag-m-n01-header__menu-wrapper"><div class="dvag-m-n01-header__header-navigation-wrapper"><ul class="dvag-m-n01-header__header-navigation-list"><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Lorem">Lorem</a></li><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Ipsum">Ipsum</a></li></ul></div><a class="dvag-m-n01-header__burger-menu" href="#">${d("dva-icon-burger-24px")} <span class="dvag-m-n01-header__burger-label">Menü</span></a></div><div class="dvag-m-n01-header__navigation-wrapper"></div></dvag-m-n01-header>`,j=s=>s.label===void 0?"":o`<span class="dva-e-link__label">${s.label}</span>`,N=s=>s.iconID===void 0?"":o`<dva-e-icon class="dva-e-icon" icon-id="${s.iconID}"></dva-e-icon>`,u=s=>s.shouldRender===!1?"":o`<a class="dva-e-link${s.cssClasses?` ${s.cssClasses}`:""}" href="${s.target}" target="${s.newWindow!==!0?"_self":"_blank"}">${j(s)} ${N(s)}</a>`,G=()=>o`<h5 class="dvag-m-n02-footer__headline">Bestnoten in Beratung, Service und Karriere</h5><div class="dvag-m-n02-footer__awards"><a href="#">${y({src:"https://main--dva-showcase--ifahrentholz.hlx.page/assets/service-rating-footer.svg",cssClasses:"dvag-m-n02-footer__award-image"})} </a><a href="#">${y({src:"https://main--dva-showcase--ifahrentholz.hlx.page/assets/kundenchampions-footer.svg",cssClasses:"dvag-m-n02-footer__award-image"})}</a></div>`,K=[{headline:{label:"Unternehmen",link:"#"},items:[{label:"Über uns",link:"#"},{label:"Geschäftsleitung",link:"#"},{label:"Markenbotschafter",link:"#"},{label:"Struktur & Geschichte",link:"#"},{label:"Unternehmensbericht",link:"#"},{label:"Presseservice",link:"#"},{label:"Standorte",link:"#"},{label:"Gezielte und nachhaltige Hilfe",link:"#"}]},{headline:{label:"Beratung",link:"#"},items:[{label:"Unser Beratungsmodell",link:"#"},{label:"Leistungen für Privatkunden",link:"#"},{label:"Leistungen für Firmenkunden",link:"#"},{label:"Finanztipps",link:"#"},{label:"Produktpartner",link:"#"},{label:"Ansprechpartner finden",link:"#"},{label:"Nachhaltigkeit (EGS)",link:"#"}]},{headline:{label:"Erfahrungen & Bewertungen",link:"#"},items:[{label:"Kundenbewertungen",link:"#"},{label:"Zertifikate & Auszeichnungen",link:"#"}]},{headline:{label:"Karriere",link:"#"},items:[{label:"Karriere als selbstständiger Finanzcoach",link:"#"},{label:"Teamblog",link:"#"},{label:"Karriere in der Unternehmenszentrale",link:"#"}]},{headline:{label:"Unternehmen",link:"#"},items:[{label:"Über uns",link:"#"},{label:"Geschäftsleitung",link:"#"},{label:"Markenbotschafter",link:"#"},{label:"Struktur & Geschichte",link:"#"},{label:"Unternehmensbericht",link:"#"},{label:"Presseservice",link:"#"},{label:"Standorte",link:"#"},{label:"Gezielte und nachhaltige Hilfe",link:"#"}]},{headline:{label:"Beratung",link:"#"},items:[{label:"Unser Beratungsmodell",link:"#"},{label:"Leistungen für Privatkunden",link:"#"},{label:"Leistungen für Firmenkunden",link:"#"},{label:"Finanztipps",link:"#"},{label:"Produktpartner",link:"#"},{label:"Ansprechpartner finden",link:"#"},{label:"Nachhaltigkeit (EGS)",link:"#"}]},{headline:{label:"Erfahrungen & Bewertungen",link:"#"},items:[{label:"Kundenbewertungen",link:"#"},{label:"Zertifikate & Auszeichnungen",link:"#"}]},{headline:{label:"Karriere",link:"#"},items:[{label:"Karriere als selbstständiger Finanzcoach",link:"#"},{label:"Teamblog",link:"#"},{label:"Karriere in der Unternehmenszentrale",link:"#"}]}],H=[{icon:"dva-icon-instagram-24px"},{icon:"dva-icon-facebook-24px"},{icon:"dva-icon-tiktok-24px"},{icon:"dva-icon-linkedin-24px"},{icon:"dva-icon-xing-24px"},{icon:"dva-icon-youtube-24px"},{icon:"dva-icon-twitter-24px"}],$={navigationSections:K,socialLinks:H},R=()=>o`<h5 class="dvag-m-n02-footer__headline">Finden Sie uns in den sozialen Netzwerken</h5><div class="dvag-m-n02-footer__social-links">${$.socialLinks.map(s=>o`<a href="#" class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-e-button--rebrush dvag-m-n02-footer__social-link"><div class="dva-e-button__background"></div>${d(s.icon,"dva-e-button__icon")}</a>`)}</div>`,O=()=>o`<dvag-m-c11-accordion class="dvag-m-c11-accordion dvag-m-n02-footer__navigation" active-on-mq="1-3">${$.navigationSections.map(s=>o`<div class="dvag-m-c11-accordion__block"><button class="dvag-m-c11-accordion__toggle" tabindex="-1">${d("dva-icon-chevron-down-16px","dvag-m-c11-accordion__toggle-icon")} <span class="dvag-m-c11-accordion__toggle-label">${s.headline.label}</span></button><div class="dvag-m-c11-accordion__content"><div class="dvag-m-c11-accordion__content-wrapper"><ul class="dvag-m-n02-footer__list">${s.items.map(e=>o`<li class="dvag-m-n02-footer__list-item">${u({target:e.link,label:e.label})}</li>`)}</ul></div></div></div>`)}</dvag-m-c11-accordion>`,V=(s=!1)=>o`<footer class="dvag-m-n02-footer${s?" dvag-m-n02-footer--border-top":""}"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12">${O()}</div></div><div class="dva-grid-row"><div class="dva-grid-col-1-12 dva-grid-col-4-6">${G()}</div><div class="dva-grid-col-1-12 dva-grid-col-4-6">${R()}</div></div></div><div class="dvag-m-n02-footer__skew-area"><div class="dvag-h-skew--in"></div><div class="dvag-m-skewed-box__content"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><div class="dvag-m-n02-footer__legal-links">${u({target:"#",label:"Datenschutz",cssClasses:"dvag-m-n02-footer__legal-link"})} ${u({target:"#",label:"Impressum",cssClasses:"dvag-m-n02-footer__legal-link"})} ${u({target:"#",label:"Cookies bearbeiten",cssClasses:"dvag-m-n02-footer__legal-link"})}</div><p class="dvag-m-n02-footer__copyright">© 2023 Deutsche Vermögensberatung AG (DVAG)</p></div></div></div></div></div></footer>`;function b(s,e=document){const a=s&&s.includes(":")?"property":"name",n=[...e.head.querySelectorAll(`meta[${a}="${s}"]`)].map(i=>i.content).join(", ");return n.length?n:""}const W=()=>b("breadcrumb")!=="true"?B:o`<div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><nav class="dva-m-breadcrump-navigation"><ul class="dva-m-breadcrump-navigation__list"><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Startseite</span> </a>${d("dva-icon-chevron-right")}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Allfinanzberatung</span> </a>${d("dva-icon-chevron-right")}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Firmenkunden</span> </a>${d("dva-icon-chevron-right")}</li></ul></nav></div></div></div>`,L=()=>{const s=document.querySelector("#main");return s?window.location.href==="about:srcdoc"&&s.classList.contains("sidekick-library"):!1},_=(s,e)=>{e.split(",").forEach(a=>{s.classList.add(g(a.trim()))})},Z={mainTsPath:"src/main.ts",mainScssPath:"src/styles/index.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/icons.types.ts",fontsScssPath:"src/styles/fonts.scss",lazyStylesScssPath:"src/styles/lazy-styles.scss",sidekickLibraryStylesScssPath:"src/styles/sidekick-library-styles.scss"};function w(){return L()?window.parent.location:window.location}const m=class m{};m.unloaded="unloaded",m.loading="loading",m.loaded="loaded",m.error="error";let h=m;class J{constructor(e,a){this.sectionService=e,this.blockService=a,this.lcpBlocks=["article-stage","article-header","article-overview","vb-stage"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const t=document.querySelector("main");if(t){this.sectionService.init(t),this.blockService.decorateBlocks(t),this.decorateDefaultContent(t),this.renderLayout(t),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:t,sidekickLibraryStylesScssPath:n,fontsScssPath:i}=Z;try{t&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`),n&&L()&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`),i&&await this.loadFonts(),await this.loadCSS(`${window.hlx.codeBasePath}/dist/legacyStyles/legacyStyles.css`,`${window.hlx.codeBasePath}/dist/styles/styles.css`),await this.loadBlocks()}catch(l){console.error("Load lazy error: ",l);try{await this.loadBlocks()}catch(c){console.error("Load blocks error: ",c)}}},this.loadBlocks=async()=>{const n=[...document.querySelectorAll(".section")].map(i=>this.loadBlock(i));await Promise.all(n)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(w().search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(a){console.log(a)}}decorateDefaultContent(e){const a=e.querySelectorAll(".default-content-wrapper");a&&a.forEach(t=>{const n=o`<div class="article-container"><div class="container text"><div class="bleed-m bleed-l"><div class="col-s-12 col-m-10 col-m-1-offset col-l-8 col-l-2-offset">${p(t.innerHTML)}</div></div></div></div>`;t.innerHTML="",k(n,t)})}bodyTemplate(e){return o`<div class="page container dva-page">${U()} ${W()} ${p(e)} ${V()}</div>`}renderLayout(e){const a=e.innerHTML,t=document.querySelector("header"),n=document.querySelector("footer"),i=e,l=document.querySelector("body");l&&(k(this.bodyTemplate(a),l),n==null||n.remove(),t==null||t.remove(),i.remove())}decorateTemplateAndTheme(){const e=b("template");e&&_(document.body,e);const a=b("theme");a&&_(document.body,a)}collectBlocks(e){const a=[];return e.querySelectorAll("[data-block-name]").forEach(n=>{a.push({name:n.dataset.blockName,element:n})}),a}async loadBlockModules(e){if((e.element.dataset.blockStatus??h.unloaded)===h.unloaded){e.element.dataset.blockStatus=h.loading;try{const t=await T(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));t.default&&await t.default(e.element),e.element.dataset.blockStatus=h.loaded}catch(t){e.element.dataset.blockStatus=h.error,console.error("An error occurred during module import:",t)}}}async loadBlockStyles(e){try{await this.loadCSS(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.css`)}catch{console.error(`problem with block '${e.name}' loading styles`)}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{w().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e,a){return new Promise((t,n)=>{if(document.querySelector(`head > link[href="${e}"]`))t(!0);else{const i=document.createElement("link");if(i.rel="stylesheet",i.href=e,i.onload=t,i.onerror=n,a!==void 0){const l=document.querySelector(`head > link[href$="${a}"]`);l&&l.before(i)}else document.head.append(i)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const n=this.collectBlocks(e).map(async i=>{this.lcpBlocks.includes(i.name)&&await Promise.all([this.loadBlockModules(i),this.loadBlockStyles(i)])});await Promise.all(n),this.showSection(e)}document.body.style.display=null;const a=document.querySelector("main img");await new Promise(t=>{a&&!a.complete?(a.setAttribute("loading","eager"),a.setAttribute("fetchpriority","high"),a.addEventListener("load",()=>t()),a.addEventListener("error",()=>t())):t()})}async loadBlock(e){const a=this.collectBlocks(e);if(!a.length){this.showSection(e);return}const t=[];for(const n of a)t.push(this.loadBlockModules(n),this.loadBlockStyles(n));await Promise.all(t),this.showSection(e)}}(async function(){const s=new M,e=new I(s);await new J(e,s).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
