window.addEventListener("scroll", ()=>{
    let animacion1 = document.getElementById("animacion1");
    let animacion2 = document.getElementById("animacion2");
    let animacion3 = document.getElementById("animacion3");

    let animacion4 = document.getElementById("imagen4");
    let animacion5 = document.getElementById("imagen1");
    let animacion6 = document.getElementById("imagen2");
    let animacion7 = document.getElementById("imagen3");

    let posicionObj1 = animacion1.getBoundingClientRect().top;
    let posicionObjDeAbajo = animacion4.getBoundingClientRect().top/ 1.5;

    console.log(posicionObj1);

    let tamañodepantalla = window.innerHeight;

    if(posicionObj1 < tamañodepantalla){
        animacion1.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
        animacion2.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
        animacion3.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
      
    }

    if(posicionObjDeAbajo < tamañodepantalla){
        animacion4.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
        animacion5.style.animation = "moverDeIzquierdaADerecha 1s ease-out"
        animacion6.style.animation = "moverDeArribaHaciaAbajo 1s ease-out"
        animacion7.style.animation = "moverDeAbajoHaciaArriba 1s ease-out"
    }

})