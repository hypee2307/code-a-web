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
    const seconds = 
  };
}
