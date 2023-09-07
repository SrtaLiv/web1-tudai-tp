//Captcha
let mensajeParrafo = document.querySelector("#preguntar-suma");
let ocultarCaptcha = document.querySelector("#espacio-captcha");
let captchaEstado = document.querySelector("#estado-captcha");

let btnGenerarCaptcha = document.querySelector("#generar-captcha");
btnGenerarCaptcha.addEventListener("click", captchaGenerar);

let btnValidarCaptcha = document.querySelector("#validar-captcha");
btnValidarCaptcha.addEventListener("click", captchaValidar);

let mostrarContenido = document.querySelector("#fuera-captcha");
mostrarContenido.style.display = "none"; //No muestra el form hasta que el captcha sea correcto

let resultadoSuma; //Variable para almacenar el resultado de la suma

btnValidarCaptcha.disabled = true;  //Boton aparece desactivado hasta que se generen los dos valores

function captchaGenerar() {
  let numero1 = Math.trunc(10 * Math.random());
  let numero2 = Math.trunc(10 * Math.random());
  resultadoSuma = numero1 + numero2;
  btnValidarCaptcha.disabled = false;
  mensajeParrafo.innerHTML = `¿Cuanto es: ${numero1}+ ${numero2}? `;
}

function captchaValidar() {
  let resultadoSumaUsuario = parseInt(document.getElementById("resultado-de-suma").value);
  if (resultadoSumaUsuario === resultadoSuma) {
    ocultarCaptcha.style.display = "none"; // Oculta el captcha si el valor ingresado es correcto
    captchaEstado.innerHTML = "Captcha correcto";
    mostrarContenido.style.display = "block"; // Muestra el form si el captcha es correcto
  } else {
    captchaEstado.innerHTML = "Captcha incorrecto";
  }
}


let form = document.querySelector('#form');
form.addEventListener('submit', agregar);

function agregar(e){
  e.preventDefault();
  
  let formData = new FormData(form);
  
  let email = formData.get('email');
  let nombre = formData.get('nombre');
  let contraseña = formData.get('contraseña');
  console.log(email, nombre, contraseña)
}
