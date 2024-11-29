/*document.addEventListener('DOMContentLoaded', init);*/

/* Make an object for each planet on the board. Keys within the planet objects hold all JS manipulatible information for the planet */
const p1 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
};

const p2 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
};

const p3 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
};

const p4 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p5 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p6 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p7 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p8 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p9 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p10 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p11 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p12 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p13 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p14 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p15 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p16 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p17 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p18 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p19 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const p20 = {
	owner: "none",
	fighter: 0,
	cruiser: 0,
	battleship: 0,
	cargoship: 0,
	mineral: 0,
	mrate: 50,
	color: "transparent",
	action: "yes",
}; 

const shopPrices = {
	fighter: 20,
	cruiser: 40,
	battleship: 100,
	cargoship: 20,
};

/* Put all planet objects in a list */
const planetObjectList = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];

/* Put all planet name strings in a list matching order of the planetObjectList */
const planetStringList = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20"];

/* Make list to hold every kind of fighting ship */
const fightingShipList = ["fighter", "cruiser", "battleship"];

let whosTurn = "";

let colorsList = ["lightseagreen", "lightblue", "cornsilk", "lightsalmon", "chartreuse", "darkorchid", "transparent"];

let playersList = [];

let playersColorList = [];

function plntObjFrmStr(plntText) {

	/*  Description: takes a variable that holds planet name string provided by user input (plntText)
	    and returns the JS planet object corresponding to plntText.
	*/

	/* Compare inputted planet name string to all planet names */
	for (let i = 0; i <= planetStringList.length - 1; i++) {

		/*  If user provided planet name string matches planet string name in 
		planetStringList, return the planet object corresponding to the planet string name
		*/

		if (plntText === planetStringList[i]) {

			return planetObjectList[i];

		} else {

			/* do nothing */

		}

	}

}

function moveShips() {

	/*  Description: moves ships between planets based on user provided information in webpage
	*/

	/* User provided strings are put into variables */

	let plntSrc = document.getElementById("planet_source").value;

	let plntDest = document.getElementById("planet_destination").value;

	let shipType = document.getElementById("ship_type").value;

	let moveAmount = document.getElementById("move_amount").value;

	/* Generate variables holding strings that are IDs of HTML elements displaying ship type and quantity for source and destination planets */

	let plntDestHtmlEl = plntDest + "-" + shipType + "-el";

	let plntSrcHtmlEl = plntSrc + "-" + shipType + "-el";

	/* Create variables that hold planet objects */

	let plntSrcObj = plntObjFrmStr(plntSrc);

	let plntDestObj = plntObjFrmStr(plntDest);

	if (plntSrcObj[shipType] >= Number(moveAmount)) {

		/* Subtract ships from relevent source planet object key and html element */

		plntSrcObj[shipType] -= Number(moveAmount);

		document.getElementById(plntSrcHtmlEl).textContent = shipType + ": " + plntSrcObj[shipType];

		/* Add ships to relevent destination planet object key and html element */

		plntDestObj[shipType] += Number(moveAmount);

		document.getElementById(plntDestHtmlEl).textContent = shipType + ": " + plntDestObj[shipType];

	} else {

		/* Give error message becuase requested move amount is greater than the number of ships available */

		document.getElementById("com").textContent = "Com Link: Sorry, bub. Can't do that."

	}

}

function getRandomInt(numb) {

	/* Description: returns a random integer. The integer can range from 1 to the inputted value (numb) */

	/* Math.random() produces random number in range of 0 (inclusive) to 1 (exclusive) */

	/* Math.floor() takes input and rounds down to the nearest integer */

   	return Math.floor(Math.random() * (numb)) + 1;

}

