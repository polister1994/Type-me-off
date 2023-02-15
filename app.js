let container = document.querySelector(".container");
let perdiste = document.querySelector(".perdiste");
let ganaste = document.querySelector(".ganaste");
let inputPalabras = document.querySelector(".inputPalabras");
let empezar = document.querySelector(".empezar");
let restart = document.querySelector(".restart");
let panelVidas = document.querySelector(".span-vidas");
let divVidas = document.querySelector(".div-vidas")
let panel = document.createElement("div");
let stats = document.querySelector(".puntaje");
let mostrarPuntaje = document.querySelector(".ppuntaje")
let imgVida = document.createElement("img");
    imgVida.src = "/Images/Icons/vida.png"
    let imgVida2 = imgVida.cloneNode();
    let imgVida3 = imgVida.cloneNode();
    imgVida.className = "vida1"
    imgVida2.className = "vida2"
    imgVida3.className = "vida3"
let timer 
let puntaje = 0;
let palabras = [];
let vidas = 3;
reset = palabras.indexOf(inputPalabras.value);
let data3
let data4
let data5
let data6
let data7 
let data8

// Diccionario de palabras a usar en el juego

let diccionario3 = [
  "hoy",
  "fue",
  "ire",
  "par",
  "dar",
  "iba",
  "ido",
  "lee",
  "leo",
  "mio",
  "ojo",
  "pin",
  "tia",
  "ten",
  "una",
  "uno",
  "voy",
  "ves",
  "vez",
  "uva",
  "oro",
  "ayo",
  "cai",
  "cae",
  "fea",
  "feo",
];
let diccionario4 = [
  "abre",
  "alla",
  "aqui",
  "esta",
  "pero",
  "para",
  "poro",
  "pera",
  "coro",
  "cara",
  "beso",
  "boca",
  "mono",
  "mano",
  "miga",
  "pomo",
  "paso",
  "baya",
  "echo",
  "anda",
  "cayo",
  "gana",
  "gano",
  "creo",
  "cuba",
  "hizo",
  "hice",
];
let diccionario5 = [
  "apodo",
  "amigo",
  "amiga",
  "pedro",
  "jamon",
  "carro",
  "perro",
  "apodo",
  "arcos",
  "arnes",
  "agudo",
  "botar",
  "pasar",
  "burro",
  "avion",
  "animo",
  "alojo",
  "asilo",
  "tecla",
  "atajo",
  "aldea",
];
let diccionario6 = [
  "grieta",
  "camina",
  "paseo",
  "agotar",
  "camion",
  "metros",
  "arañar",
  "aretes",
  "ahorra",
  "bancos",
  "azules",
  "arañas",
  "oremos",
  "orgullo",
  "amplio",
  "amigos",
  "activo",
  "adapto",
  "adopta",
  "aereo",
  "camilla",
];
let diccionario7 = [
  "asisten",
  "ataques",
  "esquiva",
  "atesoro",
  "ampliar",
  "avispas",
  "arbitro",
  "arboles",
  "ardilla",
  "arizona",
  "armando",
  "armenia",
  "arrojar",
  "croacia",
  "deserto",
  "cometas",
  "estepas",
  "fuerzas",
  "estudio",
  "formula",
];
let diccionario8 = [
  "espaldas",
  "fluyendo",
  "foraneos",
  "estrella",
  "esperado",
  "glaucoma",
  "festines",
  "escoltar",
  "clemente",
  "crimenes",
  "diplomas",
  "conyuges",
  "cosmicos",
  "disparos",
  "efimeros",
  "desalojo",
  "atacados",
  "carnaval",
  "bulgaria",
  "brutales",
  "celebres",
  "censoras",
  "barinesa",
  "balances",
];

empezar.addEventListener("click", () => {

  if(localStorage.getItem("dicJSON3") === null){
    getPalabras();
  }else{
    data3 = localStorage.getItem("dicJSON3");
    diccionario3 = JSON.parse(data3);

    data4 = localStorage.getItem("dicJSON4")
    diccionario4 =  JSON.parse(data4);

    data5 = localStorage.getItem("dicJSON5")
    diccionario5 = JSON.parse(data5);

    data6 = localStorage.getItem("dicJSON6")
    diccionario6 = JSON.parse(data6);

    data7 = localStorage.getItem("dicJSON7")
    diccionario7 = JSON.parse(data7);

    data8 = localStorage.getItem("dicJSON8")
    diccionario8 = JSON.parse(data8);
    
  }
  
  if(data3&&data4&&data5&&data6&&data7&&data8){
    timer=setInterval(getRandom, 1700)
  }
  empezar.style.display = "none";
  inputPalabras.style.display = "flex";
  divVidas.style.display = "flex";
  mostrarPuntaje.style.display = "flex";
})



// Funcion principal , obtiene palabras del diccionario y las imprime basado en el puntaje del jugador

