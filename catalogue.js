window.addEventListener("scroll", ()=>{
      // catalogue

      let animacionhardwareCatalogue = document.getElementById("animacionCatalogueHardware");
      let animacionCatalogueSoftware = document.getElementById("animacionCatalogueSoftware");
      let animacionCatalogueRepair = document.getElementById("animacionCatalogueRepair");

      let catalogue = animacionhardwareCatalogue.getBoundingClientRect().top;
      
      let tamañodepantalla = window.innerHeight;

      if(catalogue < tamañodepantalla){
        animacionhardwareCatalogue.style.animation = "moverDeAbajoHaciaArriba 1s ease-out"
        animacionCatalogueSoftware.style.animation = "moverDeIzquierdaADerecha 1s ease-out"
        animacionCatalogueRepair.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
    }
})