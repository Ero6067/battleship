const MAX_ROWS = 10;
const MAX_COLS = 10;
const MAX_SHIPS = 5;
const MIN_SHIPS = 2;
var shipCount = 5;
var score = 0;
var shots = 50;
let img = 0;

class App {
	constructor() {
		console.log(mMat);
		this.ship = new Ship();

		//Initilize screen
		this.initScreen();
	}

	initScreen() {
		//creates table using 2 for loops
		let gameAreaMarkup = '<table id="game-map">';

		for (let r = 0; r < MAX_ROWS; r++) {
			gameAreaMarkup += "<tr>";

			for (let c = 0; c < MAX_COLS; c++) {
				gameAreaMarkup += `<td class="cell" data-row="${r}"
          data-col="${c}"></td>`;
			}
			gameAreaMarkup += "<tr>";
		}
		gameAreaMarkup += "</table>";

		document.querySelector(".game-container").innerHTML = gameAreaMarkup;
	}
}

let app = new App();
