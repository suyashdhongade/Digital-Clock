function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  let amPm = 'AM';
  if (hours > 12) {
    hours -= 12;
    amPm = 'PM';
  }
  if (hours === 0) {
    hours = 12;
  }
  
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  
  const timeElement = document.getElementById('time');
  timeElement.textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
