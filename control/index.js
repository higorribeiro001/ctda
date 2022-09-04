let time = 3000, // tempo de 2 segundos
    currentImageIndex = 0, 
    images = document.querySelectorAll("#imgctda") // selecionando todo o slider com as imagens 
    max = images.length; // maximo do numero de imagens

function nextImage() {
    images[currentImageIndex].classList.remove("selected") // remove a class anterior para não haver repetições

    currentImageIndex++ // para trocar o indice da imagem

    console.log(currentImageIndex)

    if(currentImageIndex >= max) { // se o indice da imagem passar ou for igual ao maximo
        currentImageIndex = 0 // ele sera resetado para 0
    }

    images[currentImageIndex].classList.add("selected") // exibe a imagem selecionada de acordo com o indice
}

function start() { // funcao que contralara as imagens
    setInterval(() => { // no intervalor de time as imagens serao trocadas
        nextImage()
    }, time)
}

window.addEventListener("load", start) // a cada carregamento da pagina ela executara a funcao start

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});








