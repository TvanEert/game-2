var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

lucky = false;
question = false;
l_number = 0;
r_number = 0;

var inventory = [];

var diceButton = document.createElement("button");
	diceButton.innerHTML = "Roll";
	diceButton.id = "diceButton";

var question1 = document.createElement("button");
	question1.innerHTML = "Start Vragen";
	question1.id = "question1";

var lockleft = document.createElement("img");
	lockleft.src = "img/lock_0.jpg";
	lockleft.id = "numberlinks";

var	lockright = document.createElement("img");
	lockright.src = "img/lock_0.jpg";
	lockright.id = "numberrechts";

var nummerbord1 = document.createElement("img");
	nummerbord1.src = "img/nummerbord_links.jpg";
	nummerbord1.id = "nummerbord1";

var nummerbord2 = document.createElement("img");
	nummerbord2.src = "img/nummerbord_rechts.jpg";
	nummerbord2.id = "nummerbord2";

var key = document.createElement("img");
	key.src = "img/key.png";
	key.id = "key";
	key.style.width = "30px";
	key.style.height = "30px";

//hide button function
function hidebutt(number) {
		document.getElementById(number).style.display = 'none';
}
//show button function
function showbutt(number) {
		document.getElementById(number).style.display = 'initial';	
}

// start room
function start() {
	
	document.getElementById("title").innerHTML = "Kaleric";
	var uitleg = "F11 voor fullscreen. Dit is een spel waar je verschillende quests voltooien. Om verschillende items te verzamellen om het spel te voltooien. TIP: Lees de text!";
	document.getElementById("description").innerHTML = uitleg;
	main_img = document.createElement("img");
    main_img.src = 'img/start.jpg'
    main_img.id = 'mainImage';
    var description = document.getElementById("description");
    document.getElementById("inventoryItem").style.display = 'none'
	
	gameContainer = document.getElementById('game-container');
	gameContainer.insertBefore(main_img, description);
	main_img.style.borderStyle = "solid";
	main_img.style.borderWidth = "5px";
	main_img.style.borderRadius = "4px";
	main_img.style.borderColor = "#FFFFFF";
	main_img.style.width = "600px";

	hidebutt("button1");
	hidebutt("button3");

	document.getElementById("button2").innerHTML = "START";

	document.getElementById("button2").addEventListener('click', main);
	
	console.log("start") 
}

start();

// main room
function main() {
	
	var uitleg = "Een stem verteld je dat je vast zit in deze droom, je moet in dit gedeelte twee opdrachten vervullen om 2 items te bemachtigen.";
	document.getElementById("description").innerHTML = uitleg;
	document.getElementById('mainImage').src = "img/main.jpg";

	main_img.style.borderStyle = "solid";
	main_img.style.borderWidth = "5px";
	main_img.style.borderRadius = "4px";
	main_img.style.borderColor = "#FFFFFF";
	main_img.style.width = "600px";
	question1.style.display = "none";

	showbutt("button3");
	showbutt("button2");
	showbutt("button1");

	document.getElementById("button1").innerHTML = "Lock Room";
	document.getElementById("button2").innerHTML = "Question Room";
	document.getElementById("button3").innerHTML = "luck Room";

	if (question == false && lucky == false) {
		document.getElementById("button1").addEventListener('click', lockOne);
		document.getElementById("button1").disabled = true;
		button1.style.backgroundColor = "grey";
		document.getElementById("button2").removeEventListener('click', main);
		document.getElementById("button2").addEventListener('click', questionOne);
		document.getElementById("button3").addEventListener('click', luckOne);
	}
	if (question == true) {
		document.getElementById("button2").disabled = true;
		button2.style.backgroundColor = "grey";
	}
	if (lucky == true) {
		document.getElementById("button3").disabled = true;
		button3.style.backgroundColor = "grey";
	}
	if (question == true && lucky == true) {
		document.getElementById("button1").disabled = false;
		button1.style.backgroundColor = "#1d685a";
	}

	console.log("Main") 
}

//luck room 
function luckOne() {

	main_img.style.borderStyle = "";
	main_img.style.borderWidth = "";
	main_img.style.borderRadius = "";
	main_img.style.borderColor = "";
	main_img.style.width = "300px";

	hidebutt("button1");
	hidebutt("button2");
	hidebutt("button3");

	var uitleg = "Je moet een 6 gooien met de dobbelsteen om te winnen, maar als je 3 gooit zit je voor eeuwig vast.";
	document.getElementById("description").innerHTML = uitleg;
	document.getElementById('mainImage').src = "";
	
	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(diceButton, gameButtons);

	diceButton.addEventListener('click', diceRoll);

	//create a dice
	function diceRoll() {
		
		var dice = Math.floor((Math.random() * 6) + 1);

		setTimeout(function(){document.getElementById('mainImage').src = "img/dice"+dice+".png"},1);


		if (dice == "6") {
			setTimeout(function(){ alert("je hebt 6 gegooit hier is je item een nummerbord gefeliciteerd ga veder naar de volgende plek !!!"); }, 50);
			gameContainer.removeChild(diceButton);
			lucky = true;
			setTimeout(function(){main()}, 100);
			inventory.push("nummerbord-links");
			gameContainer = document.getElementById('game-container');
			gameContainer.insertBefore(nummerbord1, inventoryItem);
		}
		else if (dice == "3") {
			setTimeout(function(){ alert("Je hebt erg veel ongeluk je zit nu voor eeuwig vast in deze droom, Je moet vanaf het begin opnieuw beginnen !!!"); }, 50);
			setTimeout(function(){location.reload()}, 100);
		}
	}

	console.log("Lucky Room") 
}

