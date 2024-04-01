import{g as D,c as P,o as u,n as T,f as E,j as y,k as f,p as k,q as w,s as O,u as V,e as z}from"./index.module.xxaaf2ft.js";var p={},m,j,I;Object.defineProperty(p,"__esModule",{value:!0});const C=(n,e)=>n.findIndex(t=>t===e)!==-1;I=p.hasElement=C,p.isFilledArray=n=>n!==void 0&&n.length>0,j=p.mergeArraysBy=(n,e,t)=>n.filter(i=>t(i,e)).concat(e),m=p.pushIfNew=(n,e)=>(C(n,e)||n.push(e),n),p.removeItem=(n,e)=>n.filter(t=>t!==e);var d={},R,S;Object.defineProperty(d,"__esModule",{value:!0});const N=n=>n.replace(/ +(?= )/g,""),A=n=>n.replace(/\r?\n|\r/g,"");d.getCleanString=n=>A(N(n)),d.getWordCount=n=>n.split(" ").length,S=d.removeAllBS=n=>n.replace(/\s/g,""),d.removeAllNL=A,d.removeMultiBS=N,d.toCamelCase=function(n){return n.toLowerCase().replace(/(-+|\s+)[a-z]/g,e=>e.toUpperCase()).replace(/(-|\s)+/g,"")},R=d.toKebabCase=function(n){return n.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function g(n,e,t,i){return new(t||(t=Promise))(function(s,o){function a(h){try{r(i.next(h))}catch(l){o(l)}}function c(h){try{r(i.throw(h))}catch(l){o(l)}}function r(h){var l;h.done?s(h.value):(l=h.value,l instanceof t?l:new t(function(U){U(l)})).then(a,c)}r((i=i.apply(n,e||[])).next())})}const v=Symbol("decorated-props"),L=["type","required","defaultValue","reactions","reactOnInit","attributeName"],b={required:!1,reactions:null,reactOnInit:!1};function M(n){return function(e,t){e[v]=e[v]||{},e[v][t]=n}}function _(n,e){return n instanceof HTMLElement?M(Object.assign({},b))(n,e):M(Object.assign(Object.assign({},b),n))}function q(n){return function(e,t){e.decoratedUiEls===void 0&&(e.decoratedUiEls=new Map),e.decoratedUiEls.set(t,{selector:n,justOne:!0,events:new Set})}}function B(n){return function(e,t){e.decoratedUiEls===void 0&&(e.decoratedUiEls=new Map),e.decoratedUiEls.set(t,{selector:n,justOne:!1,events:new Set})}}function H(n,e,t){return function(i,s){i.decoratedUiEls===void 0&&(i.decoratedUiEls=new Map);const o=i.decoratedUiEls.get(n);o!==void 0||n!=="window"&&n!=="this"?(o.events.add({eventName:e,handler:s,options:t}),i.decoratedUiEls.set(n,o)):i.decoratedUiEls.set(n.toString(),{selector:n,justOne:!0,events:new Set([{eventName:e,handler:s,options:t}])})}}function F(n){return function(e){return class extends e{get activeOnMQs(){const t=this.getAttribute("active-on-mq")||!1;if(!t)return!1;let i=[];return S(t).split(",").forEach(s=>{if(s.length===1)i=m(i,`MQ${s}`);else if(s.length>1){const o=s.split("-"),a=parseInt(o[0],10),c=parseInt(o[1],10);for(let r=a;r<=c;r++)i=m(i,`MQ${r.toString()}`)}}),i}get currentMQ(){return D(n)}get activeOnCurrentMQ(){return this.activeOnMQs&&I(this.activeOnMQs||[],this.currentMQ)||!this.activeOnMQs}handleMqChange(t){this.activeOnMQs&&(!this.state.initialized&&this.activeOnCurrentMQ?this.mqBasedConnect():this.state.initialized&&!this.activeOnCurrentMQ&&this.disconnectComponent())}mqBasedConnect(){this.activeOnCurrentMQ&&super.connectedCallback()}connectedCallback(){P.getInstance(n),u(window,T,this.handleMqChange,this),this.mqBasedConnect()}}}}const x="kl-component-initialized";class $ extends HTMLElement{constructor({ui:e={},events:t=[],initialStates:i={},reactions:s={},props:o={},useShadowDOM:a=!1,preserveChildren:c=!1,asyncRendering:r=!1}={}){super(),this.uiDefinitions={},this.ui={},this.events=[],this.reactions={initialized:["onComponentInitialized"]},this._state={},this._initialStates={},this.eventIdMap=new WeakMap,this.eventBindingMap={},this.initialStates={initialized:!1},this.useShadowDOM=a,this.preserveChildren=c,this.asyncRendering=r,this.useShadowDOM&&this.attachShadow({mode:"open"}),Object.assign(this.uiDefinitions,e),Object.assign(this.initialStates,i),Object.assign(this.reactions,s),this.addReactions(s),this.mergeEvents(t),this.props=this.normalizeProps(Object.assign(Object.assign({},this[v]||null),o))}get asyncRenderingEnabled(){return this._shouldRenderAsync||this.asyncRendering}connectedCallback(){this.setupComponent()}beforeComponentDisconnects(){}disconnectComponent(){this.beforeComponentDisconnects(),this.destroyComponentProps(),this.destroyComponent(),this.setState({initialized:!1})}renderingTemplate(){return null}renderComponent(){const e=this.renderingTemplate();e!==null&&this.render(e)}renderAsync(){return g(this,void 0,void 0,function*(){console.warn("please override renderAsync-method")})}render(e){this.preserveChildren||(this.getUiRoot().innerHTML=""),e instanceof HTMLTemplateElement?this.getUiRoot().appendChild(e.content.cloneNode(!0)):this.useShadowDOM?this.shadowRoot.innerHTML=e:this.insertAdjacentHTML("beforeend",e)}destroyComponent(){console.warn("please override destroyComponent-method")}afterComponentRender(){}onComponentInitialized(){this.dispatchEvent(new CustomEvent("kl-component-initialized",{bubbles:!1}))}waitForInitialization(){return g(this,void 0,void 0,function*(){if(!this.state.initialized)return yield z(this,"kl-component-initialized")})}setupComponent(){return g(this,void 0,void 0,function*(){this.asyncRenderingEnabled?yield this.renderAsync():this.renderComponent(),this.setupComponentProps(),this.afterComponentRender(),this.checkForMissingAttributes(),this.setState({initialized:!0})})}setupComponentProps(){this.enableDecoratedProperties(),this.generateUI(),this.generateEvents(),this.initializeProps()}destroyComponentProps(){this.destroyDecoratedProperties(),this.removeEvents(),this.ui={}}generateUI(){const e=this.getUiRoot();Object.keys(this.uiDefinitions).forEach(t=>{const i=this.uiDefinitions[t].trim();if(i.endsWith(":-one")){const s=i.replace(/:-one/g,"").trim();this.ui[t]=E(e,s)}else this.ui[t]=y(e,i)})}generateEvents(){this.events.forEach(e=>{if(typeof this[e.handler]=="function"){const t=this.getEventTargets(e.target);u(t,e.event,this[e.handler],this,e.options)}})}removeEvents(){this.events.forEach(e=>{if(typeof this[e.handler]=="function"){const t=this.getEventTargets(e.target);f(t,e.event,this[e.handler],this,e.options)}})}updateUI(){this.destroyDecoratedProperties(),this.enableDecoratedProperties(),this.ui={},this.generateUI()}updateEvents(){this.events.forEach(e=>{if(typeof this[e.handler]=="function"){const t=this.getEventTargets(e.target);f(t,e.event,this[e.handler],this,e.options),u(t,e.event,this[e.handler],this,e.options)}})}enableDecoratedProperties(){this.decoratedUiEls!==void 0&&this.decoratedUiEls.forEach((e,t)=>{if(e.selector==="window")e.events.forEach(i=>{u(window,i.eventName,this[i.handler],this,i.options)});else if(e.selector==="this")e.events.forEach(i=>{u(this,i.eventName,this[i.handler],this,i.options)});else{const i=e.justOne?E(this.getUiRoot(),e.selector):y(this.getUiRoot(),e.selector);this[t]=i,e.events.forEach(s=>{u(this[t],s.eventName,this[s.handler],this,s.options)})}})}destroyDecoratedProperties(){this.decoratedUiEls!==void 0&&this.decoratedUiEls.forEach((e,t)=>{e.selector==="window"?e.events.forEach(i=>{f(window,i.eventName,this[i.handler],this,i.options)}):e.selector==="this"?e.events.forEach(i=>{f(this,i.eventName,this[i.handler],this,i.options)}):(this[t]!=null&&e.events.forEach(s=>{f(this[t],s.eventName,this[s.handler],this,s.options)}),this[t]=void 0)})}initializeProps(){this.addDefaultValueAndType(this.props),this.addPropAccessors(this.props),this.addPropsReactions(this.props)}normalizeProps(e){const t={};return Object.entries(e).forEach(([i,s])=>{const o=typeof s=="object"&&s!==null&&Object.keys(s).length&&Object.keys(s).every(a=>L.includes(a))?s:{defaultValue:s};o.attributeName=o.attributeName||R(i),t[i]=Object.assign(Object.assign({},b),o)}),t}addDefaultValueAndType(e){Object.entries(e).forEach(([t,i])=>{i.defaultValue=i.hasOwnProperty("defaultValue")?i.defaultValue:this[t],i.type=i.type||i.defaultValue!==null&&i.defaultValue!==void 0?typeof i.defaultValue:"string"})}addPropAccessors(e){for(const[t,i]of Object.entries(e))Object.defineProperty(this,t,{enumerable:!1,configurable:!0,set(s){s==null?this.removeAttribute(i.attributeName):i.type==="boolean"?s?this.setAttribute(i.attributeName,""):this.removeAttribute(i.attributeName):i.type==="object"?this.setAttribute(i.attributeName,JSON.stringify(s)):this.setAttribute(i.attributeName,String(s))},get(){const s=this.getAttribute(i.attributeName);return s===null&&i.defaultValue!==void 0?i.defaultValue:this.castFromAttribute(s,i.type)}})}addPropsReactions(e){const t=Object.entries(e).filter(([,o])=>Array.isArray(o.reactions)&&o.reactions.length);if(t.length===0)return;const i=o=>{const[a,c]=t.find(([,r])=>r.attributeName===o);c.reactions.forEach(r=>{typeof r=="function"?r.call(this,this[a]):typeof r=="string"&&r in this&&typeof this[r]=="function"?this[r](this[a]):console.error("unknown given reaction callback: ",r)})},s={attributes:!0,attributeFilter:t.map(([,o])=>o.attributeName),attributeOldValue:!0};new MutationObserver(o=>{for(const a of o){const c=a.oldValue;if(this.getAttribute(a.attributeName)===c)return;i(a.attributeName)}}).observe(this,s),t.filter(([,o])=>o.reactOnInit).forEach(([,o])=>i(o.attributeName))}checkForMissingAttributes(){const e=[];for(const t of Object.values(this.props))t.required&&!this.hasAttribute(t.attributeName)&&e.push(t.attributeName);e.length&&console.log(`${this.tagName.toLowerCase()} is missing required attribute(s): ${e.join(", ")}`)}castFromAttribute(e,t="string"){switch(t){case"boolean":return e!==null;case"number":return parseFloat(String(e));case"object":return JSON.parse(String(e));default:return e}}get state(){return k(this._state||{})}set state(e){throw new Error('The state should only be modified via the "setState" method.')}set initialStates(e){this._initialStates=e,this._state=e}get initialStates(){return this._initialStates||{}}setState(e,{merge:t=!0,silent:i=!1}={}){const s=this.state;if(this._state=Object.assign({},t?s:{},e),i||w(s,this._state))return this;const o=this.state,a=this.reactions||{};return Object.keys(a).forEach(c=>{if(c==="*")this.invokeReaction("*");else if(c in e){const r=O(s,c),h=O(o,c);w(r,h)||this.invokeReaction(c)}}),this}addReactions(e,t){if(typeof e=="object")Object.entries(e).forEach(([i,s])=>this.addReactions(i,s));else{this.reactions=this.reactions||{};const i=V(t),s=this.reactions[e]||[];this.reactions[e]=j(s,i,this.isNewReaction)}return this}isNewReaction(e,t){return!t.some(i=>e===i)}removeReactions(e,t){return typeof e=="object"?(Object.entries(e).forEach(([i,s])=>this.removeReactions(i,s)),this):(this.reactions.hasOwnProperty(e)?t?(t.forEach(i=>{this.reactions[e]=this.reactions[e].filter(s=>s!==i)}),this.reactions[e].length===0&&delete this.reactions[e]):delete this.reactions[e]:console.warn("no such prop found "),this)}invokeReaction(e){((this.reactions||{})[e]||new Set).forEach(t=>{typeof t=="function"?t(this.state):typeof t=="string"&&t in this&&typeof this[t]=="function"?this[t](this.state):console.error("given reaction callback can't be found: ",t)})}mergeEvents(e){this.events=this.events.filter(t=>this.isNewEvent(t,e)).concat(e)}isNewEvent(e,t){return!t.some(i=>i.event===e.event&&i.target===e.target)}getUiRoot(){return this.shadowRoot?this.shadowRoot:this}getEventTargets(e){let t=null;return t=e==="this"?this:e==="window"?window:this.ui[e],t}}const G="dva-state-active",W="dva-state-loading",J="dva-state-loaded",K="dva-state-error",Z="dva-state-hidden",X="dva-state-visible",Y="dva-state-inactive",ee="dva-state-animating",te="dva-state-dragging",ie="dva-state-initialized",se="dva-state-invp";export{G as A,te as D,K as E,Z as H,Y as I,J as L,q as M,B as N,_ as O,H as R,F as S,$ as U,X as V,ee as a,x as b,se as c,ie as d,W as e,I as h,m as p,S as r};
//# sourceMappingURL=cssClasses.3Op57w6j.js.map
