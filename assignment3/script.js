const soundDrag = document.querySelector(".sounds");


// Select the button container
const buttonA = document.querySelector(".Asound");

// Fix the selector: Use '#' for IDs, or grab the <audio> tag inside the button
const soundA = document.querySelector("#a"); 

// 3. Add the event listener safely
if (buttonA && soundA) {
    buttonA.addEventListener("click", () => {
        // Rewind to the start in case it's clicked multiple times rapidly
        soundA.currentTime = 0; 
        soundA.play();
    });
}