function fightPointSum(plnt) {

	/*  Description: takes an attacking or defending planet object (plnt)
	and looks at all of the object keys. If a key relates to a fighting ship,
	points based on a random number generator are produced given the type and number of each ship. 
	A total point sum is calculated and returned for the planet.
	*/

	let fightPtSum = 0;

	for (let key in plnt) {

		console.log(key)

		if (key === "fighter") {

			for (let i = 1; i <= Number(plnt["fighter"]); i++) {

				fightPtSum += getRandomInt(6)

				console.log(fightPtSum)

			}

		} else if (key === "cruiser") {

			for (let i = 1; i <= Number(plnt["cruiser"]); i++) {

				fightPtSum += getRandomInt(6) + getRandomInt(6)

				console.log(fightPtSum)

			}

		} else if (key === "battleship") {

			for (let i = 1; i <= Number(plnt["battleship"]); i++) {

				fightPtSum += getRandomInt(6) + getRandomInt(6) + getRandomInt(6)

				console.log(fightPtSum)

			}

		} else {

			/* if object key is not a fighting ship, do nothing */

		}

	}

	return fightPtSum;

}

function setHtmlElText(htmlString, obj, key) {

	/* Description: Changes the text content of an html element (htmlString) so that it displays
	the value held by a javascript object key */

	let htmlEl = htmlString + "-" + key + "-el";

	console.log(htmlString)
	console.log(obj)
	console.log(key)

	document.getElementById(htmlEl).textContent = key + ": " + obj[key];

}

function fight() {

	let plntAtkString = document.getElementById("attack_planet").value;

	console.log(plntAtkString)

	let plntDefString = document.getElementById("defend_planet").value;

	console.log(plntDefString)

	let minerals2Take = document.getElementById("fight_minerals").value;

	let totalMinerals2Use = Number(minerals2Take) + 5;

	let plntAtk = plntObjFrmStr(plntAtkString);

	let plntDef = plntObjFrmStr(plntDefString);

	let AtkPtSum = fightPointSum(plntAtk);

	let DefPtSum = fightPointSum(plntDef);

	if (plntAtk["mineral"] >= totalMinerals2Use) {

		if (plntAtk["action"] == "yes" || plntAtk["action"] == "fight") {

			plntAtk["action"] = "none";

			setHtmlElText(plntAtkString, plntAtk, "action");

			plntAtk["mineral"] -= totalMinerals2Use;

			setHtmlElText(plntAtkString, plntAtk, "mineral");

			if (DefPtSum >= AtkPtSum) { /* If defending planet wins... */

				/* Calculate and apply damage to defending planet */

				defDamageFrac = AtkPtSum / DefPtSum;

				console.log(plntDef["fighter"])

				plntDef["fighter"] -= Math.floor(defDamageFrac * plntDef["fighter"]);

				console.log(plntDef["fighter"])

				setHtmlElText(plntDefString, plntDef, "fighter");

				/* Calculate and apply damage to attacking planet */

				plntAtk["fighter"] = plntAtk["cruiser"] = plntAtk["battleship"] = 0;

				for (let i in fightingShipList) {

					setHtmlElText(plntAtkString, plntAtk, fightingShipList[i]);

				}

			} else { /* If attacking planet wins... */

				/*  Defplnt owner is changed to Atkplnt owner. Plnt inventory is Atkplnt plane stock, winner gets to choose which planes go where*/

				/* Calculate and apply damage to attack planet */

				atkDamageFrac = DefPtSum / AtkPtSum;

				console.log(plntAtk["fighter"])

				plntAtk["fighter"] -= Math.floor(atkDamageFrac * plntAtk["fighter"]);

				console.log(plntAtk["fighter"])

				setHtmlElText(plntAtkString, plntAtk, "fighter");

				/* Atk planet won, so set def planet owner to atk planet owner and move attacking ships to newly owned planet */

				keys2Change = ["owner", "fighter", "cruiser", "battleship"];

				for (let i in keys2Change) {

					plntDef[keys2Change[i]] = plntAtk[keys2Change[i]]

					setHtmlElText(plntDefString, plntDef, keys2Change[i]);

					console.log(plntDef[keys2Change[i]])

				}

				/* Def planet cargoship and minerals were destroyed, so set to 0 */

				plntDef["cargoship"] = 0;

				plntDef["mineral"] = Number(minerals2Take);

				plntDef["action"] = "fight";

				setHtmlElText(plntDefString, plntDef, "cargoship");

				setHtmlElText(plntDefString, plntDef, "mineral");

				setHtmlElText(plntDefString, plntDef, "action");

				/* Atk planet ships have been moved to newly aquired planet, so set atk planet fighting ships to 0 */

				plntAtk["fighter"] = plntAtk["cruiser"] = plntAtk["battleship"] = 0;

				for (let i in fightingShipList) {

					setHtmlElText(plntAtkString, plntAtk, fightingShipList[i]);

				}

				/* Since Def planet has new owner, set color of planet to new owner's color */

				plntDef["color"] = plntAtk["color"];

				document.getElementById(plntDefString).style.backgroundColor = plntDef["color"];

			}

		} else {

			document.getElementById("com").textContent = "Com Link: Sorry, bub. Can't do that. Each planet is only allowed one type of action per turn."

		}

	} else {

		document.getElementById("com").textContent = "Com Link: Sorry, bub. You can't afford to launch an attack (it costs 5 minerals to launch an attack)."

	}
}

