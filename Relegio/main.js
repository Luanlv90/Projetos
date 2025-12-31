let startTime, interval, running = false;

function startStop() {
  if (!running) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
    running = true;
  } else {
    clearInterval(interval);
    running = false;
  }
}

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  const seconds = Math.floor(elapsed / 1000) % 60;
  const minutes = Math.floor(elapsed / 60000) % 60;
  const hours = Math.floor(elapsed / 3600000);
  document.getElementById("display").textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").textContent = "00:00:00";
  running = false;
}
