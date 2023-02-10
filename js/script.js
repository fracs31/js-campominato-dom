let buttonElement = document.getElementById("btn"); //bottone per iniziare la partita
let difficultyElement = document.getElementById("difficulty"); //select per la scelta della difficoltà
let bombs = []; //celle con le bombe
let safes = []; //celle sicure
let checkSafe = 0; //indice per verificare se tutte le celle sicure sono state cliccate
buttonElement.addEventListener("click", startGame); //quando viene premuto il bottone il gioco inizia

//Funzione per avviare il gioco
function startGame() {
    let side = parseInt(difficultyElement.value); //lato della griglia
    let cells = side ** 2 ; //numero di celle
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
    //Creazione delle bombe
    for (let i = 0; i < 16; i++) {
        let random = getRandomIntInclusive(0, (cells - 1)); //creo il numero random
        //Se il numero random non è presente dentro l'array di bombe
        if (!bombs.includes(random)) {
            bombs.push(random); //inserisco il numero
        } else { //altrimenti
            i--; //ripeto l'operazione
        }
    }
    //Salvataggio celle sicure
    for (let i = 0; i < cells; i++) {
        //Se il la posizione della cella non è presente dentro l'array di bombe
        if (!bombs.includes(i)) {
            safes.push(i); //inserisco il numero nell'array di celle sicure
        }
    }
    console.log(bombs); //stampo in console l'array di bombe
    console.log(safes); //stampo in console l'array di celle sicure
}

//Funzione per quando viene cliccata la cella
function onClick() {
    let cell = this; //cella cliccata
    let position = parseInt(this.innerHTML) - 1; //posizione della cella
    let cellsElement = document.querySelectorAll(".cell"); //celle nel DOM
    //Se la cella cliccata è una bomba
    if (bombs.includes(position)) {
        cell.classList.add("bg-bomb"); //cambio il background color in rosso
        //Rendo tutte le celle non cliccabili
        for (let i = 0; i < cellsElement.length; i++) {
            cellsElement[i].classList.add("not-clickable"); //aggiundo la classe per non far cliccare le celle
        }
    } else { //altrimenti 
        cell.classList.add("bg-safe"); //cambio il background color in azzurro
        checkSafe++; //incremento l'indice di celle sicure cliccate
        console.log(checkSafe); //stampo il console l'indice di celle sicure cliccate
        //Se tutte le celle sicure sono state cliccate
        if (safes.checkSafe == safes.length){
            //Rendo tutte le celle non cliccabili
            for (let i = 0; i < cellsElement.length; i++) {
                cellsElement[i].classList.add("not-clickable"); //aggiundo la classe per non far cliccare le celle
            }
        }
    }
}

//Funzione per ottenere dei numeri causali
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); //arrotondo per eccesso
    max = Math.floor(max); //arrotondo per difetto
    return Math.floor(Math.random() * (max - min + 1) + min); //restituisco il numero casuale
}