function shop() { 

	/* User provided strings are put into variables */

	let shipType2Buy = document.getElementById("ship_type_store").value

	let shipNumb2Buy = document.getElementById("buy_item").value

	let shopPlanet = document.getElementById("shop_planet").value

	/* Put relevent planet object in variable so object key values can be manipulated. */

	let plntObj = plntObjFrmStr(shopPlanet);

	totalCost = Number(shopPrices[shipType2Buy]) * Number(shipNumb2Buy);

	console.log(totalCost)

	if (plntObj["action"] == "yes" || plntObj["action"] == "shop") {

		plntObj["action"] = "shop";

		setHtmlElText(shopPlanet, plntObj, "action");

		if (plntObj["mineral"] >= totalCost) { /* If user can afford purchase... */

			/* Add number of ships bought to relevant planet */

			plntObj[shipType2Buy] += Number(shipNumb2Buy);

			setHtmlElText(shopPlanet, plntObj, shipType2Buy);

			/* Subtract total cost of purchased ships from relevant planet */

			plntObj["mineral"] -= Number(totalCost);

			setHtmlElText(shopPlanet, plntObj, "mineral");

		} else {

			/* Give error message becuase user does not have enough money to purchase items */

			document.getElementById("com").textContent = "Com Link: Sorry, bub. You can't afford that.";

		}

	} else {

		document.getElementById("com").textContent = "Com Link: Sorry, bub. Can't do that. Each planet is only allowed one type of action per turn."

	}

}

function nextTurn() {
	/* Adds minerals mined to planets according to mining rates
	  -Need to do this only if planet has owner and only add for player whos turn just ended 
	*/

	/* Add minerals to planets (according to mining rates) owned by player who just ended turn */

	for (let i in planetObjectList) {

		let plntObj = planetObjectList[i];

		if (plntObj["owner"] == whosTurn) {

			plntObj["mineral"] += plntObj["mrate"];

			setHtmlElText(planetStringList[i], plntObj, "mineral");

			plntObj["action"] = "yes";

			setHtmlElText(planetStringList[i], plntObj, "action");

		} else {

			/* Do nothing */

		}

	}

	/* Change whosTurn variable and relevant html element to indicate next player's turn */

	for (let i = 0; i < playersList.length; i++) { /* cycle through all list items */

		if (playersList[i] == playersList[playersList.length - 1]) { /* if current player is last player is playersList, next player is first player in playersList */

			whosTurn = playersList[0];

			document.getElementById("whos_turn").textContent = "Current Turn: " + whosTurn;

			break;

		} else if (playersList[i] == whosTurn) { /* else if currently selected list item is current player, next player is next list item */

			whosTurn = playersList[i + 1];

			document.getElementById("whos_turn").textContent = "Current Turn: " + whosTurn;

			break;

		} else {

			/* Do nothing */

		}

	}

}

