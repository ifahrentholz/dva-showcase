import { T as p, s as I, x as d, j as W } from "../__chunks__/lit-element.XkUWx5ik.js";
import { t as T } from "../__chunks__/property.0daVBkvz.js";
import { i as et, t as tt, e as it, o as se } from "../__chunks__/unsafe-html.1nFT-Oym.js";
import { r as x, t as N } from "../__chunks__/toClassName.o2_BLIQs.js";
import { F as S, o as R } from "../__chunks__/if-defined._tCGPUT8.js";
import { r as v } from "../__chunks__/dva-e-icon.template.tppk8KWP.js";
import { c as nt } from "../__chunks__/createOptimizedPicture.lBh_4LJd.js";
import { _ as o } from "../__chunks__/preload-helper.hlDPvxQM.js";
import { i as Oe } from "../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ae = i => i.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = (i, e) => {
    var a;
    const t = i._$AN;
    if (t === void 0) return !1;
    for (const r of t) (a = r._$AO) == null || a.call(r, e, !1), D(r, e);
    return !0;
  },
  $ = i => {
    let e, t;
    do {
      if ((e = i._$AM) === void 0) break;
      (t = e._$AN), t.delete(i), (i = e);
    } while ((t == null ? void 0 : t.size) === 0);
  },
  Li = i => {
    for (let e; (e = i._$AM); i = e) {
      let t = e._$AN;
      if (t === void 0) e._$AN = t = new Set();
      else if (t.has(i)) break;
      t.add(i), oe(e);
    }
  };
function de(i) {
  this._$AN !== void 0 ? ($(this), (this._$AM = i), Li(this)) : (this._$AM = i);
}
function re(i, e = !1, t = 0) {
  const a = this._$AH,
    r = this._$AN;
  if (r !== void 0 && r.size !== 0)
    if (e)
      if (Array.isArray(a)) for (let o = t; o < a.length; o++) D(a[o], !1), $(a[o]);
      else a != null && (D(a, !1), $(a));
    else D(this, i);
}
const oe = i => {
  i.type == ie.CHILD && (i._$AP ?? (i._$AP = re), i._$AQ ?? (i._$AQ = de));
};
let ne = class extends Xi {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(e, t, a) {
    super._$AT(e, t, a), Li(this), (this.isConnected = e._$AU);
  }
  _$AO(e, t = !0) {
    var a, r;
    e !== this.isConnected &&
      ((this.isConnected = e),
      e ? (a = this.reconnected) == null || a.call(this) : (r = this.disconnected) == null || r.call(this)),
      t && (D(this, e), $(this));
  }
  setValue(e) {
    if (ae(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const t = [...this._$Ct._$AH];
      (t[this._$Ci] = e), this._$Ct._$AI(t, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const lt = () => new dt();
class dt {}
const B = new WeakMap(),
  _t = it(
    class extends ct {
      render(e) {
        return p;
      }
      update(e, [t]) {
        var n;
        const i = t !== this.Y;
        return (
          i && this.Y !== void 0 && this.rt(void 0),
          (i || this.lt !== this.ct) &&
            ((this.Y = t), (this.ht = (n = e.options) == null ? void 0 : n.host), this.rt((this.ct = e.element))),
          p
        );
      }
      rt(e) {
        if (typeof this.Y == "function") {
          const t = this.ht ?? globalThis;
          let i = B.get(t);
          i === void 0 && ((i = new WeakMap()), B.set(t, i)),
            i.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0),
            i.set(this.Y, e),
            e !== void 0 && this.Y.call(this.ht, e);
        } else this.Y.value = e;
      }
      get lt() {
        var e, t;
        return typeof this.Y == "function"
          ? (e = B.get(this.ht ?? globalThis)) == null
            ? void 0
            : e.get(this.Y)
          : (t = this.Y) == null
          ? void 0
          : t.value;
      }
      disconnected() {
        this.lt === this.ct && this.rt(void 0);
      }
      reconnected() {
        this.rt(this.ct);
      }
    },
  );
var ut = Object.defineProperty,
  vt = Object.getOwnPropertyDescriptor,
  Te = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? vt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && ut(t, i, a), a;
  };
let K = class extends I {
  constructor() {
    super(...arguments),
      (this.getSubmenuName = e => e.path.split("/")[1]),
      (this.groupByFirstLevelPath = async () => {
        const e = await S.fetchJson("/query-index.json"),
          t = ["sidekick", "sidekick-library", "tools", "development", "dev-", "__"],
          i = this.filterNavigation(e.data, t);
        e.data = i;
        const n = this.groupItemsByFirstLevelPath(e.data);
        return Object.values(n).map(s =>
          s.length === 1 ? s[0] : { navtitle: s[0].path.split("/")[1], path: s[0].path, children: s },
        );
      });
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated() {
    this.items = await this.groupByFirstLevelPath();
  }
  render() {
    if (this.items)
      return d`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`;
  }
  toggleSubmenu({ currentTarget: e }) {
    !(e instanceof HTMLElement) || !e.classList.contains("opener") || e.classList.toggle("active");
  }
  renderSubMenu(e) {
    return d`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${
      e.navtitle
    } </span>${v("dva-icon-zoom", "submenu__icon")}</span><ul>${e.children.map(
      t => d`<li><a href="${t.path}">${t.navtitle}</a></li>`,
    )}</ul>`;
  }
  renderMenuItem(e) {
    return d`<li>${e.children !== void 0 ? this.renderSubMenu(e) : d`<a href="${e.path}">${e.navtitle}</a>`}</li>`;
  }
  renderMenuItems() {
    return d`<ul>${this.items.map(e => this.renderMenuItem(e))}</ul>`;
  }
  getNavTitle(e) {
    return e.path === "/" ? "Homepage" : e.navtitle || e.title;
  }
  filterNavigation(e, t) {
    return e.filter(i => t.every(n => !i.path.includes(n))).map(i => ({ path: i.path, navtitle: this.getNavTitle(i) }));
  }
  groupItemsByFirstLevelPath(e) {
    const t = {};
    return (
      e.forEach(i => {
        const n = this.getSubmenuName(i);
        t[n] || (t[n] = []), t[n].push({ path: i.path, navtitle: this.getNavTitle(i) });
      }),
      t
    );
  }
};
Te([x()], K.prototype, "items", 2);
K = Te([T("sidebar-nav")], K);
var pt = Object.defineProperty,
  ht = Object.getOwnPropertyDescriptor,
  De = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? ht(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && pt(t, i, a), a;
  };
let G = class extends I {
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.fetchContactsHtml();
    this.getContactTemplateArgs(e);
  }
  async fetchContactsHtml() {
    const e = new DOMParser(),
      t = await S.fetchText("contact.plain.html", { cacheOptions: { cacheType: "runtime" } });
    return e.parseFromString(t, "text/html");
  }
  renderHeader(e) {
    return e ? d`<header class="major"><h2>${e}</h2></header>` : p;
  }
  renderText(e) {
    return e ? d`<p>${e}</p>` : p;
  }
  render() {
    if (!this.contactTemplateArgs) return p;
    const { headline: e, text: t, contacts: i } = this.contactTemplateArgs;
    return d`<section>${this.renderHeader(e)} ${this.renderText(t)} ${this.renderContacts(i)}</section>`;
  }
  createRenderRoot() {
    return this;
  }
  renderContact(e) {
    const { icon: t, markup: i } = e;
    return !t && !i ? p : d`<li class="icon solid">${this.renderIcon(t)} ${this.renderContactMarkup(i)}</li>`;
  }
  getContactsArgs(e) {
    const t = e.querySelectorAll(".contact > div:not(:first-child)");
    return Array.from(t).map(n => ({ icon: n.querySelector("div"), markup: n.querySelector("div:last-child") }));
  }
  getContactTemplateArgs(e) {
    const t = e.querySelector("h2"),
      i = e.querySelector("p"),
      n = this.getContactsArgs(e);
    this.contactTemplateArgs = { headline: t, text: i, contacts: n };
  }
  renderContacts(e) {
    return e.length === 0 ? p : d`<ul class="contact">${e.map(t => this.renderContact(t))}</ul>`;
  }
  renderIcon(e) {
    return e ? v(e.innerHTML) : p;
  }
  renderContactMarkup(e) {
    return e ? se(e.innerHTML) : p;
  }
};
De([x()], G.prototype, "contactTemplateArgs", 2);
G = De([T("sidebar-contact")], G);
var gt = Object.defineProperty,
  mt = Object.getOwnPropertyDescriptor,
  Re = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? mt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && gt(t, i, a), a;
  };
let Y = class extends I {
  async connectedCallback() {
    super.connectedCallback();
    const e = await this.getPosts();
    this.lastTreePosts = this.getLastThreePosts(e);
  }
  render() {
    if (this.lastTreePosts)
      return d`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(e =>
        this.renderPost(e),
      )}</div>`;
  }
  createRenderRoot() {
    return this;
  }
  getLastThreePosts(e) {
    return (
      e.sort((t, i) => (t.lastModified > i.lastModified ? -1 : t.lastModified < i.lastModified ? 1 : 0)), e.slice(0, 3)
    );
  }
  renderPicture(e) {
    const t = nt({ src: e.image, alt: e.imagealt, width: 336, height: 224 });
    return t ? d`<a href="${e.path}" class="image">${t}</a>` : p;
  }
  renderPost(e) {
    return d`<article>${this.renderPicture(e)}<p>${e.description}</p></article>`;
  }
  async getPosts() {
    return (await S.fetchJson("/query-index.json")).data.filter(t => t.path.startsWith("/posts"));
  }
};
Re([x()], Y.prototype, "lastTreePosts", 2);
Y = Re([T("sidebar-posts")], Y);
var ft = Object.defineProperty,
  bt = Object.getOwnPropertyDescriptor,
  Ve = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? bt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && ft(t, i, a), a;
  };
let J = class extends I {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchFooterData();
  }
  async fetchFooterData() {
    const e = await S.fetchText("footer.plain.html", { cacheOptions: { cacheType: "runtime" } }),
      t = document.createElement("div");
    (t.innerHTML = e),
      (this.footerMarkup = t.querySelector("p")),
      this.footerMarkup && this.footerMarkup.classList.add("copyright");
  }
  render() {
    if (this.footerMarkup) return d`${this.footerMarkup}`;
  }
};
Ve([x()], J.prototype, "footerMarkup", 2);
J = Ve([T("sidebar-footer")], J);
var Et = Object.defineProperty,
  yt = Object.getOwnPropertyDescriptor,
  At = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? yt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && Et(t, i, a), a;
  };
let de = class extends I {
  constructor() {
    super(...arguments),
      (this.toggleRef = lt()),
      (this.handleToggleClick = e => {
        e.preventDefault(), this.classList.toggle("active");
      });
  }
  createRenderRoot() {
    return this;
  }
  firstUpdated() {
    this.toggleRef.value.addEventListener("click", this.handleToggleClick), this.classList.add("activate-animations");
  }
  render() {
    return d`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a ${_t(
      this.toggleRef,
    )} href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle">${v("dva-icon-zoom")}</a>`;
  }
};
de = At([T("sidebar-component")], de);
function Pt({ input: e, specifier: t, htmlTag: i }) {
  return e
    .split(t)
    .map((n, a) => (a % 2 === 1 ? `<${i}>${n}</${i}>` : n))
    .join("");
}
var wt = Object.defineProperty,
  Lt = Object.getOwnPropertyDescriptor,
  ke = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? Lt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && wt(t, i, a), a;
  };
