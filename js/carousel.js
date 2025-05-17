document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelectorAll(".carousel-container");
    const btnLeft = document.querySelectorAll(".left");
    const btnRight = document.querySelectorAll(".right");

    const scrollAmount = 300;

    for (let i = 0; i <= carousel.length; i++){
        btnLeft[i].addEventListener("click", () => {
            carousel[i].scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        btnRight[i].addEventListener("click", () => {
            carousel[i].scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }
});

