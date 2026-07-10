const books = document.querySelectorAll(".dream-book");

const pageSound = document.getElementById("pageSound");

books.forEach(book=>{

    book.addEventListener("click",()=>{

        book.classList.toggle("open");

        pageSound.currentTime = 0;
        pageSound.play();

    });

});