// Write your JavaScript code here

function getHelloMessage(nameCap) {
	if (nameCap === "") {
		return nameCap = "Hello, World!";
	}

	else {
		return `Hello, ${nameCap}!`;
	}
	
}

function nameCapitalizer(nameToCap) {
	return nameToCap.charAt(0).toUpperCase() + nameToCap.slice(1);
	
}

function getNameInput() {
	let enteredName = prompt("What's your name");
	return nameCapitalizer(enteredName);
}



function sayHello() {
	let yourName = getNameInput();
	let message = getHelloMessage(yourName);
	console.log(message);
}

sayHello();

/*

function getHelloMessage() {
	let enteredName = prompt("What's your name?");
	
	let nameCap = enteredName.toUpperCase();
	if (nameCap === "") {
		return nameCap = "Hello, World!";
	}

	else {
		return `Hello, ${nameCap}!`;
	}
}


function sayHello() {
	let message = getHelloMessage();
	console.log(message);
}

sayHello();*/