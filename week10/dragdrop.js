const card = document.querySelector(".card");
console.log(card);

card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
let draggedCard = null;
card.addEventListener("dragstart", function () {
  //toggle drag
  draggedCard = card;
  console.log(draggedCard);
});
const dropbox = document.querySelector(".dropbox");

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
}); //shows something can be dragged by changing cursor

dropbox.addEventListener("drop", function () {
  let clone = draggedCard; //the clone wiould be called dragged card but removes the original
  dropbox.appendChild(clone); //makes a new copy at the drop box
  draggedCard = null; //removes the dragged value
});
