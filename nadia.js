const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});

const words = [
    "Information Systems Student",
    "UI Designer",
    "Web Learner"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function typingEffect() {
    const typing = document.getElementById("typing");
    if (!deleting) {
        typing.textContent =
        words[wordIndex].slice(0, ++charIndex);
        if (charIndex === words[wordIndex].length) {
            deleting = true;
            return setTimeout(
                typingEffect,
                1500
            );
        }
    } else {
        typing.textContent =
        words[wordIndex].slice(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            wordIndex =
            (wordIndex + 1) % words.length;
        }
    }
    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}
typingEffect();

const hiddenElements =
document.querySelectorAll(".hidden");
function showElements() {
    hiddenElements.forEach(element => {
        if (
            element.getBoundingClientRect().top <
            window.innerHeight - 100
        ) {
            element.classList.add("show");
        }
    });

}
window.addEventListener(
    "scroll",
    showElements
);
showElements();