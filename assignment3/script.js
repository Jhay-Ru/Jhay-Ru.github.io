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
// drag and drop -----------------------------------------------
// 1. Select ALL sound buttons and the single topInput dropbox
const sounds = document.querySelectorAll(".sounds");
const dropbox = document.querySelector(".topInput");

// 2. Attach drag events to ALL letters using a loop
sounds.forEach(sound => {
    sound.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        // Save whether this item is coming from the source sidebars or is already a clone
        if (e.target.parentElement.classList.contains("topInput")) {
            e.dataTransfer.setData("action", "move");
        } else {
            e.dataTransfer.setData("action", "clone");
        }
        e.target.classList.add("dragging");
    });

    sound.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
    });
});

// 3. Set up the dropzone target (.topInput)
dropbox.addEventListener("dragover", (e) => {
    e.preventDefault(); // Required to allow dropping!
    
    // Smooth Rearranging Magic: Find out where the mouse is pointing relative to existing items
    const draggingItem = document.querySelector(".dragging");
    const siblings = [...dropbox.querySelectorAll(".sounds:not(.dragging)")];
    
    // Find the next element the mouse is hovering right before
    const nextSibling = siblings.find(sibling => {
        const box = sibling.getBoundingClientRect();
        return e.clientX <= box.left + box.width / 2; // Check horizontal position
    });
    
    // Visually position the element or clone preview
    if (nextSibling) {
        dropbox.insertBefore(draggingItem, nextSibling);
    } else {
        dropbox.appendChild(draggingItem);
    }
});

dropbox.addEventListener("drop", (e) => {
    e.preventDefault();
    
    const id = e.dataTransfer.getData("text/plain");
    const action = e.dataTransfer.getData("action");
    const draggedElement = document.getElementById(id);
    
    if (!draggedElement) return;

    if (action === "clone") {
        // Create an exact clone copy of the letter box
        const clone = draggedElement.cloneNode(true);
        
        // Give the clone a brand new completely unique ID so it doesn't break future drags
        clone.id = `clone-${Date.now()}`;
        clone.classList.remove("dragging");

        // Make sure the new clone copy is also fully interactive and draggable!
        clone.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", event.target.id);
            event.dataTransfer.setData("action", "move"); // Clones only "move", they don't multiply
            event.target.classList.add("dragging");
        });
        
        clone.addEventListener("dragend", (event) => {
            event.target.classList.remove("dragging");
        });

        // Optional: Re-attach your audio play feature if they click the clone inside the top box
        clone.addEventListener("click", () => {
            const sound = clone.querySelector("audio");
            if (sound) { sound.currentTime = 0; sound.play(); }
        });

        // Insert the fresh copy exactly where your cursor was hovering during dragover
        const placeholder = dropbox.querySelector(".dragging");
        if (placeholder) {
            dropbox.replaceChild(clone, placeholder);
        } else {
            dropbox.appendChild(clone);
        }
    }
    // Note: If action === "move", the browser automatically repositions it via the insertBefore logic above!
});