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

const buttonB = document.querySelector(".Bsound");
const soundB = document.querySelector("#b");

if (buttonB && soundB) {
  buttonB.addEventListener("click", () => {
    soundB.currentTime = 0;
    soundB.play();
  });
}

const buttonC = document.querySelector(".Csound");
const soundC = document.querySelector("#c");

if (buttonC && soundC) {
  buttonC.addEventListener("click", () => {
    soundC.currentTime = 0;
    soundC.play();
  });
}

const buttonD = document.querySelector(".Dsound");
const soundD = document.querySelector("#d");

if (buttonD && soundD) {
  buttonD.addEventListener("click", () => {
    soundD.currentTime = 0;
    soundD.play();
  });
}

const buttonF = document.querySelector(".Fsound");
const soundF = document.querySelector("#f");

if (buttonF && soundF) {
  buttonF.addEventListener("click", () => {
    soundF.currentTime = 0;
    soundF.play();
  });
}

const buttonG = document.querySelector(".Gsound");
const soundG = document.querySelector("#g");

if (buttonG && soundG) {
  buttonG.addEventListener("click", () => {
    soundG.currentTime = 0;
    soundG.play();
  });
}
