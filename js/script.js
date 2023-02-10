let buttonElement = document.getElementById("btn"); //bottone per iniziare la partita

buttonElement.addEventListener("click", startGame); //quando viene premuto il bottone il gioco inizia

function startGame() {
    buttonElement.remove(); //elimino il bottone per iniziare la partita
    let row = 10; //numero di righe
    let cells = row ** 2 ; //numero di celle
    let gridElement = document.getElementById("grid"); //griglia nel DOM
    //Ciclo per la creazione delle celle della griglia
    for (let i = 0; i < cells; i++) {
        let cellElement = document.createElement("div"); //creazione della cella
        let value = i + 1; //valore della cella
        cellElement.setAttribute("class", "cell"); //assegno alla cella una classe
        cellElement.addEventListener("click", onClick); //assegno alla cella una funzione per quando viene cliccata
        cellElement.style.width = "calc(100% / " + " " + row + ")"; //assegno la larghezza alla cella
        cellElement.innerHTML = value; //assegno alla cella il valore
        gridElement.appendChild(cellElement); //aggiungo la cella alla griglia
    }
}

//Funzione per quando viene cliccata la cella
function onClick() {
    let cell = this; //cella cliccata
    console.log(cell); //stampo in console la cella cliccata
    cell.classList.toggle("bg-green"); //cambio la classe alla cella cliccata
}