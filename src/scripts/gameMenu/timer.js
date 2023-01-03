const timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,

  timeString: "00:00",

  timerStarted: false,

  container: buildClockContainer(),
  clock: buildTimeSymbol(),
  timeText: buildTimeText(),

  resetTimer(){
    this.seconds = 0;
    this.minutes = 0;
    this.updateTimer();
  },

  updateTimer(){
    const stringMinutes = String(this.minutes).padStart(2,0);
    const stringSeconds = String(this.seconds).padStart(2,0);
    this.timeString = `${stringMinutes}:${stringSeconds}`;
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
  timer.seconds;

  if(timer.seconds >= 60){
    timer.seconds = 0;
    timer.minutes += 1;
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
  element.textContent = "00:00";
  return element;
}

function buildClock() {
  timer.container.appendChild(timer.clock);
  timer.container.appendChild(timer.timeText);
}

export default timer;