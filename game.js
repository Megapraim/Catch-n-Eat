//Initialising constants
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var LOWERCASE_D = 68;
var UPPERCASE_D = 100;
var LOWERCASE_A = 65;
var UPPERCASE_A = 97;
var LOWERCASE_W =87;
var UPPERCASE_W =119;
var LOWERCASE_S =83;
var UPPERCASE_S =115;

var view = {
	showWin: function(winner) { //Display message with congrutalations and start the game again
				var board = document.getElementById("board");
				var winId;
				if (winner == "Player 1") {winId = "winner1"; this.showScore(1);} else {winId = "winner2"; this.showScore(0);}
				board.innerHTML = "<tr> <td id=\"winMessage\"> <h1 id="+ winId +">" + winner + " scores!</h1> <br/> <h2>--Wait 2 seconds before next round--</h2> </td> </tr>";
				var startLevel = function() {document.getElementById("board").innerHTML = model.board;};
				setTimeout(startLevel, 2000);
	},
	showScore: function(winner) { 
		if (winner == 1) {document.getElementById("score1").innerHTML = control.player1Score;} else
		{document.getElementById("score2").innerHTML = control.player2Score;}
	}
}

var control = {
	player1Score: 0,
	player2Score: 0,
	checkButton: function(player, button, direction, key1, key2) {
					if ((button.keyCode == key1) || (button.keyCode == key2)) { 
						//For player 1 we need only keyCode1 (ignoring keyCode2), second keyCode is only for player 2 (because there are different codes for d and D, w and W, etc.)
						var play = document.getElementsByClassName(player)[0];
						var locations = model.directions(direction, play);
						if (model.onBoard(locations)) {
							play.removeAttribute("class");
							var newLocations = document.getElementById(locations);
							newLocations.setAttribute("class", player);
							model.isEndOfGame();
						}
					}	
	}
}

var model = {	
	width: 9,
	height: 9,
	player1Start: "9-9",
	player2Start: "1-1",
	board: "",

	boardStart: function() { //Creating the start board
		var startBoard = document.getElementById("board");
		this.board = "";
		for (var i = 1; i <= this.height; i++) {
			this.board += "<tr>"
			for (var j = 1; j <= this.width ; j++) {
				this.board = this.board + '<td id="' + i + '-' + j + '">';
			}
			this.board += "</tr>";
		}
		startBoard.innerHTML = this.board;
		var start1 = document.getElementById(this.player1Start);
		start1.setAttribute("class", "player1");
		var start2 = document.getElementById(this.player2Start);
		start2.setAttribute("class", "player2");
		this.board = startBoard.innerHTML;
	},

	directions: function(direction, player) { //Generates locations for different directions
		var locations = player.id.split("-");
		if (direction == "right") {return (locations[0] + "-" + (locations[1] - (-1) ) ) }
		if (direction == "left") {return (locations[0] + "-" + (locations[1] - 1 ) ) }
		if (direction == "up") {return ((locations[0] - 1) + "-" + locations[1] ) }
		if (direction == "down") {return ((locations[0] - (-1)) + "-" + locations[1] ) }
	},

	move: function(button) {
		//Player 1 moves
		control.checkButton("player1", button, "right", RIGHT_ARROW);
		control.checkButton("player1", button, "left", LEFT_ARROW);
		control.checkButton("player1", button, "up", UP_ARROW);
		control.checkButton("player1", button, "down", DOWN_ARROW);
		//Player 2 moves
		control.checkButton("player2", button, "right", LOWERCASE_D, UPPERCASE_D);
		control.checkButton("player2", button, "left", LOWERCASE_A, UPPERCASE_A);
		control.checkButton("player2", button, "up", LOWERCASE_W, UPPERCASE_W);
		control.checkButton("player2", button, "down", LOWERCASE_S, UPPERCASE_S);
	},

	//Check, is it on the board?
	onBoard: function(locations) {
		var locations = locations.split("-");
		if ((locations[0] <= 0) || (locations[1] <= 0) || (locations[0] > this.height) || (locations[1] > this.width) ) {
			return false;
		}
		return true;
	},

	isEndOfGame: function() { //Check, did anybody win?
		var pl1 = document.getElementsByClassName("player1")[0];
		var pl2 = document.getElementsByClassName("player2")[0];
		if (pl1 == null) {
			control.player2Score++;
			view.showWin("Player 2");
		} else if (pl2 == null) {
			control.player1Score++;
			view.showWin("Player 1");
		}
	}
}

window.onkeydown = model.move;
window.onload = function() {model.boardStart(); }
