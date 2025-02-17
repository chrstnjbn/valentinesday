document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.getElementById("heart-container");
    const numberOfHearts = 50;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.left = `${Math.random() * 100}%`;
        heartContainer.appendChild(heart);
    }

    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const valentineGif = document.getElementById("valentine-gif");
    const finalMessage = document.getElementById("final-message");
    const sadMessage = document.getElementById("sad-message");

    let noCount = 0;

    const sadMessages = [
        "Are you sure? 💔",
        "I understand... but it still hurts. 😞",
        "Oh... I see. Guess I hoped for too much. 😢",
    ];

    const gifList = [
        "gif 1.gif",
        "gif 2.gif",
        "gif 3.gif",
        "gif 4.gif",
        "gif 5.gif",
        "gif 6.gif",
        "gif 7.gif",
        "gif 8.gif",
        "gif 9.gif",
        "gif 10.gif"
    ];

    noButton.addEventListener("click", () => {
        noCount++;
        const index = Math.floor(Math.random() * gifList.length);
        valentineGif.src = gifList[index];

        if (noCount <= sadMessages.length) {
            const randomIndex = Math.floor(Math.random() * sadMessages.length);
            sadMessage.innerText = sadMessages[randomIndex];
            sadMessage.style.display = "block";
        }

        if (noCount >= 10) {
            noButton.disabled = true;
            alert("You've reached the maximum number of 'No' clicks.");
        }
    });

    yesButton.addEventListener("click", () => {
        yesButton.style.display = "none";
        noButton.style.display = "none";
        finalMessage.style.display = "block";

        setTimeout(() => {
            valentineGif.src = "gifsss/enjoying.gif";
            valentineGif.style.display = "block";
        }, 500);

        document.querySelectorAll(".heart").forEach(heart => {
            heart.style.animation = "pop 1s ease-out forwards";
        });
    });
});
