import { Component } from "@kluntje/core";
export declare class DvagC11Accordion extends Component {
    private blockContentMap;
    toggles: Array<HTMLButtonElement>;
    blocks: Array<HTMLDivElement>;
    contents: Array<HTMLDivElement>;
    afterComponentRender(): void;
    /**
     * initializes ContentMap to map blocks and contents
     */
    initBlockContentMap(): void;
    /**
     * initializes AEMPanelcontainerService to observe messages sent by AEM panelContainer
     */
    /**
     * triggers click on toggle regarding to AEM panelContainer message data
     * @param {PanelcontainerMessageData} data
     */
    /**
     * uses lifecycle-hook to destroy accordion
     */
    destroyComponent(): void;
    /**
     * sets content height as basis for css-animation
     */
    setContentHeight(): void;
    /**
     * recalculates the contentHeight in case lazy loading content is included (e.g. in C13 Text-Media-component)
     * @param {HTMLDivElement} contentBlock
     */
    updateContentHeight(contentBlock: HTMLDivElement): void;
    /**
     * updated contentHeight if window resizes
     */
    handleWindowResize(): void;
    /**
     * toggles this block's content visibility of the given toggle button
     * @param {MouseEvent} e
     */
    onToggleClick(e: MouseEvent): Promise<void>;
}
