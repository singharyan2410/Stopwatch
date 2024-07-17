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
    stopButton.disabled = true;
    resetButton.disabled = true;
  if (!intervalId) {
    // Start the timer for the first time
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    // startButton.style.display = "none"; // Hide start button on start
    startButton.innerText = "Resume";
    stopButton.style.display = "inline-block"; // Show stop button
    resetButton.style.display = "inline-block"; // Show reset button
  } else {
    // Resume the timer if already started (no change to button text)
    intervalId = setInterval(updateTime, 10);
  }
  stopButton.disabled = false;
  resetButton.disabled = false;
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
  startButton.innerText = "Start";
  // startButton.style.display = "inline-block"; // Show start button on reset
  stopButton.style.display = "none"; // Hide stop button
  resetButton.style.display = "none"; // Hide reset button
  stopButton.disabled = true; // Disable stop button after reset
  resetButton.disabled = true; // Disable reset button after reset
});
