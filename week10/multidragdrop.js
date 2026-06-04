const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

const deck = document.querySelector(".deck");
console.log(deck);

let cardComposition = ""; //blank
for (let i = 0; i < myCards.length; i++) {
  let content = `
    <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}" />
              </div>
            </div>
          </div>
          `; //back tick to add html elements
  cardComposition = cardComposition + content;
}
console.log(cardComposition);

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = card[i];
  });
}
const dropbox = document.querySelector(".dropbox");

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
}); //shows something can be dragged by changing cursor

dropbox.addEventListener("drop", function () {
  let clone = draggedCard; //the clone wiould be called dragged card but removes the original
  dropbox.appendChild(clone); //makes a new copy at the drop box
  draggedCard = null; //removes the dragged value
});

card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
let draggedCard = null;
card.addEventListener("dragstart", function () {
  //toggle drag
  draggedCard = card;
  console.log(draggedCard);
});
