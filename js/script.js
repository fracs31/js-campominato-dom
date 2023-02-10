let buttonElement = document.getElementById("btn"); //bottone per iniziare la partita
let difficultyElement = document.getElementById("difficulty"); //select per la scelta della difficoltà
buttonElement.addEventListener("click", startGame); //quando viene premuto il bottone il gioco inizia

//Funzione per avviare il gioco
function startGame() {
    let side = parseInt(difficultyElement.value); //lato della griglia
    let cells = side ** 2 ; //numero di celle
    let bombs = []; //celle con le bombe
    let gridElement = document.getElementById("grid"); //griglia nel DOM

    buttonElement.remove(); //elimino il bottone per iniziare la partita
    difficultyElement.remove(); //elimino la scelta della difficoltà

    //Ciclo per la creazione delle celle della griglia
    for (let i = 0; i < cells; i++) {
        let cellElement = document.createElement("div"); //creazione della cella
        let value = i + 1; //valore della cella
        cellElement.setAttribute("class", "cell"); //assegno alla cella una classe
        cellElement.addEventListener("click", onClick); //assegno alla cella una funzione per quando viene cliccata
        cellElement.style.width = "calc(100% / " + " " + side + ")"; //assegno la larghezza alla cella
        cellElement.innerHTML = value; //assegno alla cella il valore
        gridElement.appendChild(cellElement); //aggiungo la cella alla griglia
    }
    //Crezione delle bombe
    for (let i = 0; i < 16; i++) {
        let random = getRandomIntInclusive(0, (cells - 1)); //creo il numero random
        //Se il numero random non è presente dentro l'array di bombe
        if (!bombs.find(element => element == random)) {
            bombs.push(random); //inserisco il numero
        } else { //altrimenti
            i--; //ripeto l'operazione
        }
    }
}

//Funzione per quando viene cliccata la cella
function onClick() {
    let cell = this; //cella cliccata
    let position = parseInt(this.innerHTML) - 1; //posizione della cella
    console.log(cell);
    console.log(position);
    console.log(bombs);
    //Se la cella cliccata è una bomba
    if (bombs.find(element => element == position)) {
        cell.classList.add("bg-bomb"); //cambio la classe alla cella cliccata
        
    } else { //altrimenti
        cell.classList.add("bg-safe"); //cambio la classe alla cella cliccata
    }
}

//Funzione per ottenere dei numeri causali
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); //arrotondo per eccesso
    max = Math.floor(max); //arrotondo per difetto
    return Math.floor(Math.random() * (max - min + 1) + min); //restituisco il numero casuale
}