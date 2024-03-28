export interface PanelcontainerMessageData {
  type: string;
  id: string;
  index: number;
  operation: string;
}

export interface PanelcontainerMessage {
  data?: PanelcontainerMessageData;
}

export interface PanelcontainerMessageEventData {
  detail: PanelcontainerMessageData;
}
