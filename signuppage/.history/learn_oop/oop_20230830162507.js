function Stopwatch() {
  let startTime,
    stopTime,
    duration = 0,
    running;
  this.start = function () {
    if ((running = true)) {
      throw new Error("Stopwatch already run!");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if ((running = false)) {
      throw new Error("Stopwatch already stop!");
    }
    running = false;
    stopTime = new Date();
    const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty([this, "duration"], function (require, factory) {
    "use strict";
  });
}
