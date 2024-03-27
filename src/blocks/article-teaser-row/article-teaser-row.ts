import { renderLazyImage } from 'Components/dva-e-lazy-image/dva-e-lazy-image.template';
import { renderIcon } from 'Components/icon/dva-e-icon.template';
import { html, render } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { renderCssClasses } from 'Utils/renderCssClasses';
import './article-teaser-row.scss';
import { cleanUpBlock } from 'Utils/cleanUpBlock';

interface ArticleTeaserArgs {
  cssClasses?: string | 'dva-m-article-teaser--is-first';
  linkUrl: string;
  imageSrc: string;
  topline?: string;
  headline?: string;
  text?: string;
  linkLabel?: string;
}

const articleTeaserTemplate = (args: ArticleTeaserArgs) => {
  return html`
    <div class="col-s-12 col-m-4 col-l-4">
      <div class="dva-m-teaser dva-m-article-teaser${renderCssClasses(args.cssClasses)}">
        <a href="${args.linkUrl}" class="dva-m-article-teaser__image-link">
          ${renderLazyImage({
            src: args.imageSrc,
            alt: 'header-finanz-und-versicherungscheck-beratung-frauen.jpg',
            cssClasses: 'dva-m-article-teaser__image',
            aspectRatio: '21:9',
          })}
        </a>
        <div class="dva-m-article-teaser__content">
          ${ifDefined(args.topline ? html`<h4 class="dva-m-teaser__topline">${args.topline}</h4>` : undefined)}
          ${ifDefined(args.headline ? html`<h3 class="dva-m-teaser__headline">${args.headline}</h3>` : undefined)}
          ${ifDefined(args.text ? html`<p class="dva-m-teaser__text">${args.text}</p>` : undefined)}
          ${ifDefined(
            args.linkLabel && args.linkUrl
              ? html`
                  <a href="${args.linkUrl}" class="dva-e-link dva-m-teaser__cta" target="_self">
                    <span class="dva-e-link__label">Weiterlesen</span>
                    ${renderIcon('dva-icon-arrow-right')}
                  </a>
                `
              : undefined
          )}
        </div>
      </div>
    </div>
  `;
};

interface ArticleTeaserRowArgs {
  headline: string;
  teasers: ArticleTeaserArgs[];
  ctaLabel: string;
  ctaUrl: string;
}

const articleTeaserRowTemplate = (args: ArticleTeaserRowArgs) => {
  return html`
    <section class="section bg-darkgrey ">
      <div class="section-content container">
        <div class="bleed-m bleed-l">
          <header
            class="section-header align-center col-s-12 col-m-10 col-m-1-offset col-m-1-push col-l-10 col-l-1-offset col-l-1-push"
          >
            <h3 class="section-headline">${args.headline}</h3>
          </header>

          <div class="content-box clear col-s-12 col-m-12 col-l-12">
            <div class="bar">
              <div class="text">
                <div class="col-wrapper">${args.teasers.map((teaser) => articleTeaserTemplate(teaser))}</div>
              </div>
            </div>
          </div>

          <footer class="section-footer clear col-s-12 col-m-12 col-l-12">
            <ul class="button-list bleed-m bleed-l">
              <li class="button-list-item col-m-4 col-m-4-offset col-l-4 col-l-4-offset">
                <a class="dva-e-button dva-e-button--rebrush" href="${args.ctaUrl}">
                  <div class="dva-e-button__background"></div>
                  <span class="dva-e-button__label">${args.ctaLabel}</span>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  `;
};

export default function (block: HTMLElement) {
  const headline = block.children[0].textContent || '';
  const teasers = [...block.children[1].children].map((teaser, index) => {
    const teaserImage = teaser.querySelector('img');
    const teaserTopline = block.children[2].children[index].textContent || '';
    const teaserHeadline = block.children[3].children[index].textContent || '';
    const teaserText = block.children[4].children[index].textContent || '';
    const teaserLink = block.children[5].children[index].querySelector('a');
    const teaserLinkUrl = teaserLink?.getAttribute('href') || '';
    const teaserLinkLabel = teaserLink?.textContent || '';

    return {
      linkUrl: teaserLinkUrl,
      imageSrc: teaserImage?.getAttribute('src') || '',
      topline: teaserTopline,
      headline: teaserHeadline,
      text: teaserText,
      linkLabel: teaserLinkLabel,
    };
  });

  const cta = block.children[6].querySelector('a');
  const ctaUrl = cta?.getAttribute('href') || '';
  const ctaLabel = cta?.textContent || '';

  cleanUpBlock(block);

  render(
    articleTeaserRowTemplate({
      headline,
      teasers,
      ctaLabel,
      ctaUrl,
    }),
    block
  );
}
