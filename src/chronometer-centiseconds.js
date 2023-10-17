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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / (100 * 60));
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60; 
  }

  getCentiseconds() {
    return this.currentTime % 100;
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
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    const cs = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${mm}:${ss}.${cs}`;
  }
}
