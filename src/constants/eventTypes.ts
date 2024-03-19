// Kluntje Events
export const IN_VIEWPORT_EVENT = "kl-in-vp";
export const OUT_VIEWPORT_EVENT = "kl-out-vp";
export const MQ_CHANGE_EVENT = "kl-mq-change";

// AEM Events
export const EVENT_AEM_MODE_CHANGE = "dvag-aem-mode-changed";

// Input Events
export const INPUT_CHANGED_EVENT = "dva-input-changed";
export const DATE_CHANGED_EVENT = "dva-date-changed";
export const SELECTION_CHANGED_EVENT = "dva-selection-changed";
export const CHECKED_EVENT = "dva-checked";
export const CHANGED_EVENT = "dva-changed";

export const LOADED_EVENT = "dva-loaded";
export const INPUT_CHANGE_EVENT = "dvag-input-changed";
export const CHECKGROUP_CHANGE_EVENT = "dvag-checkgroup-changed";
export const TOPICS_GROUP_RENDERED = "dvag-topics-group-rendered";

// Google Maps events
export const MAP_LOADED_EVENT = "dvag-map-loaded";
export const MAP_ACTIVE_MARKER_CHANGED_EVENT = "dvag-active-marker-changed";

// Slider Events
export const SLIDE_ZOOMED_EVENT = "dvag-slide-zoomed";

// Overlay Events
export const OVERLAY_OPEN_EVENT = "dvag-overlay-open";
export const OVERLAY_CLOSE_EVENT = "dvag-overlay-close";

// Consent Events
export const CONSENT_CATEGORY_CHANGED_EVENT = "dva-consent-category-changed";
export const CONSENT_MANAGEMENT_READY_EVENT = "dva-consent-management-ready";
export const CONSENT_CATEGORIES_AVAILABLE = "dva-consent-category-available";

export interface ConsentCategoryChangedEvent {
  detail: {
    category: string;
    consent: boolean;
  };
}

export const COOKIE_CHANGE_EVENT = "dva-cookie-change";
export const SLIDE_CHANGED_EVENT = "dva-slide-changed";

// Form events
export const SUBMIT_SUCCESS_EVENT = "dva-submit-success";
export const SUBMIT_ERROR_EVENT = "dva-submit-error";
export const STEP_CHANGED_EVENT = "dva-step-changed";
export const CONTENT_LOADED = "dva-content-loaded";

// Analytics events
export const ANALYTICS_QUESTIONNAIRE_START_EVENT = "dva-analytics-questionnaire-start";
export const ANALYTICS_QUESTIONNAIRE_ABORT_EVENT = "dva-analytics-questionnaire-abort";
export const ANALYTICS_QUESTIONNAIRE_RESULT_EVENT = "dva-analytics-questionnaire-result";

export const TRACK_YOUTUBE_PLAY = "dvag:youtube-play";
export const TRACK_YOUTUBE_PAUSE = "dvag:youtube-pause";
export const TRACK_YOUTUBE_SEEKING = "dvag:youtube-seeking";
export const TRACK_YOUTUBE_PLAY_PROGRESS_25 = "dvag:youtube-play-progress-25";
export const TRACK_YOUTUBE_PLAY_PROGRESS_50 = "dvag:youtube-play-progress-50";
export const TRACK_YOUTUBE_PLAY_PROGRESS_75 = "dvag:youtube-play-progress-75";
export const TRACK_YOUTUBE_PLAY_PROGRESS_100 = "dvag:youtube-play-progress-100";

// VB Configurator Events
export const VB_FORM_PANEL_DELETED = "dvag-form-panel-deleted";
export const VB_FORM_PANEL_SORT_UP = "dvag-form-panel-sort-up";
export const VB_FORM_PANEL_SORT_DOWN = "dvag-form-panel-sort-down";
