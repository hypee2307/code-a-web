function Stopwatch() {
  let startTime,
    stopTime,
    duration = 0,
    running;
  this.start = function () {
    if ((running = true)) {
      throw new Error();
    }
  };
}