let Z = class extends I {
  createRenderRoot() {
    return this;
  }
  async firstUpdated(e) {
    await this.fetchHeaderData();
  }
  async fetchHeaderData() {
    try {
      const e = await S.fetchJson("header.json", { cacheOptions: { cacheType: "runtime" } });
      this.headerData = { leftCol: e.leftCol.data[0], rightCol: e.rightCol.data };
    } catch (e) {
      console.error("HeaderComponent: ", e);
    }
  }
  render() {
    if (!this.headerData) return;
    const { leftCol: e, rightCol: t } = this.headerData,
      i = Pt({ input: e.logoText, htmlTag: "strong", specifier: ":::" }),
      n = se(i);
    return d`<a href="${e.logoLink}" class="logo">${n}</a><ul class="icons">${t.map(
      a =>
        d`<li><a href="${a.socialLink}" class="icon brands" aria-label="${a.socialLabel}">${v(
          a.socialIcon,
          "header-icon",
        )} <span class="label">${a.socialLabel}</span></a></li>`,
    )}</ul>`;
  }
};
ke([x()], Z.prototype, "headerData", 2);
Z = ke([T("header-component")], Z);
var A = {},
  xe,
  Se,
  X,
  ee;
Object.defineProperty(A, "__esModule", { value: !0 });
const q = e => (typeof e == "object" && e !== null ? JSON.stringify(e) : String(e));
(ee = A.getValue =
  (e = {}, t = "") => {
    const i = t.split(".");
    let n = 0,
      a = e;
    for (; a && n < i.length; ) (a = a[i[n]]), n++;
    return a;
  }),
  (X = A.isEqual = (e, t) => typeof e == typeof t && (typeof e == "object" ? q(e).localeCompare(q(t)) === 0 : e === t)),
  (A.isFilledObject = function (e) {
    return typeof e == "object" && e !== null && Object.keys(e).length > 0;
  }),
  (Se = A.naiveClone =
    function e(t) {
      return typeof t != "object"
        ? t
        : t === null
        ? null
        : Array.isArray(t)
        ? t.map(i => e(i))
        : Object.entries(t).reduce((i, [n, a]) => ((i[n] = e(a)), i), {});
    }),
  (xe = A.toArray = e => (Array.isArray(e) ? e : [e])),
  (A.toString = q);
var w = {},
  te,
  Ce,
  $e;
Object.defineProperty(w, "__esModule", { value: !0 });
const _e = (e, t) => e.findIndex(i => i === t) !== -1;
($e = w.hasElement = _e),
  (w.isFilledArray = e => e !== void 0 && e.length > 0),
  (Ce = w.mergeArraysBy = (e, t, i) => e.filter(n => i(n, t)).concat(t)),
  (te = w.pushIfNew = (e, t) => (_e(e, t) || e.push(t), e)),
  (w.removeItem = (e, t) => e.filter(i => i !== t));
var _ = {},
  ze,
  C,
  E,
  k,
  g,
  Me,
  M,
  ie,
  O,
  b;
Object.defineProperty(_, "__esModule", { value: !0 });
const je = (e, t) =>
    e === null
      ? []
      : e instanceof Document || e.shadowRoot === null || e.shadowRoot === void 0
      ? Array.from(e.querySelectorAll(t))
      : Array.from(e.shadowRoot.querySelectorAll(t)),
  ue = (e, ...t) => {
    if (e !== void 0 && t.length !== 0 && e !== null) {
      e instanceof Element && (e = [e]), e instanceof NodeList && (e = Array.from(e));
      for (const i of e) i.classList.remove(...t);
    }
  },
  F = (e, ...t) => {
    if (e !== void 0 && t.length !== 0 && e !== null) {
      e instanceof Element && (e = [e]), e instanceof NodeList && (e = Array.from(e));
      for (const i of e) i.classList.add(...t);
    }
  },
  ve = (e, t) => e.classList.contains(t);
function j(e) {
  return Symbol.iterator in e;
}
function Ne(e) {
  return "length" in e ? e.length > 0 : !e[Symbol.iterator]().next().done;
}
const Be = (e, t, i, n, a) => {
  if (e == null || (j(e) && !Ne(e))) return;
  if (j(e) && !(e instanceof HTMLElement)) {
    for (const r of e) Be(r, t, i, n, a);
    return;
  }
  let s;
  (s = typeof t == "string" ? t.trim().split(" ") : t),
    s.forEach(r => {
      const l = qe(e, r, i, n);
      if (!n.eventBindingMap[l]) {
        const c = i.bind(n);
        return (n.eventBindingMap[l] = c), e.addEventListener(r.trim(), c, a);
      }
    });
};
function qe(e, t, i, n) {
  return `${U(e, n)}#
          ${t.trim()}#
          ${U(i, n)}#
          ${U(n, n)}`
    .replace(/\n/gm, "")
    .replace(/\s/g, "");
}
function U(e, t) {
  let i;
  if (t.eventIdMap.has(e)) i = t.eventIdMap.get(e);
  else {
    const n = "xxxxxxxx".replace(/x/g, Ot).toLowerCase();
    t.eventIdMap.set(e, n), (i = n);
  }
  return i;
}
function Ot() {
  return ((100 * Math.random()) % 36 | 0).toString(36);
}
const Fe = (e, t, i, n, a) => {
    if (e == null || (j(e) && !Ne(e))) return void console.warn("no target found");
    if (j(e) && !(e instanceof HTMLElement)) {
      for (const r of e) Fe(r, t, i, n, a);
      return;
    }
    let s;
    (s = typeof t == "string" ? t.trim().split(" ") : t),
      s.forEach(r => {
        const l = qe(e, r, i, n),
          c = n.eventBindingMap[l];
        c && (delete n.eventBindingMap[l], e.removeEventListener(r, c, a));
      });
  },
  pe = (e, t) => {
    je(e, t).forEach(i => e.removeChild(i));
  },
  he = (e, t, i) =>
    new Promise(n => {
      i !== void 0 && setTimeout(() => n(), i), e.addEventListener(t, () => n());
    });
(b = _.addClass = F),
  (O = _.find =
    (e, t) =>
      e === null
        ? null
        : e instanceof Document || e.shadowRoot === null || e.shadowRoot === void 0
        ? e.querySelector(t)
        : e.shadowRoot.querySelector(t)),
  (ie = _.findAll = je),
  (_.forEachNode = (e, t, i = window) => {
    for (let n = 0; n < e.length; n++) t.call(i, e[n], n, e);
  }),
  (M = _.getCurrentMQ =
    e => {
      let t = "";
      return (
        e.forEach(i => {
          !t.length && window.matchMedia(i.query).matches && (t = i.name);
        }),
        t
      );
    }),
  (_.getInnerText = e => e.innerText || e.textContent || ""),
  (_.getParent = (e, t) => e.closest(t)),
  (_.getUniqueID = () => Math.random().toString(36).substr(2, 9)),
  (_.hasChild = (e, t) =>
    e.shadowRoot !== null && e.shadowRoot !== void 0
      ? e.shadowRoot.querySelector(t) !== null
      : e.querySelector(t) !== null),
  (Me = _.hasClass = ve),
  (_.inViewport = (e, t) => {
    const i = e.getBoundingClientRect();
    let n = {
      top: 0,
      right: window.innerWidth || document.documentElement.clientWidth,
      bottom: window.innerHeight || document.documentElement.clientHeight,
      left: 0,
    };
    return (
      t !== void 0 && (n = t.getBoundingClientRect()),
      i.top >= n.top && i.right <= n.right && i.bottom <= n.bottom && i.left >= n.left
    );
  }),
  (_.isNodeList = e => !(e instanceof HTMLElement || e instanceof Window)),
  (g = _.onEvent = Be),
  (_.removeChildren = pe),
  (_.removeChilds = pe),
  (k = _.removeClass = ue),
  (E = _.removeEvent = Fe),
  (_.toggleClass = (e, t, i) => {
    if (e != null) {
      e instanceof Element && (e = [e]), e instanceof NodeList && (e = Array.from(e));
      for (const n of e) i === !0 ? F(n, t) : ve(n, t) || i === !1 ? ue(n, t) : F(n, t);
    }
  }),
  (C = _.waitFor =
    e =>
      new Promise(t => {
        setTimeout(() => t(), e);
      })),
  (_.waitForAnimationEnd = function (e, t) {
    return new Promise((i, n) => {
      e.addEventListener("animationend", function a(s) {
        s.target === e && ((t && s.animationName !== t) || (e.removeEventListener("animationend", a), i(s)));
      });
    });
  }),
  (ze = _.waitForEvent = he),
  (_.waitForInitialization = e => {
    var t;
    return ((t = e.state) === null || t === void 0 ? void 0 : t.initialized) === !0
      ? Promise.resolve()
      : he(e, "kl-component-initialized", 3e3);
  }),
  (_.waitForTransitionEnd = function (e, t) {
    return new Promise((i, n) => {
      e.addEventListener("transitionend", function a(s) {
        s.target === e && ((t && s.propertyName !== t) || (e.removeEventListener("transitionend", a), i(s)));
      });
    });
  });
var f = {},
  Ue,
  He;
Object.defineProperty(f, "__esModule", { value: !0 });
const ge = e => e.replace(/ +(?= )/g, ""),
  me = e => e.replace(/\r?\n|\r/g, "");
(f.getCleanString = e => me(ge(e))),
  (f.getWordCount = e => e.split(" ").length),
  (He = f.removeAllBS = e => e.replace(/\s/g, "")),
  (f.removeAllNL = me),
  (f.removeMultiBS = ge),
  (f.toCamelCase = function (e) {
    return e
      .toLowerCase()
      .replace(/(-+|\s+)[a-z]/g, t => t.toUpperCase())
      .replace(/(-|\s)+/g, "");
  }),
  (Ue = f.toKebabCase =
    function (e) {
      return e.replace(/[A-Z]/g, t => `-${t.toLocaleLowerCase()}`);
    });
var ne = {},
  re;
function Qe(e) {
  return function (...t) {
    return function (i, n, a) {
      return Object.assign(Object.assign({}, a), { value: e(a.value, ...t) });
    };
  };
}
Object.defineProperty(ne, "__esModule", { value: !0 });
const It = Qe(function (e, t = 0) {
    let i = -1;
    const n = function (...a) {
      clearTimeout(i),
        (i = window.setTimeout(() => {
          e.call(this, ...a);
        }, t));
    };
    return (
      (n.cancel = function () {
        clearTimeout(i);
      }),
      n
    );
  }),
  Tt = Qe(function (e, t = 0) {
    let i,
      n = [];
    const a = function (...s) {
      (n = s),
        i === void 0 &&
          (i = window.setTimeout(() => {
            (i = void 0), e.call(this, ...n);
          }, t));
    };
    return (
      (a.cancel = function () {
        clearTimeout(i), (i = void 0);
      }),
      a
    );
  });
(ne.debounce = It), (re = ne.throttle = Tt);
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.fetchJSON = (e, t) =>
  new Promise((i, n) => {
    fetch(e, t)
      .then(a => {
        a.ok ? i(a.json()) : n(a);
      })
      .catch(a => n(a));
  });
