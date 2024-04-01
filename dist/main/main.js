import{s as L,x as r,T as P,j as k}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as B,t as x}from"../__chunks__/property.0daVBkvz.js";import{o as p}from"../__chunks__/unsafe-html.tmuruS4o.js";import{r as d}from"../__chunks__/dva-e-icon.template.tppk8KWP.js";import"../__chunks__/dva-e-icon.oPSRiI_A.js";import"../__chunks__/dva-e-lazy-image.y3CU3ked.js";import"../__chunks__/dvag-m-c11-accordion.Cx6cDRua.js";import{_ as T}from"../__chunks__/preload-helper.hlDPvxQM.js";import{r as y}from"../__chunks__/dva-e-lazy-image.template.OYQsP62C.js";import"../__chunks__/cssClasses.3Op57w6j.js";import"../__chunks__/index.module.xxaaf2ft.js";import"../__chunks__/LazyConnectService.yBR27czX.js";import"../__chunks__/eventTypes.SwAZPC1U.js";import"../__chunks__/mediaQueries.0eOxrCUs.js";import"../__chunks__/if-defined.JfW-uEqn.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(n){return B({...n,state:!0,attribute:!1})}function D({input:n,specifier:e,htmlTag:a}){return n.split(e).map((t,s)=>s%2===1?`<${a}>${t}</${a}>`:t).join("")}class E{constructor(){this.runtimeCache=new Map}get(e){return this.runtimeCache.get(e)}set(e,a){this.runtimeCache.set(e,a)}has(e){return this.runtimeCache.has(e)}delete(e){this.runtimeCache.delete(e)}}class z{constructor(){this.requestPipeline=new Map,this.runtimeCache=new E}fetchJson(e,a={}){return this.fetchData(this.getCodeBasePath(e),a,this.getResponseJSON)}fetchText(e,a={}){return this.fetchData(this.getCodeBasePath(e),a,this.getResponseText)}async fetchData(e,a,t){const{cacheOptions:s}=a,i=this.getCachedData(e,s);if(i!==null)return i;const l=this.requestPipeline.get(e);if(l!==void 0)return t(await l);const o=fetch(e,a.fetchOptions);this.requestPipeline.set(e,o);const c=await o;this.requestPipeline.delete(e);const h=await t(c);return this.setCachedData(e,h,s),h}async getResponseJSON(e){return await e.clone().json()}async getResponseText(e){return await e.clone().text()}getCachedData(e,a){return(a==null?void 0:a.cacheType)==="runtime"?this.runtimeCache.get(e)??null:null}setCachedData(e,a,t){(t==null?void 0:t.cacheType)==="runtime"&&this.runtimeCache.set(e,a)}getCodeBasePath(e){const a=e.startsWith("/")?e:`/${e}`;return`${window.hlx.codeBasePath}${a}`}}const A=new z;var M=Object.defineProperty,F=Object.getOwnPropertyDescriptor,S=(n,e,a,t)=>{for(var s=t>1?void 0:t?F(e,a):e,i=n.length-1,l;i>=0;i--)(l=n[i])&&(s=(t?l(e,a,s):l(s))||s);return t&&s&&M(e,a,s),s};let f=class extends L{createRenderRoot(){return this}async firstUpdated(n){await this.fetchHeaderData()}async fetchHeaderData(){try{const n=await A.fetchJson("header.json",{cacheOptions:{cacheType:"runtime"}});this.headerData={leftCol:n.leftCol.data[0],rightCol:n.rightCol.data}}catch(n){console.error("HeaderComponent: ",n)}}render(){if(!this.headerData)return;const{leftCol:n,rightCol:e}=this.headerData,a=D({input:n.logoText,htmlTag:"strong",specifier:":::"}),t=p(a);return r`<a href="${n.logoLink}" class="logo">${t}</a><ul class="icons">${e.map(s=>r`<li><a href="${s.socialLink}" class="icon brands" aria-label="${s.socialLabel}">${d(s.socialIcon,"header-icon")} <span class="label">${s.socialLabel}</span></a></li>`)}</ul>`}};S([q()],f.prototype,"headerData",2);f=S([x("header-component")],f);function g(n){return n.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")}class I{readBlockConfig(e){const a={};return e.querySelectorAll(":scope > div").forEach(t=>{if(t.children){const s=[...t.children];if(s[1]){const i=s[1],l=g(s[0].textContent??"");let o="";if(i.querySelector("a")){const c=[...i.querySelectorAll("a")];c.length===1?o=c[0].href:o=c.map(h=>h.href)}else if(i.querySelector("img")){const c=[...i.querySelectorAll("img")];c.length===1?o=c[0].src:o=c.map(h=>h.src)}else if(i.querySelector("p")){const c=[...i.querySelectorAll("p")];c.length===1?o=c[0].textContent:o=c.map(h=>h.textContent)}else o=t.children[1].textContent;a[l]=o}}}),a}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const a=e.classList[0];if(a){e.classList.add("block"),e.dataset.blockName=a;const t=e.parentElement;t==null||t.classList.add(`${a}-wrapper`);const s=e.closest(".section");s&&s.classList.add(`${a}-container`)}}}function U(n){return g(n).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class R{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(a=>{this.adjustMarkup(a),this.processSectionMetaData(a)})}processSectionMetaData(e){const a=e.querySelector("div.section-metadata");if(a){const t=this.blockService.readBlockConfig(a);Object.keys(t).forEach(s=>{s==="style"?t.style.split(",").filter(l=>l).map(l=>g(l.trim())).forEach(l=>e.classList.add(l)):e.dataset[U(s)]=t[s]}),a.parentElement&&a.parentElement.remove()}}adjustMarkup(e){const a=[];let t=!1;[...e.children].forEach(s=>{if(s.tagName==="DIV"||!t){const i=document.createElement("div");a.push(i),t=s.tagName!=="DIV",t&&i.classList.add("default-content-wrapper")}a[a.length-1].append(s)}),a.forEach(s=>e.append(s)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(a=>{const t=a.parentElement;t&&t.classList.add("image","main")})}}const j=()=>r`<dvag-m-n01-header class="dvag-m-n01-header" vb-file-url="/async-includes/subbar.html"><div class="dvag-m-n01-header__logo-wrapper"><div class="dvag-m-n01-header__logo-mobile"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${d("dva-icon-header-logo-s")}</a></div><div class="dvag-m-n01-header__logo-desktop"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${d("dva-icon-header-logo-dvag-xl")}</a></div></div><div class="dvag-m-n01-header__menu-wrapper"><div class="dvag-m-n01-header__header-navigation-wrapper"><ul class="dvag-m-n01-header__header-navigation-list"><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Lorem">Lorem</a></li><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Ipsum">Ipsum</a></li></ul></div><a class="dvag-m-n01-header__burger-menu" href="#">${d("dva-icon-burger-24px")} <span class="dvag-m-n01-header__burger-label">Menü</span></a></div><div class="dvag-m-n01-header__navigation-wrapper"></div></dvag-m-n01-header>`,N=n=>n.label===void 0?"":r`<span class="dva-e-link__label">${n.label}</span>`,G=n=>n.iconID===void 0?"":r`<dva-e-icon class="dva-e-icon" icon-id="${n.iconID}"></dva-e-icon>`,v=n=>n.shouldRender===!1?"":r`<a class="dva-e-link${n.cssClasses?` ${n.cssClasses}`:""}" href="${n.target}" target="${n.newWindow!==!0?"_self":"_blank"}">${N(n)} ${G(n)}</a>`,K=()=>r`<h5 class="dvag-m-n02-footer__headline">Bestnoten in Beratung, Service und Karriere</h5><div class="dvag-m-n02-footer__awards"><a href="#">${y({src:"https://main--dva-showcase--ifahrentholz.hlx.page/assets/service-rating-footer.svg",cssClasses:"dvag-m-n02-footer__award-image"})} </a><a href="#">${y({src:"https://main--dva-showcase--ifahrentholz.hlx.page/assets/kundenchampions-footer.svg",cssClasses:"dvag-m-n02-footer__award-image"})}</a></div>`,H=[{headline:{label:"Unternehmen",link:"#"},items:[{label:"Über uns",link:"#"},{label:"Geschäftsleitung",link:"#"},{label:"Markenbotschafter",link:"#"},{label:"Struktur & Geschichte",link:"#"},{label:"Unternehmensbericht",link:"#"},{label:"Presseservice",link:"#"},{label:"Standorte",link:"#"},{label:"Gezielte und nachhaltige Hilfe",link:"#"}]},{headline:{label:"Beratung",link:"#"},items:[{label:"Unser Beratungsmodell",link:"#"},{label:"Leistungen für Privatkunden",link:"#"},{label:"Leistungen für Firmenkunden",link:"#"},{label:"Finanztipps",link:"#"},{label:"Produktpartner",link:"#"},{label:"Ansprechpartner finden",link:"#"},{label:"Nachhaltigkeit (EGS)",link:"#"}]},{headline:{label:"Erfahrungen & Bewertungen",link:"#"},items:[{label:"Kundenbewertungen",link:"#"},{label:"Zertifikate & Auszeichnungen",link:"#"}]},{headline:{label:"Karriere",link:"#"},items:[{label:"Karriere als selbstständiger Finanzcoach",link:"#"},{label:"Teamblog",link:"#"},{label:"Karriere in der Unternehmenszentrale",link:"#"}]},{headline:{label:"Unternehmen",link:"#"},items:[{label:"Über uns",link:"#"},{label:"Geschäftsleitung",link:"#"},{label:"Markenbotschafter",link:"#"},{label:"Struktur & Geschichte",link:"#"},{label:"Unternehmensbericht",link:"#"},{label:"Presseservice",link:"#"},{label:"Standorte",link:"#"},{label:"Gezielte und nachhaltige Hilfe",link:"#"}]},{headline:{label:"Beratung",link:"#"},items:[{label:"Unser Beratungsmodell",link:"#"},{label:"Leistungen für Privatkunden",link:"#"},{label:"Leistungen für Firmenkunden",link:"#"},{label:"Finanztipps",link:"#"},{label:"Produktpartner",link:"#"},{label:"Ansprechpartner finden",link:"#"},{label:"Nachhaltigkeit (EGS)",link:"#"}]},{headline:{label:"Erfahrungen & Bewertungen",link:"#"},items:[{label:"Kundenbewertungen",link:"#"},{label:"Zertifikate & Auszeichnungen",link:"#"}]},{headline:{label:"Karriere",link:"#"},items:[{label:"Karriere als selbstständiger Finanzcoach",link:"#"},{label:"Teamblog",link:"#"},{label:"Karriere in der Unternehmenszentrale",link:"#"}]}],V=[{icon:"dva-icon-instagram-24px"},{icon:"dva-icon-facebook-24px"},{icon:"dva-icon-tiktok-24px"},{icon:"dva-icon-linkedin-24px"},{icon:"dva-icon-xing-24px"},{icon:"dva-icon-youtube-24px"},{icon:"dva-icon-twitter-24px"}],$={navigationSections:H,socialLinks:V},J=()=>r`<h5 class="dvag-m-n02-footer__headline">Finden Sie uns in den sozialen Netzwerken</h5><div class="dvag-m-n02-footer__social-links">${$.socialLinks.map(n=>r`<a href="#" class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-e-button--rebrush dvag-m-n02-footer__social-link"><div class="dva-e-button__background"></div>${d(n.icon,"dva-e-button__icon")}</a>`)}</div>`,O=()=>r`<dvag-m-c11-accordion class="dvag-m-c11-accordion dvag-m-n02-footer__navigation" active-on-mq="1-3">${$.navigationSections.map(n=>r`<div class="dvag-m-c11-accordion__block"><button class="dvag-m-c11-accordion__toggle" tabindex="-1">${d("dva-icon-chevron-down-16px","dvag-m-c11-accordion__toggle-icon")} <span class="dvag-m-c11-accordion__toggle-label">${n.headline.label}</span></button><div class="dvag-m-c11-accordion__content"><div class="dvag-m-c11-accordion__content-wrapper"><ul class="dvag-m-n02-footer__list">${n.items.map(e=>r`<li class="dvag-m-n02-footer__list-item">${v({target:e.link,label:e.label})}</li>`)}</ul></div></div></div>`)}</dvag-m-c11-accordion>`,W=(n=!1)=>r`<footer class="dvag-m-n02-footer${n?" dvag-m-n02-footer--border-top":""}"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12">${O()}</div></div><div class="dva-grid-row"><div class="dva-grid-col-1-12 dva-grid-col-4-6">${K()}</div><div class="dva-grid-col-1-12 dva-grid-col-4-6">${J()}</div></div></div><div class="dvag-m-n02-footer__skew-area"><div class="dvag-h-skew--in"></div><div class="dvag-m-skewed-box__content"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><div class="dvag-m-n02-footer__legal-links">${v({target:"#",label:"Datenschutz",cssClasses:"dvag-m-n02-footer__legal-link"})} ${v({target:"#",label:"Impressum",cssClasses:"dvag-m-n02-footer__legal-link"})} ${v({target:"#",label:"Cookies bearbeiten",cssClasses:"dvag-m-n02-footer__legal-link"})}</div><p class="dvag-m-n02-footer__copyright">© 2023 Deutsche Vermögensberatung AG (DVAG)</p></div></div></div></div></div></footer>`;function b(n,e=document){const a=n&&n.includes(":")?"property":"name",s=[...e.head.querySelectorAll(`meta[${a}="${n}"]`)].map(i=>i.content).join(", ");return s.length?s:""}const Z=()=>b("breadcrumb")!=="true"?P:r`<div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><nav class="dva-m-breadcrump-navigation"><ul class="dva-m-breadcrump-navigation__list"><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Startseite</span> </a>${d("dva-icon-chevron-right")}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Allfinanzberatung</span> </a>${d("dva-icon-chevron-right")}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Firmenkunden</span> </a>${d("dva-icon-chevron-right")}</li></ul></nav></div></div></div>`,C=()=>{const n=document.querySelector("#main");return n?window.location.href==="about:srcdoc"&&n.classList.contains("sidekick-library"):!1},w=(n,e)=>{e.split(",").forEach(a=>{n.classList.add(g(a.trim()))})},Q={mainTsPath:"src/main.ts",mainScssPath:"src/styles/index.scss",iconsDirPath:"./public/icons",iconsTypesPath:"./src/icons.types.ts",fontsScssPath:"src/styles/fonts.scss",lazyStylesScssPath:"src/styles/lazy-styles.scss",sidekickLibraryStylesScssPath:"src/styles/sidekick-library-styles.scss"};function _(){return C()?window.parent.location:window.location}const u=class u{};u.unloaded="unloaded",u.loading="loading",u.loaded="loaded",u.error="error";let m=u;class X{constructor(e,a){this.sectionService=e,this.blockService=a,this.lcpBlocks=["article-stage","article-header","article-overview"],this.init=async()=>{this.setup(),await this.loadEager(),await this.loadLazy()},this.loadEager=async()=>{document.documentElement.lang="en",this.decorateTemplateAndTheme();const t=document.querySelector("main");if(t){this.sectionService.init(t),this.blockService.decorateBlocks(t),this.decorateDefaultContent(t),this.renderLayout(t),setTimeout(()=>{document.body.classList.add("show")},100),await this.waitForLCP();try{(window.innerWidth>=900||sessionStorage.getItem("fonts-loaded"))&&await this.loadFonts()}catch{}}},this.loadLazy=async()=>{const{lazyStylesScssPath:t,sidekickLibraryStylesScssPath:s,fontsScssPath:i}=Q;try{t&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`),s&&C()&&await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`),i&&await this.loadFonts(),await this.loadCSS(`${window.hlx.codeBasePath}/dist/legacyStyles/legacyStyles.css`,`${window.hlx.codeBasePath}/dist/styles/styles.css`),await this.loadBlocks()}catch(l){console.error("Load lazy error: ",l);try{await this.loadBlocks()}catch(o){console.error("Load blocks error: ",o)}}},this.loadBlocks=async()=>{const s=[...document.querySelectorAll(".section")].map(i=>this.loadBlock(i));await Promise.all(s)}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(_().search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(a){console.log(a)}}decorateDefaultContent(e){const a=e.querySelectorAll(".default-content-wrapper");a&&a.forEach(t=>{const s=r`<div class="article-container"><div class="container text"><div class="bleed-m bleed-l"><div class="col-s-12 col-m-10 col-m-1-offset col-l-8 col-l-2-offset">${p(t.innerHTML)}</div></div></div></div>`;t.innerHTML="",k(s,t)})}bodyTemplate(e){return r`<div class="page container dva-page">${j()} ${Z()} ${p(e)} ${W()}</div>`}renderLayout(e){const a=e.innerHTML,t=document.querySelector("header"),s=document.querySelector("footer"),i=e,l=document.querySelector("body");l&&(k(this.bodyTemplate(a),l),s==null||s.remove(),t==null||t.remove(),i.remove())}decorateTemplateAndTheme(){const e=b("template");e&&w(document.body,e);const a=b("theme");a&&w(document.body,a)}collectBlocks(e){const a=[];return e.querySelectorAll("[data-block-name]").forEach(s=>{a.push({name:s.dataset.blockName,element:s})}),a}async loadBlockModules(e){if((e.element.dataset.blockStatus??m.unloaded)===m.unloaded){e.element.dataset.blockStatus=m.loading;try{const t=await T(()=>import(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.js`),__vite__mapDeps([]));t.default&&await t.default(e.element),e.element.dataset.blockStatus=m.loaded}catch(t){e.element.dataset.blockStatus=m.error,console.error("An error occurred during module import:",t)}}}async loadBlockStyles(e){try{await this.loadCSS(`${window.hlx.codeBasePath}/dist/${e.name}/${e.name}.css`)}catch{console.error(`problem with block '${e.name}' loading styles`)}}showSection(e){e.style.removeProperty("display")}async loadFonts(){await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);try{_().hostname.includes("localhost")||sessionStorage.setItem("fonts-loaded","true")}catch{}}async loadCSS(e,a){return new Promise((t,s)=>{if(document.querySelector(`head > link[href="${e}"]`))t(!0);else{const i=document.createElement("link");if(i.rel="stylesheet",i.href=e,i.onload=t,i.onerror=s,a!==void 0){const l=document.querySelector(`head > link[href="${a}"]`);l&&l.before(i)}else document.head.append(i)}})}async waitForLCP(){const e=document.querySelector(".section");if(e){const s=this.collectBlocks(e).map(async i=>{this.lcpBlocks.includes(i.name)&&await Promise.all([this.loadBlockModules(i),this.loadBlockStyles(i)])});await Promise.all(s),this.showSection(e)}document.body.style.display=null;const a=document.querySelector("main img");await new Promise(t=>{a&&!a.complete?(a.setAttribute("loading","eager"),a.setAttribute("fetchpriority","high"),a.addEventListener("load",()=>t()),a.addEventListener("error",()=>t())):t()})}async loadBlock(e){const a=this.collectBlocks(e);if(!a.length){this.showSection(e);return}const t=[];for(const s of a)t.push(this.loadBlockModules(s),this.loadBlockStyles(s));await Promise.all(t),this.showSection(e)}}(async function(){const n=new I,e=new R(n);await new X(e,n).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
