// Write your JavaScript code here

function getHelloMessage() {
	let yourName = prompt("What's your name?");
	
	if (yourName === "") {
		return "Hello, World!";
	}

	
		return "Hello, " + yourName;

}

function sayHello() {
	console.log(getHelloMessage());
}

sayHello();

