//Tabla Dinamica
let tabla = document.querySelector('#tabla-body');

let champInput = document.querySelector("#champ");
let recursoInput = document.querySelector("#recurso");
let rolOption = document.querySelector("#rol");
let regionOption = document.querySelector("#region");

let btnAgregar = document.querySelector("#btn-agregar");
let btnEliminar = document.querySelector("#btn-eliminar");
let btnVaciar = document.getElementById("btn-vaciar");
let btnAgregarTres = document.getElementById("btn-agregar-tres");
let destacarCampeon = document.getElementById("destacar-campeon");

btnEliminar.addEventListener("click", eliminarCampeon);
btnAgregar.addEventListener("click", agregarCampeon);
btnVaciar.addEventListener("click", vaciarTabla);
btnAgregarTres.addEventListener("click", agregarTresCampeones);

destacarCampeon.addEventListener("change", cargarTabla)

//Arreglo por defecto
let campeones = [];
agregarTresCampeones();  //Campeones random por default

function cargarTabla() {
  tabla.innerHTML = [];
  //Recorre el arreglo y crea las filas para cada elemento
  for (let i = 0; i < campeones.length; i++) {
    let fila = document.createElement("tr")

    //Cremos columnas en las filas, es decir celdas.
    let celdaNombre = document.createElement("td")
    let celdaRecurso = document.createElement("td")
    let celdaRol = document.createElement("td")
    let celdaRegion = document.createElement("td")

    //Llamamos contenido de cada nodo
    celdaNombre.textContent = campeones[i].champ;
    celdaRecurso.textContent = campeones[i].recurso
    celdaRol.textContent = campeones[i].rol
    celdaRegion.textContent = campeones[i].region

    //mostramos las celdas, asignamos elementos hijos al elemento padre
    fila.appendChild(celdaNombre)
    fila.appendChild(celdaRecurso)
    fila.appendChild(celdaRol)
    fila.appendChild(celdaRegion)
    tabla.appendChild(fila)

    if(campeones[i].destacado && destacarCampeon.checked){
      fila.classList.add('destacado')
    }
  }
}

function agregarCampeon() {
  console.log("Funcion agregar");
  let campeon = champInput.value;
  let recurso = recursoInput.value
  let rol = rolOption.value
  let region = regionOption.value
  let destacado = false

  if (campeon === '' || recurso === '' || rol === '' || region === '') {
    document.querySelector('#cartel-required').innerHTML =
      "¡POR FAVOR COMPLETAR CAMPOS VACIOS!";
    return;
  }

  //Agregar elementos al arreglo
  campeones.push({
    "champ": campeon,
    "recurso": recurso,
    "rol": rol,
    "region": region,
    "destacado": destacado
  });
  cargarTabla();
}

function eliminarCampeon() {
  console.log("Funcion eliminar");
  let tbody = document.getElementById("tabla-body");

  tbody.deleteRow(tbody.rows.length - 1);
  campeones.pop();

}

function vaciarTabla() {
  for (let i = 0; i < campeones.length; i++) {
  }
  campeones = []; //objeto de tipo arreglo
  let tbody = document.getElementById("tabla-body");
  tbody.innerHTML = ""; //Actualiza html
}


function agregarTresCampeones() {
  let campeonesRandom = [
    {
      "champ": "Dr.Mundo",
      "recurso": "Vida",
      "rol": "Top",
      "region": "Zaun",
      "destacado": false
    },
    {
      "champ": "Aphelios",
      "recurso": "Mana",
      "rol": "ADC",
      "region": "Targon",
      "destacado": false
    },
    {
      "champ": "Nami",
      "recurso": "Mana",
      "rol": "Support",
      "region": "Runaterra",
      "destacado": false
    },
    {
      "champ": "Draven",
      "recurso": "Mana",
      "rol": "ADC",
      "region": "Noxus",
      "destacado": false
    },
    {
      "champ": "Alistar",
      "recurso": "Mana",
      "rol": "Support",
      "region": "Runaterra",
      "destacado": false
    },
    {
      "champ": "Lee Sin",
      "recurso": "Energia",
      "rol": "Jungla",
      "region": "Jonia",
      "destacado": false
    },
    {
      "champ": "Udyr",
      "recurso": "Mana",
      "rol": "Jungla",
      "region": "Freljord",
      "destacado": false
    },
    {
      "champ": "Shen",
      "recurso": "Energia",
      "rol": "Top",
      "region": "Jonia",
      "destacado": false
    },
    {
      "champ": "Ezreal",
      "recurso": "Mana",
      "rol": "ADC",
      "region": "Piltover",
      "destacado": false
    },
    {
      "champ": "Thresh",
      "recurso": "Mana",
      "rol": "Support",
      "region": "Islas de la Sombra",
      "destacado": false
    },
    {
      "champ": "Ahri",
      "recurso": "Maná",
      "rol": "Mid",
      "region": "Jonia",
      "destacado": false
    },
    
    {
      "champ": "Riven",
      "recurso": "Sin recurso",
      "rol": "Top",
      "region": "Noxus",
      "destacado": true
    },
      {
        "champ": "Bardo",
        "recurso": "Maná",
        "rol": "Support",
        "region": "Runaterra",
        "destacado": true
      },
      {
        "champ": "Teemo",
        "recurso": "Maná",
        "rol": "Top",
        "region": "Bandle",
        "destacado": true
      }, {
        "champ": "Pyke",
        "recurso": "Mana",
        "rol": "Support",
        "region": "Aguas turbias",
        "destacado": true
      },
  ];

  for (let j = 0; j < 3; j++) {
    let champ = campeonesRandom[Math.trunc(campeonesRandom.length * Math.random())];
    let champsInput = champ.champ;
    let recursoInput = champ.recurso;
    let rolOption = champ.rol;
    let regionOption = champ.region;
    let destacados = champ.destacado;

    //Agrega champ al arreglo
    campeones.push({
      "champ": champsInput,
      "recurso": recursoInput,
      "rol": rolOption,
      "region": regionOption,
      "destacado": destacados
    });
    cargarTabla();
  }
}

console.log(campeones)

