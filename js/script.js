const fondoRojo = document.querySelector("body");
const buttonRojo = document.querySelector("#fondo-rojo");

buttonRojo.addEventListener("click", () => {
    fondoRojo.classList.toggle("fondo-rojo");
});


const fondoVerde = document.querySelector("body");
const buttonVerde = document.querySelector("#fondo-verde");

buttonVerde.addEventListener("click", () => {
    fondoVerde.classList.toggle("fondo-verde");
});


const fondoAzul = document.querySelector("body");
const buttonAzul = document.querySelector("#fondo-azul");

buttonAzul.addEventListener("click", () => {
    fondoAzul.classList.toggle("fondo-azul");
});