// Autor: Liam Benedetti
let i = 0;
setInterval(function () {
  if (i%2) {
    document.getElementById("it").href = "/resource/images/logo old3.2.png";
    i++;
  } else {
    document.getElementById("it").href = "/resource/images/logo old4.2.png";
    i++;
  }
}, 1000);
