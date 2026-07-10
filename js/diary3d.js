const openBtn = document.getElementById("openDiary");


if(openBtn){

openBtn.addEventListener("click",()=>{


document.querySelector(".left-sheet")
.classList.add("turn");


setTimeout(()=>{


window.location.href="login.html";


},1500);



});


}