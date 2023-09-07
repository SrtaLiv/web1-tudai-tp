let abrirMenu = document.querySelector("#btn-abrir");
let cerrarMenu = document.querySelector("#btn-cerrar")
let nav = document.querySelector("#nav");

abrirMenu.addEventListener("click", function() {
    nav.classList.toggle("visible");
});

cerrarMenu.addEventListener("click", function(){
    nav.classList.remove("visible")
})
