var indice = 0;
var slider;

function iniciar() {
    
    var desplazamientoAtras = document.getElementById("desplazar-atras");
    var desplazamientoAdelante = document.getElementById("desplazar-adelante");
    
    desplazamientoAtras.addEventListener("click", desplazarAtras);
    desplazamientoAdelante.addEventListener("click", desplazarAdelante);
    
    slider = document.getElementsByClassName("slide");
    
    changeSlider();
}

function desplazarAtras() {
    voidSlider(slider);
    
    if(indice == 0) {
        indice = slider.length; 
    }
    
    indice--;
    
    slider[indice].style.display = "block";
}

function desplazarAdelante() {
    voidSlider(slider);
    
    if(indice == slider.length) {
        indice = 0; 
    }
    
    indice++;
    
    slider[indice-1].style.display = "block";
}

function changeSlider() {
    
    voidSlider(slider);
    
    if(indice == slider.length) {
        indice = 0; 
    }
    
    indice++;
    
    slider[indice-1].style.display = "block";
    
    setTimeout(changeSlider, 5000);
    
}

function voidSlider(arraySlider) {
    for (var i = 0; i < arraySlider.length; i++) {
        arraySlider[i].style.display = "none";
    }
}

window.addEventListener("load", iniciar);