function startGame() {
	/* Asks for number of players and number of CPU enemies. 
	   Assigns players and CPU enemies to random planets.
	   Assigns random minerals rates to planets.
	   Asks you if you want to play this map, if not do startGame() again.
	*/

	/* Create variables that hold number of user controlled players and number of cpu controlled players */

	let userNumber = document.getElementById("user_number").value

	let cpuNumber = document.getElementById("cpu_number").value

	/* Add players to playersList array for each user controlled player */

	for (let i = 1; i <= userNumber; i++) {

		playersList.push("player " + i);

	}

	/* Add players to playersList array for each cpu controlled player */

	for (let i = 1; i <= cpuNumber; i++) {

		playersList.push("cpu " + i);

	}

	/* Given number of players, take a color from colorsList and add it to playersColorList. 
	This will ensure each player has a designated color. */

	for (let i = 0; i <= playersList.length - 1; i++) {

		playersColorList.push(colorsList[i]);

	}

	/* Set whosTurn variable to first player in playersList array */

	whosTurn = playersList[0];

	/* For each planet object, randomly select a player from playersList and assign that player
	as the owner of the planet object and change html text to reflect ownership */

	for (let i in planetObjectList) {

		let plntObj = planetObjectList[i];

		let randOwnerKey = getRandomInt(playersList.length) - 1;

		plntObj["owner"] = playersList[randOwnerKey];

		setHtmlElText(planetStringList[i], plntObj, "owner");

		/* Have each planet begin with 100 minerals */

		plntObj["mineral"] = 100;

		setHtmlElText(planetStringList[i], plntObj, "mineral");

	}

	/* For each planet object, check to see who the owner is and assign the appropriate color to the planet */

	for (let i in planetObjectList) {

		plntObj = planetObjectList[i];

		for (let x in playersList) {

			if (plntObj["owner"] == playersList[x]) {

				document.getElementById(planetStringList[i]).style.backgroundColor = playersColorList[x];

				plntObj["color"] = playersColorList[x];

			} else {

				/* do nothing */

			}

		}

	}

	/* For each planet object and relevent html text, provide 100 minerals and assign random mineral generation rate to planet */	

}

function activateHighlightOption() {

	let fightCheckBox = document.getElementById("fight_check_box");

	if (fightCheckBox.checked) {

		let div2Highlight = document.getElementById("p1");

		if (div2Highlight) {

			div2Highlight.classList.add("highlight");

		}

	} else {

		/* do nothing */

	}

}

function deactivateHighlightOption() {

	let fightCheckBox = document.getElementById("fight_check_box");

	if (fightCheckBox.checked) {

		let div2Dehighlight = document.getElementById("p1");

		if (div2Dehighlight) {

			div2Dehighlight.classList.remove("highlight");

		}
		
	} else {

		/* do nothing */

	}

}

/*
Ideas:
1. Peace Treaty - cost certain amt of minerals to attempt. There is a possibility that opponent does not accept.
If accepted, cannot attack opponent for x turns

2. Fighter with random atk point generation. Fighter that always gives same atk point (non random)

3, If your number of planets gets big enough, they make their own decisions and you can influence 
their decisions by being present in the region yourself (you can change which region you are in from time to time)
or installing aggressive or conservative subordinate leaders.

4. Having battleships should allow you to buy abilities like communication jamming and nukes, but
battleships should have ongoing mineral costs (maintenance cost associated with them), whereas fighters do not.

5. Black hole generator - should be very costly. If planet with generator is defeated, planet is destroyed along with attacking fleet

6. Matter Transporter Gate - wormhole that allows you to transport ships to distant planets for a limited number of turns.
Ordinarily, you can only move ships to neighbering planets per turn

7. Planets produce minerals at different rates. More dangerously placed planets produce more minerals.

*/
