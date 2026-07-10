// ===============================
// Our Secret Diary Password Script
// ===============================

// Change this password to your own
const diaryPassword = "forever";

// Function to check password
function checkPassword() {

    const input = document.getElementById("password");

    const password = input.value.trim();

    if (password === diaryPassword) {

        // Save login session
        localStorage.setItem("diaryUnlocked", "true");

        // Button animation
        const btn = document.getElementById("unlockBtn");

        btn.innerHTML = "❤️ Unlocking...";

        btn.disabled = true;

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1200);

    }

    else {

        input.style.border = "2px solid #ff4d6d";

        input.classList.add("shake");

        alert("❌ Wrong Password!\n\nTry Again ❤️");

        setTimeout(() => {

            input.classList.remove("shake");

            input.style.border = "";

            input.value = "";

        }, 600);

    }

}

// Enter Key Support
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("password");

    if (input) {

        input.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                checkPassword();

            }

        });

    }

});

// Logout Function
function logout() {

    localStorage.removeItem("diaryUnlocked");

    window.location.href = "index.html";

}

// Protect Pages
if (
    window.location.pathname.includes("dashboard.html") &&
    localStorage.getItem("diaryUnlocked") !== "true"
) {

    window.location.href = "index.html";

}