const carousel = document.getElementById('carouselProdutos');
const btnLeft = document.getElementById('arrowLeft');
const btnRight = document.getElementById('arrowRight');

// Defina quantos pixels você quer rolar por clique (pode ajustar)
const scrollAmount = 300;

btnLeft.addEventListener('click', () => {
    carousel.scrollLeft -= scrollAmount;
});

btnRight.addEventListener('click', () => {
    carousel.scrollLeft += scrollAmount;
});