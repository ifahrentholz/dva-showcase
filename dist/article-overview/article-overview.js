import{c as l}from"../__chunks__/cleanUpBlock.VYQGZKWT.js";import{j as c,x as t}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as v}from"../__chunks__/unsafe-html.tmuruS4o.js";const o=e=>t`<div class="container text"><div class="bleed-m bleed-l"><div class="col-s-12 col-m-10 col-m-1-offset col-l-8 col-l-2-offset"><div class="article-infobox"><dva-m-article-overview class="dva-m-article-overview" threshold-views="63" threshold-shares="1" share-text="Artikel teilen" info-url="https://sma.dvag.de/count-service/v1/counter/wichtig-fuer-sie/vorsorge/attraktive-zusatzleistungen-vom-arbeitgeber-nutzen-bav-und-bkv"><header class="dva-m-article-overview__header"><div class="dva-m-article-overview__header-item dva-js-article-overview__header-item--time dva-state-loaded"><dva-e-icon class="dva-e-icon" icon-id="dva-icon-clock"></dva-e-icon><div class="dva-m-article-overview__header-text"><span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count">${e.readingTime}</span> <span class="dva-js-article-overview__header-item-unit">Lesedauer</span></div></div><div class="dva-m-article-overview__header-item dva-js-article-overview__header-item--views dva-state-loaded"><dva-e-icon class="dva-e-icon" icon-id="dva-icon-eye"></dva-e-icon><div class="dva-m-article-overview__header-text"><span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count">8.051 mal</span> <span class="dva-js-article-overview__header-item-unit">gelesen</span></div></div><div class="dva-m-article-overview__header-item dva-js-article-overview__header-item--shares dva-state-loaded"><dva-e-icon class="dva-e-icon" icon-id="dva-icon-share"></dva-e-icon><div class="dva-m-article-overview__header-text"><span class="dva-m-article-overview__header-item-count dva-js-article-overview__header-item-count">119 mal</span> <span class="dva-js-article-overview__header-item-unit">geteilt</span></div></div></header><div class="dva-m-article-overview__content"><h3 class="dva-m-article-overview__headline">${e.headline}</h3><ul>${e.listItems.map(a=>t`<li>${v(a.innerHTML)}</li>`)}</ul><p><small>${v(e.footNote)}</small></p></div></dva-m-article-overview></div></div></div></div>`;function h(e){var i;const a=e.children[0].textContent||"1 Minute",r=((i=e.children[1].querySelector("p"))==null?void 0:i.textContent)||"",d=[...e.children[1].querySelectorAll("li")],s=e.children[2].innerHTML||"";l(e),c(o({readingTime:a,headline:r,listItems:d,footNote:s}),e)}export{h as default};
//# sourceMappingURL=article-overview.js.map
