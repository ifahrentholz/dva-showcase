import * as jsCookie from "js-cookie";
import { hasClass } from "@kluntje/js-utils/lib/dom-helpers";
import { COOKIE_CHANGE_EVENT } from "Constants/eventTypes";

type CookieName = "VBPathCookie" | "dvag_cookies2023" | "dvagFloatingCta";

export class CookieService {
  cookiesAccepted: boolean;

  constructor() {
    this.cookiesAccepted = this.getCookie("dvag_cookies2023") === "1";
  }

  /* ====================================================
                  Basic Funtionality
    ==================================================*/

  /**
   * Returns string[] of allowed CookieName
   * @returns {string[]}
   */
  get cookieList(): string[] {
    return ["VBPathCookie", "dvag_cookies2023", "dvagFloatingCta"];
  }

  /**
   * returns true, if cookies were accepted by the user
   * @returns {boolean}
   */
  get cookiesAllowed(): boolean {
    if (!this.cookiesAccepted) console.warn("Cookies not allowed yet");

    return this.cookiesAccepted;
  }

  /**
   * sets Cookie, if User allowed Cookies
   * @param {CookieName} cookieName
   * @param {string} cookieValue
   * @param {number} expiresIn days until the cookie expires...defaults to 365
   */
  setCookie(cookieName: CookieName, cookieValue: string, expiresIn = 365): void {
    if (!this.cookiesAllowed) return;

    jsCookie.set(cookieName, cookieValue, { expires: expiresIn });
    window.dispatchEvent(
      new CustomEvent(COOKIE_CHANGE_EVENT, {
        detail: {
          cookieName,
          cookieValue,
        },
      }),
    );
  }

  /**
   * returns value of specific Cookie
   * @param {CookieName} cookieName
   * @returns {string | undefined}
   */
  getCookie(cookieName: CookieName): string | undefined {
    return jsCookie.get(cookieName);
  }

  /**
   * returns, whether as specific cookie is set
   * @param {CookieName} cookieName
   * @returns {boolean}
   */
  isCookieSet(cookieName: CookieName): boolean {
    return this.getCookie(cookieName) !== undefined;
  }

  /**
   * allows Service to set Cookies
   */
  allowCookies(): void {
    if (this.cookiesAccepted) return;

    this.cookiesAccepted = true;
    this.setCookie("dvag_cookies2023", "1");

    if (this.isVbPage) {
      this.setCookie("VBPathCookie", this.vbPath, 20);
    }
  }

  /* ====================================================
                  VBPath Helpers
    ==================================================*/

  /**
   * returns whether VBPathCookie is set
   * @returns {boolean}
   */
  get vbPathSet(): boolean {
    return this.isCookieSet("VBPathCookie");
  }

  /**
   * Returns current VB-Page-Path
   * @returns {string}
   */
  get vbPath(): string {
    const expandedVbPath = this.expandedVbPath;

    return expandedVbPath ? expandedVbPath : this.shortenedVbPath;
  }

  /**
   * Returns expandedPath if existent. Otherwise returns null
   * @returns {string | null}
   */
  get expandedVbPath(): string | null {
    const { pathname } = window.location;
    const EXPENDED_VB_PATH_PATTERN = "^/content/\\S*/site-vb/vb/\\w/\\w/\\w/[^/]+";
    const expendedPaths = pathname.match(EXPENDED_VB_PATH_PATTERN);

    return expendedPaths ? `${expendedPaths[0]}/index/` : null;
  }

  /**
   * Returns Path of current VB-Page, in the (for VBPathCookie)
   * needed form
   * @returns {string}
   */
  get shortenedVbPath(): string {
    const { origin, pathname } = window.location;

    return `${origin}/${pathname.split("/")[1]}`;
  }

  /**
   * Returns, whether current page is VB Page
   * @returns {boolean}
   */
  get isVbPage(): boolean {
    const pageElement = document.querySelector("#page");
    return hasClass(document.body, "vb") || (pageElement !== null && hasClass(pageElement, "vb"));
  }

  /**
   * Initially set vb-path-cookie on vb pages
   */
  initiallySetVbPath(): void {
    // if current Page is VB-Page and Cookies were allowed, set VBPathCookie
    if (this.cookiesAccepted && this.isVbPage) {
      this.setCookie("VBPathCookie", this.vbPath, 20);
    }
  }
}

export default new CookieService();
