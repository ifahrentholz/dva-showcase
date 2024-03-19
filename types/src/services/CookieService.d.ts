type CookieName = "VBPathCookie" | "dvag_cookies2023" | "dvagFloatingCta";
export declare class CookieService {
    cookiesAccepted: boolean;
    constructor();
    /**
     * Returns string[] of allowed CookieName
     * @returns {string[]}
     */
    get cookieList(): string[];
    /**
     * returns true, if cookies were accepted by the user
     * @returns {boolean}
     */
    get cookiesAllowed(): boolean;
    /**
     * sets Cookie, if User allowed Cookies
     * @param {CookieName} cookieName
     * @param {string} cookieValue
     * @param {number} expiresIn days until the cookie expires...defaults to 365
     */
    setCookie(cookieName: CookieName, cookieValue: string, expiresIn?: number): void;
    /**
     * returns value of specific Cookie
     * @param {CookieName} cookieName
     * @returns {string | undefined}
     */
    getCookie(cookieName: CookieName): string | undefined;
    /**
     * returns, whether as specific cookie is set
     * @param {CookieName} cookieName
     * @returns {boolean}
     */
    isCookieSet(cookieName: CookieName): boolean;
    /**
     * allows Service to set Cookies
     */
    allowCookies(): void;
    /**
     * returns whether VBPathCookie is set
     * @returns {boolean}
     */
    get vbPathSet(): boolean;
    /**
     * Returns current VB-Page-Path
     * @returns {string}
     */
    get vbPath(): string;
    /**
     * Returns expandedPath if existent. Otherwise returns null
     * @returns {string | null}
     */
    get expandedVbPath(): string | null;
    /**
     * Returns Path of current VB-Page, in the (for VBPathCookie)
     * needed form
     * @returns {string}
     */
    get shortenedVbPath(): string;
    /**
     * Returns, whether current page is VB Page
     * @returns {boolean}
     */
    get isVbPage(): boolean;
    /**
     * Initially set vb-path-cookie on vb pages
     */
    initiallySetVbPath(): void;
}
declare const _default: CookieService;
export default _default;
