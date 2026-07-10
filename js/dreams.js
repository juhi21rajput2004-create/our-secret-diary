const cards=document.querySelectorAll(".dream-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flip");

});

});