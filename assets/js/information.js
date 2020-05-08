const timeleft = 1;

function getTimer(name) {
  let ntimeleft = timeleft;

  var downloadTimer = setInterval(function () {
    ntimeleft--;
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("countdowntimer").textContent = ntimeleft;
    if (ntimeleft <= 0) {
      clearInterval(downloadTimer);
      if (name === "info1") {
        document.getElementById("img-" + name).src =
          "https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/info/hip-map-animate-1080p.gif";
        localStorage.infoStart = Date();
        countDownInfo1();
      }
      document.getElementById(name).classList.remove("hidden");
      document.getElementById("timer").classList.add("hidden");
    }
  }, 1000);
}

function countDownInfo1() {
  
  let ntimeleft2 = 45;

  var downloadTimer3 = setInterval(function () {
    ntimeleft2--;

    if (ntimeleft2 <= 0) {
      clearInterval(downloadTimer3);
      document.getElementById("img-info1").src =
        "https://raw.githubusercontent.com/soycoder/hip-map-project/master/assets/img/full_map.png ";
      countDownGotoNext("CountDown-animate");
    }
  }, 1000);
}

function startinfo() {
  var digit = localStorage.stuID.charAt(8);

  switch (parseInt(digit) % 3) {
    case 0:
      document.getElementById("explanation").classList.add("hidden");
      localStorage.group = "animate";
      getTimer("info1");
      break;
    case 1:
      document.getElementById("explanation").classList.add("hidden");
      localStorage.group = "landmark";
      getTimer("info2");
      break;
    case 2:
      document.getElementById("explanation").classList.add("hidden");
      localStorage.group = "direction";
      getTimer("info3");
      break;
    default:
      break;
  }
  document.getElementById("mainInfo").classList.remove("container");
  document.getElementById("mainInfo").classList.remove("container-fluid");
}
function goExperimentOne() {
  location.replace("experiment_1.html");
}
