import{r as u}from"../__chunks__/dva-e-icon.template.tppk8KWP.js";import{c as x}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as P,x as _}from"../__chunks__/lit-element.XkUWx5ik.js";import{_ as w}from"../__chunks__/preload-helper.hlDPvxQM.js";import{D as A,w as C}from"../__chunks__/dvag-m-basic-slider.rEONda8I.js";import{l as L,b as $,r as O,a as h,y as B,h as T}from"../__chunks__/index.module.1ng6vgY5.js";import{V as D,A as v,b}from"../__chunks__/cssClasses.wlqlOWT8.js";import{M as c,R as f,U as E}from"../__chunks__/component.module.Hp3Pacc1.js";import{I as V}from"../__chunks__/eventTypes.voneREpA.js";import{w as j}from"../__chunks__/waitForInitialization.QHl8FaNN.js";import"../__chunks__/mediaQueries.0eOxrCUs.js";import"../__chunks__/LazyConnectService.yBR27czX.js";var M=Object.defineProperty,H=Object.getOwnPropertyDescriptor,d=(e,t,a,r)=>{for(var i=r>1?void 0:r?H(t,a):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,a,i):s(i))||i);return r&&i&&M(t,a,i),i};class o extends A{constructor(){super(...arguments),this.viewportObserver=L.getInstance(),this.animationLoaded=!1}get segmentLength(){return parseInt(this.getAttribute("segment-length")||"120",10)}get animationPath(){return this.getAttribute("animation-path")||""}set lastSlideVisible(t){$(this.nextBtn,D,!t),this.updateSliderActive(),this.activeSlideIdx===this.slides.length-1&&this.stopAutoPlay()}updateActiveSlide(){this.activeSlideIdx!==this.slides.findIndex(t=>this.activeSlideMap.get(t)===!0)&&(this.activeSlideIdx=this.slides.findIndex(t=>this.activeSlideMap.get(t)===!0),this.dispatchSlideChangedEvent(),O(this.slides,v),h(this.slides[this.activeSlideIdx],v),this.lastSlideVisible=this.activeSlideIdx===this.slides.length-1,this.animationLoaded&&this.animation&&this.playSegment(this.activeSlideIdx,this.activeSlideIdx+1),this.updateProgressBar())}afterComponentRender(){this.viewportObserver.observe(this),this.slidesContainer.scrollLeft=0,B.subscribe(this,()=>{this.initEditMode(),this.initActiveSlideObserver(),this.initControls()}),h(this.slides[this.activeSlideIdx],v),this.animationLoaded&&this.animation&&this.playSegment(this.activeSlideIdx,this.activeSlideIdx+1),this.updateProgressBar()}moveOneSlide(t){this.goToSlide(this.activeSlideIdx+t)}handleNextBtnClick(){this.lastInteractionType="click",this.moveOneSlide(1),this.stopAutoPlay()}handlePrevBtnClick(){this.lastInteractionType="click",this.moveOneSlide(-1),this.stopAutoPlay()}playSegment(t,a){this.animation.playSegments([t*this.segmentLength+1,a*this.segmentLength+1],!0)}async updateProgressBar(){const t=100/this.slides.length*(this.activeSlideIdx+1);await j(this.progressBar),this.progressBar.updateProgressIndicator(t,this.segmentLength/60)}async loadAnimation(){this.animationPath===""||this.animationLoaded||(this.animationLoaded=!0,this.lottie=await this.loadLottiePlayer(),this.animation=this.lottie.loadAnimation({container:this.animationBox,autoplay:!0,loop:!1,renderer:"svg",path:this.animationPath}))}async loadLottiePlayer(){const{default:t}=await w(()=>import("../__chunks__/lottie.4jS6MAM2.js").then(a=>a.l),__vite__mapDeps([]));return t}async startAutoplay(){T(this,b)||(await this.loadAnimation(),this.autoplay&&(this.lastInteractionType="autoplay",this.startSliderAutoPlayInterval()),h(this,b),setTimeout(()=>this.animation.goToAndStop(this.segmentLength,!0),this.segmentLength/60*1e3))}async moveSliderTo(t){this.slidesContainer.scrollTo({left:t,behavior:"smooth"}),await C(this.slidesContainer)}startSliderAutoPlayInterval(){this.autoplayInterval===null&&(this.autoplayInterval=setInterval(()=>{this.moveOneSlide(1)},this.segmentLength/60*1e3+this.autoplayDelay))}detectHorizontalScrolling(t){t.deltaX!==0&&(this.lastInteractionType="swipe",this.stopAutoPlay())}}d([c(".dvag-m-lottie-slider__animation-box")],o.prototype,"animationBox",2);d([c(".dvag-e-progress-bar")],o.prototype,"progressBar",2);d([f("this",V)],o.prototype,"startAutoplay",1);d([f("slidesContainer","wheel")],o.prototype,"detectHorizontalScrolling",1);customElements.define("dvag-m-lottie-slider",o);var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,U=(e,t,a,r)=>{for(var i=r>1?void 0:r?q(t,a):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,a,i):s(i))||i);return r&&i&&R(t,a,i),i};class y extends E{get startValue(){return parseInt(this.getAttribute("start-value")||"0",10)}afterComponentRender(){this.updateProgressIndicator(this.startValue,2)}updateProgressIndicator(t,a){this.progressIndicator.style.transitionDuration=`${a}s`,this.progressIndicator.style.width=`${t}%`}}U([c(".dvag-e-progress-bar__progress-indicator")],y.prototype,"progressIndicator",2);customElements.define("dvag-e-progress-bar",y);const z=e=>e.map(t=>t==="margin-bottom-none"?"dvag-h-margin-bottom--none":t==="background-grey"?"dvag-h-background--grey":t==="skew-top"?"dvag-h-skew--top":t==="skew-bottom"?"dvag-h-skew--bottom":`dvag-h-${t}`).join(" "),N=e=>_`<div class="c33-animation ${z(e.cssClasses)}"><div id="lottie-animation"><div class="dvag-m-c33-lottie-animation dvag-m-skew-component"><div class="dva-h-skew--in"></div><div class="dvag-m-skewed-box__content"><div class="dvag-m-c33-lottie-animation__grid-wrapper"><div class="dvag-m-section-header"><h3 class="dvag-m-section-header__subheadline">${e.headerSubheadline}</h3><h2 class="dvag-m-section-header__headline">${e.headerHeadline}</h2></div></div><dvag-m-lottie-slider class="dvag-m-lottie-slider" title="${e.headerHeadline}" autoplay="true" animation-path="/dist/lottie/${e.animationPath.trim()}" segment-length="120"><div class="dvag-m-lottie-slider__grid-wrapper"><div class="dvag-m-lottie-slider__animation-box"></div></div><dvag-e-progress-bar class="dvag-e-progress-bar" start-value="0"><div class="dvag-e-progress-bar__progress-indicator"></div></dvag-e-progress-bar><div class="dvag-m-basic-slider dvag-m-teaser-slider"><div class="dvag-m-basic-slider__slides">${e.slides.map(t=>_`<div class="dvag-m-basic-slider__slide"><div class="dvag-m-lottie-slider-slide"><h4 class="dvag-m-lottie-slider-slide__subheadline">${t.subheadline}</h4><h3 class="dvag-m-lottie-slider-slide__headline">${t.headline}</h3><div class="dvag-m-lottie-slider-slide__text dvag-e-richtext">${t.text}</div></div></div>`)}</div><div class="dvag-m-basic-slider__controls"><button class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--prev"><div class="dva-e-button__background"></div>${u("dva-icon-chevron-left")}</button> <button class="dva-e-button dva-e-button--primary dva-e-button--rebrush dvag-m-basic-slider__nav-button dvag-m-basic-slider__nav-button--next"><div class="dva-e-button__background"></div>${u("dva-icon-chevron-right")}</button></div></div></dvag-m-lottie-slider><div class="dvag-m-c33-lottie-animation__grid-wrapper"><div class="dvag-m-c33-lottie-animation__cta-wrapper"><a class="dva-e-button dva-e-button--rebrush" href="${e.ctaUrl}"><div class="dva-e-button__background"></div><span class="dva-e-button__label">${e.ctaLabel}</span></a></div></div></div><div class="dva-h-skew--out"></div></div></div></div>`,k=e=>[...e.classList];function at(e){const t=k(e),a=e.children[0].textContent||"",r=e.children[1].textContent||"",i=e.children[2].textContent||"",n=[...e.children].slice(4).map(l=>{var m,g,p;return{subheadline:((m=l.querySelector("h4"))==null?void 0:m.textContent)||"",headline:((g=l.querySelector("h3"))==null?void 0:g.textContent)||"",text:((p=l.querySelector("p"))==null?void 0:p.textContent)||""}}),s=e.children[3].querySelector("a"),S=(s==null?void 0:s.getAttribute("href"))||"",I=(s==null?void 0:s.textContent)||"";x(e),P(N({cssClasses:t,headerSubheadline:a,headerHeadline:r,animationPath:i,slides:n,ctaUrl:S,ctaLabel:I}),e)}export{at as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=lottie-animation.js.map
