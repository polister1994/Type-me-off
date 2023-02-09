let container = document.querySelector(".container");
let perdiste = document.querySelector(".perdiste")
let ganaste = document.querySelector(".ganaste")
let inputPalabras = document.querySelector(".inputPalabras");
let restart = document.querySelector(".restart");
let panel = document.createElement("div");
let stats = document.querySelector(".puntaje");
let timer = setInterval(getRandom, 1000);
let puntaje = (0)
let palabras = [];
reset = palabras.indexOf(inputPalabras.value);

let diccionario3 = ["hoy","fue","ire","par","dar","iba","ido","lee","leo","mio","ojo","pin","tia","ten","una","uno","voy","ves","vez","uva","oro","ayo","cai","cae","fea","feo"];
let diccionario4 = ["abre","alla","aqui","esta","pero","para","poro","pera","coro","cara","beso","boca,mono","mano","miga","pomo","paso","baya","echo","anda","cayo","gana","gano","creo","cuba","hizo","hice",];
let diccionario5 = ["apodo","amigo","amiga","pedro","jamon","carro","perro","apodo","arcos","arnes","agudo","botar","pasar","burro","avion","animo","alojo","asilo","tecla","atajo","aldea"];
let diccionario6 = ["grieta","camina","paseo","agotar","camion","metros","arañar","aretes","ahorra","bancos","azules","arañas","oremos","orgullo","amplio","amigos","activo","adapto","adopta","aereo","camilla"];
let diccionario7 = ["asisten","ataques","esquiva","atesoro","ampliar","avispas","arbitro","arboles","ardilla","arizona","armando","armenia","arrojar","croacia","deserto","cometas","estepas","fuerzas","estudio","formula"];
let diccionario8 = ["espaldas","fluyendo","foraneos","estrella","eseñando","glaucoma","festines","escoltar","clemente","crimenes","diplomas","conyuges","cosmicos","disparos","efimeros","desalojo","atacado","carnaval","bulgaria","brutales","celebres","censoras","barinesa","balances"];


let getPalabra;

function getRandom(){
    if(palabras.length >= 20){
        
        container.append("Perdiste...");
        clearInterval(timer);
        panel.remove(reset)
        restart.style.display="block"
        
    
    }else if(puntaje >= 200){

        container.append("Ganaste!");
        clearInterval(timer);
        panel.remove(reset)
        restart.style.display="block"

    }else{
            if(puntaje <= 12){

                getPalabra = diccionario3[Math.floor(Math.random() * (diccionario3.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;

            }else if(puntaje <= 25){

                getPalabra = diccionario4[Math.floor(Math.random() * (diccionario4.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;

            }else if(puntaje <= 40){

                getPalabra = diccionario5[Math.floor(Math.random() * (diccionario5.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;

            }else if(puntaje <= 70){

                getPalabra = diccionario6[Math.floor(Math.random() * (diccionario6.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;   

            }else if(puntaje <= 100){

                getPalabra = diccionario7[Math.floor(Math.random() * (diccionario7.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;  

            }else{
                getPalabra = diccionario8[Math.floor(Math.random() * (diccionario8.length))];
                palabras.push(getPalabra);
                panel.innerHTML = imprimirPalabras(palabras)
                container.appendChild(panel)
                return getPalabra;
            }
            
    }
}


inputPalabras.addEventListener("change", () => {

    let ubicacion = palabras.indexOf(inputPalabras.value)

    if(palabras.includes(inputPalabras.value)){
        puntaje = inputPalabras.value.length+(puntaje)
    }
    
    palabras.splice(ubicacion,1)

    inputPalabras.value = "";

    stats.innerHTML = (`${puntaje}`);

})

function imprimirPalabras(arg){

    let items = "" ;

    for(let i = 0; i < arg.length; i++){
        items += `<span class="palabras">${arg[i]}</span>`;
      }
      return items;
      
}










