document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carouselContainer");
    const btnLeft = document.getElementById("arrowLeft");
    const btnRight = document.getElementById("arrowRight");

    const scrollAmount = 300;

    btnLeft.addEventListener("click", () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    btnRight.addEventListener("click", () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

