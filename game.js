function move1(button) { //Moving for player 1
	var player;
	var locations;
	//Moving right
	if (button.keyCode === 39) {
		player = document.getElementsByClassName("player1")[0];
		locations = player.id;
		locations = locations[0] + (locations[1] - (-1));
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player1");
		}
	}
	//Moving left
	if (button.keyCode === 37) {
		player = document.getElementsByClassName("player1")[0];
		locations = player.id;
		locations = locations[0] + (locations[1] - 1);
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player1");
		}
	} 
	//Moving up
	if (button.keyCode === 38) {
		player = document.getElementsByClassName("player1")[0];
		locations = player.id;
		locations = (locations[0] - 1) + locations[1];
		console.log(locations);
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player1");
		}
	}
	//Moving down
	if (button.keyCode === 40) {
		player = document.getElementsByClassName("player1")[0];
		locations = player.id;
		locations = (locations[0] - (-1)) + locations[1];
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player1");
		}
	}
}

function move2(button) { //Moving for player 2
	var player;
	var locations;
	console.log(button.keyCode);
	// Moving right
	if (button.keyCode === 100) {
		player = document.getElementsByClassName("player2")[0];
		locations = player.id;
		locations = locations[0] + (locations[1] - (-1));	
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player2");
		}
	}
	//Moving left
	if (button.keyCode === 97) {
		player = document.getElementsByClassName("player2")[0];
		locations = player.id;
		locations = locations[0] + (locations[1] - 1);
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player2");
		}
	} 
	//Moving up
	if (button.keyCode === 119) {
		player = document.getElementsByClassName("player2")[0];
		locations = player.id;
		locations = (locations[0] - 1) + locations[1];
		console.log(locations);
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player2");
		}
	}
	//Moving down
	if (button.keyCode === 115) {
		player = document.getElementsByClassName("player2")[0];
		locations = player.id;
		locations = (locations[0] - (-1)) + locations[1];
		if (onBoard(locations)) {
			player.removeAttribute("class");
			var newLocations = document.getElementById(locations);
			console.log(newLocations);
			newLocations.setAttribute("class", "player2");
		}
	}
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

window.onkeydown = move1;
window.onkeypress = move2;