const Dt = "kl-mq-change";
/*! *****************************************************************************
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
***************************************************************************** */ class f {
  constructor() {
    (this.eventIdMap = new WeakMap()),
      (this.eventBindingMap = {}),
      (this.lastMQ = M(f.mediaQuerys)),
      h(window, "resize", this.handleMQChange, this);
  }
  static getInstance(e) {
    return f.instance === void 0 && ((f.mediaQuerys = e), (f.instance = new f())), f.instance;
  }
  handleMQChange() {
    const e = M(f.mediaQuerys);
    e !== this.lastMQ &&
      (window.dispatchEvent(new CustomEvent("kl-mq-change", { detail: { newMQ: e, oldMQ: this.lastMQ } })),
      (this.lastMQ = e));
  }
}
(function (i, e, t, a) {
  var r,
    o = arguments.length,
    n = o < 3 ? e : a === null ? (a = Object.getOwnPropertyDescriptor(e, t)) : a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(i, e, t, a);
  else for (var l = i.length - 1; l >= 0; l--) (r = i[l]) && (n = (o < 3 ? r(n) : o > 3 ? r(e, t, n) : r(e, t)) || n);
  o > 3 && n && Object.defineProperty(e, t, n);
})([oi(100)], f.prototype, "handleMQChange", null);
var Te = new (class {
  constructor() {
    this.urlSearchParams = new URLSearchParams(window.location.search);
  }
  get(i) {
    return this.urlSearchParams.get(i);
  }
  getAll(i) {
    return this.urlSearchParams.getAll(i);
  }
  getAllKeys() {
    return Array.from(this.urlSearchParams.keys());
  }
  set(i, e) {
    this.urlSearchParams.set(i, e), this.updateUrl();
  }
  delete(i) {
    this.urlSearchParams.delete(i), this.updateUrl();
  }
  getString() {
    return this.urlSearchParams.toString();
  }
  get curUrl() {
    return `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
  }
  updateUrl() {
    const i = this.getString(),
      e = this.curUrl,
      t = window.location.hash,
      a = i !== "" ? `${e}?${i}` : e;
    window.history.replaceState({ path: a }, "", a), t !== "" && (window.location.hash = t);
  }
})();
new Proxy(console, { get: (i, e) => (Te.get("js-debug") !== null ? i[e] : () => {}) });
new (class {
  constructor() {
    (this.componentMap = new WeakMap()),
      (this.intersectionObserver = new IntersectionObserver(i => this.handleIntersectionChange(i), {
        rootMargin: "500px 0px",
      }));
  }
  subscribe(i, e) {
    this.componentMap.set(i, e), this.intersectionObserver.observe(i);
  }
  unsubscribe(i) {
    this.intersectionObserver.unobserve(i), this.componentMap.delete(i);
  }
  handleIntersectionChange(i) {
    i.forEach(e => {
      const t = e.target;
      if (!e.isIntersecting || !this.componentMap.has(t)) return;
      const a = this.componentMap.get(t);
      this.unsubscribe(t), a();
    });
  }
})();
/*! *****************************************************************************
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
***************************************************************************** */ function H(e, t, i, n) {
  return new (i || (i = Promise))(function (a, s) {
    function r(u) {
      try {
        c(n.next(u));
      } catch (m) {
        s(m);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (m) {
        s(m);
      }
    }
    function c(u) {
      var m;
      u.done
        ? a(u.value)
        : ((m = u.value),
          m instanceof i
            ? m
            : new i(function (Xe) {
                Xe(m);
              })).then(r, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
const Vt = Symbol("decorated-props"),
  kt = ["type", "required", "defaultValue", "reactions", "reactOnInit", "attributeName"],
  xt = { required: !1, reactions: null, reactOnInit: !1 };
function ce(e) {
  return function (t, i) {
    t.decoratedUiEls === void 0 && (t.decoratedUiEls = new Map()),
      t.decoratedUiEls.set(i, { selector: e, justOne: !1, events: new Set() });
  };
}
function Ke(e, t, i) {
  return function (n, a) {
    n.decoratedUiEls === void 0 && (n.decoratedUiEls = new Map());
    const s = n.decoratedUiEls.get(e);
    s !== void 0 || (e !== "window" && e !== "this")
      ? (s.events.add({ eventName: t, handler: a, options: i }), n.decoratedUiEls.set(e, s))
      : n.decoratedUiEls.set(e.toString(), {
          selector: e,
          justOne: !0,
          events: new Set([{ eventName: t, handler: a, options: i }]),
        });
  };
}
function Ge(e) {
  return function (t) {
    return class extends t {
      get activeOnMQs() {
        const i = this.getAttribute("active-on-mq") || !1;
        if (!i) return !1;
        let n = [];
        return (
          He(i)
            .split(",")
            .forEach(a => {
              if (a.length === 1) n = te(n, `MQ${a}`);
              else if (a.length > 1) {
                const s = a.split("-"),
                  r = parseInt(s[0], 10),
                  l = parseInt(s[1], 10);
                for (let c = r; c <= l; c++) n = te(n, `MQ${c.toString()}`);
              }
            }),
          n
        );
      }
      get currentMQ() {
        return M(e);
      }
      get activeOnCurrentMQ() {
        return (this.activeOnMQs && $e(this.activeOnMQs || [], this.currentMQ)) || !this.activeOnMQs;
      }
      handleMqChange(i) {
        this.activeOnMQs &&
          (!this.state.initialized && this.activeOnCurrentMQ
            ? this.mqBasedConnect()
            : this.state.initialized && !this.activeOnCurrentMQ && this.disconnectComponent());
      }
      mqBasedConnect() {
        this.activeOnCurrentMQ && super.connectedCallback();
      }
      connectedCallback() {
        h.getInstance(e), g(window, Dt, this.handleMqChange, this), this.mqBasedConnect();
      }
    };
  };
}
class le extends HTMLElement {
  constructor({
    ui: t = {},
    events: i = [],
    initialStates: n = {},
    reactions: a = {},
    props: s = {},
    useShadowDOM: r = !1,
    preserveChildren: l = !1,
    asyncRendering: c = !1,
  } = {}) {
    super(),
      (this.uiDefinitions = {}),
      (this.ui = {}),
      (this.events = []),
      (this.reactions = { initialized: ["onComponentInitialized"] }),
      (this._state = {}),
      (this._initialStates = {}),
      (this.eventIdMap = new WeakMap()),
      (this.eventBindingMap = {}),
      (this.initialStates = { initialized: !1 }),
      (this.useShadowDOM = r),
      (this.preserveChildren = l),
      (this.asyncRendering = c),
      this.useShadowDOM && this.attachShadow({ mode: "open" }),
      Object.assign(this.uiDefinitions, t),
      Object.assign(this.initialStates, n),
      Object.assign(this.reactions, a),
      this.addReactions(a),
      this.mergeEvents(i),
      (this.props = this.normalizeProps(Object.assign(Object.assign({}, this[Vt] || null), s)));
  }
  get asyncRenderingEnabled() {
    return this._shouldRenderAsync || this.asyncRendering;
  }
  connectedCallback() {
    this.setupComponent();
  }
  beforeComponentDisconnects() {}
  disconnectComponent() {
    this.beforeComponentDisconnects(),
      this.destroyComponentProps(),
      this.destroyComponent(),
      this.setState({ initialized: !1 });
  }
  renderingTemplate() {
    return null;
  }
  renderComponent() {
    const t = this.renderingTemplate();
    t !== null && this.render(t);
  }
  renderAsync() {
    return H(this, void 0, void 0, function* () {
      console.warn("please override renderAsync-method");
    });
  }
  render(t) {
    this.preserveChildren || (this.getUiRoot().innerHTML = ""),
      t instanceof HTMLTemplateElement
        ? this.getUiRoot().appendChild(t.content.cloneNode(!0))
        : this.useShadowDOM
        ? (this.shadowRoot.innerHTML = t)
        : this.insertAdjacentHTML("beforeend", t);
  }
  destroyComponent() {
    console.warn("please override destroyComponent-method");
  }
  afterComponentRender() {}
  onComponentInitialized() {
    this.dispatchEvent(new CustomEvent("kl-component-initialized", { bubbles: !1 }));
  }
  waitForInitialization() {
    return H(this, void 0, void 0, function* () {
      if (!this.state.initialized) return yield ze(this, "kl-component-initialized");
    });
  }
  setupComponent() {
    return H(this, void 0, void 0, function* () {
      this.asyncRenderingEnabled ? yield this.renderAsync() : this.renderComponent(),
        this.setupComponentProps(),
        this.afterComponentRender(),
        this.checkForMissingAttributes(),
        this.setState({ initialized: !0 });
    });
  }
  setupComponentProps() {
    this.enableDecoratedProperties(), this.generateUI(), this.generateEvents(), this.initializeProps();
  }
  destroyComponentProps() {
    this.destroyDecoratedProperties(), this.removeEvents(), (this.ui = {});
  }
  generateUI() {
    const t = this.getUiRoot();
    Object.keys(this.uiDefinitions).forEach(i => {
      const n = this.uiDefinitions[i].trim();
      if (n.endsWith(":-one")) {
        const a = n.replace(/:-one/g, "").trim();
        this.ui[i] = O(t, a);
      } else this.ui[i] = ie(t, n);
    });
  }
  generateEvents() {
    this.events.forEach(t => {
      if (typeof this[t.handler] == "function") {
        const i = this.getEventTargets(t.target);
        g(i, t.event, this[t.handler], this, t.options);
      }
    });
  }
  removeEvents() {
    this.events.forEach(t => {
      if (typeof this[t.handler] == "function") {
        const i = this.getEventTargets(t.target);
        E(i, t.event, this[t.handler], this, t.options);
      }
    });
  }
  updateUI() {
    this.destroyDecoratedProperties(), this.enableDecoratedProperties(), (this.ui = {}), this.generateUI();
  }
  updateEvents() {
    this.events.forEach(t => {
      if (typeof this[t.handler] == "function") {
        const i = this.getEventTargets(t.target);
        E(i, t.event, this[t.handler], this, t.options), g(i, t.event, this[t.handler], this, t.options);
      }
    });
  }
  enableDecoratedProperties() {
    this.decoratedUiEls !== void 0 &&
      this.decoratedUiEls.forEach((t, i) => {
        if (t.selector === "window")
          t.events.forEach(n => {
            g(window, n.eventName, this[n.handler], this, n.options);
          });
        else if (t.selector === "this")
          t.events.forEach(n => {
            g(this, n.eventName, this[n.handler], this, n.options);
          });
        else {
          const n = t.justOne ? O(this.getUiRoot(), t.selector) : ie(this.getUiRoot(), t.selector);
          (this[i] = n),
            t.events.forEach(a => {
              g(this[i], a.eventName, this[a.handler], this, a.options);
            });
        }
      });
  }
  destroyDecoratedProperties() {
    this.decoratedUiEls !== void 0 &&
      this.decoratedUiEls.forEach((t, i) => {
        t.selector === "window"
          ? t.events.forEach(n => {
              E(window, n.eventName, this[n.handler], this, n.options);
            })
          : t.selector === "this"
          ? t.events.forEach(n => {
              E(this, n.eventName, this[n.handler], this, n.options);
            })
          : (this[i] != null &&
              t.events.forEach(a => {
                E(this[i], a.eventName, this[a.handler], this, a.options);
              }),
            (this[i] = void 0));
      });
  }
  initializeProps() {
    this.addDefaultValueAndType(this.props), this.addPropAccessors(this.props), this.addPropsReactions(this.props);
  }
  normalizeProps(t) {
    const i = {};
    return (
      Object.entries(t).forEach(([n, a]) => {
        const s =
          typeof a == "object" && a !== null && Object.keys(a).length && Object.keys(a).every(r => kt.includes(r))
            ? a
            : { defaultValue: a };
        (s.attributeName = s.attributeName || Ue(n)), (i[n] = Object.assign(Object.assign({}, xt), s));
      }),
      i
    );
  }
  addDefaultValueAndType(t) {
    Object.entries(t).forEach(([i, n]) => {
      (n.defaultValue = n.hasOwnProperty("defaultValue") ? n.defaultValue : this[i]),
        (n.type = n.type || (n.defaultValue !== null && n.defaultValue !== void 0) ? typeof n.defaultValue : "string");
    });
  }
  addPropAccessors(t) {
    for (const [i, n] of Object.entries(t))
      Object.defineProperty(this, i, {
        enumerable: !1,
        configurable: !0,
        set(a) {
          a == null
            ? this.removeAttribute(n.attributeName)
            : n.type === "boolean"
            ? a
              ? this.setAttribute(n.attributeName, "")
              : this.removeAttribute(n.attributeName)
            : n.type === "object"
            ? this.setAttribute(n.attributeName, JSON.stringify(a))
            : this.setAttribute(n.attributeName, String(a));
        },
        get() {
          const a = this.getAttribute(n.attributeName);
          return a === null && n.defaultValue !== void 0 ? n.defaultValue : this.castFromAttribute(a, n.type);
        },
      });
  }
  addPropsReactions(t) {
    const i = Object.entries(t).filter(([, s]) => Array.isArray(s.reactions) && s.reactions.length);
    if (i.length === 0) return;
    const n = s => {
        const [r, l] = i.find(([, c]) => c.attributeName === s);
        l.reactions.forEach(c => {
          typeof c == "function"
            ? c.call(this, this[r])
            : typeof c == "string" && c in this && typeof this[c] == "function"
            ? this[c](this[r])
            : console.error("unknown given reaction callback: ", c);
        });
      },
      a = { attributes: !0, attributeFilter: i.map(([, s]) => s.attributeName), attributeOldValue: !0 };
    new MutationObserver(s => {
      for (const r of s) {
        const l = r.oldValue;
        if (this.getAttribute(r.attributeName) === l) return;
        n(r.attributeName);
      }
    }).observe(this, a),
      i.filter(([, s]) => s.reactOnInit).forEach(([, s]) => n(s.attributeName));
  }
  checkForMissingAttributes() {
    const t = [];
    for (const i of Object.values(this.props))
      i.required && !this.hasAttribute(i.attributeName) && t.push(i.attributeName);
    t.length && console.log(`${this.tagName.toLowerCase()} is missing required attribute(s): ${t.join(", ")}`);
  }
  castFromAttribute(t, i = "string") {
    switch (i) {
      case "boolean":
        return t !== null;
      case "number":
        return parseFloat(String(t));
      case "object":
        return JSON.parse(String(t));
      default:
        return t;
    }
  }
  get state() {
    return Se(this._state || {});
  }
  set state(t) {
    throw new Error('The state should only be modified via the "setState" method.');
  }
  set initialStates(t) {
    (this._initialStates = t), (this._state = t);
  }
  get initialStates() {
    return this._initialStates || {};
  }
  setState(t, { merge: i = !0, silent: n = !1 } = {}) {
    const a = this.state;
    if (((this._state = Object.assign({}, i ? a : {}, t)), n || X(a, this._state))) return this;
    const s = this.state,
      r = this.reactions || {};
    return (
      Object.keys(r).forEach(l => {
        if (l === "*") this.invokeReaction("*");
        else if (l in t) {
          const c = ee(a, l),
            u = ee(s, l);
          X(c, u) || this.invokeReaction(l);
        }
      }),
      this
    );
  }
  addReactions(t, i) {
    if (typeof t == "object") Object.entries(t).forEach(([n, a]) => this.addReactions(n, a));
    else {
      this.reactions = this.reactions || {};
      const n = xe(i),
        a = this.reactions[t] || [];
      this.reactions[t] = Ce(a, n, this.isNewReaction);
    }
    return this;
  }
  isNewReaction(t, i) {
    return !i.some(n => t === n);
  }
  removeReactions(t, i) {
    return typeof t == "object"
      ? (Object.entries(t).forEach(([n, a]) => this.removeReactions(n, a)), this)
      : (this.reactions.hasOwnProperty(t)
          ? i
            ? (i.forEach(n => {
                this.reactions[t] = this.reactions[t].filter(a => a !== n);
              }),
              this.reactions[t].length === 0 && delete this.reactions[t])
            : delete this.reactions[t]
          : console.warn("no such prop found "),
        this);
  }
  invokeReaction(t) {
    ((this.reactions || {})[t] || new Set()).forEach(i => {
      typeof i == "function"
        ? i(this.state)
        : typeof i == "string" && i in this && typeof this[i] == "function"
        ? this[i](this.state)
        : console.error("given reaction callback can't be found: ", i);
    });
  }
  mergeEvents(t) {
    this.events = this.events.filter(i => this.isNewEvent(i, t)).concat(t);
  }
  isNewEvent(t, i) {
    return !i.some(n => n.event === t.event && n.target === t.target);
  }
  getUiRoot() {
    return this.shadowRoot ? this.shadowRoot : this;
  }
  getEventTargets(t) {
    let i = null;
    return (i = t === "this" ? this : t === "window" ? window : this.ui[t]), i;
  }
}
const fe = "/public/icons";
class St {
  constructor() {
    (this.componentMap = new WeakMap()),
      (this.intersectionObserver = new IntersectionObserver(t => this.handleIntersectionChange(t)));
  }
  subscribe(t, i) {
    this.componentMap.set(t, i), this.intersectionObserver.observe(t);
  }
  unsubscribe(t) {
    this.intersectionObserver.unobserve(t), this.componentMap.delete(t);
  }
  handleIntersectionChange(t) {
    t.forEach(i => {
      const n = i.target;
      if (!i.isIntersecting || !this.componentMap.has(n)) return;
      const a = this.componentMap.get(n);
      this.unsubscribe(n), a();
    });
  }
}
const Ye = new St(),
  Ct = "dva-loaded",
  $t =
    ":host{display:inline-block;width:80px;height:80px}.dva-e-icon__svg{display:inline-block;width:100%;height:100%;fill:inherit!important}.dva-e-icon__svg .dva-e-icon-star__half-filled{stop-color:currentColor}",
  be = Object.assign({
    "/public/icons/dva-icon-analyse.svg": () =>
      o(() => import("../__chunks__/dva-icon-analyse.QN6XT3XN.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-analysis.svg": () =>
      o(() => import("../__chunks__/dva-icon-analysis.mxKcrSHC.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-anschlussfinanzierung.svg": () =>
      o(() => import("../__chunks__/dva-icon-anschlussfinanzierung.9dvv2_Tc.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-arbeit.svg": () =>
      o(() => import("../__chunks__/dva-icon-arbeit.wxZwU5hQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-16px.eOsaKgrA.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-24px.GMjJFAEo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-32px.-PPJ2Ga2.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-48px.PHZHAiUn.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-64px.w7Mzvz4n.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-72px.Jdle19zl.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down-large.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down-large.tyibGBcD.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-down.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-down.3bDT44gl.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-16px.9k4QsiER.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-24px.MEcBiyqx.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-32px.yH19235k.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-48px.lcGrUpdN.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-64px.5v1Bam8w.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-left-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-left-72px.0xUVHMM0.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-16px.5msuv7kH.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-24px.YT2Q6VtU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-32px.az9lX3Xa.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-48px.qALeuOzb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-64px.4EbbcToT.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right-72px.hrjOukuu.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-right.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-right.hLEV0csJ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-16px.1jLtyGfB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-24px.ceii3WyR.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-32px.Ut2UvIoW.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-48px.DwQKMtn1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-64px.QN0DYyHX.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-72px.9iOk4U_F.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-arrow-up-large.svg": () =>
      o(() => import("../__chunks__/dva-icon-arrow-up-large.h-ZVjw9u.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-bauvorhaben.svg": () =>
      o(() => import("../__chunks__/dva-icon-bauvorhaben.EEXye9cj.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-burger-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-burger-24px.ehkc2nXz.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-calendar-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-calendar-24px.6VAyoo7c.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-calendar.svg": () =>
      o(() => import("../__chunks__/dva-icon-calendar.avrY65N4.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-16px.1LzjorPz.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-24px.6KhyPKSw.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-32px.hHqJT0s3.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-48px.zJHzVsZD.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-64px.0MzqeIBc.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-72px.ZDLkn3qn.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check-circle-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-check-circle-24px.p6EiG8g3.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-check.svg": () =>
      o(() => import("../__chunks__/dva-icon-check.sS1xfHOw.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-16px.XujoW5Fq.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-24px.PgfhqbeI.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-32px.dJMnz4HR.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-48px.mxztGNnb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-64px.rBNK1d7W.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down-72px.yEsM_Z3-.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-down.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-down.7qOvgcBb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-16px.EXX5t6gm.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-24px.sG9shgW8.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-32px.hWcTeqGQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-48px.8XXCbaA5.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-64px.6VIM9n8A.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left-72px.PLC_FR1U.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-left.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-left.1zcgrd9P.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-right-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-16px.hc-L9RMl.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-24px.U8uJAGNP.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-32px.z1tuSEyj.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-48px.K93gnjQl.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-64px.vzUjn5Ws.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right-72px.EgXr4c9o.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-chevron-right.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-right.wY2q63S3.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-16px.qCEfdqz3.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-24px.0-e6C7aP.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-32px.5Oe3g4gC.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-48px.G7pLjqph.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-64px.czwPt59J.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-chevron-up-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-chevron-up-72px.mc1gOzl0.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-circle-star.svg": () =>
      o(() => import("../__chunks__/dva-icon-circle-star.EKK105v4.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-clipboard.svg": () =>
      o(() => import("../__chunks__/dva-icon-clipboard.f4q2S87I.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-clock.svg": () =>
      o(() => import("../__chunks__/dva-icon-clock.PuhmYnqN.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-16px.pikccMHh.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-24px.snSDSpEH.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-32px.YUFGa7Hc.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-48px.SA59wPmq.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-64px.3QDgKR99.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-72px.O_SGOnSU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close-circle-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-close-circle-24px.I9-KCkFj.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-close.svg": () =>
      o(() => import("../__chunks__/dva-icon-close.Re8kskQp.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-compass.svg": () =>
      o(() => import("../__chunks__/dva-icon-compass.AKVXP73L.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-consult.svg": () =>
      o(() => import("../__chunks__/dva-icon-consult.YSFZv1Y8.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-contact-new.svg": () =>
      o(() => import("../__chunks__/dva-icon-contact-new.JA-__AqP.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-contact.svg": () =>
      o(() => import("../__chunks__/dva-icon-contact.BSaRewPm.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-cookie.svg": () =>
      o(() => import("../__chunks__/dva-icon-cookie.nesMvubx.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-corona.svg": () =>
      o(() => import("../__chunks__/dva-icon-corona.94nmGO_a.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-discussion.svg": () =>
      o(() => import("../__chunks__/dva-icon-discussion._0sh0wSG.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-document-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-document-24px.FaJD55Sv.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-download-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-download-24px.88QKNxVo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-download-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-download-32px.ezmCHkXt.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-download.svg": () =>
      o(() => import("../__chunks__/dva-icon-download.0mMDV8qf.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-ear.svg": () =>
      o(() => import("../__chunks__/dva-icon-ear.Pdd37fVD.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-edit-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-edit-24px.PG6DQQaL.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-envelope-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-envelope-32px.N6wKkvU3.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-error-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-error-16px.E5Uo8z3z.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-error-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-error-24px.wcY4zRcV.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-error-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-error-32px.XhsfJwiW.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-euro.svg": () =>
      o(() => import("../__chunks__/dva-icon-euro.C1M4B9dO.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-external-link.svg": () =>
      o(() => import("../__chunks__/dva-icon-external-link.-u-QXKPO.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-eye-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-eye-24px.tbeWVOSo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-eye.svg": () =>
      o(() => import("../__chunks__/dva-icon-eye.8hWXkN2i.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-facebook-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-facebook-24px.VotNX55D.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-facebook-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-facebook-circle-32px.kQvVbHLa.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-facebook-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-facebook-circle-48px.ywpF2kh_.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-facebook.svg": () =>
      o(() => import("../__chunks__/dva-icon-facebook.hG0vbeXm.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-family-company-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-family-company-32px.UHJA3yQd.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-fullscreen-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-fullscreen-24px.8rYqHNYv.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-gallery-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-gallery-24px.5KVwfANh.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-geld.svg": () =>
      o(() => import("../__chunks__/dva-icon-geld.NCx9jF_A.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-gesundheit.svg": () =>
      o(() => import("../__chunks__/dva-icon-gesundheit.8cilL_e1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-google-plus.svg": () =>
      o(() => import("../__chunks__/dva-icon-google-plus.2tYOzWZL.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-hand-heart.svg": () =>
      o(() => import("../__chunks__/dva-icon-hand-heart.L5QU-Bh6.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-hands.svg": () =>
      o(() => import("../__chunks__/dva-icon-hands.cJ_OJE9R.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-header-logo-allfinanz-xl.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-allfinanz-xl.BIhsESbq.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-header-logo-allfinanz.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-allfinanz.UnfUVlGY.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-header-logo-configurator.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-configurator.I4v-dnWy.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-header-logo-dvag-xl.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-dvag-xl.HwNpY57A.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-header-logo-dvag.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-dvag.qeV77ycQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-header-logo-s.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo-s.qQKtz5gQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-header-logo.svg": () =>
      o(() => import("../__chunks__/dva-icon-header-logo.qeV77ycQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-house.svg": () =>
      o(() => import("../__chunks__/dva-icon-house.yilr9uWQ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-human-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-human-24px.9OHdfBm1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-human-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-human-48px.xw9o8TaN.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-id-card.svg": () =>
      o(() => import("../__chunks__/dva-icon-id-card.iyuichRX.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-image-gallery-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-16px.GGIYsWZG.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-image-gallery-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-24px.qVl5JBh9.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-image-gallery-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-32px.SAfCN41L.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-image-gallery-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-48px.QGo5Wi3x.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-image-gallery-64px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-64px.h8lgnUit.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-image-gallery-72px.svg": () =>
      o(() => import("../__chunks__/dva-icon-image-gallery-72px.D5U_qZ_8.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-imessage-colored.svg": () =>
      o(() => import("../__chunks__/dva-icon-imessage-colored.BBIEmM0r.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-immobilienkauf.svg": () =>
      o(() => import("../__chunks__/dva-icon-immobilienkauf.jDQObz7b.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-info.svg": () =>
      o(() => import("../__chunks__/dva-icon-info.WE8R02Uj.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-information-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-information-24px.ItizQ2lx.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-information-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-information-32px.jg545KQ_.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-information-gold.svg": () =>
      o(() => import("../__chunks__/dva-icon-information-gold.naHinN-t.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-instagram-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-instagram-24px.WNmDWuOv.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-instagram-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-instagram-circle-32px.CpEkRYVu.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-instagram-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-instagram-circle-48px.3IvhOoUG.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-instagram.svg": () =>
      o(() => import("../__chunks__/dva-icon-instagram.ddmh8QOh.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-invisible.svg": () =>
      o(() => import("../__chunks__/dva-icon-invisible.TqjOu7k2.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ar.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ar.jHcepMp9.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-bg.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-bg.Nh9ML-Xe.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-bs.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-bs.Pv8QABIC.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-cs.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-cs.L6_JWvQH.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-da.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-da.eE2IjbvL.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-de.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-de.8shmdAMB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-el.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-el.FHIIGv2C.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-en.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-en.JC7_07J1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-es.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-es.DvGNGryf.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-et.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-et.BTE_Ptl_.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-fi.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-fi.6RJmsaPf.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-fr.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-fr.KxN4a7vs.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-hi.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-hi.YqdQ7Ppl.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-hr.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-hr.vctGR_Q7.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-hu.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-hu.H_M7mxBF.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-hy.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-hy.IUHxYz0e.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-it.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-it.9g9Rfiek.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ja.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ja.COu5UJNK.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ko.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ko.-kQnRbbz.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-lt.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-lt.KxSD1idf.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-lv.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-lv.0-zPKvku.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-nl.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-nl.QYjqI4xV.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-no.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-no.4Fm-AIhf.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-pl.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-pl.vXYX3GVl.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-pt.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-pt.0YdhGT8G.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ro.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ro.zgfZOmlB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ru.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ru.CgeBiWdu.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-sk.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-sk.fhMpIiyd.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-sl.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-sl.nCFGWPKX.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-sr.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-sr.hnOCAMrZ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-sv.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-sv.zXcOBa_F.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-ta.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-ta.IbAg4KD2.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-tr.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-tr.hL-lPXzm.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lang-zh.svg": () =>
      o(() => import("../__chunks__/dva-icon-lang-zh.cSTlHgNC.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-linkedin-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-linkedin-24px.byxuMdv9.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-linkedin-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-linkedin-circle-32px.L80xiTb1.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-linkedin-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-linkedin-circle-48px.A8v5uGGj.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-linkedin.svg": () =>
      o(() => import("../__chunks__/dva-icon-linkedin.8csfatsB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-listen.svg": () =>
      o(() => import("../__chunks__/dva-icon-listen.jvzMf_jb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-loader.svg": () =>
      o(() => import("../__chunks__/dva-icon-loader.afLMo51b.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-loading.svg": () =>
      o(() => import("../__chunks__/dva-icon-loading.mi7FYjKX.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-location-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-location-32px.5Su-alB9.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-location.svg": () =>
      o(() => import("../__chunks__/dva-icon-location.5ZeFqWQE.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lock-hollow.svg": () =>
      o(() => import("../__chunks__/dva-icon-lock-hollow.gMIB2QGO.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-lock.svg": () =>
      o(() => import("../__chunks__/dva-icon-lock.CpWlVTC2.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-logo-text.svg": () =>
      o(() => import("../__chunks__/dva-icon-logo-text.1Ugv-PEh.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-logo.svg": () =>
      o(() => import("../__chunks__/dva-icon-logo.d6ADhsef.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mail-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-mail-24px.ECWj1jbs.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mail-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-mail-32px.vxq9nSiq.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mail-gold.svg": () =>
      o(() => import("../__chunks__/dva-icon-mail-gold.6ijHXdS0.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mail.svg": () =>
      o(() => import("../__chunks__/dva-icon-mail.CSOC2MXb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-message-bubble.svg": () =>
      o(() => import("../__chunks__/dva-icon-message-bubble.rfEczo-X.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mobile-phone-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-mobile-phone-24px.VH2aySnl.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-mobile-phone-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-mobile-phone-32px.BPBpM8xV.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-money.svg": () =>
      o(() => import("../__chunks__/dva-icon-money.HQvGM1K7.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-paper-plane-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-paper-plane-24px.bfEvrPsC.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-paper-plane-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-paper-plane-32px.Lw17Uczb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-partnership.svg": () =>
      o(() => import("../__chunks__/dva-icon-partnership.BpPl4-QU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-partnerup.svg": () =>
      o(() => import("../__chunks__/dva-icon-partnerup.OaZ9bD1K.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-path.svg": () =>
      o(() => import("../__chunks__/dva-icon-path.71JFBsHV.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-pathway.svg": () =>
      o(() => import("../__chunks__/dva-icon-pathway.zT1MBcSU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-pen.svg": () =>
      o(() => import("../__chunks__/dva-icon-pen.riyAYZ9R.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-person.svg": () =>
      o(() => import("../__chunks__/dva-icon-person.4eJHy0A0.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-phone-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-phone-24px.4eNO33L1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-phone-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-phone-32px.RWOvwcW8.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-phone.svg": () =>
      o(() => import("../__chunks__/dva-icon-phone.gyCQ2S6H.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-pin.svg": () =>
      o(() => import("../__chunks__/dva-icon-pin.begtda-J.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-plan.svg": () =>
      o(() => import("../__chunks__/dva-icon-plan.5PPeTZad.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-play.svg": () =>
      o(() => import("../__chunks__/dva-icon-play.Kttdp8dw.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-plus-circle-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-plus-circle-16px.NPwk7yki.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-printer.svg": () =>
      o(() => import("../__chunks__/dva-icon-printer.Vyc_iATb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-questions-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-questions-24px.ZvvZpUSc.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-quote.svg": () =>
      o(() => import("../__chunks__/dva-icon-quote.F9OErmYA.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-repeat-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-repeat-24px.JA169UJy.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-runningshoe-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-runningshoe-48px.XwjMeoz6.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-scroll-up.svg": () =>
      o(() => import("../__chunks__/dva-icon-scroll-up.UXEcdnKz.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-search.svg": () =>
      o(() => import("../__chunks__/dva-icon-search.qUH8bQ1T.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-share.svg": () =>
      o(() => import("../__chunks__/dva-icon-share.ZIXyyW0R.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-signs.svg": () =>
      o(() => import("../__chunks__/dva-icon-signs.mhRJtBTV.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-skype.svg": () =>
      o(() => import("../__chunks__/dva-icon-skype.kFxh4ZO2.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-slider-arrow.svg": () =>
      o(() => import("../__chunks__/dva-icon-slider-arrow.Sq7urQCP.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-facebook.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-facebook._ZOecBuD.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-instagram.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-instagram.f1xwAU9L.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-linkedin.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-linkedin.8csfatsB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-tiktok.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-tiktok.XwHg26ZF.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-twitter.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-twitter.OPFP53sj.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-xing.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-xing.cmVNYnxB.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-social-youtube.svg": () =>
      o(() => import("../__chunks__/dva-icon-social-youtube.rBzpRMfo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-speechbubble-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-speechbubble-24px.gDlLOhXs.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-speechbubbles-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-speechbubbles-24px._Fy0xHFc.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-speechbubbles-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-speechbubbles-48px.sOR5m31_.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-spikes-pattern.svg": () =>
      o(() => import("../__chunks__/dva-icon-spikes-pattern.npvMG6ni.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-star.svg": () =>
      o(() => import("../__chunks__/dva-icon-star.oEw5MfFh.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-telegram-colored.svg": () =>
      o(() => import("../__chunks__/dva-icon-telegram-colored.urTvinWN.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-thin-arrow-left.svg": () =>
      o(() => import("../__chunks__/dva-icon-thin-arrow-left.1a4XMfFP.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-thin-arrow-right.svg": () =>
      o(() => import("../__chunks__/dva-icon-thin-arrow-right.DmCgKSWa.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-thin-check.svg": () =>
      o(() => import("../__chunks__/dva-icon-thin-check.1zArR2rZ.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-three-dots-menu-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-three-dots-menu-24px.nRcsMJU3.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-threema-colored.svg": () =>
      o(() => import("../__chunks__/dva-icon-threema-colored.t4W0xdCj.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-tiktok-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-tiktok-24px.XwHg26ZF.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-tiktok-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-tiktok-circle-32px.MRrXD-dJ.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-tiktok-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-tiktok-circle-48px.pjRGJfxb.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-tiktok.svg": () =>
      o(() => import("../__chunks__/dva-icon-tiktok.whXl6pzb.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-trash-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-trash-24px.nPCDLpYL.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-trash.svg": () =>
      o(() => import("../__chunks__/dva-icon-trash.OmaWmwh0.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-twitter-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-twitter-24px.Q4RgFhQ6.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-twitter-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-twitter-circle-32px.loOycMe9.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-twitter-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-twitter-circle-48px.BP6-yfER.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-twitter.svg": () =>
      o(() => import("../__chunks__/dva-icon-twitter.TgrCqDCH.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-umbau.svg": () =>
      o(() => import("../__chunks__/dva-icon-umbau.WFAxGalq.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-upload-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-upload-24px.uN77ECD9.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-upload-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-upload-32px.PO0_QQbn.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-visible.svg": () =>
      o(() => import("../__chunks__/dva-icon-visible.te1CQ6ib.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-warning-gold.svg": () =>
      o(() => import("../__chunks__/dva-icon-warning-gold.Loz1i7nU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-warning.svg": () =>
      o(() => import("../__chunks__/dva-icon-warning.Eha_X-y9.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-watch-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-watch-32px.CrvnE_Kw.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-whatsapp-colored.svg": () =>
      o(() => import("../__chunks__/dva-icon-whatsapp-colored.4W9gEXvA.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-whatsapp.svg": () =>
      o(() => import("../__chunks__/dva-icon-whatsapp.qXLr09L1.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-world-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-world-32px.wHyX_UpI.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-world-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-world-48px.H_zn64he.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-xing-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-xing-24px.wNtktyYA.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-xing-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-xing-circle-32px.Eg3Nk_Mo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-xing-circle-48px.svg": () =>
      o(() => import("../__chunks__/dva-icon-xing-circle-48px.fu9MkUqo.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-xing.svg": () =>
      o(() => import("../__chunks__/dva-icon-xing.GstZ21OO.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-youtube-24px.svg": () =>
      o(() => import("../__chunks__/dva-icon-youtube-24px.g85nl1B7.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-youtube-circle-32px.svg": () =>
      o(() => import("../__chunks__/dva-icon-youtube-circle-32px.o9_rlPLh.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
    "/public/icons/dva-icon-youtube.svg": () =>
      o(() => import("../__chunks__/dva-icon-youtube.yHUKlZeM.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-zoom-plus-16px.svg": () =>
      o(() => import("../__chunks__/dva-icon-zoom-plus-16px.efQKMhdO.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-icon-zoom.svg": () =>
      o(() => import("../__chunks__/dva-icon-zoom.-T7jJXne.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-social-placeholder.svg": () =>
      o(() => import("../__chunks__/dva-social-placeholder.68PVM1ZU.js"), __vite__mapDeps([])).then(e => e.default),
    "/public/icons/dva-video-consent-placeholder.svg": () =>
      o(() => import("../__chunks__/dva-video-consent-placeholder.weIgDcT5.js"), __vite__mapDeps([])).then(
        e => e.default,
      ),
  });
class zt extends le {
  constructor() {
    super({ initialStates: { loaded: !1 }, useShadowDOM: !0 });
  }
  connectedCallback() {
    this.loadingAttr === "eager" ? super.connectedCallback() : Ye.subscribe(this, () => super.connectedCallback());
  }
  get loadingAttr() {
    return this.getAttribute("loading") || "lazy";
  }
  get iconId() {
    return this.getAttribute("icon-id") || "";
  }
  set iconId(t) {
    this.setAttribute("icon-id", t);
  }
  get halfFilled() {
    return this.hasAttribute("half-filled") && this.getAttribute("half-filled") !== "false";
  }
  afterComponentRender() {
    this.state.loaded || this.loadIcon();
  }
  async getSvgString(t) {
    const i = be[`${fe}/${t}.svg`];
    return await (i !== void 0 ? i : be[`${fe}/cross.svg`])();
  }
  async loadIcon() {
    const t = await this.getSvgString(this.iconId)
      .then(i => i)
      .catch(i => {
        console.warn(`An error occurred while loading the component: ${i}`), this.remove();
      });
    this.appendSymbol(t),
      this.halfFilled && this.makeHalfFilled(),
      this.setState({ loaded: !0 }),
      this.dispatchEvent(new CustomEvent(Ct));
  }
  static get observedAttributes() {
    return ["half-filled", "icon-id"];
  }
  appendSymbol(t) {
    const i = document.createElement("span");
    i.innerHTML = `<style>${$t}</style>${t}`;
    const n = O(i, "svg");
    n !== null && n.setAttribute("class", "dva-e-icon__svg"), (this.getUiRoot().innerHTML = i.innerHTML);
  }
  attributeChangedCallback(t, i, n) {
    i !== n && this.state.loaded === !0 && this.loadIcon();
  }
  makeHalfFilled() {
    const t = O(this, "svg");
    t !== null && t.setAttribute("style", "fill: url(#half_filled)!important");
  }
}
customElements.define("dva-e-icon", zt);
const Q = "dva-state-active",
  Ee = "dva-state-loading",
  Mt = "dva-state-loaded",
  ye = "dva-state-hidden",
  jt = "dva-state-initialized",
  Nt = "dva-state-invp",
  Je = [
    { name: "MQ5", query: "(min-width: 1280px)", min: 1280, max: Number.MAX_SAFE_INTEGER || 1e4, colCount: 4 },
    { name: "MQ4", query: "(min-width: 1024px)", min: 1024, max: 1279, colCount: 4 },
    { name: "MQ3", query: "(min-width: 760px)", min: 760, max: 1023, colCount: 4 },
    { name: "MQ2", query: "(min-width: 476px)", min: 476, max: 759, colCount: 6 },
    { name: "MQ1", query: "(min-width: 0px)", min: 0, max: 476, colCount: 12 },
  ],
  Bt =
    ':host{display:block}.dva-e-lazy-image__mask{position:relative;overflow:hidden;width:100%;height:0;pointer-events:none}.dva-e-lazy-image__mask--16-9{padding-bottom:56.25%}.dva-e-lazy-image__mask--21-9{padding-bottom:42.8571429%}.dva-e-lazy-image__mask--9-16{padding-bottom:177.78%}.dva-e-lazy-image__mask--4-3{padding-bottom:75%}.dva-e-lazy-image__mask--2-3{padding-bottom:150%}.dva-e-lazy-image__mask--1-1{padding-bottom:100%}.dva-e-lazy-image__mask--2-1{padding-bottom:50%}.dva-e-lazy-image__wrapper{opacity:1;line-height:0;transition:opacity .3s ease-in-out}.dva-e-lazy-image__wrapper.dva-state-hidden{display:none}.dva-e-lazy-image__wrapper.dva-state-loading{position:relative;min-height:200px;opacity:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper.dva-state-loading{position:initial;min-height:initial}.dva-e-lazy-image__img{width:100%}.dva-e-lazy-image__wrapper--has-overwidth .dva-e-lazy-image__img{width:inherit;height:100%;object-fit:cover;object-position:50% 50%}.dva-e-lazy-image__no-ratio,.dva-e-lazy-image__no-ratio .dva-e-lazy-image__wrapper{width:inherit;height:inherit}.dva-e-lazy-image__no-ratio .dva-e-lazy-image__img{width:inherit;max-width:100%;height:inherit}.dva-e-lazy-image__cover{position:absolute;top:0;left:0;width:100%;height:100%}.dva-e-lazy-image__cover .dva-e-lazy-image__img{object-fit:cover}.dva-e-lazy-image__contain .dva-e-lazy-image__img{object-fit:contain;object-position:100% 100%}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:42.8571428571%;pointer-events:none}.dva-e-lazy-image__mask--21-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:56.25%;pointer-events:none}.dva-e-lazy-image__mask--16-9 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:177.7777777778%;pointer-events:none}.dva-e-lazy-image__mask--9-16 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:75%;pointer-events:none}.dva-e-lazy-image__mask--4-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:150%;pointer-events:none}.dva-e-lazy-image__mask--2-3 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:50%;pointer-events:none}.dva-e-lazy-image__mask--2-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper{position:relative}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper:before{content:"";display:block;width:100%;padding-top:100%;pointer-events:none}.dva-e-lazy-image__mask--1-1 .dva-e-lazy-image__wrapper>.dva-e-lazy-image__img{position:absolute;top:0;left:0}.dva-e-lazy-image__mask .dva-e-lazy-image__wrapper{position:absolute;width:100%;height:auto}.dva-e-lazy-image--circle{overflow:hidden;width:100%;padding:4px;border:1px solid #c8aa22;border-radius:100%;background:#fff}.dva-e-lazy-image--circle .dva-e-lazy-image__mask{display:block;overflow:hidden;width:100%;border-radius:100%}',
  qt = e => (e === void 0 ? "" : ` ${e}`),
  Ft = e => (e === "cover" ? "cover" : e === "contain" ? "contain" : "fill"),
  Ut = e => (e === "contain" ? "100% 100%" : "50% 50%"),
  Ht = e => (e === "circle" ? "dva-e-lazy-image--circle" : ""),
  Qt = e =>
    e === "21:9"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--21-9"
      : e === "16:9"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--16-9"
      : e === "4:3"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--4-3"
      : e === "1:1"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--1-1"
      : e === "2:3"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--2-3"
      : e === "9:16"
      ? "dva-e-lazy-image__mask dva-e-lazy-image__mask--9-16"
      : e === "cover"
      ? "dva-e-lazy-image__no-ratio dva-e-lazy-image__cover"
      : e === "contain"
      ? "dva-e-lazy-image__no-ratio dva-e-lazy-image__contain"
      : "dva-e-lazy-image__no-ratio",
  Ae = e => d`
    <style>
      ${Bt}
    </style>
    <!--<div class="${Ht(e.wrapper)}">-->
    <div class="${Qt(e.aspectRatio)}">
      <div class="dva-e-lazy-image__wrapper dva-js-lazy-image__wrapper">
        <img
          draggable="false"
          class="dva-js-lazy-image__img dva-e-lazy-image__img"
          src="${e.fallbackImg}"
          srcset="${e.srcset}"
          alt="${e.alt}"
          sizes="${e.sizes}"
          data-object-fit=${Ft(e.aspectRatio)}
          data-object-position=${Ut(e.aspectRatio)}
        />
      </div>
    </div>
    <!--</div>-->
  `,
  Pe = e => d`
    <dva-e-lazy-image 
      class="dva-e-lazy-image dva-js-lazy-image${qt(e.cssClasses)}"
      src="${e.src}"
      alt=${R(e.alt)}
      srcset="${R(e.srcset)}"
      sizes="${R(e.sizes)}"
      aspect-ratio="${R(e.aspectRatio)}"
      wrapper="${R(e.wrapper)}">
    </dva-e-lazy-image>
  `;
var Wt = Object.defineProperty,
  Kt = Object.getOwnPropertyDescriptor,
  Gt = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? Kt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && Wt(t, i, a), a;
  };
let oe = class extends le {
  constructor() {
    super({
      ui: { image: ".dva-js-lazy-image__img :-one", wrapper: ".dva-js-lazy-image__wrapper :-one" },
      initialStates: { imgLoaded: !1 },
      useShadowDOM: !0,
    });
  }
  connectedCallback() {
    this.initType === "lazy" ? Ye.subscribe(this, () => super.connectedCallback()) : super.connectedCallback();
  }
  get DEFAULT_FALLBACK_IMAGE() {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";
  }
  get fallbackImg() {
    return this.getAttribute("fallback-image") || this.DEFAULT_FALLBACK_IMAGE;
  }
  get imgSrc() {
    return this.getAttribute("src") || "";
  }
  get imgSrcSet() {
    return this.getAttribute("srcset") || "";
  }
  get imgSizes() {
    return this.getAttribute("sizes") || "";
  }
  get imgAlt() {
    return this.getAttribute("alt") || "";
  }
  get imgAspectRatio() {
    return this.getAttribute("aspect-ratio") || "";
  }
  get imgWrapper() {
    return this.getAttribute("wrapper") || "";
  }
  get hasOverWidth() {
    return this.ui.image.offsetHeight < this.offsetHeight;
  }
  static get observedAttributes() {
    return ["src", "aspect-ratio"];
  }
  get initType() {
    switch (this.getAttribute("init")) {
      case "explicit":
        return "explicit";
      default:
        return "lazy";
    }
  }
  attributeChangedCallback(e, t, i) {
    if (!(t === i || !this.state.initialized))
      switch (e) {
        case "src":
          this.setState({ imgLoaded: !1 }), this.loadImage();
          break;
        case "aspect-ratio":
          this.renderComponent(), this.handleOverwidth();
          break;
      }
  }
  renderComponent() {
    W(
      Ae({
        alt: this.imgAlt,
        src: this.DEFAULT_FALLBACK_IMAGE,
        srcset: "",
        sizes: this.imgSizes,
        aspectRatio: this.imgAspectRatio,
        wrapper: this.imgWrapper,
        fallbackImg: this.fallbackImg,
      }),
      this.getUiRoot(),
    );
  }
  updateComponent() {
    W(
      Ae({
        alt: this.imgAlt,
        src: this.imgSrc,
        srcset: this.imgSrcSet,
        sizes: this.imgSizes,
        aspectRatio: this.imgAspectRatio,
        fallbackImg: this.fallbackImg,
      }),
      this.getUiRoot(),
    );
  }
  afterComponentRender() {
    b(this, jt), k(this.ui.wrapper, ye), this.initType !== "explicit" && this.loadImage();
  }
  beforeComponentDisconnects() {
    b(this.ui.wrapper, ye);
  }
  destroyComponent() {
    this.setState({ imgLoaded: !1 });
  }
  loadImage() {
    if (this.state.imgLoaded) return;
    b(this, Nt), b(this.ui.wrapper, Ee);
    const e = this.ui.image;
    this.attachImageEvents(e),
      this.imgSrc || this.imgSrcSet
        ? (this.imgSrc && e.setAttribute("src", this.imgSrc),
          this.imgSrcSet && e.setAttribute("srcset", this.imgSrcSet))
        : console.warn("LazyImage: no src/srcset provided for", e);
  }
  handleImageLoadingError() {
    const e = this.ui.image;
    E(e, "error", this.handleImageLoadingError, this),
      console.log("src", this.fallbackImg),
      e.setAttribute("src", this.fallbackImg),
      e.setAttribute("srcset", ""),
      console.log("lazyImg error:", e);
  }
  handleImageLoad() {
    this.handleOverwidth(),
      E(this.ui.image, "load", this.handleImageLoad, this),
      k(this.ui.wrapper, Ee),
      b(this, Mt),
      this.dispatchEvent(new CustomEvent("dva-image-loaded", { detail: { target: this } })),
      this.setState({ imgLoaded: !0 });
  }
  attachImageEvents(e) {
    g(e, "load", this.handleImageLoad, this), g(e, "error", this.handleImageLoadingError, this);
  }
  handleOverwidth() {
    k(this.ui.wrapper, "dva-e-lazy-image__wrapper--has-overwidth"),
      this.hasOverWidth && b(this.ui.wrapper, "dva-e-lazy-image__wrapper--has-overwidth");
  }
};
oe = Gt([Ge(Je)], oe);
customElements.define("dva-e-lazy-image", oe);
var Yt = Object.defineProperty,
  Jt = Object.getOwnPropertyDescriptor,
  D = (e, t, i, n) => {
    for (var a = n > 1 ? void 0 : n ? Jt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
      (r = e[s]) && (a = (n ? r(t, i, a) : r(a)) || a);
    return n && a && Yt(t, i, a), a;
  };
let y = class extends le {
  constructor() {
    super(...arguments), (this.blockContentMap = new WeakMap());
  }
  afterComponentRender() {
    this.initBlockContentMap(), this.setContentHeight();
  }
  initBlockContentMap() {
    this.blocks.forEach(e => {
      const t = O(e, ".dvag-m-c11-accordion__content");
      t !== null && this.blockContentMap.set(e, t);
    });
  }
  destroyComponent() {
    this.blockContentMap = new WeakMap();
  }
  setContentHeight() {
    this.contents !== void 0 &&
      this.contents.forEach(e => {
        this.updateContentHeight(e);
      });
  }
  updateContentHeight(e) {
    const t = e.firstElementChild !== null ? e.firstElementChild.scrollHeight : 0;
    e.style.setProperty("--accordion-content-height", `${t}px`);
  }
  handleWindowResize() {
    this.setContentHeight();
  }
  async onToggleClick(e) {
    e.preventDefault();
    const t = e.currentTarget.parentElement;
    if (!t) return;
    const i = this.blockContentMap.get(t);
    i && (Me(t, Q) ? (await C(100), k(t, Q)) : (await C(100), b(t, Q), await C(300), this.updateContentHeight(i)));
  }
};
D([ce(".dvag-m-c11-accordion__toggle")], y.prototype, "toggles", 2);
D([ce(".dvag-m-c11-accordion__block")], y.prototype, "blocks", 2);
D([ce(".dvag-m-c11-accordion__content")], y.prototype, "contents", 2);
D([Ke("window", "resize"), re(100)], y.prototype, "handleWindowResize", 1);
D([Ke("toggles", "click")], y.prototype, "onToggleClick", 1);
y = D([Ge(Je)], y);
customElements.define("dvag-m-c11-accordion", y);
class Zt {
  readBlockConfig(t) {
    const i = {};
    return (
      t.querySelectorAll(":scope > div").forEach(n => {
        if (n.children) {
          const a = [...n.children];
          if (a[1]) {
            const s = a[1],
              r = N(a[0].textContent ?? "");
            let l = "";
            if (s.querySelector("a")) {
              const c = [...s.querySelectorAll("a")];
              c.length === 1 ? (l = c[0].href) : (l = c.map(u => u.href));
            } else if (s.querySelector("img")) {
              const c = [...s.querySelectorAll("img")];
              c.length === 1 ? (l = c[0].src) : (l = c.map(u => u.src));
            } else if (s.querySelector("p")) {
              const c = [...s.querySelectorAll("p")];
              c.length === 1 ? (l = c[0].textContent) : (l = c.map(u => u.textContent));
            } else l = n.children[1].textContent;
            i[r] = l;
          }
        }
      }),
      i
    );
  }
  decorateBlocks(t) {
    t.querySelectorAll("div.section > div > div").forEach(this.decorateBlock);
  }
  decorateBlock(t) {
    const i = t.classList[0];
    if (i) {
      t.classList.add("block"), (t.dataset.blockName = i);
      const n = t.parentElement;
      n == null || n.classList.add(`${i}-wrapper`);
      const a = t.closest(".section");
      a && a.classList.add(`${i}-container`);
    }
  }
}
function Xt(e) {
  return N(e).replace(/-([a-z])/g, t => t[1].toUpperCase());
}
class ei {
  constructor(t) {
    this.blockService = t;
  }
  init(t) {
    this.transformSection(t);
  }
  transformSection(t) {
    t.querySelectorAll(":scope > div").forEach(i => {
      this.adjustMarkup(i), this.processSectionMetaData(i);
    });
  }
  processSectionMetaData(t) {
    const i = t.querySelector("div.section-metadata");
    if (i) {
      const n = this.blockService.readBlockConfig(i);
      Object.keys(n).forEach(a => {
        a === "style"
          ? n.style
              .split(",")
              .filter(r => r)
              .map(r => N(r.trim()))
              .forEach(r => t.classList.add(r))
          : (t.dataset[Xt(a)] = n[a]);
      }),
        i.parentElement && i.parentElement.remove();
    }
  }
  adjustMarkup(t) {
    const i = [];
    let n = !1;
    [...t.children].forEach(a => {
      if (a.tagName === "DIV" || !n) {
        const s = document.createElement("div");
        i.push(s), (n = a.tagName !== "DIV"), n && s.classList.add("default-content-wrapper");
      }
      i[i.length - 1].append(a);
    }),
      i.forEach(a => t.append(a)),
      this.decorateImages(),
      t.classList.add("section"),
      (t.dataset.sectionStatus = "initialized"),
      (t.style.display = "none");
  }
  decorateImages() {
    document.querySelectorAll(".default-content-wrapper picture").forEach(i => {
      const n = i.parentElement;
      n && n.classList.add("image", "main");
    });
  }
}
const ti = () =>
    d`<dvag-m-n01-header class="dvag-m-n01-header" vb-file-url="/async-includes/subbar.html"><div class="dvag-m-n01-header__logo-wrapper"><div class="dvag-m-n01-header__logo-mobile"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${v(
      "dva-icon-header-logo-s",
    )}</a></div><div class="dvag-m-n01-header__logo-desktop"><a href="#" title="Deutsche Vermögensberatung" aria-label="home">${v(
      "dva-icon-header-logo-dvag-xl",
    )}</a></div></div><div class="dvag-m-n01-header__menu-wrapper"><div class="dvag-m-n01-header__header-navigation-wrapper"><ul class="dvag-m-n01-header__header-navigation-list"><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Lorem">Lorem</a></li><li class="dvag-m-n01-header__header-navigation-item"><a class="dvag-m-n01-header__header-navigation-link" href="#" title="Ipsum">Ipsum</a></li></ul></div><a class="dvag-m-n01-header__burger-menu" href="#">${v(
      "dva-icon-burger-24px",
    )} <span class="dvag-m-n01-header__burger-label">Menü</span></a></div><div class="dvag-m-n01-header__navigation-wrapper"></div></dvag-m-n01-header>`,
  ii = () =>
    d`<h5 class="dvag-m-n02-footer__headline">Bestnoten in Beratung, Service und Karriere</h5><div class="dvag-m-n02-footer__awards"><a href="#">${Pe(
      {
        src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/service-rating-footer.svg",
        cssClasses: "dvag-m-n02-footer__award-image",
      },
    )} </a><a href="#">${Pe({
      src: "https://main--dva-showcase--ifahrentholz.hlx.page/assets/kundenchampions-footer.svg",
      cssClasses: "dvag-m-n02-footer__award-image",
    })}</a></div>`,
  ni = [
    {
      headline: { label: "Unternehmen", link: "#" },
      items: [
        { label: "Über uns", link: "#" },
        { label: "Geschäftsleitung", link: "#" },
        { label: "Markenbotschafter", link: "#" },
        { label: "Struktur & Geschichte", link: "#" },
        { label: "Unternehmensbericht", link: "#" },
        { label: "Presseservice", link: "#" },
        { label: "Standorte", link: "#" },
        { label: "Gezielte und nachhaltige Hilfe", link: "#" },
      ],
    },
    {
      headline: { label: "Beratung", link: "#" },
      items: [
        { label: "Unser Beratungsmodell", link: "#" },
        { label: "Leistungen für Privatkunden", link: "#" },
        { label: "Leistungen für Firmenkunden", link: "#" },
        { label: "Finanztipps", link: "#" },
        { label: "Produktpartner", link: "#" },
        { label: "Ansprechpartner finden", link: "#" },
        { label: "Nachhaltigkeit (EGS)", link: "#" },
      ],
    },
    {
      headline: { label: "Erfahrungen & Bewertungen", link: "#" },
      items: [
        { label: "Kundenbewertungen", link: "#" },
        { label: "Zertifikate & Auszeichnungen", link: "#" },
      ],
    },
    {
      headline: { label: "Karriere", link: "#" },
      items: [
        { label: "Karriere als selbstständiger Finanzcoach", link: "#" },
        { label: "Teamblog", link: "#" },
        { label: "Karriere in der Unternehmenszentrale", link: "#" },
      ],
    },
    {
      headline: { label: "Unternehmen", link: "#" },
      items: [
        { label: "Über uns", link: "#" },
        { label: "Geschäftsleitung", link: "#" },
        { label: "Markenbotschafter", link: "#" },
        { label: "Struktur & Geschichte", link: "#" },
        { label: "Unternehmensbericht", link: "#" },
        { label: "Presseservice", link: "#" },
        { label: "Standorte", link: "#" },
        { label: "Gezielte und nachhaltige Hilfe", link: "#" },
      ],
    },
    {
      headline: { label: "Beratung", link: "#" },
      items: [
        { label: "Unser Beratungsmodell", link: "#" },
        { label: "Leistungen für Privatkunden", link: "#" },
        { label: "Leistungen für Firmenkunden", link: "#" },
        { label: "Finanztipps", link: "#" },
        { label: "Produktpartner", link: "#" },
        { label: "Ansprechpartner finden", link: "#" },
        { label: "Nachhaltigkeit (EGS)", link: "#" },
      ],
    },
    {
      headline: { label: "Erfahrungen & Bewertungen", link: "#" },
      items: [
        { label: "Kundenbewertungen", link: "#" },
        { label: "Zertifikate & Auszeichnungen", link: "#" },
      ],
    },
    {
      headline: { label: "Karriere", link: "#" },
      items: [
        { label: "Karriere als selbstständiger Finanzcoach", link: "#" },
        { label: "Teamblog", link: "#" },
        { label: "Karriere in der Unternehmenszentrale", link: "#" },
      ],
    },
  ],
  oi = [
    { icon: "dva-icon-instagram-24px" },
    { icon: "dva-icon-facebook-24px" },
    { icon: "dva-icon-tiktok-24px" },
    { icon: "dva-icon-linkedin-24px" },
    { icon: "dva-icon-xing-24px" },
    { icon: "dva-icon-youtube-24px" },
    { icon: "dva-icon-twitter-24px" },
  ],
  Ze = { navigationSections: ni, socialLinks: oi },
  ai = () =>
    d`<h5 class="dvag-m-n02-footer__headline">Finden Sie uns in den sozialen Netzwerken</h5><div class="dvag-m-n02-footer__social-links">${Ze.socialLinks.map(
      e =>
        d`<a href="#" class="dva-e-button dva-e-button--secondary dva-e-button--icon-only dva-e-button--rebrush dvag-m-n02-footer__social-link"><div class="dva-e-button__background"></div>${v(
          e.icon,
          "dva-e-button__icon",
        )}</a>`,
    )}</div>`,
  si = e => (e.label === void 0 ? "" : d`<span class="dva-e-link__label">${e.label}</span>`),
  ri = e => (e.iconID === void 0 ? "" : d`<dva-e-icon class="dva-e-icon" icon-id="${e.iconID}"></dva-e-icon>`),
  $ = e =>
    e.shouldRender === !1
      ? ""
      : d`<a class="dva-e-link${e.cssClasses ? ` ${e.cssClasses}` : ""}" href="${e.target}" target="${
          e.newWindow !== !0 ? "_self" : "_blank"
        }">${si(e)} ${ri(e)}</a>`,
  ci = () =>
    d`<dvag-m-c11-accordion class="dvag-m-c11-accordion dvag-m-n02-footer__navigation" active-on-mq="1-3">${Ze.navigationSections.map(
      e =>
        d`<div class="dvag-m-c11-accordion__block"><button class="dvag-m-c11-accordion__toggle" tabindex="-1">${v(
          "dva-icon-chevron-down-16px",
          "dvag-m-c11-accordion__toggle-icon",
        )} <span class="dvag-m-c11-accordion__toggle-label">${
          e.headline.label
        }</span></button><div class="dvag-m-c11-accordion__content"><div class="dvag-m-c11-accordion__content-wrapper"><ul class="dvag-m-n02-footer__list">${e.items.map(
          t => d`<li class="dvag-m-n02-footer__list-item">${$({ target: t.link, label: t.label })}</li>`,
        )}</ul></div></div></div>`,
    )}</dvag-m-c11-accordion>`,
  li = (e = !1) =>
    d`<footer class="dvag-m-n02-footer${
      e ? " dvag-m-n02-footer--border-top" : ""
    }"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12">${ci()}</div></div><div class="dva-grid-row"><div class="dva-grid-col-1-12 dva-grid-col-4-6">${ii()}</div><div class="dva-grid-col-1-12 dva-grid-col-4-6">${ai()}</div></div></div><div class="dvag-m-n02-footer__skew-area"><div class="dvag-h-skew--in"></div><div class="dvag-m-skewed-box__content"><div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><div class="dvag-m-n02-footer__legal-links">${$(
      { target: "#", label: "Datenschutz", cssClasses: "dvag-m-n02-footer__legal-link" },
    )} ${$({ target: "#", label: "Impressum", cssClasses: "dvag-m-n02-footer__legal-link" })} ${$({
      target: "#",
      label: "Cookies bearbeiten",
      cssClasses: "dvag-m-n02-footer__legal-link",
    })}</div><p class="dvag-m-n02-footer__copyright">© 2023 Deutsche Vermögensberatung AG (DVAG)</p></div></div></div></div></div></footer>`;
