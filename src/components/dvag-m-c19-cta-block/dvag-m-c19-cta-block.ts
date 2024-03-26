import { Component, uiElement } from "@kluntje/core";
import { DvaLazyImage } from "Components/dva-e-lazy-image/dva-e-lazy-image";

export class DVAGC19CtaBlock extends Component {
  @uiElement(".dvag-m-c19-cta-block__vb-content")
  vbContent: HTMLDivElement;

  @uiElement(".dvag-m-c19-cta-block__non-vb-content")
  nonVbContent: HTMLDivElement;

  @uiElement(".dvag-m-c19-cta-block__vb-name")
  vbName: HTMLSpanElement;

  @uiElement(".dvag-m-c19-cta-block__vb-image")
  vbImage: DvaLazyImage;

  @uiElement(".dvag-m-c19-cta-block__image-wrapper--vb-image")
  vbImageWrapper: HTMLDivElement;

  @uiElement(".dvag-m-c19-cta-block__image-wrapper--vb-fallback")
  vbFallbackWrapper: HTMLDivElement;

  get vbFileUrl(): string {
    return this.getAttribute("vb-file-url") || "";
  }

  afterComponentRender() {
    // this.insertVbContent();
    // this.handleCookieChange();
  }

  /*
  async insertVbContent(): Promise<void> {
    if (!CookieService.vbPathSet) return;
    if (this.vbFileUrl === "") return;
    const url = CookieService.getCookie("VBPathCookie") + this.vbFileUrl;

    // fetch markup from server
    const responseData = await fetch(url)
      .then(response => {
        if (!response.ok) throw Error(`Data from ${url} could not be loaded: ${response.statusText}`);
        return response.json();
      })
      .catch(error => {
        console.error("Error while fetching data from vb-file ", error);
      });

    if (!responseData) return;

    this.vbName.innerHTML = responseData.displayName;

    if (responseData.vignetteImage === undefined || responseData.vignetteImage === "") {
      addClass(this.vbFallbackWrapper, VISIBLE);
    } else {
      this.vbImage.setAttribute("src", responseData.vignetteImage);
      addClass(this.vbImageWrapper, VISIBLE);
    }
  }
*/

  /*
  @uiEvent("window", COOKIE_CHANGE_EVENT)
  handleCookieChange() {
    const vbCookieSet = CookieService.vbPathSet;
    toggleClass(this.vbContent, VISIBLE, vbCookieSet);
    toggleClass(this.nonVbContent, HIDDEN, vbCookieSet);
    toggleClass(this.vbContent, HIDDEN, !vbCookieSet);
    toggleClass(this.nonVbContent, VISIBLE, !vbCookieSet);
  }
  */
}

customElements.define("dvag-m-c19-cta-block", DVAGC19CtaBlock);
