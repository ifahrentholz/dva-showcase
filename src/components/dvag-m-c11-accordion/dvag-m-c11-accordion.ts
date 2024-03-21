import { Component, MQBasedRendered, uiElements, uiEvent } from "@kluntje/core";
import { addClass, find, /* getParent, */ hasClass, removeClass, waitFor } from "@kluntje/js-utils/lib/dom-helpers";
import { throttle } from "@kluntje/js-utils/lib/function-helpers/decorators";
import mqDefinitions from "Configs/mediaQueries";
import { ACTIVE } from "Constants/cssClasses";
// import AEMPanelcontainerService from "Services/AEMPanelcontainerService";
// import { PanelcontainerMessageData } from "Services/AEMPanelcontainerService.types";

@MQBasedRendered(mqDefinitions)
export class DvagC11Accordion extends Component {
  private blockContentMap: WeakMap<HTMLDivElement, HTMLDivElement> = new WeakMap();

  @uiElements(".dvag-m-c11-accordion__toggle")
  toggles: Array<HTMLButtonElement>;

  @uiElements(".dvag-m-c11-accordion__block")
  blocks: Array<HTMLDivElement>;

  @uiElements(".dvag-m-c11-accordion__content")
  contents: Array<HTMLDivElement>;

  afterComponentRender() {
    this.initBlockContentMap();
    this.setContentHeight();
    // this.initEditMode();
  }

  /**
   * initializes ContentMap to map blocks and contents
   */
  initBlockContentMap() {
    this.blocks.forEach((block: HTMLDivElement) => {
      const content = find(block, ".dvag-m-c11-accordion__content") as HTMLDivElement;
      if (content !== null) {
        this.blockContentMap.set(block, content);
      }
    });
  }

  /**
   * initializes AEMPanelcontainerService to observe messages sent by AEM panelContainer
   */
  // initEditMode() {
  //   AEMPanelcontainerService.observeMessages("cmp-accordion", (data: PanelcontainerMessageData) =>
  //     this.handlePanelcontainerMessage(data),
  //   );
  // }

  /**
   * triggers click on toggle regarding to AEM panelContainer message data
   * @param {PanelcontainerMessageData} data
   */
  // handlePanelcontainerMessage(data: PanelcontainerMessageData) {
  //   let panelcontainerId = this.dataset.cmpPanelcontainerId;

  //   if (panelcontainerId === undefined) {
  //     const parentCarousel = getParent<HTMLElement>(this, ".cmp-accordion");
  //     panelcontainerId = parentCarousel?.dataset.cmpPanelcontainerId || undefined;
  //   }

  //   if (data.id !== panelcontainerId) return;

  //   // @TODO: must be checked if this works after core component is implemented in BE:
  //   this.toggles[data.index].click();
  // }

  /**
   * uses lifecycle-hook to destroy accordion
   */
  destroyComponent(): void {
    this.blockContentMap = new WeakMap();
  }

  /**
   * sets content height as basis for css-animation
   */
  setContentHeight() {
    if (this.contents === undefined) return;
    this.contents.forEach((content: HTMLDivElement) => {
      this.updateContentHeight(content);
    });
  }

  /**
   * recalculates the contentHeight in case lazy loading content is included (e.g. in C13 Text-Media-component)
   * @param {HTMLDivElement} contentBlock
   */
  updateContentHeight(contentBlock: HTMLDivElement) {
    // get first child for reading height
    const contentHeight = contentBlock.firstElementChild !== null ? contentBlock.firstElementChild.scrollHeight : 0;
    // set custom property
    contentBlock.style.setProperty("--accordion-content-height", `${contentHeight}px`);
  }

  /**
   * updated contentHeight if window resizes
   */
  @uiEvent("window", "resize")
  @throttle(100)
  handleWindowResize() {
    this.setContentHeight();
  }

  /**
   * toggles this block's content visibility of the given toggle button
   * @param {MouseEvent} e
   */
  @uiEvent("toggles", "click")
  async onToggleClick(e: MouseEvent) {
    e.preventDefault();
    const block = (e.currentTarget as HTMLElement).parentElement as HTMLDivElement;
    if (!block) return;
    const content = this.blockContentMap.get(block);
    if (!content) return;
    if (hasClass(block, ACTIVE)) {
      await waitFor(100);
      removeClass(block, ACTIVE);
    } else {
      await waitFor(100);
      addClass(block, ACTIVE);
      await waitFor(300);
      this.updateContentHeight(content);
    }
  }
}

customElements.define("dvag-m-c11-accordion", DvagC11Accordion);
