const time = document.getElementById("time-txt");
const date = document.getElementById("date-txt");
const target = document.querySelector(".typing-container");

// FUNCTION TO DISPLAY TIME AND DATE
const presentTime = () => {
  const now = new Date();
  const hour = now.getHours() % 12 || 12; // Converts 0 to 12 and 13-23 to 1-11
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensures two digits
  const timeDesignation = hour < 12 ? "AM" : "PM";
  time.innerText = `${hour}:${minutes} ${timeDesignation}`;
  date.innerText = `${now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
};

presentTime();

setInterval(presentTime, 1000 * 60);

// FUNCTION TO DISPLAY BIO
const sentences = [
  "I'm a Front End Developer,",
  "who is passionate about creating new projects",
  "and learning new technology.",
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 50; // Typing speed (milliseconds per letter)
const eraseSpeed = 50; // Erasing speed
const delayBetweenSentences = 1000; // Delay before erasing

function typeEffect() {
  const currentSentence = sentences[sentenceIndex];
  if (!isDeleting) {
    target.textContent = currentSentence.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentSentence.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenSentences); // Wait before erasing
      return;
    }
  } else {
    target.textContent = currentSentence.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence
    }
  }

  setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

// Start typing animation after a delay
setTimeout(() => {
  typeEffect();
}, 4500); // delay in milliseconds

// // FUNCTION TO DISPLAY PROJECTS DESCRIPTION AND CLOSES IT
const closeIcons = document.querySelectorAll(".close-icon");
const projectItems = document.querySelectorAll(".project-item");

projectItems.forEach((item) => {
  const description = item.querySelector(".project-descriptions");

  item.addEventListener("click", () => {
    description.style.display = "block";
    document.body.classList.add("disable-interaction");
  });
});

closeIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.stopPropagation();
    const parentItem = icon.closest(".project-item");
    const description = parentItem.querySelector(".project-descriptions");

    description.style.display = "none";
    document.body.classList.remove("disable-interaction");
  });
});
