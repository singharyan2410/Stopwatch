let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateTime() {
  elapsedTime = Date.now() - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  timeDisplay.innerText = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startButton.addEventListener("click", () => {
  if (!intervalId) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    stopButton.disabled = false;
    resetButton.disabled = true;
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.innerText = "00:00:00";
  stopButton.disabled = true;
  resetButton.disabled = true;
});
