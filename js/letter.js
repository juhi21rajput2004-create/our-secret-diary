const buttons = document.querySelectorAll(".letter-card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        window.location.href = "letter-view.html?letter=" + id;

    });

});



