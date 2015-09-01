function checkNumber(player, button, direction, key1, key2) {
	if (player == "player2") { //If player2, then check 2 keyCodes (for D and d, W and w, etc.) 
		if ((button.keyCode == key1) || (button.keyCode == key2)) {
			var play = document.getElementsByClassName("player2")[0];
			var locations = directions(direction, play);
			if (onBoard(locations)) {
				play.removeAttribute("class");
				var newLocations = document.getElementById(locations);
				newLocations.setAttribute("class", "player2");
			}
		}	
	} else if (player == "player1") { //If player1, then only 1 keyCode (cause arrows can't be ARROWS) 
		if (button.keyCode == key1) {
			var play = document.getElementsByClassName("player1")[0];
			var locations = directions(direction, play);
			if (onBoard(locations)) {
				play.removeAttribute("class");
				var newLocations = document.getElementById(locations);
				newLocations.setAttribute("class", "player1");
			}
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
	checkNumber("player1", button, "right", 39);
	checkNumber("player1", button, "left", 37);
	checkNumber("player1", button, "up", 38);
	checkNumber("player1", button, "down", 40);
	//Player 2 moves
	checkNumber("player2", button, "right", 68, 100);
	checkNumber("player2", button, "left", 65, 97);
	checkNumber("player2", button, "up", 87, 119);
	checkNumber("player2", button, "down", 83, 115);
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
window.onkeypress = move;
