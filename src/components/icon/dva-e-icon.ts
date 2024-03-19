import { Component } from "@kluntje/core";
import { find } from "@kluntje/js-utils/lib/dom-helpers";

import { ICONS_PATH } from "../../constants.ts";
import LazyConnectService from "../../services/LazyConnectService.ts";
import { LOADED_EVENT } from "../../constants/eventTypes.ts";
import dvaEIconShadowScss from "./dva-e-icon.shadow.scss?inline";

// Vite runs on build time and finds all svg files in icons directory
// Since import.meta.glob only accepts literals ICON_PATH cant be used
const modules = import.meta.glob("/public/icons/*.svg", { as: "raw" });

export class DvaIcon extends Component {
  constructor() {
    super({
      initialStates: {
        loaded: false,
      },
      useShadowDOM: true,
    });
  }

  connectedCallback() {
    if (this.loadingAttr === "eager") {
      super.connectedCallback();
    } else {
      LazyConnectService.subscribe(this, () => super.connectedCallback());
    }
  }

  get loadingAttr(): string {
    return this.getAttribute("loading") || "lazy";
  }

  get iconId(): string {
    return this.getAttribute("icon-id") || "";
  }

  set iconId(newIconId: string) {
    this.setAttribute("icon-id", newIconId);
  }

  get halfFilled(): boolean {
    return this.hasAttribute("half-filled") && this.getAttribute("half-filled") !== "false";
  }

  afterComponentRender(): void {
    if (!this.state.loaded) {
      this.loadIcon();
    }
  }

  async getSvgString(name: string): Promise<string> {
    const key = modules[`${ICONS_PATH}/${name}.svg`];
    const iconMarkupFunc = key !== undefined ? key : modules[`${ICONS_PATH}/cross.svg`];
    const iconMarkup = await iconMarkupFunc();
    return iconMarkup;
  }

  async loadIcon() {
    const symbol = await this.getSvgString(this.iconId)
      .then(icon => {
        return icon;
      })
      .catch(error => {
        console.warn(`An error occurred while loading the component: ${error}`);
        this.remove();
      });

    this.appendSymbol(symbol);
    if (this.halfFilled) {
      this.makeHalfFilled();
    }
    this.setState({ loaded: true });
    this.dispatchEvent(new CustomEvent(LOADED_EVENT));
  }

  static get observedAttributes() {
    return ["half-filled", "icon-id"];
  }

  appendSymbol(symbol: any) {
    const svgTempBox = document.createElement("span");
    svgTempBox.innerHTML = `<style>${dvaEIconShadowScss}</style>${symbol}`;
    const svgRoot = find(svgTempBox, "svg");
    if (svgRoot !== null) {
      svgRoot.setAttribute("class", "dva-e-icon__svg");
    }
    this.getUiRoot().innerHTML = svgTempBox.innerHTML;
  }

  // @ts-ignore
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue === newValue) return;
    if (this.state.loaded === true) this.loadIcon();
  }

  makeHalfFilled() {
    const svgRoot = find(this, "svg");
    if (svgRoot !== null) {
      svgRoot.setAttribute("style", "fill: url(#half_filled)!important");
    }
  }
}

customElements.define("dva-e-icon", DvaIcon);
