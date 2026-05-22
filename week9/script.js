const myButton = document.querySelector("#my-button");
console.log("mybutton");

const duck = document.querySelector("#duck");
console.log("duck");

let clicked = true;

myButton.addEventListener("click", doJump);
function doJump() {
  if (clicked) {
    clicked = false;
    duck.style.translate = "0px -40px";
  } else {
    clicked = true;
    duck.style.translate = "0px 0px";
  }
  console.log(clicked);
}
