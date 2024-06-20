// Autor: Liam Benedetti
let i = 0;
setInterval(function () {
  if (i%2) {
    document.getElementById("it").href = "resource/images/icons/logo old3.2.png";
  } else {
    document.getElementById("it").href = "resource/images/icons/logo old4.2.png";
  }
  i = (i%2) + 1;
}, 1000);
