import{c as s}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as v,x as i,T as l}from"../__chunks__/lit-element.XkUWx5ik.js";import{r as p}from"../__chunks__/dva-e-icon.template.tppk8KWP.js";import{r as m}from"../__chunks__/dva-e-lazy-image.template.1izYfAEc.js";import"../__chunks__/if-defined.JfW-uEqn.js";const g=t=>t!=null&&t.src?i`<div class="dvag-m-c19-cta-block__image-wrapper dvag-m-c19-cta-block__image-wrapper--vb-image">${m({aspectRatio:"1:1",cssClasses:"dvag-m-c19-cta-block__vb-image",wrapper:"circle",src:t?t.src:"",alt:t?t.alt:""})}</div>`:l,b=({buttonLabel:t,color:a,iconName:c,image:e,text:r,advisorName:n,advisorTitle:o,options:d})=>i`<div class="c19-ctablock teaser dvag-h-typography--light ${d}"><div class="dvag-m-c19-cta-block" id="c19-cta-block" style="--background-color:${a}"><div><div class="dvag-m-c19-cta-block__content-wrapper"><div class="dvag-m-c19-cta-block__inner-content-wrapper">${g(e)}<div class="dvag-m-c19-cta-block__text-wrapper"><div class="dvag-m-c19-cta-block__text"><h2>${r}</h2></div><p class="dvag-m-c19-cta-block__vb-info">${o} <span class="dvag-m-c19-cta-block__vb-name">${n}</span></p><div class="dvag-m-c19-cta-block__button-wrapper"><dvag-e-c26-vb-contact-overlay-toggle id="contact_c19-cta-block" class="dvag-e-c26-vb-contact-overlay-toggle dva-e-button dva-e-button--rebrush dva-e-button--small" deeplinking-target="kontakt" tabindex="0"><div class="dva-e-button__background"></div>${p(c,"dva-e-button__icon")} <span class="dva-e-button__label">${t}</span></dvag-e-c26-vb-contact-overlay-toggle></div></div></div></div></div></div></div>`,_=t=>`dvag-h-${t}`,u=t=>[...t.classList].filter(a=>!["block","teaser"].includes(a)).map(a=>a.includes("margin")||a.includes("typography")?_(a):a).join(" ");function $(t){var c,e,r,n,o,d;const a={image:t.querySelector("img")||void 0,advisorName:((c=t.children[1].textContent)==null?void 0:c.trim())||"",text:((e=t.children[2].textContent)==null?void 0:e.trim())||"",buttonLabel:((r=t.children[4].textContent)==null?void 0:r.trim())||"",iconName:((n=t.children[3].textContent)==null?void 0:n.trim())||"dva-icon-speechbubble-24px",color:((o=t.children[5].textContent)==null?void 0:o.trim())||"",advisorTitle:((d=t.children[6].textContent)==null?void 0:d.trim())||"",options:u(t)};s(t),v(b(a),t)}export{$ as default};
//# sourceMappingURL=teaser.js.map
