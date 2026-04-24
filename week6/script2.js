const heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "i know now"; //replaces content with new text

const subheadding = document.querySelectorAll("h2");
console.log(subheadding);
for (let i = 0; i < subheadding.length; i++) {
  console.log(subheadding[i].textContent);
} //reads all the headdings in a list

const blueItems = document.querySelectorAll(".blue-color");
console.log(blueItems);

const sub1 = document.querySelector("#sub1");
console.log(sub1);

function press() {
  const cat = document.querySelector("#cat");
  console.log(cat);
  cat.classList.toggle("round");
}

const courseName = "interactive";
const courseId = "ort1013";

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `<h3 class="blue-color"> ${courseName} this is a new header </h3>
    <button> thing </button>
    <p> ${courseId} </p>
    `;

//modify html with java

button = document.querySelector("#button");
console.log(button);
button.addEventListener("click", press);
cat.addEventListener("mouseenter", addMe);
cat.addEventListener("mouseleave", removeMe);

const body = document.querySelector("body"); //declare what object or tell what tag to target
function addMe() {
  cat.classList.add("round");
  button.textContent = "hovering";
  body.style.backgroundColor = "red"; //body is declared therefore it can be edited
}

function removeMe() {
  cat.classList.remove("round");
  button.textContent = "not hovering";
  body.style.backgroundColor = "white";
}
