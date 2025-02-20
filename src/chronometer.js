class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback)
        printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    const mins = Math.floor(this.currentTime / 60);
    return mins;
  }

  getSeconds() {
    const secs = this.currentTime % 60;
    return secs;
  }

  computeTwoDigitNumber(value) {
    if (value < 10)
      return `0${value}`;
    else if (value >= 10)
      return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
