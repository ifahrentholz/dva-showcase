import{a as h,j as L,x as p}from"../__chunks__/lit-element.f0zsYA8R.js";import{u as b}from"../__chunks__/unsafe-html.rS_igv63.js";import{i as f}from"../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";import{e as m,i as S}from"../__chunks__/directive.xgBC_cM0.js";import"../__chunks__/lit-html.vGJGB7fL.js";const d=e=>{const t={dataLibraryId:void 0,innerHTML:"",href:""};if(!e)return t;t.innerHTML=e.innerHTML,e instanceof HTMLAnchorElement&&e.href!==""&&(t.href=e.href);const r=e.getAttribute("data-library-id");return f()&&r!==null&&(t.dataLibraryId=r),t};class T extends S{update(t,r){this.part=t;const i=r[0];return this.render(i)}render(t){var s;if(f()===!1)return h;const r=(s=this.part)==null?void 0:s.element,{dataLibraryId:i,href:n}=t;return i&&(r==null||r.setAttribute("data-library-id",i)),i&&(r==null||r.setAttribute("contenteditable","true")),n&&r instanceof HTMLAnchorElement&&(r==null||r.setAttribute("href",n)),h}}const o=m(T),$=e=>{const{headline:t,subline:r,texts:i,buttons:n,picture:s}=e;return p`<div id="banner"><div class="content"><header><h1 ${o(t)}>${t.innerHTML}</h1><p ${o(r)}>${r.innerHTML}</p></header>${i==null?void 0:i.map(a=>p`<p ${o(a)}>${a.innerHTML}</p>`)}<ul class="actions">${n==null?void 0:n.map(a=>p`<li><a href="${a.href}" class="button big" ${o(a)}>${a.innerHTML}</a></li>`)}</ul></div><span class="image object">${s??b(s)}</span></div>`};function q(e){const t=e.querySelector("img");t&&t.setAttribute("loading","eager");const r=e.querySelector("div"),i=e.children[1],n=d(r==null?void 0:r.querySelector("h1")),s=d(r==null?void 0:r.querySelector("h3")),a=r?[...r.querySelectorAll("p")].map(l=>d(l)):[],y=i?[...i.querySelectorAll("a")].map(l=>d(l)):[],c=(r==null?void 0:r.querySelector("picture"))||void 0,u=c==null?void 0:c.querySelector("img");u==null||u.setAttribute("loading","eager"),e.innerHTML="",e.style.removeProperty("display"),L($({headline:n,subline:s,texts:a,buttons:y,picture:c}),e)}export{q as default};
//# sourceMappingURL=banner.js.map
