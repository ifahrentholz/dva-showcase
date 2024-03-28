import { Component, uiElement } from "@kluntje/core";

export class DvagProgressBar extends Component {
  @uiElement(".dvag-e-progress-bar__progress-indicator")
  progressIndicator: HTMLDivElement;

  get startValue(): number {
    return parseInt(this.getAttribute("start-value") || "0", 10);
  }

  afterComponentRender() {
    this.updateProgressIndicator(this.startValue, 2);
  }

  public updateProgressIndicator(percentage: number, duration: number): void {
    this.progressIndicator.style.transitionDuration = `${duration}s`;
    this.progressIndicator.style.width = `${percentage}%`;
  }
}

customElements.define("dvag-e-progress-bar", DvagProgressBar);
