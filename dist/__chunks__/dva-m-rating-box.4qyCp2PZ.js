import{U as c,O as h}from"./component.module.D5fmAfIh.js";import{l as v,c as g,e as p}from"./index.module.BEmWgxQc.js";import{x as d,j as f}from"./lit-element.XkUWx5ik.js";import{E as u}from"./cssClasses.CIN72OsW.js";import{I as o}from"./eventTypes.voneREpA.js";const m=(t,e,r)=>d`<dva-e-icon class="dva-e-rating-star${t!=="no"?` dva-e-rating-star--${t}`:""}" icon-id="dva-icon-star" ?half-filled="${t==="half"}" @click="${()=>{r.editMode&&(r.rating=e+1)}}"></dva-e-icon>`,b=(t,e)=>e+.5<t,_=(t,e)=>e+1>t&&e+.1<=t,C=t=>new Array(5).fill(!0).map((e,r)=>b(t.curRating,r)?"full":_(t.curRating,r)?"half":"no"),O=t=>d`<div class="dva-m-rating-box__ratingstar-wrapper">${C(t).map((e,r)=>m(e,r,t.ratingBox))}</div><span class="dvag-e-form-field__error"><dva-e-icon class="dvag-e-form-field__error-icon" icon-id="dva-icon-error-16px"></dva-e-icon>Bitte bewerten Sie.</span>`;var R=Object.defineProperty,w=Object.getOwnPropertyDescriptor,M=(t,e,r,n)=>{for(var i=n>1?void 0:n?w(e,r):e,a=t.length-1,s;a>=0;a--)(s=t[a])&&(i=(n?s(e,r,i):s(i))||i);return n&&i&&R(e,r,i),i};class l extends c{constructor(){super({events:[{event:o,target:"this",handler:"handleIntersectionChange"}],initialStates:{loaded:!1,inValidationMode:!1},reactions:{inValidationMode:["renderComponent"]}}),this.viewportObserver=v.getInstance(),this.editMode=!1}static get observedAttributes(){return["rating"]}attributeChangedCallback(e,r,n){e==="rating"&&r!==n&&this.state.initialized&&this.renderComponent()}afterComponentRender(){this.viewportObserver.observe(this)}get rating(){return parseFloat((this.getAttribute("rating")||"5").replace(",","."))}set rating(e){this.setAttribute("rating",e.toString())}get name(){return this.getAttribute("name")||""}handleIntersectionChange(){this.viewportObserver.unobserve(this),g(this,o,this.handleIntersectionChange,this),this.state.loaded||this.renderComponent()}renderComponent(){this.state.inValidationMode&&p(this,u,this.rating===0),f(O({curRating:this.rating,ratingBox:this}),this)}validate(){this.editMode&&this.setState({inValidationMode:!0})}}M([h],l.prototype,"editMode",2);customElements.define("dva-m-rating-box",l);
//# sourceMappingURL=dva-m-rating-box.4qyCp2PZ.js.map