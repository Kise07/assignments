function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Pad single-digit minutes and seconds with leading zeros
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Format for 24-hours clock
  const time24 = `${hours}:${minutes}:${seconds}`;

  // Format for 12-hours clock with AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // hour "0" should be "12"
  const time12 = `${hours}:${minutes}:${seconds} ${ampm}`;

  return { time24, time12 };
}

function showTime() {
  const now = new Date();
  const { time24, time12 } = formatTime(now);

  // Log the time to the console
  console.log(`24-hours format: ${time24}`);
  console.log(`12-hours format: ${time12}`);

  // Update the time every seconds
  setTimeout(showTime, 1000);
}

// Start the clock
showTime();
