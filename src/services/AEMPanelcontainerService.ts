import { PanelcontainerMessage } from "./AEMPanelcontainerService.types";
import ObserverService, { ObserverCallback } from "./ObserverService";

class AEMPanelcontainerService {
  constructor() {
    if (window.Granite?.author?.MessageChannel) {
      this.subscribeToMessageChannel();
    }
  }

  private subscribeToMessageChannel() {
    new window.Granite.author.MessageChannel("cqauthor", window).subscribeRequestMessage(
      "cmp.panelcontainer",
      (message: PanelcontainerMessage) => this.handleMessage(message),
    );
  }

  private handleMessage(message: PanelcontainerMessage) {
    if (message.data === undefined) return;

    ObserverService.notifyObservers(this.getObserverKey(message.data.type), message.data);
  }

  public observeMessages(messageType: string, callback: ObserverCallback) {
    ObserverService.observe(this.getObserverKey(messageType), callback);
  }

  public unobserveMessages(messageType: string, callback: ObserverCallback) {
    ObserverService.unobserve(this.getObserverKey(messageType), callback);
  }

  private getObserverKey(messageType: string) {
    return `dvag-panelcontainer-${messageType}`;
  }
}

export default new AEMPanelcontainerService();
