let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const music = document.getElementById("music");

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function restartSlide() {
    currentSlide = 0;
    showSlide(currentSlide);
}

function toggleMusic() {

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
