const soundDrag = document.querySelector(".sounds");

// Select the button container
const buttonA = document.querySelector(".Asound");

// selects the audio using #
const soundA = document.querySelector("#a");

// 3. Add the event listener
if (buttonA && soundA) {
  buttonA.addEventListener("click", () => {
    soundA.currentTime = 0;
    soundA.play();
  });
}

const buttonE = document.querySelector(".Esound");
const soundE = document.querySelector("#e");

if (buttonE && soundE) {
  buttonE.addEventListener("click", () => {
    soundE.currentTime = 0;
    soundE.play();
  });
}

const buttonI = document.querySelector(".Isound");
const soundI = document.querySelector("#i");

if (buttonI && soundI) {
  buttonI.addEventListener("click", () => {
    soundI.currentTime = 0;
    soundI.play();
  });
}

const buttonO = document.querySelector(".Osound");
const soundO = document.querySelector("#o");

if (buttonO && soundO) {
  buttonO.addEventListener("click", () => {
    soundO.currentTime = 0;
    soundO.play();
  });
}

const buttonU = document.querySelector(".Usound");
const soundU = document.querySelector("#u");

if (buttonU && soundU) {
  buttonU.addEventListener("click", () => {
    soundU.currentTime = 0;
    soundU.play();
  });
}