let getPalabra;

function getRandom() {

  quitarVidas();

  if (palabras.length >= 20 || vidas <= 0) {
    clearInterval(timer);
    container.append("Perdiste...");
    panel.remove(reset);
    restart.style.display = "flex";
    inputPalabras.style.display = "none"
  } else if (puntaje >= 200) {
    container.append("Ganaste!");
    clearInterval(timer);
    panel.remove(reset);
    restart.style.display = "flex";

    // ---------------------Dificultades--------------------- 

  } else {
    if (puntaje <= 12) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1700);
      getPalabra =
        diccionario3[Math.floor(Math.random() * diccionario3.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    } else if (puntaje <= 25) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1500);
      getPalabra =
        diccionario4[Math.floor(Math.random() * diccionario4.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    } else if (puntaje <= 40) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1200);
      getPalabra =
        diccionario5[Math.floor(Math.random() * diccionario5.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    } else if (puntaje <= 70) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1100);
      getPalabra =
        diccionario6[Math.floor(Math.random() * diccionario6.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    } else if (puntaje <= 100) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1000);
      getPalabra =
        diccionario7[Math.floor(Math.random() * diccionario7.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    } else {
      clearInterval(timer);
      timer = setInterval(getRandom, 800);
      getPalabra =
        diccionario8[Math.floor(Math.random() * diccionario8.length)];
      palabras.push(getPalabra);
      panel.innerHTML = imprimirPalabras(palabras);
      container.appendChild(panel);
      return getPalabra;
    }
  }
}

// Escucha al input del jugador para validar si la palabra escrita concuerda con alguna en la pantalla

inputPalabras.addEventListener("change", () => {
  let ubicacion = palabras.indexOf(inputPalabras.value);

  if (palabras.includes(inputPalabras.value)) {
    puntaje = inputPalabras.value.length + puntaje;
  }else {
    vidas--
  }

  palabras.splice(ubicacion, 1);

  inputPalabras.value = "";

  stats.innerHTML = `${puntaje}`;
});

// Recorre el array para ubicar el index de la palabra a mostrar en la pantalla

function imprimirPalabras(arg) {
  let items = "";

  for (let i = 0; i < arg.length; i++) {
    items += `<span class="palabras">${arg[i]}</span>`;
  }
  return items;
}

// Funcion para imprimir las vidas del jugador en la pantalla basado en el puntaje

function imprimirVidas(){

  if(vidas === 3){

    panelVidas.appendChild(imgVida);
    panelVidas.appendChild(imgVida2);
    panelVidas.appendChild(imgVida3);

  }
}
  imprimirVidas();

// Actualiza las vidas del jugador en la pantalla 

function quitarVidas(){
  
  if(vidas === 2){

    imgVida3.src = "/Images/Icons/heart.png";

  }else if(vidas === 1){

    imgVida2.src = "/Images/Icons/heart.png";

  }else if(vidas === 0){

    imgVida.src = "/Images/Icons/heart.png";

  }
}


async function getPalabras(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f5eeba8b1emsh9914ce73f21e7a7p19b0d9jsnf1d76aa6551a',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };
  
  const peticion3 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=3', options);
  data3 = await peticion3.json();
  console.log(data3);
  diccionario3 = data3;

  const peticion4 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=4', options);
  data4 = await peticion4.json();
  console.log(data4);
  diccionario4 = data4;

  const peticion5 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=5', options);
  data5 = await peticion5.json();
  console.log(data5);
  diccionario5 = data5;

  const peticion6 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=6', options);
  data6 = await peticion6.json();
  console.log(data6);
  diccionario6 = data6;

  const peticion7 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=7', options);
  data7 = await peticion7.json();
  console.log(data7);
  diccionario7 = data7;

  const peticion8 = await fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=8', options);
  data8 = await peticion8.json();
  console.log(data8);
  diccionario8 = data8;

  if(data3&&data4&&data5&&data6&&data7&&data8){
    saveLocalStorage();
    getRandom();
  }
}


function saveLocalStorage(){
   
  // -----------Local Storage ----------- Guardas las palabras en el local storage para no hacer mas peticiones a la API
    const dicJSON3 = JSON.stringify(diccionario3);
    localStorage.setItem("dicJSON3", dicJSON3);
    const dicJSON4 = JSON.stringify(diccionario4);
    localStorage.setItem("dicJSON4", dicJSON4);
    const dicJSON5 = JSON.stringify(diccionario5);
    localStorage.setItem("dicJSON5", dicJSON5);
    const dicJSON6 = JSON.stringify(diccionario6);
    localStorage.setItem("dicJSON6", dicJSON6);
    const dicJSON7 = JSON.stringify(diccionario7);
    localStorage.setItem("dicJSON7", dicJSON7);
    const dicJSON8 = JSON.stringify(diccionario8);
    localStorage.setItem("dicJSON8", dicJSON8);

}

