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

const buttonH = document.querySelector(".Hsound");
const soundH = document.querySelector("#h");

if (buttonH && soundH) {
  buttonH.addEventListener("click", () => {
    soundH.currentTime = 0;
    soundH.play();
  });
}

const buttonJ = document.querySelector(".Jsound");
const soundJ = document.querySelector("#j");

if (buttonJ && soundJ) {
  buttonJ.addEventListener("click", () => {
    soundJ.currentTime = 0;
    soundJ.play();
  });
}

const buttonK = document.querySelector(".Ksound");
const soundK = document.querySelector("#k");

if (buttonK && soundK) {
  buttonK.addEventListener("click", () => {
    soundK.currentTime = 0;
    soundK.play();
  });
}

const buttonL = document.querySelector(".Lsound");
const soundL = document.querySelector("#l");

if (buttonL && soundL) {
  buttonL.addEventListener("click", () => {
    soundL.currentTime = 0;
    soundL.play();
  });

  const buttonM = document.querySelector(".Msound");
const soundM = document.querySelector("#m");

if (buttonM && soundM) {
  buttonM.addEventListener("click", () => {
    soundM.currentTime = 0;
    soundM.play();
  });
}

const buttonN = document.querySelector(".Nsound");
const soundN = document.querySelector("#n");

if (buttonN && soundN) {
  buttonN.addEventListener("click", () => {
    soundN.currentTime = 0;
    soundN.play();
  });
}

const buttonP = document.querySelector(".Psound");
const soundP = document.querySelector("#p");

if (buttonP && soundP) {
  buttonP.addEventListener("click", () => {
    soundP.currentTime = 0;
    soundP.play();
  });
}

const buttonQ = document.querySelector(".Qsound");
const soundQ = document.querySelector("#q");

if (buttonQ && soundQ) {
  buttonQ.addEventListener("click", () => {
    soundQ.currentTime = 0;
    soundQ.play();
  });
}
const buttonR = document.querySelector(".Rsound");
const soundR = document.querySelector("#r");

if (buttonR && soundR) {
  buttonR.addEventListener("click", () => {
    soundR.currentTime = 0;
    soundR.play();
  });
}
const buttonʘ = document.querySelector(".ʘsound");
const soundʘ = document.querySelector("#ʘ");

if (buttonʘ && soundʘ) {
  buttonʘ.addEventListener("click", () => {
    soundʘ.currentTime = 0;
    soundʘ.play();
  });
}
const buttonǀ = document.querySelector(".ǀsound");
const soundǀ = document.querySelector("#ǀ");

if (buttonǀ && soundǀ) {
  buttonǀ.addEventListener("click", () => {
    soundǀ.currentTime = 0;
    soundǀ.play();
  });
}


}
// drag and drop -----------------------------------------------
// Select ALL sound buttons and the single topInput dropbox
const sounds = document.querySelectorAll(".sounds"); // querySelectorAll actually selects all objects with that class 
// const input = document.querySelector(".topInput"); was already declared whoops

let draggedSound = null;
sounds.forEach((sound) => {
  sound.addEventListener("dragstart", function () {
    //toggle drag
    draggedSound = sound;
    console.log(draggedSound);
  });
});
const input = document.querySelector(".topInput");

input.addEventListener("dragover", function (e) {
  e.preventDefault();
}); //shows something can be dragged by changing cursor

input.addEventListener("drop", function (e) {
  e.preventDefault(); //(keep reading this is good practive from different sources, prevent browsers to do their own thing)
  if (draggedSound) {
        // Create a deep clone of the dragged sound button
        let clone = draggedSound.cloneNode(true);
        let letter = clone.textContent.trim().toLowerCase();
        clone.addEventListener("click", () => {
            let soundElement = document.querySelector("#" + letter); //bug fig where clones wouldn't be clickable
            if (soundElement) {
                soundElement.currentTime = 0;
                soundElement.play();
            }
        });
        input.appendChild(clone); // Adds the new copy into the drop box
    }
});

// THE BIN ----------------------------------------------- WOAHHH AAAAA 
const bin = document.querySelector(".bin");
if (bin) {
    bin.addEventListener("click", () => {
        // This clears out all the letters inside the  box
        input.innerHTML = "";  //empty!
    });
}