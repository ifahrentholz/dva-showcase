import{x as n,T as u,s as S,j as w}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as x,t as f}from"../__chunks__/property.0daVBkvz.js";import{t as q,r as D}from"../__chunks__/toClassName.o2_BLIQs.js";import{o as r,F as E}from"../__chunks__/if-defined._tCGPUT8.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=(e,a,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof a!="object"&&Object.defineProperty(e,a,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C(e,a){return(t,s,o)=>{const l=i=>{var h;return((h=i.renderRoot)==null?void 0:h.querySelector(e))??null};if(a){const{get:i,set:h}=typeof s=="object"?t:o??(()=>{const c=Symbol();return{get(){return this[c]},set(g){this[c]=g}}})();return y(t,s,{get(){let c=i.call(this);return c===void 0&&(c=l(this),(c!==null||this.hasUpdated)&&h.call(this,c)),c}})}return y(t,s,{get(){return l(this)}})}}const d=[],$=(e,a="")=>{const t=q(`form-${e.name}${a}`);d[t]=d[t]||0;const s=d[t]?`-${d[t]}`:"";return d[t]+=1,`${t}${s}`},R=e=>n`<legend>${e}</legend>`,j=e=>n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}"><fieldset class="row gtr-uniform" id="${r(e.id)}" name="${r(e.name)}">${e.label?R(e.label):u}</fieldset></div>`,I=e=>n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}">${e.class&&e.class.includes("sub-heading")?n`<h3 id="${r(e.id)}">${e.value||e.label}</h3>`:n`<h2 id="${r(e.id)}">${e.value||e.label}</h2>`}</div>`,m=(e,a)=>n`<label id="${e}" for="${a.id}">${a.label||a.name}</label>`,L=e=>n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}"><p id="${r(e.id)}">${e.value||e.label}</p></div>`,b=(e,a=!0)=>{const t=$(e,"-label");return n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}">${a?m(t,e):u} <input id="${r(e.id)}" name="${r(e.name)}" placeholder="${r(e.placeholder)}" value="${r(e.value)}" required="${r(e.required)}" type="${r(e.type)}" aria-labelledby="${t}"> ${a?u:m(t,e)}</div>`},P=e=>{const a=$(e,"-label");return n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}">${e.label?m(a,e):u} <textarea id="${r(e.id)}" name="${r(e.name)}" placeholder="${r(e.placeholder)}" required="${r(e.required)}" aria-labelledby="${a}"></textarea></div>`},O=e=>(e.value||(e.value="checked"),b(e,!1)),_=(e,a)=>{const t=e.trim(),s=e.trim().toLowerCase()??"";return n`<option selected="${r(s===a?"":void 0)}" value="${s}">${t}</option>`},T=e=>{const a=$(e,"-label");return n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}">${e.label?m(a,e):u} <select id="${r(e.id)}" name="${r(e.name)}" required="${r(e.required)}">${e.options.map(t=>_(t,e.value))}</select></div>`},A=e=>(e.value||(e.value=e.label||"on"),b(e,!1)),F=e=>n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}"><button class="${r(e.class)}" type="${r(e.type)}">${e.label||e.name}</button></div>`,N=e=>n`<div class="${r(e.class)}" data-fieldset="${r(e.fieldset)}"><input id="${r(e.id)}" name="${r(e.name)}" type="reset"></div>`,k={headline:I,plaintext:L,text:b,textarea:P,checkbox:O,select:T,radio:A,button:F,fieldset:j,reset:N,submit:F},U=e=>{e.id=e.id||$(e);const a=e.type;return(k[a]||b)(e)};var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,v=(e,a,t,s)=>{for(var o=s>1?void 0:s?J(a,t):a,l=e.length-1,i;l>=0;l--)(i=e[l])&&(o=(s?i(a,t,o):i(o))||o);return s&&o&&H(a,t,o),o};let p=class extends S{constructor(){super(...arguments),this.pathname=""}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),await this.fetchFormData(),this.setFieldsets()}async fetchFormData(){const a=(await E.fetchJson(this.pathname)).data.map(t=>this.parseFieldData(t));this.formData=a}render(){if(this.formData)return n`<form method="post" data-action="${this.pathname.split(".json")[0]}" @submit="${this.submitForm}"><div class="row gtr-uniform">${this.formData.map(e=>n`${U(e)}`)}</div></form>`}setFieldsets(){this.form.querySelectorAll("fieldset").forEach(a=>{this.form.querySelectorAll(`[data-fieldset="${a.name}"`).forEach(t=>{a.append(t)})})}parseFieldData(e){return{class:e.class!==""?e.class:void 0,id:e.id!==""?e.id:void 0,name:e.name,label:e.label,fieldset:e.fieldset!==""?e.fieldset:void 0,value:e.value!==""?e.value:void 0,type:e.type.toLowerCase(),placeholder:e.placeholder||void 0,options:e.options?e.options.split(",").map(a=>a.trim()):[],required:e.required.toLowerCase()==="true"||e.required.toLowerCase()==="x"?!0:void 0}}generatePayload(e){const a={};return[...e.elements].forEach(t=>{t.name&&t.type!=="submit"&&!t.disabled&&(t.type==="radio"?t.checked&&(a[t.name]=t.value):t.type==="checkbox"?t.checked&&(a[t.name]=a[t.name]?`${a[t.name]},${t.value}`:t.value):a[t.name]=t.value)}),a}handleSubmitError(e,a){console.error(a),e.querySelector('button[type="submit"]').disabled=!1}submitForm(e){if(e.preventDefault(),this.form.checkValidity())this.handleSubmit(this.form);else{const t=this.querySelector(":invalid:not(fieldset)");t&&(t.focus(),t.scrollIntoView({behavior:"smooth"}))}}async handleSubmit(e){if(e.getAttribute("data-submitting")==="true")return;const a=e.querySelector('button[type="submit"]');try{e.setAttribute("data-submitting","true"),a&&(a.disabled=!0);const t=e.dataset.action??"",s=this.generatePayload(e),o=await fetch(t,{method:"POST",body:JSON.stringify({data:s}),headers:{"Content-Type":"application/json"}});if(o.ok)console.log(s),e.dataset.confirmation&&(window.location.href=e.dataset.confirmation);else{const l=await o.text();throw new Error(l)}}catch(t){this.handleSubmitError(e,t)}finally{e.setAttribute("data-submitting","false"),e.reset(),a&&(a.disabled=!1)}}};v([D()],p.prototype,"formData",2);v([x({type:String})],p.prototype,"pathname",2);v([C("form")],p.prototype,"form",2);p=v([f("form-component")],p);function G(e){var s;const a=(s=e.querySelector('a[href$=".json"]'))==null?void 0:s.innerText;if(!a)return;const{pathname:t}=new URL(a);e.innerHTML="",w(n`<form-component pathname="${t}"></form-component>`,e),e.style.display="block"}export{G as default};
//# sourceMappingURL=form.js.map
