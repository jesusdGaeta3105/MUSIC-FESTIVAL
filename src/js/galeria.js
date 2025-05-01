document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    navefija();
    crearGaleria();
    Scrollnav();

}

function navefija() {

    const barra = document.querySelector('.header');
    const sobrefestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');


    window.addEventListener('scroll', function() {
        if(sobrefestival.getBoundingClientRect().bottom < 0)
        {
            
            barra.classList.add('fijo');
            body.classList.add('bdy-scroll');
        }
        else {

            barra.classList.remove('fijo');
            body.classList.remove('bdy-scroll');
        }
    });
}


function Scrollnav() {
    const enlaces = document.querySelectorAll('.navegacion_principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
           //const seccionScroll = e.target.attributes.href.value;
           const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({behavior: "smooth"});
        });
        
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

for(let i = 1; i<=12; i++) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `;
    
    imagen.onclick = function() {
        mostrarimagen(i);
    }
    
    galeria.appendChild(imagen);
}

}

function mostrarimagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.avif" type="image/avif">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');;
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-bdy');
    }

const cerrarmodal = document.createElement('P');
cerrarmodal.textContent = "X"; 
cerrarmodal.classList.add('btn-cerrar');
cerrarmodal.onclick = function() {
    overlay.remove();
    body.classList.remove('fijar-bdy');
}

overlay.appendChild(cerrarmodal);


    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-bdy');

}