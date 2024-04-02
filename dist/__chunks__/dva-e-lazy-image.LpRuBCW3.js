import{U as L,R as b,S as w}from"./component.module.g_VEinWh.js";import{l as E,y as A,b as I,a as t,r as d,e as n,o as c,n as _}from"./index.module.wBphgPbK.js";import{E as P,c as S,H as g,b as C,d as m,L as p}from"./cssClasses.m89E5C3B.js";import{j as u}from"./lit-element.XkUWx5ik.js";import{m as z}from"./mediaQueries.0eOxrCUs.js";import{l as f}from"./dva-e-lazy-image.template.E8a7jvAL.js";var y=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=(e,r,a,s)=>{for(var i=s>1?void 0:s?O(r,a):r,h=e.length-1,l;h>=0;h--)(l=e[h])&&(i=(s?l(r,a,i):l(i))||i);return s&&i&&y(r,a,i),i};let o=class extends L{constructor(){super({ui:{image:".dva-js-lazy-image__img :-one",placeholder:".dva-e-lazy-image__img--placeholder :-one",wrapper:".dva-js-lazy-image__wrapper :-one"},initialStates:{imgLoaded:!1},useShadowDOM:!0}),this.viewportObserver=E.getInstance(),this._hasError=!1,this._loadingPlaceholderLoaded=!1,this._loadingPlaceholderLoadingError=!1}connectedCallback(){this.initType==="lazy"?A.subscribe(this,()=>super.connectedCallback()):super.connectedCallback()}get DEFAULT_FALLBACK_IMAGE(){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"}get fallbackImg(){return this.getAttribute("fallback-image")||this.DEFAULT_FALLBACK_IMAGE}get imgSrc(){return this.getAttribute("src")||""}get imgSrcSet(){return this.getAttribute("srcset")||""}get imgSizes(){return this.getAttribute("sizes")||""}get imgAlt(){return this.getAttribute("alt")||""}get imgAspectRatio(){return this.getAttribute("aspect-ratio")}get imgWrapper(){return this.getAttribute("wrapper")||""}get noPlaceholder(){return this.hasAttribute("no-placeholder")&&this.getAttribute("no-placeholder")!=="false"}get hasOverWidth(){return this.ui.image.offsetHeight<this.offsetHeight}get hasError(){return this._hasError}set hasError(e){this.hasError!==e&&(this._hasError=e,this.updateComponent(),I(this.ui.wrapper,P,e))}get hasLoadingPlaceholder(){return this.loadingPlaceholder!==""}get loadingPlaceholderLoaded(){return!this.hasLoadingPlaceholder||this._loadingPlaceholderLoaded}set loadingPlaceholderLoaded(e){this.loadingPlaceholderLoaded!==e&&(this._loadingPlaceholderLoaded=e)}get loadingPlaceholderLoadingError(){return!this.hasLoadingPlaceholder||this._loadingPlaceholderLoadingError}set loadingPlaceholderLoadingError(e){this.loadingPlaceholderLoadingError!==e&&(this._loadingPlaceholderLoadingError=e,this.updateComponent())}static get observedAttributes(){return["src","srcset","aspect-ratio"]}get initType(){switch(this.getAttribute("init")){case"explicit":return"explicit";default:return"lazy"}}getLoadingPlaceholderFromSrc(){const e=new URL(this.imgSrc);return e.searchParams.get("width")?(e.searchParams.set("width","60"),e.href):""}get loadingPlaceholder(){return this.getAttribute("loading-placeholder")||this.getLoadingPlaceholderFromSrc()}attributeChangedCallback(e,r,a){if(!(r===a||!this.state.initialized))switch(e){case"src":this.setState({imgLoaded:!1}),this.loadImage();break;case"srcset":this.setState({imgLoaded:!1}),this.loadImage();break;case"aspect-ratio":this.renderComponent(),this.handleOverwidth();break}}renderComponent(){u(f({alt:this.imgAlt,srcset:"",sizes:this.imgSizes,component:this,wrapper:this.imgWrapper}),this.getUiRoot())}updateComponent(){u(f({alt:this.imgAlt,srcset:this.imgSrcSet,sizes:this.imgSizes,component:this}),this.getUiRoot())}afterComponentRender(){t(this,S),d(this.ui.wrapper,g),this.initType!=="explicit"&&this.viewportObserver.observe(this)}beforeComponentDisconnects(){t(this.ui.wrapper,g)}destroyComponent(){this.setState({imgLoaded:!1})}loadImage(){if(this.viewportObserver.unobserve(this),this.state.imgLoaded)return;t(this,C),t(this.ui.wrapper,m);const e=this.ui.image;this.attachImageEvents(e),this.imgSrc||this.imgSrcSet?(this.imgSrc&&e.setAttribute("src",this.imgSrc),this.imgSrcSet&&e.setAttribute("srcset",this.imgSrcSet)):console.warn("LazyImage: no src/srcset provided for",e)}handleImageLoadingError(){const e=this.ui.image;n(e,"error",this.handleImageLoadingError,this),this.hasError=!0,console.log("lazyImg error:",e)}handleImageLoad(){this.handleOverwidth(),this.hasError=!1,n(this.ui.image,"load",this.handleImageLoad,this),d(this.ui.wrapper,m),t(this,p),t(this.ui.image,p),t(this.ui.placeholder,g),this.dispatchEvent(new CustomEvent("dva-image-loaded",{detail:{target:this}})),this.setState({imgLoaded:!0})}attachImageEvents(e){c(e,"load",this.handleImageLoad,this),c(e,"error",this.handleImageLoadingError,this)}handleOverwidth(){d(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth"),this.hasOverWidth&&t(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth")}};v([b("this",_)],o.prototype,"loadImage",1);o=v([w(z)],o);customElements.define("dva-e-lazy-image",o);
//# sourceMappingURL=dva-e-lazy-image.LpRuBCW3.js.map
