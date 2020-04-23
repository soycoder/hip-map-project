var timeleft = 5;
function getTimer(name) {
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById(name).classList.remove("hidden");
      document.getElementById("timer").classList.add("hidden");
    }
  }, 1000);
}

function startinfo() {
  var digit = localStorage.stuID.charAt(8);
  switch (parseInt(digit) % 3) {
    case 1:
      document.getElementById("explanation").classList.add("hidden");
      getTimer("info1");

      break;
    case 2:
      document.getElementById("explanation").classList.add("hidden");
      getTimer("info2");

      break;
    case 3:
      document.getElementById("explanation").classList.add("hidden");
      getTimer("info3");

      break;
    default:
      break;
  }
}
function goExperimentOne() {
    location.replace("experiment_1.html");
}

