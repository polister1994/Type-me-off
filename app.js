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

  const diccionarioGeneral = localStorage.getItem("dicGeneral");
  container.appendChild(panel);

  if(diccionarioGeneral){

    const diccionarioJSON = JSON.parse(diccionarioGeneral);
    diccionario3 = diccionarioJSON["diccionario3"];
    diccionario4 = diccionarioJSON["diccionario4"];
    diccionario5 = diccionarioJSON["diccionario5"];
    diccionario6 = diccionarioJSON["diccionario6"];
    diccionario7 = diccionarioJSON["diccionario7"];
    diccionario8 = diccionarioJSON["diccionario8"];

    if(diccionarioJSON){

      timer=setInterval(getRandom, 1700);

    }

  }else{

    getPalabras();

  }
  
  empezar.style.display = "none";
  inputPalabras.style.display = "flex";
  divVidas.style.display = "flex";
  mostrarPuntaje.style.display = "flex";

})

// Crea el span de palabras a mostrar introducirse en el HTML 

function crearSpanPalabras(){
  let spanPalabras = document.createElement("span");
  spanPalabras.id = getPalabra;
  spanPalabras.innerHTML=(getPalabra);
  panel.append(spanPalabras);
  spanPalabras.className = ("palabras active");
}

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
      panel.className=("col-sm-8 col-md-8 col-xl-5 panel")
      clearInterval(timer);
      timer = setInterval(getRandom, 1700);
      getPalabra =
        diccionario3[Math.floor(Math.random() * diccionario3.length)];
        palabras.push(getPalabra)
        crearSpanPalabras();
      
      return getPalabra;
    } else if (puntaje <= 25) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1500);
      getPalabra =
        diccionario4[Math.floor(Math.random() * diccionario4.length)];
      palabras.push(getPalabra);
      crearSpanPalabras();

      return getPalabra;
    } else if (puntaje <= 40) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1200);
      getPalabra =
        diccionario5[Math.floor(Math.random() * diccionario5.length)];
      palabras.push(getPalabra);
      crearSpanPalabras();

      return getPalabra;
    } else if (puntaje <= 70) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1100);
      getPalabra =
        diccionario6[Math.floor(Math.random() * diccionario6.length)];
      palabras.push(getPalabra);
      crearSpanPalabras();

      return getPalabra;
    } else if (puntaje <= 100) {
      clearInterval(timer);
      timer = setInterval(getRandom, 1000);
      getPalabra =
        diccionario7[Math.floor(Math.random() * diccionario7.length)];
      palabras.push(getPalabra);
      crearSpanPalabras();

      return getPalabra;
    } else {
      clearInterval(timer);
      timer = setInterval(getRandom, 800);
      getPalabra =
        diccionario8[Math.floor(Math.random() * diccionario8.length)];
      palabras.push(getPalabra);
      crearSpanPalabras();

      return getPalabra;
    }
  }
}

// Escucha al input del jugador para validar si la palabra escrita concuerda con alguna en la pantalla

inputPalabras.addEventListener("change", () => {
  let ubicacion = palabras.indexOf(inputPalabras.value);
  const remover = inputPalabras.value;
  console.log(remover)
  console.log(inputPalabras.value)
  

  if (palabras.includes(inputPalabras.value)) {
    puntaje = inputPalabras.value.length + puntaje;
    stats.innerHTML = `${puntaje}`;
    palabras.splice(ubicacion, 1);

    panel.querySelector("#"+remover).remove();

    console.log("bien",remover)
    console.log("bien",inputPalabras.value)
    
  }else {
    vidas--
    console.log("mal",remover)
    console.log("mal",inputPalabras.value)
  }

  inputPalabras.value = "";
  
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

  const urls = [

    ('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=3'),
  
    ('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=4'),
  
    ('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=5'),
  
    ('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=7'),
  
    ('https://random-words5.p.rapidapi.com/getMultipleRandom?count=20&wordLength=8')
  
  ];
  let datos
  const fetchPromesas = urls.map(url => fetch(url,options));

  Promise.all(fetchPromesas)
  .then(respuestas => Promise.all(respuestas.map(respuesta => respuesta.json())))
  .then(data =>{
    datos = data;

    if(datos.length == 5){
  
      diccionario3 = datos[0];
      diccionario4 = datos[1];
      diccionario5 = datos[2];
      diccionario6 = datos[3];
      diccionario7 = datos[4];
      diccionario8 = datos[5];
  
      setTimeout(saveStart,3000);
      
    }
 
  })
  .catch(error => {
    console.log(error)
  })

}


  // -----------Local Storage ----------- Guardas las palabras en el local storage para no hacer mas peticiones a la API

function saveLocalStorage(){
   
    const objeto = {

      diccionario3,
      diccionario4,
      diccionario5,
      diccionario6,
      diccionario7,
      diccionario8
    } 

    const diccionarioGeneral = JSON.stringify(objeto);
    localStorage.setItem("dicGeneral", diccionarioGeneral);


}

function saveStart(){
  saveLocalStorage();
  getRandom();
}