function play() {
  document.getElementById("z").innerHTML = "Actually, I am";
  document.getElementById("game").innerHTML = "<button type=\"button\" onclick=\"pointlessButton()\">Pointless Button</button>\n<p>You have clicked <span id=\"clicksDisplay\">0</span> times. <span id=\"clicksXtra\"</span></p>"

}

var clicks = 0;
function pointlessButton() {
  clicks++;
  document.getElementById("clicksDisplay").innerHTML = clicks;
  z = document.getElementById("clicksXtra")
  switch (clicks) {
    case 1:
      z.innerHTML = "Trust me. This button is useless. It doesnt do shit";
      break;
    case 25:
      z.innerHTML = "Don't you have work to do?";
      break;
    case 69:
      z.innerHTML = "Nice";
      break;
    case 420:
      z.innerHTML = "Niiiiccce";
      break;
    case 666:
      z.innerHTML = "Hell yeah!";
      break;
    case 1000:
      z.innerHTML = "GO. BACK. TO. WORK"
      break;
    case 2000:
      z.innerHTML = "Kalei and Steph waz here"
    case 10000:
      z.innerHTML = "I give up. SMH"
      break;
    case 20000:
      z.innerHTML = "Screw you 😡"
      break;
    case 1000000:
      z.innerHTML = "Please tell me you used an autoclicker?"
      break;
    case 100000000:
      z.innerHTML = "Absolute no life😡😡😡"
      break;
  }
}