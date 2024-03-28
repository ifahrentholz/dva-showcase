import{c as $}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{x as m,j as M}from"../__chunks__/lit-element.XkUWx5ik.js";import{U as b,h as O,I as x,L as v,b as h,r as z,p as w,S as q,E as N,O as P,M as j,R as B}from"../__chunks__/cssClasses.J1gwymc8.js";import{l as S,e as u,g as V,a as r,i as c,o as C,r as l,b as L,h as y}from"../__chunks__/index.module.ykvUkmFt.js";import{m as _}from"../__chunks__/mediaQueries.0eOxrCUs.js";import{I as g,M as E}from"../__chunks__/eventTypes.wEZtmomJ.js";import"../__chunks__/dva-e-lazy-image.V8eMwpUl.js";import"../__chunks__/dva-e-icon.dvBAQYYn.js";import"../__chunks__/dva-e-lazy-image.template.1izYfAEc.js";import"../__chunks__/if-defined.JfW-uEqn.js";import"../__chunks__/preload-helper.hlDPvxQM.js";const D=e=>e.fallbackSrc!==void 0&&e.fallbackSrc!=="undefined"?e.fallbackSrc:"",A=e=>{let t="";return e.forEach(i=>{t+=`<video class="dva-e-lazy-video__video dva-js-lazy-video__video"
                      autoplay muted loop playsinline
                      poster="${D(i)}">`,i.sources.forEach(s=>{const a=s.outerHTML;t+=a}),t+="</video>"}),t},Q=e=>`${A(e.sources)}`;var F=Object.defineProperty,T=Object.getOwnPropertyDescriptor,k=(e,t,i,s)=>{for(var a=s>1?void 0:s?T(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(s?o(t,i,a):o(a))||a);return s&&a&&F(t,i,a),a};let p=class extends b{constructor(){super({ui:{video:".dva-js-lazy-video__video"},events:[{event:g,target:"this",handler:"handleIntersectionChange"},{event:E,target:"window",handler:"handleMQChange"},{event:"beforeunload",target:"window",handler:"unloadVideo"},{event:"pageshow",target:"window",handler:"handleVideoLoad"}],initialStates:{activeRendition:null},reactions:{activeRendition:["loadVideo"]}}),this.viewportObserver=S.getInstance()}renderingTemplate(){return Q({sources:this.sources})}afterComponentRender(){this.viewportObserver.observe(this)}get sources(){if(this.videoSources)return this.videoSources;const e=u(this,"source"),t=new Map;return e.forEach(s=>{let a=s.dataset.dvaMq;if(a===void 0&&(a="1-5"),t.has(a)){const n=t.get(a);n.sources.push(s),t.set(a,n)}else t.set(a,{sources:[s],mqs:this.getMQs(a)})}),u(this,"img").forEach(s=>{let a=s.dataset.dvaMq;a===void 0&&(a="1-5");const n=s.dataset.src;if(t.has(a)&&n!==void 0){const o=t.get(a);o.fallbackSrc=n,t.set(a,o)}}),this.videoSources=t,t}get activeVideo(){const e=parseInt(V(_).slice(2),10),t=[];let i=0;return this.sources.forEach(s=>{O(s.mqs,e)&&t.push(i),i+=1}),t.length?t[0]:0}handleIntersectionChange(){this.viewportObserver.unobserve(this),r(this,x),c(this,g,this.handleIntersectionChange,this),this.setState({activeRendition:this.activeVideo})}handleMQChange(){this.setState({activeRendition:this.activeVideo})}handleVideoLoad(e){c(e.target,"loadeddata",this.handleVideoLoad,this),r(this,v),r(this,h),r(this.ui.video[this.state.activeRendition],v)}handleVideoLoadingError(e){c(e.target,"error",this.handleVideoLoadingError,this);const t=this.ui.video[this.state.activeRendition];r(this,v),r(this,h),r(t,v)}loadVideo(){if(this.ui.video.length<=this.state.activeRendition)return;this.unloadVideo();const e=this.ui.video[this.state.activeRendition],t=u(e,"source");C(e,"loadeddata",this.handleVideoLoad,this),C(t[t.length-1],"error",this.handleVideoLoadingError,this),t.forEach(i=>{const s=i.dataset.src;s!==void 0&&i.setAttribute("src",s)}),e.load()}unloadVideo(){l(this.ui.video,v),l(this,v),l(this,h)}getMQs(e){let t=[];return z(e).split(",").forEach(i=>{if(i.length===1)t=w(t,parseInt(i,10));else if(i.length>1){const s=i.split("-"),a=parseInt(s[0],10),n=parseInt(s[1],10);for(let o=a;o<=n;o++)t=w(t,o)}}),t}};p=k([q(_)],p);customElements.define("dva-e-lazy-video",p);const H=(e,t,i)=>m`<dva-e-icon class="dva-e-rating-star${e!=="no"?` dva-e-rating-star--${e}`:""}" icon-id="dva-icon-star" ?half-filled="${e==="half"}" @click="${()=>{i.editMode&&(i.rating=t+1)}}"></dva-e-icon>`,U=(e,t)=>t+.5<e,W=(e,t)=>t+1>e&&t+.1<=e,G=e=>new Array(5).fill(!0).map((t,i)=>U(e.curRating,i)?"full":W(e.curRating,i)?"half":"no"),K=e=>m`<div class="dva-m-rating-box__ratingstar-wrapper">${G(e).map((t,i)=>H(t,i,e.ratingBox))}</div><span class="dvag-e-form-field__error"><dva-e-icon class="dvag-e-form-field__error-icon" icon-id="dva-icon-error-16px"></dva-e-icon>Bitte bewerten Sie.</span>`;var Z=Object.defineProperty,J=Object.getOwnPropertyDescriptor,X=(e,t,i,s)=>{for(var a=s>1?void 0:s?J(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(s?o(t,i,a):o(a))||a);return s&&a&&Z(t,i,a),a};class I extends b{constructor(){super({events:[{event:g,target:"this",handler:"handleIntersectionChange"}],initialStates:{loaded:!1,inValidationMode:!1},reactions:{inValidationMode:["renderComponent"]}}),this.viewportObserver=S.getInstance(),this.editMode=!1}static get observedAttributes(){return["rating"]}attributeChangedCallback(t,i,s){t==="rating"&&i!==s&&this.state.initialized&&this.renderComponent()}afterComponentRender(){this.viewportObserver.observe(this)}get rating(){return parseFloat((this.getAttribute("rating")||"5").replace(",","."))}set rating(t){this.setAttribute("rating",t.toString())}get name(){return this.getAttribute("name")||""}handleIntersectionChange(){this.viewportObserver.unobserve(this),c(this,g,this.handleIntersectionChange,this),this.state.loaded||this.renderComponent()}renderComponent(){this.state.inValidationMode&&L(this,N,this.rating===0),M(K({curRating:this.rating,ratingBox:this}),this)}validate(){this.editMode&&this.setState({inValidationMode:!0})}}X([P],I.prototype,"editMode",2);customElements.define("dva-m-rating-box",I);var Y=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,R=(e,t,i,s)=>{for(var a=s>1?void 0:s?ee(t,i):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(s?o(t,i,a):o(a))||a);return s&&a&&Y(t,i,a),a};class f extends b{afterComponentRender(){this.checkButtonModifier(),this.setButtonClass()}checkButtonModifier(){y(this,"dvag-m-c04-vb-stage--no-vb-image")&&r(this.stageCta,"dva-e-button--white")}setButtonClass(){if(y(this,"dvag-m-c04-vb-stage--no-vb-image"))return;const t=V(_);t==="MQ4"||t==="MQ5"?r(this.stageCta,"dva-e-button--white"):l(this.stageCta,"dva-e-button--white")}}R([j(".dvag-m-c04-vb-stage__cta")],f.prototype,"stageCta",2);R([B("window",E)],f.prototype,"setButtonClass",1);customElements.define("dvag-m-c04-vb-stage",f);const te=e=>{var t,i,s,a,n;return m`<div class="c04-vbstage dvag-h-margin-bottom--none"><dvag-m-c04-vb-stage class="dvag-m-c04-vb-stage" id="c04-vb-stage"><div class="dvag-m-c04-vb-stage__background-wrapper"><dva-e-lazy-video class="dva-e-lazy-video dva-h-preload dva-h-preload__4-3--mq-1-3 dva-h-preload__21-9--mq-4-and-up dvag-m-c04-vb-stage__background-video dva-state-invp dva-state-loaded dva-state-initialized"><video class="dva-e-lazy-video__video dva-js-lazy-video__video" autoplay="" muted="" loop="" playsinline="" poster="${(t=e.videoFallback)==null?void 0:t.src}"><source data-src="video/${e.videoName}.754.564.mp4" type="video/mp4" data-dva-mq="1-3"></video><video class="dva-e-lazy-video__video dva-js-lazy-video__video dva-state-loaded" autoplay="" muted="" loop="" playsinline="" poster="${(i=e.videoFallback)==null?void 0:i.src}"><source data-src="video/${e.videoName}.1200.500.mp4" type="video/mp4" data-dva-mq="4-5" poster="${(s=e.videoFallback)==null?void 0:s.src}"></video></dva-e-lazy-video><div class="dvag-m-c04-vb-stage__skewed-box"><div class="dva-h-skew--in"></div><div class="dva-m-skewed-box__content"></div><div class="dva-h-skew--out"></div></div></div><div class="dvag-m-c04-vb-stage__content-wrapper"><div class="dvag-m-c04-vb-stage__vb-image"><div class="dvag-m-c04-vb-stage__vb-image-wrapper"><dva-e-lazy-image class="dva-e-lazy-image dva-js-lazy-image dvag-m-c04-vb-stage__vb-portrait dva-state-initialized dva-state-invp dva-state-loaded" src="${(a=e.image)==null?void 0:a.src}" alt="${(n=e.image)==null?void 0:n.alt}" aspect-ratio="1:1"></dva-e-lazy-image></div></div><div class="dvag-m-c04-vb-stage__vb-content"><div class="dvag-m-c04-vb-stage__vb-inner-content"><div class="dvag-m-c04-vb-stage__rating-wrapper"><dva-m-rating-box class="dva-m-rating-box" rating="${e.rating}"><div class="dva-m-rating-box__ratingstar-wrapper"><dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon><dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon><dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon><dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon><dva-e-icon icon-id="dva-icon-star" class="dva-e-rating-star dva-e-rating-star--full"></dva-e-icon></div><span class="dvag-e-form-field__error"><dva-e-icon class="dvag-e-form-field__error-icon" icon-id="dva-icon-error-16px"></dva-e-icon>Bitte bewerten Sie.</span></dva-m-rating-box><p class="dvag-m-c04-vb-stage__rating-label">5 von 5 Sternen<a class="dvag-m-c04-vb-stage__rating-link" href="/benjamin.rube/ueber-uns/alle-bewertungen.html">15 Bewertungen</a></p></div><p class="dvag-m-c04-vb-stage__vb-name">${e.name}</p><p class="dvag-m-c04-vb-stage__vb-info">${e.description}</p><p class="dvag-m-c04-vb-stage__vb-title">${e.titel}</p><dvag-e-c26-vb-contact-overlay-toggle class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small dvag-m-c04-vb-stage__cta dva-e-button--white dva-state-active" id="contact_c04-vb-stage" no-cookie-hide="no-cookie-hide"><div class="dva-e-button__background"></div><span class="dva-e-button__label">Kontakt aufnehmen</span><dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-contact-new"></dva-e-icon></dvag-e-c26-vb-contact-overlay-toggle></div></div></div></dvag-m-c04-vb-stage></div>`},d=(e,t)=>{var s;return((s=e.children[t].textContent)==null?void 0:s.trim())??""},ae=(e,t)=>parseInt(d(e,t),10)||0,ie=(e,t)=>parseFloat(d(e,t))||0,se=(e,t)=>{const i=ie(e,t),s=Math.min(Math.max(i,.5),5);return Math.round(s*2)/2};function me(e){const t={image:e.children[0].querySelector("img")??void 0,videoFallback:e.children[1].querySelector("img")??void 0,videoName:d(e,2),name:d(e,3),description:d(e,4),titel:d(e,5),rating:se(e,6),shared:ae(e,7),buttonLabel:d(e,8)};console.log(t),$(e),M(te(t),e)}export{me as default};
//# sourceMappingURL=vb-stage.js.map
