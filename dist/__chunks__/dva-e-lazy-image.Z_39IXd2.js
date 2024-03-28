import{U as f,I as b,H as n,a as v,L as c,b as I,S as A}from"./cssClasses.Yj0g3COO.js";import{a as s,r as g,b as l,o as p}from"./index.module.pabxdIjz.js";import{j as d}from"./lit-element.XkUWx5ik.js";import{m as w}from"./mediaQueries.0eOxrCUs.js";import{L}from"./LazyConnectService.yBR27czX.js";import{t as u}from"./dva-e-lazy-image.template.OYQsP62C.js";var S=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(t,i,a,r)=>{for(var e=r>1?void 0:r?E(i,a):i,h=t.length-1,o;h>=0;h--)(o=t[h])&&(e=(r?o(i,a,e):o(e))||e);return r&&e&&S(i,a,e),e};let m=class extends f{constructor(){super({ui:{image:".dva-js-lazy-image__img :-one",wrapper:".dva-js-lazy-image__wrapper :-one"},initialStates:{imgLoaded:!1},useShadowDOM:!0})}connectedCallback(){this.initType==="lazy"?L.subscribe(this,()=>super.connectedCallback()):super.connectedCallback()}get DEFAULT_FALLBACK_IMAGE(){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"}get fallbackImg(){return this.getAttribute("fallback-image")||this.DEFAULT_FALLBACK_IMAGE}get imgSrc(){return this.getAttribute("src")||""}get imgSrcSet(){return this.getAttribute("srcset")||""}get imgSizes(){return this.getAttribute("sizes")||""}get imgAlt(){return this.getAttribute("alt")||""}get imgAspectRatio(){return this.getAttribute("aspect-ratio")||""}get imgWrapper(){return this.getAttribute("wrapper")||""}get hasOverWidth(){return this.ui.image.offsetHeight<this.offsetHeight}static get observedAttributes(){return["src","aspect-ratio"]}get initType(){switch(this.getAttribute("init")){case"explicit":return"explicit";default:return"lazy"}}attributeChangedCallback(t,i,a){if(!(i===a||!this.state.initialized))switch(t){case"src":this.setState({imgLoaded:!1}),this.loadImage();break;case"aspect-ratio":this.renderComponent(),this.handleOverwidth();break}}renderComponent(){d(u({alt:this.imgAlt,src:this.DEFAULT_FALLBACK_IMAGE,srcset:"",sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,wrapper:this.imgWrapper,fallbackImg:this.fallbackImg}),this.getUiRoot())}updateComponent(){d(u({alt:this.imgAlt,src:this.imgSrc,srcset:this.imgSrcSet,sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,fallbackImg:this.fallbackImg}),this.getUiRoot())}afterComponentRender(){s(this,b),g(this.ui.wrapper,n),this.initType!=="explicit"&&this.loadImage()}beforeComponentDisconnects(){s(this.ui.wrapper,n)}destroyComponent(){this.setState({imgLoaded:!1})}loadImage(){if(this.state.imgLoaded)return;s(this,v),s(this.ui.wrapper,c);const t=this.ui.image;this.attachImageEvents(t),this.imgSrc||this.imgSrcSet?(this.imgSrc&&t.setAttribute("src",this.imgSrc),this.imgSrcSet&&t.setAttribute("srcset",this.imgSrcSet)):console.warn("LazyImage: no src/srcset provided for",t)}handleImageLoadingError(){const t=this.ui.image;l(t,"error",this.handleImageLoadingError,this),console.log("src",this.fallbackImg),t.setAttribute("src",this.fallbackImg),t.setAttribute("srcset",""),console.log("lazyImg error:",t)}handleImageLoad(){this.handleOverwidth(),l(this.ui.image,"load",this.handleImageLoad,this),g(this.ui.wrapper,c),s(this,I),this.dispatchEvent(new CustomEvent("dva-image-loaded",{detail:{target:this}})),this.setState({imgLoaded:!0})}attachImageEvents(t){p(t,"load",this.handleImageLoad,this),p(t,"error",this.handleImageLoadingError,this)}handleOverwidth(){g(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth"),this.hasOverWidth&&s(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth")}};m=C([A(w)],m);customElements.define("dva-e-lazy-image",m);
//# sourceMappingURL=dva-e-lazy-image.Z_39IXd2.js.map