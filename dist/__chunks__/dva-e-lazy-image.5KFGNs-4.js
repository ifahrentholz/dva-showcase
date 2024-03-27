import{U as z,I as u,H as g,a as b,L as _,b as w,S as f}from"./cssClasses.-Nv2SymR.js";import{a as s,r as m,b as p,o as v}from"./index.module.s_GEwl_l.js";import{x as y,j as c}from"./lit-element.XkUWx5ik.js";import{m as k}from"./mediaQueries.0eOxrCUs.js";import{o}from"./if-defined.JfW-uEqn.js";class I{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(a=>this.handleIntersectionChange(a))}subscribe(a,i){this.componentMap.set(a,i),this.intersectionObserver.observe(a)}unsubscribe(a){this.intersectionObserver.unobserve(a),this.componentMap.delete(a)}handleIntersectionChange(a){a.forEach(i=>{const r=i.target;if(!i.isIntersecting||!this.componentMap.has(r))return;const t=this.componentMap.get(r);this.unsubscribe(r),t()})}}const A=new I,L=e=>e===void 0?"":` ${e}`,C=':host{display:block}.dva-e-lazy-image__mask{position:relative;overflow:hidden;width:100%;height:0;pointer-events:none}.dva-e-lazy-image__mask--16-9{padding-bottom:56.25%}.dva-e-lazy-image__mask--21-9{padding-bottom:42.8571429%}.dva-e-lazy-image__mask--9-16{padding-bottom:177.78%}.dva-e-lazy-image__mask--4-3{padding-bottom:75%}.dva-e-lazy-image__mask--2-3{padding-bottom:150%}.dva-e-lazy-image__mask--1-1{padding-bottom:100%}.dva-e-lazy-image__mask--2-1{padding-bottom:50%}.dva-e-lazy-image__wrapper{opacity:1;line-height:0;transition:opacity .3s ease-in-out}.dva-e-lazy-image__wrapper.dva-state-hidden{display:none}.dva-e-lazy-image__wrapper.dva-state-loading{position:relative;min-height:200px;opacity:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper.dva-state-loading{position:initial;min-height:initial}.dva-e-lazy-image__img{width:100%}.dva-e-lazy-image__wrapper--has-overwidth .dva-e-lazy-image__img{width:inherit;height:100%;object-fit:cover;object-position:50% 50%}.dva-e-lazy-image__no-ratio,.dva-e-lazy-image__no-ratio .dva-e-lazy-image__wrapper{width:inherit;height:inherit}.dva-e-lazy-image__no-ratio .dva-e-lazy-image__img{width:inherit;max-width:100%;height:inherit}.dva-e-lazy-image__cover{position:absolute;top:0;left:0;width:100%;height:100%}.dva-e-lazy-image__cover .dva-e-lazy-image__img{object-fit:cover}.dva-e-lazy-image__contain .dva-e-lazy-image__img{object-fit:contain;object-position:100% 100%}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:42.8571428571%;pointer-events:none}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:56.25%;pointer-events:none}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:177.7777777778%;pointer-events:none}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:75%;pointer-events:none}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:150%;pointer-events:none}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:50%;pointer-events:none}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:100%;pointer-events:none}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper{position:absolute;width:100%;height:auto}.dva-e-lazy-image--circle{overflow:hidden;width:100%;padding:4px;border:1px solid #c8aa22;border-radius:100%;background:#fff}.dva-e-lazy-image--circle .dva-e-lazy-image__mask{display:block;overflow:hidden;width:100%;border-radius:100%}',S=e=>e==="cover"?"cover":e==="contain"?"contain":"fill",E=e=>e==="contain"?"100% 100%":"50% 50%",O=e=>e==="circle"?"dva-e-lazy-image--circle":"",$=e=>e==="21:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9":e==="16:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9":e==="4:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3":e==="1:1"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1":e==="2:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3":e==="9:16"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--9-16":e==="cover"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__cover":e==="contain"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__contain":"dva-e-lazy-image__no-ratio",h=e=>y`
    <style>
      ${C}
    </style>
    <!--<div class="${O(e.wrapper)}">-->
    <div class="${$(e.aspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src="${e.fallbackImg}"
          srcset="${e.srcset}"
          alt="${e.alt}"
          sizes="${e.sizes}"
          data-object-fit=${S(e.aspectRatio)}
          data-object-position=${E(e.aspectRatio)}
        />
      </div>
    </div>
    <!--</div>-->
  `,U=e=>y`
    <dva-e-lazy-image
      class="dva-e-lazy-image dva-js-lazy-image${L(e.cssClasses)}"
      src="${e.src}"
      alt=${o(e.alt)}
      srcset="${o(e.srcset)}"
      sizes="${o(e.sizes)}"
      aspect-ratio="${o(e.aspectRatio)}"
      wrapper="${o(e.wrapper)}"
    >
    </dva-e-lazy-image>
  `;var j=Object.defineProperty,D=Object.getOwnPropertyDescriptor,x=(e,a,i,r)=>{for(var t=r>1?void 0:r?D(a,i):a,n=e.length-1,l;n>=0;n--)(l=e[n])&&(t=(r?l(a,i,t):l(t))||t);return r&&t&&j(a,i,t),t};let d=class extends z{constructor(){super({ui:{image:".dva-js-lazy-image__img :-one",wrapper:".dva-js-lazy-image__wrapper :-one"},initialStates:{imgLoaded:!1},useShadowDOM:!0})}connectedCallback(){this.initType==="lazy"?A.subscribe(this,()=>super.connectedCallback()):super.connectedCallback()}get DEFAULT_FALLBACK_IMAGE(){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"}get fallbackImg(){return this.getAttribute("fallback-image")||this.DEFAULT_FALLBACK_IMAGE}get imgSrc(){return this.getAttribute("src")||""}get imgSrcSet(){return this.getAttribute("srcset")||""}get imgSizes(){return this.getAttribute("sizes")||""}get imgAlt(){return this.getAttribute("alt")||""}get imgAspectRatio(){return this.getAttribute("aspect-ratio")||""}get imgWrapper(){return this.getAttribute("wrapper")||""}get hasOverWidth(){return this.ui.image.offsetHeight<this.offsetHeight}static get observedAttributes(){return["src","aspect-ratio"]}get initType(){switch(this.getAttribute("init")){case"explicit":return"explicit";default:return"lazy"}}attributeChangedCallback(e,a,i){if(!(a===i||!this.state.initialized))switch(e){case"src":this.setState({imgLoaded:!1}),this.loadImage();break;case"aspect-ratio":this.renderComponent(),this.handleOverwidth();break}}renderComponent(){c(h({alt:this.imgAlt,src:this.DEFAULT_FALLBACK_IMAGE,srcset:"",sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,wrapper:this.imgWrapper,fallbackImg:this.fallbackImg}),this.getUiRoot())}updateComponent(){c(h({alt:this.imgAlt,src:this.imgSrc,srcset:this.imgSrcSet,sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,fallbackImg:this.fallbackImg}),this.getUiRoot())}afterComponentRender(){s(this,u),m(this.ui.wrapper,g),this.initType!=="explicit"&&this.loadImage()}beforeComponentDisconnects(){s(this.ui.wrapper,g)}destroyComponent(){this.setState({imgLoaded:!1})}loadImage(){if(this.state.imgLoaded)return;s(this,b),s(this.ui.wrapper,_);const e=this.ui.image;this.attachImageEvents(e),this.imgSrc||this.imgSrcSet?(this.imgSrc&&e.setAttribute("src",this.imgSrc),this.imgSrcSet&&e.setAttribute("srcset",this.imgSrcSet)):console.warn("LazyImage: no src/srcset provided for",e)}handleImageLoadingError(){const e=this.ui.image;p(e,"error",this.handleImageLoadingError,this),console.log("src",this.fallbackImg),e.setAttribute("src",this.fallbackImg),e.setAttribute("srcset",""),console.log("lazyImg error:",e)}handleImageLoad(){this.handleOverwidth(),p(this.ui.image,"load",this.handleImageLoad,this),m(this.ui.wrapper,_),s(this,w),this.dispatchEvent(new CustomEvent("dva-image-loaded",{detail:{target:this}})),this.setState({imgLoaded:!0})}attachImageEvents(e){v(e,"load",this.handleImageLoad,this),v(e,"error",this.handleImageLoadingError,this)}handleOverwidth(){m(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth"),this.hasOverWidth&&s(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth")}};d=x([f(k)],d);customElements.define("dva-e-lazy-image",d);export{A as L,U as r};
//# sourceMappingURL=dva-e-lazy-image.5KFGNs-4.js.map
