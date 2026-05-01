const playButton = document.querySelector("#play-button");
console.log(playButton);
const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

playButton.addEventListener("click", playAudio);
function playAudio() {
  airportAudio.play();
}

const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", pop);

function pop() {
  popAudio.play();
}
// video access

// const myVideo = document.querySelector("#my-video");
// console.log(myVideo);
// myVideo.addEventListener("click", playVideo);

// function playVideo() {
//     myVideo.play();
// }

//acess the button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseButton = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideo);
function toggleVideo() {
  if (myVideo.paused == true || myVideo.ended === true) {
    myVideo.play();
    playPauseImg.src = "";
  } else {
    myVideo.pause();
    playPauseImg.src = "";
  }
}
