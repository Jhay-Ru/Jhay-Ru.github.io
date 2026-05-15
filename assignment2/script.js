const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
} //playpause button
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
} //progress bar progression
// Add other functionalities here
//------mute/unmute button------      
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);  
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteButton); //get access to imag tag's id
muteUnmuteButton.addEventListener("click", toggleSound); //"toggle sound is the name of the function
function toggleSound() {
  //listen for "toggle sound" and plays function below
  // myVideo.play()

  //do a check
  if (video.muted === true) //check if it is muted or not
  {
    video.muted = false;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"; //changes image source to such
  } else {
    video.muted = true; //if else stop
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}

//fast forward button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton); 

fastForwardButton.addEventListener("mousedown", fastForward); //"fast forward is the name of the function
function fastForward() {
  video.playbackRate = 2; // Fast forward at 2x speed
  fastForwardButton.style.filter = "brightness(75%)"; // make button darker when pressed
}
fastForwardButton.addEventListener("mouseup", resetPlaybackRate); //"reset playback rate is the name of the function
function resetPlaybackRate() {
  video.playbackRate = 1; // Reset to normal speed
  fastForwardButton.style.filter = "brightness(1)" // resets button brightness when released
}