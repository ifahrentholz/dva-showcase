import{U as L,R as w,S as b}from"./component.module.Hp3Pacc1.js";import{l as E,y as _,b as A,a as t,r as d,c,o as m,d as I}from"./index.module.1ng6vgY5.js";import{E as S,I as P,H as o,a as y,L as p,b as n}from"./cssClasses.wlqlOWT8.js";import{j as u}from"./lit-element.XkUWx5ik.js";import{m as C}from"./mediaQueries.0eOxrCUs.js";import{g as z}from"./getSrcset.ehtWqR_R.js";import{l as f}from"./dva-e-lazy-image.template.M146ILE1.js";var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,v=(e,r,a,s)=>{for(var i=s>1?void 0:s?D(r,a):r,l=e.length-1,g;l>=0;l--)(g=e[l])&&(i=(s?g(r,a,i):g(i))||i);return s&&i&&O(r,a,i),i};let h=class extends L{constructor(){super({ui:{image:".dva-js-lazy-image__img :-one",picture:".dva-js-lazy-image__picture :-one",placeholder:".dva-e-lazy-image__img--placeholder :-one",picturePlaceholder:".dva-js-lazy-image__picture--placeholder :-one",wrapper:".dva-js-lazy-image__wrapper :-one"},initialStates:{imgLoaded:!1},useShadowDOM:!0}),this.viewportObserver=E.getInstance(),this._hasError=!1,this._loadingPlaceholderLoaded=!1,this._loadingPlaceholderLoadingError=!1}connectedCallback(){this.initType==="lazy"?_.subscribe(this,()=>super.connectedCallback()):super.connectedCallback()}get DEFAULT_FALLBACK_IMAGE(){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"}get fallbackImg(){return this.getAttribute("fallback-image")||this.DEFAULT_FALLBACK_IMAGE}get imgSrc(){return this.getAttribute("src")||""}get imgSrcSet(){return this.getAttribute("srcset")||this.getSrcsetFromSrc()}get imgSizes(){return this.getAttribute("sizes")||"100vw"}get imgAlt(){return this.getAttribute("alt")||""}get imgAspectRatio(){return this.getAttribute("aspect-ratio")}get imgWrapper(){return this.getAttribute("wrapper")||""}get noPlaceholder(){return this.hasAttribute("no-placeholder")&&this.getAttribute("no-placeholder")!=="false"}get hasOverWidth(){return this.ui.image.offsetHeight<this.offsetHeight}get hasError(){return this._hasError}set hasError(e){this.hasError!==e&&(this._hasError=e,this.updateComponent(),A(this.ui.wrapper,S,e))}get hasLoadingPlaceholder(){return this.loadingPlaceholder!==""}get loadingPlaceholderLoaded(){return!this.hasLoadingPlaceholder||this._loadingPlaceholderLoaded}set loadingPlaceholderLoaded(e){this.loadingPlaceholderLoaded!==e&&(this._loadingPlaceholderLoaded=e)}get loadingPlaceholderLoadingError(){return!this.hasLoadingPlaceholder||this._loadingPlaceholderLoadingError}set loadingPlaceholderLoadingError(e){this.loadingPlaceholderLoadingError!==e&&(this._loadingPlaceholderLoadingError=e,this.updateComponent())}static get observedAttributes(){return["src","srcset","aspect-ratio"]}get initType(){switch(this.getAttribute("init")){case"explicit":return"explicit";default:return"lazy"}}get fetchPriority(){return this.getAttribute("fetchpriority")}get loading(){return this.getAttribute("loading")}getLoadingPlaceholderFromSrc(){const e=new URL(this.imgSrc);return e.searchParams.get("width")?(e.searchParams.set("width","60"),e.href):this.imgSrc}getSrcsetFromSrc(){const e=new URL(this.imgSrc);return e.searchParams.get("width")?z(e.href,[480,760,1024,1280,1440,1460,2e3]):""}get loadingPlaceholder(){return this.getAttribute("loading-placeholder")||this.getLoadingPlaceholderFromSrc()}attributeChangedCallback(e,r,a){if(!(r===a||!this.state.initialized))switch(e){case"src":this.setState({imgLoaded:!1}),this.loadImage();break;case"srcset":this.setState({imgLoaded:!1}),this.loadImage();break;case"aspect-ratio":this.renderComponent(),this.handleOverwidth();break}}renderComponent(){u(f({alt:this.imgAlt,srcset:"",sizes:this.imgSizes,component:this,wrapper:this.imgWrapper}),this.getUiRoot())}updateComponent(){u(f({alt:this.imgAlt,srcset:this.imgSrcSet,sizes:this.imgSizes,component:this}),this.getUiRoot())}afterComponentRender(){t(this,P),d(this.ui.wrapper,o),this.initType!=="explicit"&&this.viewportObserver.observe(this),this.initType==="explicit"&&this.loadImage()}beforeComponentDisconnects(){t(this.ui.wrapper,o)}destroyComponent(){this.setState({imgLoaded:!1})}loadImage(){if(this.viewportObserver.unobserve(this),this.state.imgLoaded)return;t(this,y),t(this.ui.wrapper,p);const e=this.ui.image;this.attachImageEvents(e),this.imgSrc||this.imgSrcSet?(this.imgSrc&&e.setAttribute("src",this.imgSrc),this.imgSrcSet&&e.setAttribute("srcset",this.imgSrcSet)):console.warn("LazyImage: no src/srcset provided for",e)}handleImageLoadingError(){const e=this.ui.image;c(e,"error",this.handleImageLoadingError,this),this.hasError=!0,this.dispatchEvent(new CustomEvent("dva-image-error",{detail:{target:this}})),console.log("lazyImg error:",e)}handleImageLoad(){this.handleOverwidth(),this.hasError=!1,c(this.ui.image,"load",this.handleImageLoad,this),d(this.ui.wrapper,p),t(this,n),t(this.ui.image,n),t(this.ui.picture,n),t(this.ui.placeholder,o),t(this.ui.picturePlaceholder,o),this.dispatchEvent(new CustomEvent("dva-image-loaded",{detail:{target:this}})),this.setState({imgLoaded:!0})}attachImageEvents(e){m(e,"load",this.handleImageLoad,this),m(e,"error",this.handleImageLoadingError,this)}handleOverwidth(){d(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth"),this.hasOverWidth&&t(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth")}};v([w("this",I)],h.prototype,"loadImage",1);h=v([b(C)],h);customElements.define("dva-e-lazy-image",h);
//# sourceMappingURL=dva-e-lazy-image.4whIR1Z5.js.map
