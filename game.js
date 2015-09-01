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

function checkNumber(player, button, direction, key1, key2) {
	if ((button.keyCode == key1) || (button.keyCode == key2)) { 
	//For player 1 we need only keyCode1 (ignoring keyCode2), second keyCode is only for player 2 (because there are different codes for d and D, w and W, etc.)
		var play = document.getElementsByClassName(player)[0];
		var locations = directions(direction, play);
		if (onBoard(locations)) {
			play.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			newLocations.setAttribute("class", player);
		}
	}	
}

function directions(direction, player) { //Generates locations for different directions
	var locations = player.id;
	if (direction == "right") {return (locations[0] + (locations[1] - (-1) ) ) }
	if (direction == "left") {return (locations[0] + (locations[1] - 1 ) ) }
	if (direction == "up") {return ((locations[0] - 1) + locations[1] ) }
	if (direction == "down") {return ((locations[0] - (-1)) + locations[1] ) }
}

function move(button) {
	//Player 1 moves
	checkNumber("player1", button, "right", RIGHT_ARROW);
	checkNumber("player1", button, "left", LEFT_ARROW);
	checkNumber("player1", button, "up", UP_ARROW);
	checkNumber("player1", button, "down", DOWN_ARROW);
	//Player 2 moves
	checkNumber("player2", button, "right", LOWERCASE_D, UPPERCASE_D);
	checkNumber("player2", button, "left", LOWERCASE_A, UPPERCASE_A);
	checkNumber("player2", button, "up", LOWERCASE_W, UPPERCASE_W);
	checkNumber("player2", button, "down", LOWERCASE_S, UPPERCASE_S);
}

//Check, is it on the board?
function onBoard(locations) {
	if ((locations[0] == 0) || (locations[1] == 0)) {
		return false;
	}
	if (locations.length > 2) {
		return false;
	}
	return true;
}

window.onkeydown = move;
