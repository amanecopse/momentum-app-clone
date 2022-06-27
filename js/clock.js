const clock = document.querySelector("h2#clock");

function getClock() {
  const hour = new Date().getHours().toString().padStart(2, 0);
  const minute = new Date().getMinutes().toString().padStart(2, 0);
  const second = new Date().getSeconds().toString().padStart(2, 0);

  clock.innerHTML = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
