import{c as M}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as S,x as $}from"../__chunks__/lit-element.XkUWx5ik.js";import{U as V,h as z,r as x,p as _,S as R,M as q,R as O}from"../__chunks__/component.module.D5fmAfIh.js";import{l as L,j as l,b as C,a as r,c as h,o as f,r as c,h as b}from"../__chunks__/index.module.BEmWgxQc.js";import{I as P,L as v,c as g}from"../__chunks__/cssClasses.CIN72OsW.js";import{m as u}from"../__chunks__/mediaQueries.0eOxrCUs.js";import{I as w,M as E}from"../__chunks__/eventTypes.voneREpA.js";import"../__chunks__/dva-m-rating-box.4qyCp2PZ.js";import"../__chunks__/dva-e-lazy-image.w6JM_mNt.js";import"../__chunks__/dva-e-icon.JvN5hF7V.js";import"../__chunks__/dva-e-lazy-image.template.ZrSM01wa.js";import"../__chunks__/if-defined.JfW-uEqn.js";import"../__chunks__/dva-e-icon.template.tppk8KWP.js";import"../__chunks__/preload-helper.hlDPvxQM.js";import"../__chunks__/LazyConnectService.yBR27czX.js";const j=t=>t.fallbackSrc!==void 0&&t.fallbackSrc!=="undefined"?t.fallbackSrc:"",N=t=>{let e="";return t.forEach(i=>{e+=`<video class="dva-e-lazy-video__video dva-js-lazy-video__video"
                      autoplay muted loop playsinline
                      poster="${j(i)}">`,i.sources.forEach(s=>{const a=s.outerHTML;e+=a}),e+="</video>"}),e},B=t=>`${N(t.sources)}`;var Q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,T=(t,e,i,s)=>{for(var a=s>1?void 0:s?D(e,i):e,o=t.length-1,d;o>=0;o--)(d=t[o])&&(a=(s?d(e,i,a):d(a))||a);return s&&a&&Q(e,i,a),a};let p=class extends V{constructor(){super({ui:{video:".dva-js-lazy-video__video"},events:[{event:w,target:"this",handler:"handleIntersectionChange"},{event:E,target:"window",handler:"handleMQChange"},{event:"beforeunload",target:"window",handler:"unloadVideo"},{event:"pageshow",target:"window",handler:"handleVideoLoad"}],initialStates:{activeRendition:null},reactions:{activeRendition:["loadVideo"]}}),this.viewportObserver=L.getInstance()}renderingTemplate(){return B({sources:this.sources})}afterComponentRender(){this.viewportObserver.observe(this)}get sources(){if(this.videoSources)return this.videoSources;const t=l(this,"source"),e=new Map;return t.forEach(s=>{let a=s.dataset.dvaMq;if(a===void 0&&(a="1-5"),e.has(a)){const o=e.get(a);o.sources.push(s),e.set(a,o)}else e.set(a,{sources:[s],mqs:this.getMQs(a)})}),l(this,"img").forEach(s=>{let a=s.dataset.dvaMq;a===void 0&&(a="1-5");const o=s.dataset.src;if(e.has(a)&&o!==void 0){const d=e.get(a);d.fallbackSrc=o,e.set(a,d)}}),this.videoSources=e,e}get activeVideo(){const t=parseInt(C(u).slice(2),10),e=[];let i=0;return this.sources.forEach(s=>{z(s.mqs,t)&&e.push(i),i+=1}),e.length?e[0]:0}handleIntersectionChange(){this.viewportObserver.unobserve(this),r(this,P),h(this,w,this.handleIntersectionChange,this),this.setState({activeRendition:this.activeVideo})}handleMQChange(){this.setState({activeRendition:this.activeVideo})}handleVideoLoad(t){h(t.target,"loadeddata",this.handleVideoLoad,this),r(this,v),r(this,g),r(this.ui.video[this.state.activeRendition],v)}handleVideoLoadingError(t){h(t.target,"error",this.handleVideoLoadingError,this);const e=this.ui.video[this.state.activeRendition];r(this,v),r(this,g),r(e,v)}loadVideo(){if(this.ui.video.length<=this.state.activeRendition)return;this.unloadVideo();const t=this.ui.video[this.state.activeRendition],e=l(t,"source");f(t,"loadeddata",this.handleVideoLoad,this),f(e[e.length-1],"error",this.handleVideoLoadingError,this),e.forEach(i=>{const s=i.dataset.src;s!==void 0&&i.setAttribute("src",s)}),t.load()}unloadVideo(){c(this.ui.video,v),c(this,v),c(this,g)}getMQs(t){let e=[];return x(t).split(",").forEach(i=>{if(i.length===1)e=_(e,parseInt(i,10));else if(i.length>1){const s=i.split("-"),a=parseInt(s[0],10),o=parseInt(s[1],10);for(let d=a;d<=o;d++)e=_(e,d)}}),e}};p=T([R(u)],p);customElements.define("dva-e-lazy-video",p);var A=Object.defineProperty,H=Object.getOwnPropertyDescriptor,I=(t,e,i,s)=>{for(var a=s>1?void 0:s?H(e,i):e,o=t.length-1,d;o>=0;o--)(d=t[o])&&(a=(s?d(e,i,a):d(a))||a);return s&&a&&A(e,i,a),a};class m extends V{afterComponentRender(){this.checkButtonModifier(),this.setButtonClass()}checkButtonModifier(){b(this,"dvag-m-c04-vb-stage--no-vb-image")&&r(this.stageCta,"dva-e-button--white")}setButtonClass(){if(b(this,"dvag-m-c04-vb-stage--no-vb-image"))return;const e=C(u);e==="MQ4"||e==="MQ5"?r(this.stageCta,"dva-e-button--white"):c(this.stageCta,"dva-e-button--white")}}I([q(".dvag-m-c04-vb-stage__cta")],m.prototype,"stageCta",2);I([O("window",E)],m.prototype,"setButtonClass",1);customElements.define("dvag-m-c04-vb-stage",m);const y=t=>`${window.hlx.codeBasePath}/dist/video/${t}`,U=({description:t,image:e,name:i,rating:s,titel:a,videoFallback:o,videoName:d})=>$`<div class="c04-vbstage dvag-h-margin-bottom--none"><dvag-m-c04-vb-stage class="dvag-m-c04-vb-stage" id="c04-vb-stage"><div class="dvag-m-c04-vb-stage__background-wrapper"><dva-e-lazy-video class="dva-e-lazy-video dva-h-preload dva-h-preload__4-3--mq-1-3 dva-h-preload__21-9--mq-4-and-up dvag-m-c04-vb-stage__background-video dva-state-invp dva-state-loaded dva-state-initialized"><video class="dva-e-lazy-video__video dva-js-lazy-video__video" autoplay="" muted="" loop="" playsinline="" poster="${o==null?void 0:o.src}"><source data-src="${y(d)}.754.564.mp4" type="dist/video/mp4" data-dva-mq="1-3"></video><video class="dva-e-lazy-video__video dva-js-lazy-video__video dva-state-loaded" autoplay="" muted="" loop="" playsinline="" poster="${o==null?void 0:o.src}"><source data-src="${y(d)}.1200.500.mp4" type="video/mp4" data-dva-mq="4-5" poster="${o==null?void 0:o.src}"></video></dva-e-lazy-video><div class="dvag-m-c04-vb-stage__skewed-box"><div class="dva-h-skew--in"></div><div class="dva-m-skewed-box__content"></div><div class="dva-h-skew--out"></div></div></div><div class="dvag-m-c04-vb-stage__content-wrapper"><div class="dvag-m-c04-vb-stage__vb-image"><div class="dvag-m-c04-vb-stage__vb-image-wrapper"><dva-e-lazy-image class="dva-e-lazy-image dva-js-lazy-image dvag-m-c04-vb-stage__vb-portrait dva-state-initialized dva-state-invp dva-state-loaded" src="${e==null?void 0:e.src}" alt="${e==null?void 0:e.alt}" aspect-ratio="1:1"></dva-e-lazy-image></div></div><div class="dvag-m-c04-vb-stage__vb-content"><div class="dvag-m-c04-vb-stage__vb-inner-content"><div class="dvag-m-c04-vb-stage__rating-wrapper"><dva-m-rating-box class="dva-m-rating-box" rating="${s}"><div class="dva-m-rating-box__ratingstar-wrapper"></div><span class="dvag-e-form-field__error"><dva-e-icon class="dvag-e-form-field__error-icon" icon-id="dva-icon-error-16px"></dva-e-icon>Bitte bewerten Sie.</span></dva-m-rating-box><p class="dvag-m-c04-vb-stage__rating-label">5 von 5 Sternen<a class="dvag-m-c04-vb-stage__rating-link" href="#">15 Bewertungen</a></p></div><p class="dvag-m-c04-vb-stage__vb-name">${i}</p><p class="dvag-m-c04-vb-stage__vb-info">${t}</p><p class="dvag-m-c04-vb-stage__vb-title">${a}</p><dvag-e-c26-vb-contact-overlay-toggle class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dvag-m-c04-vb-stage__cta dva-e-button--white dva-state-active" id="contact_c04-vb-stage" no-cookie-hide="no-cookie-hide"><div class="dva-e-button__background"></div><span class="dva-e-button__label">Kontakt aufnehmen</span><dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-contact-new"></dva-e-icon></dvag-e-c26-vb-contact-overlay-toggle></div></div></div></dvag-m-c04-vb-stage></div>`,n=(t,e)=>{var s;return((s=t.children[e].textContent)==null?void 0:s.trim())??""},W=(t,e)=>parseInt(n(t,e),10)||0,G=(t,e)=>parseFloat(n(t,e))||0,K=(t,e)=>{const i=G(t,e),s=Math.min(Math.max(i,.5),5);return Math.round(s*2)/2};function ve(t){const e={image:t.children[0].querySelector("img")??void 0,videoFallback:t.children[1].querySelector("img")??void 0,videoName:n(t,2),name:n(t,3),description:n(t,4),titel:n(t,5),rating:K(t,6),shared:W(t,7),buttonLabel:n(t,8)};M(t),S(U(e),t)}export{ve as default};
//# sourceMappingURL=vb-stage.js.map