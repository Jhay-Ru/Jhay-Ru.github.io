//this is all to control the play/pause button
const myVideo = document.querySelector("#my-video"); //attatch value to object to use for later
console.log(myVideo); //concole for debug what value is attatched to what
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseButton); //get access to imag tag's id
playPauseButton.addEventListener("click", toggleVideo); //"toggle video is the name of the function
function toggleVideo() {
  //listen for "toggle video" and plays function below
  // myVideo.play()

  //do a check
  if (
    myVideo.paused === true ||
    myVideo.ended === true
  ) //check if it is playing or finished
  {
    myVideo.play(); //if it is paused or ended play
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png"; //changes image source to such
  } else {
    myVideo.pause(); //if else stop
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//mute button thing
//-----------------------------------------------
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteButton); //get access to imag tag's id
muteUnmuteButton.addEventListener("click", toggleSound); //"toggle sound is the name of the function
function toggleSound() {
  //listen for "toggle sound" and plays function below
  // myVideo.play()

  //do a check
  if (myVideo.muted === true) //check if it is muted or not
  {
    myVideo.muted = false;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"; //changes image source to such
  } else {
    myVideo.muted = true; //if else stop
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}
//------------------------------------------------
//step
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);
function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2); //"gotoStep2 is the name of the function
function gotoStep2() {
  myVideo.currentTime = 52;
}

//------------------------------------------------
//heart
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

let likesCount = 0; //keep tracks of the count as a value
const likes = document.querySelector("#likes");
console.log(likes);

heartButton.addEventListener("click", showLikes);
function showLikes() {
  likesCount++; //++ previous plus one for each time function runs
  likes.textContent = likesCount;
}

//---------------------------
//fullscreen
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullScreen);
myVideo.addEventListener("dbclick", goFullScreen); //multiple things can run the same function

function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//-------------------------------
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  //console.log (myVideo.currentTime);
  let progress = Math.floor(myVideo.currentTime / myVideo.duration) * 100; //turns the time into a percentage
  console.log(progress);
  progressBar.style.width = progress + "%";
}

//-------------------------------------------------------
const videoList = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "zenscape.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

const musicvideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvideoButton);
musicvideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

function chooseVideo(id) {
  console.log(videoList[id].src);
  myVideo.src = videoList[id].src; //switch the video
  myVideo.load(); //load in the video
  myVideo;
}