function ae(e, t = document) {
  const i = e && e.includes(":") ? "property" : "name",
    a = [...t.head.querySelectorAll(`meta[${i}="${e}"]`)].map(s => s.content).join(", ");
  return a.length ? a : "";
}
const di = () =>
    ae("breadcrumb") !== "true"
      ? p
      : d`<div class="dva-grid"><div class="dva-grid-row"><div class="dva-grid-col-1-12"><nav class="dva-m-breadcrump-navigation"><ul class="dva-m-breadcrump-navigation__list"><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Startseite</span> </a>${v(
          "dva-icon-chevron-right",
        )}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Allfinanzberatung</span> </a>${v(
          "dva-icon-chevron-right",
        )}</li><li class="dva-m-breadcrump-navigation__item"><a href="#" class="dva-m-breadcrump-navigation__link"><span class="dva-m-breadcrump-navigation__label">Firmenkunden</span> </a>${v(
          "dva-icon-chevron-right",
        )}</li></ul></nav></div></div></div>`,
  we = (e, t) => {
    t.split(",").forEach(i => {
      e.classList.add(N(i.trim()));
    });
  },
  _i = {
    mainTsPath: "src/main.ts",
    mainScssPath: "src/styles/index.scss",
    iconsDirPath: "./public/icons",
    iconsTypesPath: "./src/icons.types.ts",
    fontsScssPath: "src/styles/fonts.scss",
    lazyStylesScssPath: "src/styles/lazy-styles.scss",
    sidekickLibraryStylesScssPath: "src/styles/sidekick-library-styles.scss",
  };
