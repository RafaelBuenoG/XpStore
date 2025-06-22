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

// Carousel Automatico

var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1 
    }
    document.getElementById('radio'+cont).checked = true
}