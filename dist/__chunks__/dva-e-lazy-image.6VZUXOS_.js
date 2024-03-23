import{x as B,j as N}from"./lit-element.XkUWx5ik.js";import{o as _}from"./if-defined.JfW-uEqn.js";var v={},H,W,M,S;Object.defineProperty(v,"__esModule",{value:!0});const E=e=>typeof e=="object"&&e!==null?JSON.stringify(e):String(e);S=v.getValue=(e={},t="")=>{const i=t.split(".");let a=0,n=e;for(;n&&a<i.length;)n=n[i[a]],a++;return n},M=v.isEqual=(e,t)=>typeof e==typeof t&&(typeof e=="object"?E(e).localeCompare(E(t))===0:e===t),v.isFilledObject=function(e){return typeof e=="object"&&e!==null&&Object.keys(e).length>0},W=v.naiveClone=function e(t){return typeof t!="object"?t:t===null?null:Array.isArray(t)?t.map(i=>e(i)):Object.entries(t).reduce((i,[a,n])=>(i[a]=e(n),i),{})},H=v.toArray=e=>Array.isArray(e)?e:[e],v.toString=E;var y={},O,K,G;Object.defineProperty(y,"__esModule",{value:!0});const R=(e,t)=>e.findIndex(i=>i===t)!==-1;G=y.hasElement=R,y.isFilledArray=e=>e!==void 0&&e.length>0,K=y.mergeArraysBy=(e,t,i)=>e.filter(a=>i(a,t)).concat(t),O=y.pushIfNew=(e,t)=>(R(e,t)||e.push(t),e),y.removeItem=(e,t)=>e.filter(i=>i!==t);var c={},J,le,g,b,h,ce,w,I,j,f;Object.defineProperty(c,"__esModule",{value:!0});const Z=(e,t)=>e===null?[]:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?Array.from(e.querySelectorAll(t)):Array.from(e.shadowRoot.querySelectorAll(t)),x=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const i of e)i.classList.remove(...t)}},C=(e,...t)=>{if(e!==void 0&&t.length!==0&&e!==null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const i of e)i.classList.add(...t)}},$=(e,t)=>e.classList.contains(t);function z(e){return Symbol.iterator in e}function X(e){return"length"in e?e.length>0:!e[Symbol.iterator]().next().done}const Y=(e,t,i,a,n)=>{if(e==null||z(e)&&!X(e))return;if(z(e)&&!(e instanceof HTMLElement)){for(const r of e)Y(r,t,i,a,n);return}let s;s=typeof t=="string"?t.trim().split(" "):t,s.forEach(r=>{const l=ee(e,r,i,a);if(!a.eventBindingMap[l]){const o=i.bind(a);return a.eventBindingMap[l]=o,e.addEventListener(r.trim(),o,n)}})};function ee(e,t,i,a){return`${k(e,a)}#
          ${t.trim()}#
          ${k(i,a)}#
          ${k(a,a)}`.replace(/\n/gm,"").replace(/\s/g,"")}function k(e,t){let i;if(t.eventIdMap.has(e))i=t.eventIdMap.get(e);else{const a="xxxxxxxx".replace(/x/g,de).toLowerCase();t.eventIdMap.set(e,a),i=a}return i}function de(){return(100*Math.random()%36|0).toString(36)}const te=(e,t,i,a,n)=>{if(e==null||z(e)&&!X(e))return void console.warn("no target found");if(z(e)&&!(e instanceof HTMLElement)){for(const r of e)te(r,t,i,a,n);return}let s;s=typeof t=="string"?t.trim().split(" "):t,s.forEach(r=>{const l=ee(e,r,i,a),o=a.eventBindingMap[l];o&&(delete a.eventBindingMap[l],e.removeEventListener(r,o,n))})},T=(e,t)=>{Z(e,t).forEach(i=>e.removeChild(i))},D=(e,t,i)=>new Promise(a=>{i!==void 0&&setTimeout(()=>a(),i),e.addEventListener(t,()=>a())});f=c.addClass=C,j=c.find=(e,t)=>e===null?null:e instanceof Document||e.shadowRoot===null||e.shadowRoot===void 0?e.querySelector(t):e.shadowRoot.querySelector(t),I=c.findAll=Z,c.forEachNode=(e,t,i=window)=>{for(let a=0;a<e.length;a++)t.call(i,e[a],a,e)},w=c.getCurrentMQ=e=>{let t="";return e.forEach(i=>{!t.length&&window.matchMedia(i.query).matches&&(t=i.name)}),t},c.getInnerText=e=>e.innerText||e.textContent||"",c.getParent=(e,t)=>e.closest(t),c.getUniqueID=()=>Math.random().toString(36).substr(2,9),c.hasChild=(e,t)=>e.shadowRoot!==null&&e.shadowRoot!==void 0?e.shadowRoot.querySelector(t)!==null:e.querySelector(t)!==null,ce=c.hasClass=$,c.inViewport=(e,t)=>{const i=e.getBoundingClientRect();let a={top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0};return t!==void 0&&(a=t.getBoundingClientRect()),i.top>=a.top&&i.right<=a.right&&i.bottom<=a.bottom&&i.left>=a.left},c.isNodeList=e=>!(e instanceof HTMLElement||e instanceof Window),h=c.onEvent=Y,c.removeChildren=T,c.removeChilds=T,b=c.removeClass=x,g=c.removeEvent=te,c.toggleClass=(e,t,i)=>{if(e!=null){e instanceof Element&&(e=[e]),e instanceof NodeList&&(e=Array.from(e));for(const a of e)i===!0?C(a,t):$(a,t)||i===!1?x(a,t):C(a,t)}},le=c.waitFor=e=>new Promise(t=>{setTimeout(()=>t(),e)}),c.waitForAnimationEnd=function(e,t){return new Promise((i,a)=>{e.addEventListener("animationend",function n(s){s.target===e&&(t&&s.animationName!==t||(e.removeEventListener("animationend",n),i(s)))})})},J=c.waitForEvent=D,c.waitForInitialization=e=>{var t;return((t=e.state)===null||t===void 0?void 0:t.initialized)===!0?Promise.resolve():D(e,"kl-component-initialized",3e3)},c.waitForTransitionEnd=function(e,t){return new Promise((i,a)=>{e.addEventListener("transitionend",function n(s){s.target===e&&(t&&s.propertyName!==t||(e.removeEventListener("transitionend",n),i(s)))})})};var p={},ie,ae;Object.defineProperty(p,"__esModule",{value:!0});const U=e=>e.replace(/ +(?= )/g,""),Q=e=>e.replace(/\r?\n|\r/g,"");p.getCleanString=e=>Q(U(e)),p.getWordCount=e=>e.split(" ").length,ae=p.removeAllBS=e=>e.replace(/\s/g,""),p.removeAllNL=Q,p.removeMultiBS=U,p.toCamelCase=function(e){return e.toLowerCase().replace(/(-+|\s+)[a-z]/g,t=>t.toUpperCase()).replace(/(-|\s)+/g,"")},ie=p.toKebabCase=function(e){return e.replace(/[A-Z]/g,t=>`-${t.toLocaleLowerCase()}`)};var L={},ne;function se(e){return function(...t){return function(i,a,n){return Object.assign(Object.assign({},n),{value:e(n.value,...t)})}}}Object.defineProperty(L,"__esModule",{value:!0});const he=se(function(e,t=0){let i=-1;const a=function(...n){clearTimeout(i),i=window.setTimeout(()=>{e.call(this,...n)},t)};return a.cancel=function(){clearTimeout(i)},a}),me=se(function(e,t=0){let i,a=[];const n=function(...s){a=s,i===void 0&&(i=window.setTimeout(()=>{i=void 0,e.call(this,...a)},t))};return n.cancel=function(){clearTimeout(i),i=void 0},n});L.debounce=he,ne=L.throttle=me;var re={};Object.defineProperty(re,"__esModule",{value:!0});re.fetchJSON=(e,t)=>new Promise((i,a)=>{fetch(e,t).then(n=>{n.ok?i(n.json()):a(n)}).catch(n=>a(n))});const ue="kl-mq-change";/*! *****************************************************************************
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
***************************************************************************** */class d{constructor(){this.eventIdMap=new WeakMap,this.eventBindingMap={},this.lastMQ=w(d.mediaQuerys),h(window,"resize",this.handleMQChange,this)}static getInstance(t){return d.instance===void 0&&(d.mediaQuerys=t,d.instance=new d),d.instance}handleMQChange(){const t=w(d.mediaQuerys);t!==this.lastMQ&&(window.dispatchEvent(new CustomEvent("kl-mq-change",{detail:{newMQ:t,oldMQ:this.lastMQ}})),this.lastMQ=t)}}(function(e,t,i,a){var n,s=arguments.length,r=s<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);s>3&&r&&Object.defineProperty(t,i,r)})([ne(100)],d.prototype,"handleMQChange",null);var pe=new class{constructor(){this.urlSearchParams=new URLSearchParams(window.location.search)}get(e){return this.urlSearchParams.get(e)}getAll(e){return this.urlSearchParams.getAll(e)}getAllKeys(){return Array.from(this.urlSearchParams.keys())}set(e,t){this.urlSearchParams.set(e,t),this.updateUrl()}delete(e){this.urlSearchParams.delete(e),this.updateUrl()}getString(){return this.urlSearchParams.toString()}get curUrl(){return`${window.location.protocol}//${window.location.host}${window.location.pathname}`}updateUrl(){const e=this.getString(),t=this.curUrl,i=window.location.hash,a=e!==""?`${t}?${e}`:t;window.history.replaceState({path:a},"",a),i!==""&&(window.location.hash=i)}};new Proxy(console,{get:(e,t)=>pe.get("js-debug")!==null?e[t]:()=>{}});new class{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(e=>this.handleIntersectionChange(e),{rootMargin:"500px 0px"})}subscribe(e,t){this.componentMap.set(e,t),this.intersectionObserver.observe(e)}unsubscribe(e){this.intersectionObserver.unobserve(e),this.componentMap.delete(e)}handleIntersectionChange(e){e.forEach(t=>{const i=t.target;if(!t.isIntersecting||!this.componentMap.has(i))return;const a=this.componentMap.get(i);this.unsubscribe(i),a()})}};/*! *****************************************************************************
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
***************************************************************************** */function A(e,t,i,a){return new(i||(i=Promise))(function(n,s){function r(m){try{o(a.next(m))}catch(u){s(u)}}function l(m){try{o(a.throw(m))}catch(u){s(u)}}function o(m){var u;m.done?n(m.value):(u=m.value,u instanceof i?u:new i(function(oe){oe(u)})).then(r,l)}o((a=a.apply(e,t||[])).next())})}const ge=Symbol("decorated-props"),ve=["type","required","defaultValue","reactions","reactOnInit","attributeName"],fe={required:!1,reactions:null,reactOnInit:!1};function $e(e){return function(t,i){t.decoratedUiEls===void 0&&(t.decoratedUiEls=new Map),t.decoratedUiEls.set(i,{selector:e,justOne:!1,events:new Set})}}function Te(e,t,i){return function(a,n){a.decoratedUiEls===void 0&&(a.decoratedUiEls=new Map);const s=a.decoratedUiEls.get(e);s!==void 0||e!=="window"&&e!=="this"?(s.events.add({eventName:t,handler:n,options:i}),a.decoratedUiEls.set(e,s)):a.decoratedUiEls.set(e.toString(),{selector:e,justOne:!0,events:new Set([{eventName:t,handler:n,options:i}])})}}function ye(e){return function(t){return class extends t{get activeOnMQs(){const i=this.getAttribute("active-on-mq")||!1;if(!i)return!1;let a=[];return ae(i).split(",").forEach(n=>{if(n.length===1)a=O(a,`MQ${n}`);else if(n.length>1){const s=n.split("-"),r=parseInt(s[0],10),l=parseInt(s[1],10);for(let o=r;o<=l;o++)a=O(a,`MQ${o.toString()}`)}}),a}get currentMQ(){return w(e)}get activeOnCurrentMQ(){return this.activeOnMQs&&G(this.activeOnMQs||[],this.currentMQ)||!this.activeOnMQs}handleMqChange(i){this.activeOnMQs&&(!this.state.initialized&&this.activeOnCurrentMQ?this.mqBasedConnect():this.state.initialized&&!this.activeOnCurrentMQ&&this.disconnectComponent())}mqBasedConnect(){this.activeOnCurrentMQ&&super.connectedCallback()}connectedCallback(){d.getInstance(e),h(window,ue,this.handleMqChange,this),this.mqBasedConnect()}}}}class _e extends HTMLElement{constructor({ui:t={},events:i=[],initialStates:a={},reactions:n={},props:s={},useShadowDOM:r=!1,preserveChildren:l=!1,asyncRendering:o=!1}={}){super(),this.uiDefinitions={},this.ui={},this.events=[],this.reactions={initialized:["onComponentInitialized"]},this._state={},this._initialStates={},this.eventIdMap=new WeakMap,this.eventBindingMap={},this.initialStates={initialized:!1},this.useShadowDOM=r,this.preserveChildren=l,this.asyncRendering=o,this.useShadowDOM&&this.attachShadow({mode:"open"}),Object.assign(this.uiDefinitions,t),Object.assign(this.initialStates,a),Object.assign(this.reactions,n),this.addReactions(n),this.mergeEvents(i),this.props=this.normalizeProps(Object.assign(Object.assign({},this[ge]||null),s))}get asyncRenderingEnabled(){return this._shouldRenderAsync||this.asyncRendering}connectedCallback(){this.setupComponent()}beforeComponentDisconnects(){}disconnectComponent(){this.beforeComponentDisconnects(),this.destroyComponentProps(),this.destroyComponent(),this.setState({initialized:!1})}renderingTemplate(){return null}renderComponent(){const t=this.renderingTemplate();t!==null&&this.render(t)}renderAsync(){return A(this,void 0,void 0,function*(){console.warn("please override renderAsync-method")})}render(t){this.preserveChildren||(this.getUiRoot().innerHTML=""),t instanceof HTMLTemplateElement?this.getUiRoot().appendChild(t.content.cloneNode(!0)):this.useShadowDOM?this.shadowRoot.innerHTML=t:this.insertAdjacentHTML("beforeend",t)}destroyComponent(){console.warn("please override destroyComponent-method")}afterComponentRender(){}onComponentInitialized(){this.dispatchEvent(new CustomEvent("kl-component-initialized",{bubbles:!1}))}waitForInitialization(){return A(this,void 0,void 0,function*(){if(!this.state.initialized)return yield J(this,"kl-component-initialized")})}setupComponent(){return A(this,void 0,void 0,function*(){this.asyncRenderingEnabled?yield this.renderAsync():this.renderComponent(),this.setupComponentProps(),this.afterComponentRender(),this.checkForMissingAttributes(),this.setState({initialized:!0})})}setupComponentProps(){this.enableDecoratedProperties(),this.generateUI(),this.generateEvents(),this.initializeProps()}destroyComponentProps(){this.destroyDecoratedProperties(),this.removeEvents(),this.ui={}}generateUI(){const t=this.getUiRoot();Object.keys(this.uiDefinitions).forEach(i=>{const a=this.uiDefinitions[i].trim();if(a.endsWith(":-one")){const n=a.replace(/:-one/g,"").trim();this.ui[i]=j(t,n)}else this.ui[i]=I(t,a)})}generateEvents(){this.events.forEach(t=>{if(typeof this[t.handler]=="function"){const i=this.getEventTargets(t.target);h(i,t.event,this[t.handler],this,t.options)}})}removeEvents(){this.events.forEach(t=>{if(typeof this[t.handler]=="function"){const i=this.getEventTargets(t.target);g(i,t.event,this[t.handler],this,t.options)}})}updateUI(){this.destroyDecoratedProperties(),this.enableDecoratedProperties(),this.ui={},this.generateUI()}updateEvents(){this.events.forEach(t=>{if(typeof this[t.handler]=="function"){const i=this.getEventTargets(t.target);g(i,t.event,this[t.handler],this,t.options),h(i,t.event,this[t.handler],this,t.options)}})}enableDecoratedProperties(){this.decoratedUiEls!==void 0&&this.decoratedUiEls.forEach((t,i)=>{if(t.selector==="window")t.events.forEach(a=>{h(window,a.eventName,this[a.handler],this,a.options)});else if(t.selector==="this")t.events.forEach(a=>{h(this,a.eventName,this[a.handler],this,a.options)});else{const a=t.justOne?j(this.getUiRoot(),t.selector):I(this.getUiRoot(),t.selector);this[i]=a,t.events.forEach(n=>{h(this[i],n.eventName,this[n.handler],this,n.options)})}})}destroyDecoratedProperties(){this.decoratedUiEls!==void 0&&this.decoratedUiEls.forEach((t,i)=>{t.selector==="window"?t.events.forEach(a=>{g(window,a.eventName,this[a.handler],this,a.options)}):t.selector==="this"?t.events.forEach(a=>{g(this,a.eventName,this[a.handler],this,a.options)}):(this[i]!=null&&t.events.forEach(n=>{g(this[i],n.eventName,this[n.handler],this,n.options)}),this[i]=void 0)})}initializeProps(){this.addDefaultValueAndType(this.props),this.addPropAccessors(this.props),this.addPropsReactions(this.props)}normalizeProps(t){const i={};return Object.entries(t).forEach(([a,n])=>{const s=typeof n=="object"&&n!==null&&Object.keys(n).length&&Object.keys(n).every(r=>ve.includes(r))?n:{defaultValue:n};s.attributeName=s.attributeName||ie(a),i[a]=Object.assign(Object.assign({},fe),s)}),i}addDefaultValueAndType(t){Object.entries(t).forEach(([i,a])=>{a.defaultValue=a.hasOwnProperty("defaultValue")?a.defaultValue:this[i],a.type=a.type||a.defaultValue!==null&&a.defaultValue!==void 0?typeof a.defaultValue:"string"})}addPropAccessors(t){for(const[i,a]of Object.entries(t))Object.defineProperty(this,i,{enumerable:!1,configurable:!0,set(n){n==null?this.removeAttribute(a.attributeName):a.type==="boolean"?n?this.setAttribute(a.attributeName,""):this.removeAttribute(a.attributeName):a.type==="object"?this.setAttribute(a.attributeName,JSON.stringify(n)):this.setAttribute(a.attributeName,String(n))},get(){const n=this.getAttribute(a.attributeName);return n===null&&a.defaultValue!==void 0?a.defaultValue:this.castFromAttribute(n,a.type)}})}addPropsReactions(t){const i=Object.entries(t).filter(([,s])=>Array.isArray(s.reactions)&&s.reactions.length);if(i.length===0)return;const a=s=>{const[r,l]=i.find(([,o])=>o.attributeName===s);l.reactions.forEach(o=>{typeof o=="function"?o.call(this,this[r]):typeof o=="string"&&o in this&&typeof this[o]=="function"?this[o](this[r]):console.error("unknown given reaction callback: ",o)})},n={attributes:!0,attributeFilter:i.map(([,s])=>s.attributeName),attributeOldValue:!0};new MutationObserver(s=>{for(const r of s){const l=r.oldValue;if(this.getAttribute(r.attributeName)===l)return;a(r.attributeName)}}).observe(this,n),i.filter(([,s])=>s.reactOnInit).forEach(([,s])=>a(s.attributeName))}checkForMissingAttributes(){const t=[];for(const i of Object.values(this.props))i.required&&!this.hasAttribute(i.attributeName)&&t.push(i.attributeName);t.length&&console.log(`${this.tagName.toLowerCase()} is missing required attribute(s): ${t.join(", ")}`)}castFromAttribute(t,i="string"){switch(i){case"boolean":return t!==null;case"number":return parseFloat(String(t));case"object":return JSON.parse(String(t));default:return t}}get state(){return W(this._state||{})}set state(t){throw new Error('The state should only be modified via the "setState" method.')}set initialStates(t){this._initialStates=t,this._state=t}get initialStates(){return this._initialStates||{}}setState(t,{merge:i=!0,silent:a=!1}={}){const n=this.state;if(this._state=Object.assign({},i?n:{},t),a||M(n,this._state))return this;const s=this.state,r=this.reactions||{};return Object.keys(r).forEach(l=>{if(l==="*")this.invokeReaction("*");else if(l in t){const o=S(n,l),m=S(s,l);M(o,m)||this.invokeReaction(l)}}),this}addReactions(t,i){if(typeof t=="object")Object.entries(t).forEach(([a,n])=>this.addReactions(a,n));else{this.reactions=this.reactions||{};const a=H(i),n=this.reactions[t]||[];this.reactions[t]=K(n,a,this.isNewReaction)}return this}isNewReaction(t,i){return!i.some(a=>t===a)}removeReactions(t,i){return typeof t=="object"?(Object.entries(t).forEach(([a,n])=>this.removeReactions(a,n)),this):(this.reactions.hasOwnProperty(t)?i?(i.forEach(a=>{this.reactions[t]=this.reactions[t].filter(n=>n!==a)}),this.reactions[t].length===0&&delete this.reactions[t]):delete this.reactions[t]:console.warn("no such prop found "),this)}invokeReaction(t){((this.reactions||{})[t]||new Set).forEach(i=>{typeof i=="function"?i(this.state):typeof i=="string"&&i in this&&typeof this[i]=="function"?this[i](this.state):console.error("given reaction callback can't be found: ",i)})}mergeEvents(t){this.events=this.events.filter(i=>this.isNewEvent(i,t)).concat(t)}isNewEvent(t,i){return!i.some(a=>a.event===t.event&&a.target===t.target)}getUiRoot(){return this.shadowRoot?this.shadowRoot:this}getEventTargets(t){let i=null;return i=t==="this"?this:t==="window"?window:this.ui[t],i}}class be{constructor(){this.componentMap=new WeakMap,this.intersectionObserver=new IntersectionObserver(t=>this.handleIntersectionChange(t))}subscribe(t,i){this.componentMap.set(t,i),this.intersectionObserver.observe(t)}unsubscribe(t){this.intersectionObserver.unobserve(t),this.componentMap.delete(t)}handleIntersectionChange(t){t.forEach(i=>{const a=i.target;if(!i.isIntersecting||!this.componentMap.has(a))return;const n=this.componentMap.get(a);this.unsubscribe(a),n()})}}const we=new be,De="dva-state-active",q="dva-state-loading",ze="dva-state-loaded",F="dva-state-hidden",Ee="dva-state-initialized",Ce="dva-state-invp",ke=[{name:"MQ5",query:"(min-width: 1280px)",min:1280,max:Number.MAX_SAFE_INTEGER||1e4,colCount:4},{name:"MQ4",query:"(min-width: 1024px)",min:1024,max:1279,colCount:4},{name:"MQ3",query:"(min-width: 760px)",min:760,max:1023,colCount:4},{name:"MQ2",query:"(min-width: 476px)",min:476,max:759,colCount:6},{name:"MQ1",query:"(min-width: 0px)",min:0,max:476,colCount:12}],Ae=':host{display:block}.dva-e-lazy-image__mask{position:relative;overflow:hidden;width:100%;height:0;pointer-events:none}.dva-e-lazy-image__mask--16-9{padding-bottom:56.25%}.dva-e-lazy-image__mask--21-9{padding-bottom:42.8571429%}.dva-e-lazy-image__mask--9-16{padding-bottom:177.78%}.dva-e-lazy-image__mask--4-3{padding-bottom:75%}.dva-e-lazy-image__mask--2-3{padding-bottom:150%}.dva-e-lazy-image__mask--1-1{padding-bottom:100%}.dva-e-lazy-image__mask--2-1{padding-bottom:50%}.dva-e-lazy-image__wrapper{opacity:1;line-height:0;transition:opacity .3s ease-in-out}.dva-e-lazy-image__wrapper.dva-state-hidden{display:none}.dva-e-lazy-image__wrapper.dva-state-loading{position:relative;min-height:200px;opacity:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper.dva-state-loading{position:initial;min-height:initial}.dva-e-lazy-image__img{width:100%}.dva-e-lazy-image__wrapper--has-overwidth .dva-e-lazy-image__img{width:inherit;height:100%;object-fit:cover;object-position:50% 50%}.dva-e-lazy-image__no-ratio,.dva-e-lazy-image__no-ratio .dva-e-lazy-image__wrapper{width:inherit;height:inherit}.dva-e-lazy-image__no-ratio .dva-e-lazy-image__img{width:inherit;max-width:100%;height:inherit}.dva-e-lazy-image__cover{position:absolute;top:0;left:0;width:100%;height:100%}.dva-e-lazy-image__cover .dva-e-lazy-image__img{object-fit:cover}.dva-e-lazy-image__contain .dva-e-lazy-image__img{object-fit:contain;object-position:100% 100%}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:42.8571428571%;pointer-events:none}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:56.25%;pointer-events:none}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:177.7777777778%;pointer-events:none}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:75%;pointer-events:none}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:150%;pointer-events:none}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:50%;pointer-events:none}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:100%;pointer-events:none}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper{position:absolute;width:100%;height:auto}.dva-e-lazy-image--circle{overflow:hidden;width:100%;padding:4px;border:1px solid #c8aa22;border-radius:100%;background:#fff}.dva-e-lazy-image--circle .dva-e-lazy-image__mask{display:block;overflow:hidden;width:100%;border-radius:100%}',Me=e=>e===void 0?"":` ${e}`,Se=e=>e==="cover"?"cover":e==="contain"?"contain":"fill",Oe=e=>e==="contain"?"100% 100%":"50% 50%",Ie=e=>e==="circle"?"dva-e-lazy-image--circle":"",je=e=>e==="21:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9":e==="16:9"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9":e==="4:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3":e==="1:1"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1":e==="2:3"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3":e==="9:16"?"dva-e-lazy-image__mask dva-e-lazy-image__mask--9-16":e==="cover"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__cover":e==="contain"?"dva-e-lazy-image__no-ratio dva-e-lazy-image__contain":"dva-e-lazy-image__no-ratio",V=e=>B`
    <style>
      ${Ae}
    </style>
    <!--<div class="${Ie(e.wrapper)}">-->
    <div class="${je(e.aspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src="${e.fallbackImg}"
          srcset="${e.srcset}"
          alt="${e.alt}"
          sizes="${e.sizes}"
          data-object-fit=${Se(e.aspectRatio)}
          data-object-position=${Oe(e.aspectRatio)}
        />
      </div>
    </div>
    <!--</div>-->
  `,Ue=e=>B`
    <dva-e-lazy-image 
      class="dva-e-lazy-image dva-js-lazy-image${Me(e.cssClasses)}"
      src="${e.src}"
      alt=${_(e.alt)}
      srcset="${_(e.srcset)}"
      sizes="${_(e.sizes)}"
      aspect-ratio="${_(e.aspectRatio)}"
      wrapper="${_(e.wrapper)}">
    </dva-e-lazy-image>
  `;var Le=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,Ne=(e,t,i,a)=>{for(var n=a>1?void 0:a?Pe(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(n=(a?r(t,i,n):r(n))||n);return a&&n&&Le(t,i,n),n};let P=class extends _e{constructor(){super({ui:{image:".dva-js-lazy-image__img :-one",wrapper:".dva-js-lazy-image__wrapper :-one"},initialStates:{imgLoaded:!1},useShadowDOM:!0})}connectedCallback(){this.initType==="lazy"?we.subscribe(this,()=>super.connectedCallback()):super.connectedCallback()}get DEFAULT_FALLBACK_IMAGE(){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E"}get fallbackImg(){return this.getAttribute("fallback-image")||this.DEFAULT_FALLBACK_IMAGE}get imgSrc(){return this.getAttribute("src")||""}get imgSrcSet(){return this.getAttribute("srcset")||""}get imgSizes(){return this.getAttribute("sizes")||""}get imgAlt(){return this.getAttribute("alt")||""}get imgAspectRatio(){return this.getAttribute("aspect-ratio")||""}get imgWrapper(){return this.getAttribute("wrapper")||""}get hasOverWidth(){return this.ui.image.offsetHeight<this.offsetHeight}static get observedAttributes(){return["src","aspect-ratio"]}get initType(){switch(this.getAttribute("init")){case"explicit":return"explicit";default:return"lazy"}}attributeChangedCallback(e,t,i){if(!(t===i||!this.state.initialized))switch(e){case"src":this.setState({imgLoaded:!1}),this.loadImage();break;case"aspect-ratio":this.renderComponent(),this.handleOverwidth();break}}renderComponent(){N(V({alt:this.imgAlt,src:this.DEFAULT_FALLBACK_IMAGE,srcset:"",sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,wrapper:this.imgWrapper,fallbackImg:this.fallbackImg}),this.getUiRoot())}updateComponent(){N(V({alt:this.imgAlt,src:this.imgSrc,srcset:this.imgSrcSet,sizes:this.imgSizes,aspectRatio:this.imgAspectRatio,fallbackImg:this.fallbackImg}),this.getUiRoot())}afterComponentRender(){f(this,Ee),b(this.ui.wrapper,F),this.initType!=="explicit"&&this.loadImage()}beforeComponentDisconnects(){f(this.ui.wrapper,F)}destroyComponent(){this.setState({imgLoaded:!1})}loadImage(){if(this.state.imgLoaded)return;f(this,Ce),f(this.ui.wrapper,q);const e=this.ui.image;this.attachImageEvents(e),this.imgSrc||this.imgSrcSet?(this.imgSrc&&e.setAttribute("src",this.imgSrc),this.imgSrcSet&&e.setAttribute("srcset",this.imgSrcSet)):console.warn("LazyImage: no src/srcset provided for",e)}handleImageLoadingError(){const e=this.ui.image;g(e,"error",this.handleImageLoadingError,this),console.log("src",this.fallbackImg),e.setAttribute("src",this.fallbackImg),e.setAttribute("srcset",""),console.log("lazyImg error:",e)}handleImageLoad(){this.handleOverwidth(),g(this.ui.image,"load",this.handleImageLoad,this),b(this.ui.wrapper,q),f(this,ze),this.dispatchEvent(new CustomEvent("dva-image-loaded",{detail:{target:this}})),this.setState({imgLoaded:!0})}attachImageEvents(e){h(e,"load",this.handleImageLoad,this),h(e,"error",this.handleImageLoadingError,this)}handleOverwidth(){b(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth"),this.hasOverWidth&&f(this.ui.wrapper,"dva-e-lazy-image__wrapper--has-overwidth")}};P=Ne([ye(ke)],P);customElements.define("dva-e-lazy-image",P);export{De as A,we as L,$e as N,Te as R,ye as S,_e as U,f as a,Ue as b,j as f,ce as h,ke as m,b as r,ne as t,le as w};
//# sourceMappingURL=dva-e-lazy-image.6VZUXOS_.js.map
