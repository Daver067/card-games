const timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,

  timeString: "0",

  timerStarted: false,

  container: buildClockContainer(),
  clock: buildTimeSymbol(),
  timeText: buildTimeText(),

  resetTimer(){
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.updateTimer();
  },

  updateTimer(){
    this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
    this.timeText.textContent = this.timeString;
  },

  startTimer(){
    this.timerStarted = true;
  },

  stopTimer(){
    this.timerStarted = false;
  },
};

// appends it!
buildClock();
setInterval(() => {
  if(timer.timerStarted === false) return;
  timer.seconds += 1;

  if(timer.seconds >= 60){
    timer.seconds = 0;
    timer.minutes += 1;
  };

  if(timer.minutes >= 60){
    timer.minutes = 0;
    timer.hours += 1;
  };

  timer.updateTimer();
}, 1000);

// HELPER FUNCTIONS
function buildClockContainer() {
  const element = document.createElement("div");
  element.classList.add("move-container");
  return element;
}

function buildTimeSymbol() {
  const element = document.createElement("p");
  element.textContent = "🕘";
  return element;
}

function buildTimeText() {
  const element = document.createElement("p");
  element.textContent = "0";
  return element;
}

function buildClock() {
  timer.container.appendChild(timer.clock);
  timer.container.appendChild(timer.timeText);
}

export default timer;
