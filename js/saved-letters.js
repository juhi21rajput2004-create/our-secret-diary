const container = document.getElementById("lettersContainer");

let letters = JSON.parse(localStorage.getItem("secretLetters")) || [];

if (letters.length === 0) {

    container.innerHTML = `

    <div class="empty">

        ❤️ No Secret Letters Yet ❤️

    </div>

    `;

}

else {

    letters.reverse().forEach(letter => {
container.innerHTML += `

<div class="letter-card">

    <div class="paper-pin"></div>

    <div class="paper-top"></div>

    <div class="paper-content">

        <h2 class="letter-title">
            ${letter.title}
        </h2>

        <div class="line"></div>

        <p class="letter-message">
            ${letter.message}
        </p>

        <div class="line"></div>

        <div class="letter-footer">

            <span>❤️ Written With Love</span>

            <span>${letter.date}</span>

        </div>

    </div>

</div>

`;

    });

}