function Le() {
  return Oe() ? window.parent.location : window.location;
}
const L = class L {};
(L.unloaded = "unloaded"), (L.loading = "loading"), (L.loaded = "loaded"), (L.error = "error");
let P = L;
class ui {
  constructor(t, i) {
    (this.sectionService = t),
      (this.blockService = i),
      (this.lcpBlocks = ["banner"]),
      (this.init = async () => {
        this.setup(), await this.loadEager(), await this.loadLazy();
      }),
      (this.loadEager = async () => {
        (document.documentElement.lang = "en"), this.decorateTemplateAndTheme();
        const n = document.querySelector("main");
        if (n) {
          this.sectionService.init(n),
            this.blockService.decorateBlocks(n),
            this.renderLayout(n),
            setTimeout(() => {
              document.body.classList.add("show");
            }, 100),
            await this.waitForLCP();
          try {
            (window.innerWidth >= 900 || sessionStorage.getItem("fonts-loaded")) && (await this.loadFonts());
          } catch {}
        }
      }),
      (this.loadLazy = async () => {
        const { lazyStylesScssPath: n, sidekickLibraryStylesScssPath: a, fontsScssPath: s } = _i;
        try {
          n && (await this.loadCSS(`${window.hlx.codeBasePath}/dist/lazyStyles/lazyStyles.css`)),
            a &&
              Oe() &&
              (await this.loadCSS(`${window.hlx.codeBasePath}/dist/sidekickLibraryStyles/sidekickLibraryStyles.css`)),
            s && (await this.loadFonts()),
            await this.loadBlocks();
        } catch (r) {
          console.error("Load lazy error: ", r);
        }
      }),
      (this.loadBlocks = async () => {
        const a = [...document.querySelectorAll(".section")].map(s => this.loadBlock(s));
        await Promise.all(a);
      });
  }
  setup() {
    (window.hlx = window.hlx || {}),
      (window.hlx.RUM_MASK_URL = "full"),
      (window.hlx.codeBasePath = ""),
      (window.hlx.lighthouse = new URLSearchParams(Le().search).get("lighthouse") === "on");
    const t = document.querySelector('script[src$="/scripts/scripts.js"]');
    if (t)
      try {
        [window.hlx.codeBasePath] = new URL(t.src).pathname.split("/scripts/scripts.js");
      } catch (i) {
        console.log(i);
      }
  }
  bodyTemplate(t) {
    return d`<div class="page container dva-page">${ti()} ${di()} ${se(t)} ${li()}</div>`;
  }
  renderLayout(t) {
    const i = t.innerHTML,
      n = document.querySelector("header"),
      a = document.querySelector("footer"),
      s = t,
      r = document.querySelector("body");
    r && (W(this.bodyTemplate(i), r), a == null || a.remove(), n == null || n.remove(), s.remove());
  }
  decorateTemplateAndTheme() {
    const t = ae("template");
    t && we(document.body, t);
    const i = ae("theme");
    i && we(document.body, i);
  }
  collectBlocks(t) {
    const i = [];
    return (
      t.querySelectorAll("[data-block-name]").forEach(a => {
        i.push({ name: a.dataset.blockName, element: a });
      }),
      i
    );
  }
  async loadBlockModules(t) {
    if ((t.element.dataset.blockStatus ?? P.unloaded) === P.unloaded) {
      t.element.dataset.blockStatus = P.loading;
      try {
        const n = await o(() => import(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.js`), __vite__mapDeps([]));
        n.default && (await n.default(t.element)), (t.element.dataset.blockStatus = P.loaded);
      } catch (n) {
        (t.element.dataset.blockStatus = P.error), console.error("An error occurred during module import:", n);
      }
    }
  }
  async loadBlockStyles(t) {
    try {
      await this.loadCSS(`${window.hlx.codeBasePath}/dist/${t.name}/${t.name}.css`);
    } catch {
      console.error(`problem with block '${t.name}' loading styles`);
    }
  }
  showSection(t) {
    t.style.removeProperty("display");
  }
  async loadFonts() {
    await this.loadCSS(`${window.hlx.codeBasePath}/dist/fonts/fonts.css`);
    try {
      Le().hostname.includes("localhost") || sessionStorage.setItem("fonts-loaded", "true");
    } catch {}
  }
  async loadCSS(t) {
    return new Promise((i, n) => {
      if (document.querySelector(`head > link[href="${t}"]`)) i(!0);
      else {
        const a = document.createElement("link");
        (a.rel = "stylesheet"), (a.href = t), (a.onload = i), (a.onerror = n), document.head.append(a);
      }
    });
  }
  async waitForLCP() {
    const t = document.querySelector(".section");
    if (t) {
      const a = this.collectBlocks(t).map(async s => {
        this.lcpBlocks.includes(s.name) && (await Promise.all([this.loadBlockModules(s), this.loadBlockStyles(s)]));
      });
      await Promise.all(a), this.showSection(t);
    }
    document.body.style.display = null;
    const i = document.querySelector("main img");
    await new Promise(n => {
      i && !i.complete
        ? (i.setAttribute("loading", "eager"),
          i.setAttribute("fetchpriority", "high"),
          i.addEventListener("load", () => n()),
          i.addEventListener("error", () => n()))
        : n();
    });
  }
  async loadBlock(t) {
    const i = this.collectBlocks(t);
    if (!i.length) {
      this.showSection(t);
      return;
    }
    const n = [];
    for (const a of i) n.push(this.loadBlockModules(a), this.loadBlockStyles(a));
    await Promise.all(n), this.showSection(t);
  }
}
(async function () {
  const e = new Zt(),
    t = new ei(e);
  await new ui(t, e).init();
})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map(i => __vite__mapDeps.viteFileDeps[i]);
}
//# sourceMappingURL=main.js.map
