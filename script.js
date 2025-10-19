
// Function to display current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update once at load
updateTime();

// Optional: update every second for live ticking (not required, but nice)
setInterval(updateTime, 1000);
