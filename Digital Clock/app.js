function clock() {
  const realDate = new Date();
  let h = realDate.getHours();
  let m = realDate.getMinutes();
  let s = realDate.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  document.getElementById('hour').innerHTML = h;
  document.getElementById('minute').innerHTML = ": " + m;
  document.getElementById('second').innerHTML = ": " + s;
}

setInterval(clock, 100);
