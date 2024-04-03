import{c as h}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as p,x as m}from"../__chunks__/lit-element.XkUWx5ik.js";import{U as g,R as c}from"../__chunks__/component.module.D5fmAfIh.js";import{l as u,d as f,b as v,w as M,a as b}from"../__chunks__/index.module.BEmWgxQc.js";import{m as d}from"../__chunks__/mediaQueries.0eOxrCUs.js";import{a as I}from"../__chunks__/cssClasses.CIN72OsW.js";import{I as w,M as C}from"../__chunks__/eventTypes.voneREpA.js";var _=Object.defineProperty,k=Object.getOwnPropertyDescriptor,l=(i,e,t,r)=>{for(var a=r>1?void 0:r?k(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(a=(r?o(e,t,a):o(a))||a);return r&&a&&_(e,t,a),a};class n extends g{constructor(){super({}),this.viewportObserver=u.getInstance(),this.mqService=f.getInstance(d),this.currentMode="",this.loaded=!1,this.currentMode="",this.loaded=!1}get desktopUrl(){return this.getAttribute("desktop-url")||""}get mobileUrl(){return this.getAttribute("mobile-url")||this.desktopUrl}get currentMQ(){return v(d)}afterComponentRender(){this.viewportObserver.observe(this)}async addSvgMarkup(e){console.log("svgData",e),e&&(this.innerHTML=e),await M(500),b(this,I)}addImageMarkup(e){const t=`<dva-e-lazy-image
        class="dva-e-lazy-image"
        src=${e}
      ></dva-e-lazy-image>`;this.loaded=!0,this.innerHTML=t}async loadFile(e){if(e!=="")if(e.endsWith(".svg")){const t=await fetch(e).then(r=>{if(!r.ok)throw Error(`SVG Animation ${e} could not be loaded: ${r.statusText}`);return r.text()});this.loaded=!0,this.addSvgMarkup(t)}else this.addImageMarkup(e)}updateFile(e){const t=parseInt(e.charAt(2),10);t<3&&this.currentMode!=="mobile"?(this.currentMode="mobile",this.loaded=!1,this.loadFile(this.mobileUrl)):t>=3&&this.currentMode!=="desktop"&&(this.currentMode="desktop",this.loaded=!1,this.loadFile(this.desktopUrl))}handleIntersectionChange(){this.viewportObserver.unobserve(this),this.loaded||this.updateFile(this.currentMQ)}handleMQChange(){this.updateFile(this.currentMQ)}}l([c("this",w)],n.prototype,"handleIntersectionChange",1);l([c("window",C)],n.prototype,"handleMQChange",1);customElements.define("dvag-m-c22-infographic",n);const y=i=>m`<div class="dvag-m-c28-content-container dvag-m-c28-content-container--8-cols"><div class="dvag-m-c28-content-container__content-wrapper wcm-io-parsys"><div class="c22-infographic"><dvag-m-c22-infographic class="dvag-m-c22-infographic" desktop-url="${i.desktopImage}" mobile-url="${i.mobileImage}"></dvag-m-c22-infographic></div></div></div>`;function Q(i){const e=i.children[0].textContent||"",t=i.children[1].textContent||"";h(i),p(y({desktopImage:e,mobileImage:t}),i)}export{Q as default};
//# sourceMappingURL=infographic.js.map
