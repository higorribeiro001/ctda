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

            // Menu mobile - - -

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();







