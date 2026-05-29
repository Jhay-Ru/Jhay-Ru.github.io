const card = document.querySelector(".card");
console.log(card);
card.addEventListener("mouseenter", function (){
    card.classList.add("flip"); //adds the class when function runs
})

card.addEventListener("mouseleave", function(){
    card.classList.remove("flip");
})