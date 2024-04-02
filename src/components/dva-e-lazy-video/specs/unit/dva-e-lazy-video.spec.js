import unitHelper from "Karma/helper";
import { hasClass, addClass } from "@kluntje/js-utils/lib/dom-helpers";
import { LOADED, INITIALIZED } from "Constants/cssClasses";

describe("DvaLazyVideo tests:", function() {
  beforeEach(function() {
    this.el = unitHelper.initTest(fixture, "dva-e-lazy-video");
    this.setStateSpy = spyOn(this.el, "setState");
  });

  afterEach(function() {
    fixture.cleanup();
  });

  describe("afterComponentRender method:", function() {
    it("should add Component to Viewport-Observer", function() {
      spyOn(this.el.viewportObserver, "observe");
      this.el.afterComponentRender();
      expect(this.el.viewportObserver.observe).toHaveBeenCalledWith(this.el);
    });
  });

  describe("handleIntersectionChange method:", function() {
    beforeEach(function() {
      spyOn(this.el.viewportObserver, "unobserve");
      spyOn(this.el, "loadVideo");
      spyOnProperty(this.el, "activeVideo", "get").and.returnValue(1);
      this.el.handleIntersectionChange();
    });

    it("should unsubscribe from viewportObserver", function() {
      expect(this.el.viewportObserver.unobserve).toHaveBeenCalledWith(this.el);
    });

    it("should set activeRendition-state", function() {
      expect(this.setStateSpy).toHaveBeenCalledWith({
        activeRendition: 1,
      });
    });
  });

  describe("handleMQChange method:", function() {
    it("should call set activeVideo-state", function() {
      spyOnProperty(this.el, "activeVideo", "get").and.returnValue(0);
      this.el.handleMQChange();
      expect(this.setStateSpy).toHaveBeenCalledWith({
        activeRendition: 0,
      });
    });
  });

  describe("handleVideoLoad method:", function() {
    beforeEach(function() {
      this.eventMock = {
        target: this.el.ui.video[0],
      };
    });

    it("should add LOADED-Class to Component", function() {
      this.el.handleVideoLoad(this.eventMock);
      expect(hasClass(this.el, LOADED)).toBe(true);
    });

    it("should add INITIALIZED-Class to Component", function() {
      this.el.handleVideoLoad(this.eventMock);
      expect(hasClass(this.el, INITIALIZED)).toBe(true);
    });
  });

  describe("loadVideo method:", function() {
    beforeEach(function() {
      spyOn(this.el, "unloadVideo");
      this.el._state.activeRendition = 0;
      spyOn(this.el.ui.video[0], "load");
    });

    it("should call unloadVideo method", function() {
      this.el.loadVideo();
      expect(this.el.unloadVideo).toHaveBeenCalled();
    });

    it("should call load method on active Video", function() {
      this.el.loadVideo();
      expect(this.el.ui.video[0].load).toHaveBeenCalled();
    });
  });

  describe("unloadVideo method:", function() {
    beforeEach(function() {
      addClass(this.el.ui.video[0], LOADED);
      addClass(this.el, LOADED);
      addClass(this.el, INITIALIZED);
      this.el.unloadVideo();
    });

    it("should remove LOADED-class on video", function() {
      expect(hasClass(this.el.ui.video[0], LOADED)).toBe(false);
    });

    it("should remove LOADED-class on component", function() {
      expect(hasClass(this.el, LOADED)).toBe(false);
    });

    it("should remove INITIALIZED-class on component", function() {
      expect(hasClass(this.el, INITIALIZED)).toBe(false);
    });
  });
});
