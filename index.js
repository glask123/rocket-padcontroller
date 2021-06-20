var countDownTime = 0.0;
let isPaused = true;
let isArmed = false;

let halfmin = document.getElementById("30second");
let min = document.getElementById("1minute");
let twomin = document.getElementById("2minute");

halfmin.onclick = () => {
  if (!isArmed) {
    arm.classList.add("green");
  }
  countDownTime = 30;
  isPaused = true;
  document.getElementById("timer").innerHTML = `00:30:00`;
};

min.onclick = () => {
  if (!isArmed) {
    arm.classList.add("green");
  }
  countDownTime = 60;
  isPaused = true;
  document.getElementById("timer").innerHTML = `01:00:00`;
};

twomin.onclick = () => {
  if (!isArmed) {
    arm.classList.add("green");
  }

  countDownTime = 120;
  isPaused = true;
  document.getElementById("timer").innerHTML = `02:00:00`;
};

let play = document.getElementById("play");
let arm = document.getElementById("arm");

play.onclick = () => {
  if (isArmed) {
    if (!isPaused) {
      play.classList.add("green");
      play.classList.remove("red");
      arm.classList.remove("grey");
      arm.classList.add("red");
      play.innerHTML = "GO";
      isPaused = true;
    } else {
      if (countDownTime != 0.0) {
        arm.classList.add("grey");
        arm.classList.remove("red");
        play.classList.add("red");
        play.classList.remove("green");
        play.innerHTML = "HOLD";
        isPaused = false;
      }
    }
  }
};

arm.onclick = () => {
  if (isPaused) {
    if (isArmed) {
      arm.innerHTML = "ARM";
      isArmed = false;
      arm.classList.remove("red");
      arm.classList.add("green");
      play.classList.add("grey");
      play.classList.remove("green");
    } else {
      if (countDownTime != 0.0) {
        arm.classList.add("red");
        play.classList.remove("grey");
        play.classList.add("green");
        arm.classList.remove("green");
        arm.innerHTML = "DISARM";
        isArmed = true;
      }
    }
  }
};

var x = setInterval(function () {
  if (!isPaused) {
    var minutes = Math.floor(countDownTime / 60);
    var seconds = Math.floor(countDownTime % 60);
    var miliseconds = countDownTime - Math.floor(countDownTime);
    miliseconds = miliseconds.toFixed(2).substring(2);

    document.getElementById(
      "timer"
    ).innerHTML = `${minutes}:${seconds}:${miliseconds}`;

    countDownTime = countDownTime - 0.01;

    if (countDownTime < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "LAUNCH";
    }
  }
}, 10);