// question room
function questionOne() {

	main_img.style.borderStyle = "solid";
	main_img.style.borderWidth = "5px";
	main_img.style.borderRadius = "4px";
	main_img.style.borderColor = "#FFFFFF";
	main_img.style.width = "600px";
	question1.style.display = "initial";

	var uitleg = "Je zult een antal vragen moeten beantwoorden om verder te mogen en om je volgende item te ontvangen.";
	document.getElementById("description").innerHTML = uitleg;
	document.getElementById('mainImage').src = "img/question1.jpg";

	var gameButtons = document.getElementById('game-buttons');
	gameContainer.insertBefore(question1, gameButtons);

	question1.addEventListener('click', questionstart);

	hidebutt("button1");
	hidebutt("button2");
	hidebutt("button3");

	//question start
	function questionstart() {
	i_herhaal = 0;

	do{
		v_vraag1 = Number(prompt ("Hoeveel items moet je in dit gedeelte verzamelen ?"));
		if (v_vraag1 == "2") {
			alert("Je hebt het goed ga verder naar de volgende vraag !!!");
			i_herhaal++;	
		}
		else if (v_vraag1 >= "0") {
			alert("LEEST DE TEXT !!!");
			location.reload();
		}
		else{
			alert("je moet een nummer invoeren.");
		}
	}while (i_herhaal == 0);

	v_vraag2 = prompt("Je zit hier vast totdat je alles volgens de regels gedaan hebt waar zit je vast ? In een .....");
		if (v_vraag2.toLowerCase() == "droom") {
			alert("Je hebt het goed je ontvangt een nummerbord.");
			gameContainer.removeChild(question1);
			question = true;
			inventory.push("nummerbord-rechts");
			gameContainer = document.getElementById('game-container');
			gameContainer.insertBefore(nummerbord2, inventoryItem);
			main();
		}
		else{
			alert("LEEST DE TEXT !!!");
			location.reload();
		}
	}

	console.log("Question Room") 
}

function lockOne() {

	var uitleg = "Je moet een cijferslot openen om een item te ontvangen er verder te gaan.";
	document.getElementById("description").innerHTML = uitleg;
	document.getElementById('mainImage').src = "img/slot.jpg";
	
	gameContainer = document.getElementById('game-container');
	gameContainer.insertBefore(lockleft, description);

	gameContainer = document.getElementById('game-container');
	gameContainer.insertBefore(lockright, description);

	document.getElementById("button2").disabled = false;
	button2.style.backgroundColor = "#1d685a";
	document.getElementById("button3").disabled = false;
	button3.style.backgroundColor = "#1d685a";

	document.getElementById("button1").innerHTML = "Change Left";
	document.getElementById("button2").innerHTML = "Check Lock";
	document.getElementById("button3").innerHTML = "Change Right";

	document.getElementById("button1").removeEventListener('click', lockOne);
	document.getElementById("button1").addEventListener('click', leftNumber);
	document.getElementById("button2").removeEventListener('click', questionOne)
	document.getElementById("button2").addEventListener('click', checkLock);
	document.getElementById("button3").removeEventListener('click', luckOne);
	document.getElementById("button3").addEventListener('click', rightNumber);

	console.log("Lock Room") 
}
	


	function checkLock() {
		if (l_number == 4 && r_number == 7) {
			alert("Je hebt de code goed je gaat verder naar het volgende gedeelte");
			finder();
		}
		else{
			alert("Deze code is fout, TIP: Kijk naar je items");
		}
	}
	function leftNumber(){
		l_number +=1;

		if (l_number == 0) {
			lockleft.src = "img/lock_0.jpg";
		}
		else if (l_number <= 8) {
			lockleft.src = "img/lock_"+l_number+".jpg";
		}
		else if (l_number == 9) {
			lockleft.src = "img/lock_9.jpg";
		}
		else if (l_number == 10){
			l_number = 0;
			lockleft.src = "img/lock_0.jpg";
		}
	}
	function rightNumber() {
				r_number +=1;

		if (r_number == 0) {
			lockright.src = "img/lock_0.jpg";
		}
		else if (r_number <= 8) {
			lockright.src = "img/lock_"+r_number+".jpg";
		}
		else if (r_number == 9) {
			lockright.src = "img/lock_9.jpg";
		}
		else if (r_number == 10){
			r_number = 0;
			lockright.src = "img/lock_0.jpg";
		}
	}

function finder() {
	inventory.pop();
	inventory.pop();

	lockright.remove();
	lockleft.remove();

	var uitleg = "Je moet in deze kamer een sleutel zoeken om verder te gaan.";
	document.getElementById("description").innerHTML = uitleg;
	document.getElementById('mainImage').src = "img/finder.jpg"

	hidebutt('button1')
	hidebutt('button3')

	gameContainer = document.getElementById('game-container');
	gameContainer.insertBefore(key, description);

	key.onclick = function(){grabkey()};

	function grabkey() {
		inventory.push("key");
		gameContainer = document.getElementById('game-container');
		gameContainer.insertBefore(key, inventoryItem);
		key.style.bottom = "-15px";
		key.style.right = "0px";
		key.style.margin = "5px";
		key.style.width = "75px";
		key.style.height = "75px";
	}

	document.getElementById("button2").innerHTML = "Check key";

	document.getElementById("button2").removeEventListener('click', checkLock);
	document.getElementById("button2").addEventListener('click', checkKey);

	function checkKey() {
		if (inventory == "key") {
			alert("Gefeliciteerd je hebt de key gevonden en mag verder!!")
		}
		else{
			alert("error")
		}
	}

	console.log("Finder Room") 
}