import{j as v,x as o}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as c}from"../__chunks__/if-defined.JfW-uEqn.js";import{c as d}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{t as g,l as _,b as l,k as u}from"../__chunks__/index.module.wBphgPbK.js";import{U as m}from"../__chunks__/component.module.g_VEinWh.js";import{A as p,H as f}from"../__chunks__/cssClasses.m89E5C3B.js";import{I as b,O as k}from"../__chunks__/eventTypes.voneREpA.js";var y=Object.defineProperty,S=Object.getOwnPropertyDescriptor,A=(a,e,t,s)=>{for(var i=s>1?void 0:s?S(e,t):e,n=a.length-1,r;n>=0;n--)(r=a[n])&&(i=(s?r(e,t,i):r(i))||i);return s&&i&&y(e,t,i),i};class h extends m{constructor(){super({ui:{stickyBox:".dva-js-social-sharing__sticky :-one",stickyToggle:".dva-js-social-sharing__sticky-icon :-one",shareLink:".dva-js-social-sharing__share-link"},events:[{event:"scroll",target:"window",handler:"onScroll"},{event:"click",target:"stickyToggle",handler:"toggleSticky"},{event:b,target:"this",handler:"handleInVP"},{event:k,target:"this",handler:"handleOutVP"},{event:"click",target:"shareLink",handler:"handleShare"}],initialStates:{isActive:!0,isVisible:!0},reactions:{isActive:["onActiveChange"],isVisible:["onVisibleChange"]}}),this.viewportObserver=_.getInstance()}get sharingUrl(){return this.getAttribute("share-event-url")||""}get pageScrollY(){return window.pageYOffset||document.documentElement.scrollTop}get shouldBeActive(){return this.pageScrollY<50}afterComponentRender(){this.viewportObserver.observe(this),this.setState({isActive:this.shouldBeActive})}onScroll(){this.setState({isActive:this.shouldBeActive})}scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}toggleSticky(){this.setState({isActive:!this.state.isActive})}onActiveChange({isActive:e}){l(this.ui.stickyBox,p,e)}handleInVP(){this.setState({isVisible:!1})}handleOutVP(){this.setState({isVisible:!0})}onVisibleChange({isVisible:e}){l(this.ui.stickyBox,f,!e)}handleShare(){this.sharingUrl!==""&&u(this.sharingUrl)}}A([g(100)],h.prototype,"onScroll",1);customElements.define("dva-m-social-sharing",h);const O=a=>o`<dva-m-social-sharing class="dva-m-social-sharing" data-analytics-articleshare="true" share-event-url="https://sma.dvag.de/count-service/v1/increase-share/wichtig-fuer-sie/vorsorge/attraktive-zusatzleistungen-vom-arbeitgeber-nutzen-bav-und-bkv"><header class="dva-m-social-sharing__head"><dva-e-icon class="dva-m-social-sharing__head-icon" icon-id="dva-icon-share"></dva-e-icon><h3 class="dva-m-social-sharing__headline">Artikel teilen</h3></header><div class="dva-m-social-sharing__icons">${a.map(e=>o`<a class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-m-social-sharing__button dva-js-social-sharing__share-link" href="${c(e.url)}" title="${c(e.name)}" target="_blank"><div class="dva-e-button__background"></div><dva-e-icon class="dva-e-button__icon" icon-id="dva-icon-${e.name}"></dva-e-icon></a>`)}</div><div class="dva-m-social-sharing__sticky dva-js-social-sharing__sticky dva-state-active"><dva-e-icon class="dva-m-social-sharing__sticky-icon dva-m-social-sharing__sticky-icon--main dva-js-social-sharing__sticky-icon" icon-id="dva-icon-share"></dva-e-icon>${a.map(e=>o`<a href="${e.url}" class="dva-m-social-sharing__sticky-link dva-js-social-sharing__share-link"><dva-e-icon class="dva-m-social-sharing__sticky-icon" icon-id="dva-icon-${e.name}"></dva-e-icon></a>`)}</div></dva-m-social-sharing>`;function I(a){const t=[...a.children].map(s=>{const i=s.children[0].textContent,n=s.children[1].textContent;return{name:i,url:n}});d(a),v(O(t),a)}export{I as default};
//# sourceMappingURL=social-sharing.js.map
