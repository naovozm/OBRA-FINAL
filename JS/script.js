console.log("JS Iniciado");

// OCULTAR INGLÉS AL INICIO
let ingles = document.querySelectorAll(".eng");
ingles.forEach(elemento =>
    elemento.classList.add("oculta")
);

let cast = document.querySelectorAll(".cast");

function cambiaOculta(muestra, oculta) {

    oculta.forEach(elemento =>
        elemento.classList.add("oculta")
    );

    muestra.forEach(elemento =>
        elemento.classList.remove("oculta")
    );
}

// BOTÓN TRADUCIR
let traducir = document.querySelector("#traducir");

let idiomaActual = "cast";

traducir.addEventListener("click", () => {

    if (idiomaActual == "cast") {
        cambiaOculta(ingles, cast);
        idiomaActual = "eng";
    }

    else {
        cambiaOculta(cast, ingles);
        idiomaActual = "cast";
    }

});


const video = document.getElementById("bgVideo");
const source = document.getElementById("videoSource");

function cambiarVideo() {

  if (window.innerWidth <= 768) {
    source.src = "IMG/intro-fondo-tlf.mp4";
  } else {
    source.src = "IMG/intro-bg-index.mp4";
  }

  video.load();
}

cambiarVideo();

window.addEventListener("resize", cambiarVideo);