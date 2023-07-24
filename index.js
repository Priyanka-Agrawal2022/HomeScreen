function setTime() {
  let time = document.getElementById("time");
  let date = new Date();
  let currentTime =
    date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0");

  time.innerHTML = currentTime;

  return time;
}

setInterval(setTime, 1000);
