let buttonElement = document.getElementById("btn"); //bottone per iniziare la partita

buttonElement.addEventListener("click", startGame); //quando viene premuto il bottone il gioco inizia

function startGame() {
    buttonElement.remove(); //elimino il bottone per iniziare la partita
    let side = 10; //lato della griglia
    let cells = side ** 2 ; //numero di celle
    let bombs = []; //celle con le bombe
    let gridElement = document.getElementById("grid"); //griglia nel DOM
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
function onClick(bombs) {
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

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}  