/*
	JQuery Practical

	You can download the JQuery File
	or 
	You can use the CDN and reference it in your html file.
*/

//Test Connection
console.log('Test!');

const readyNow = () => {
	console.log("JQuery!");
	//Get element by ID then on click do the function
	$('#sayHelloBtn').on("click", sayHello);
	//Get element by tag and when mouse enters  do this function
	$('h2').mouseenter(h2MouseEnter);
	//Get element by tag and when mouse leavse  do this function
	$('h2').mouseleave(h2MouseLeave);
	//Get element by class and then on click do this function
	$(".clicker").on("click", changeColor);
}

const sayHello = () => {
	//target the input element by ID
	//get the value of the text input
	//let firstName = $("#nameInput").val();
	//console.log('Hello', firstName);

	//Another way of doing the same thing
	let outputText = "Hello, " +  $("#nameInput").val();
	//Dispay out text on DOM
	//Target the output element
	let outputEl = $("#hello");
	//Empty the element text
	outputEl.empty();
	//Append the output text in it
	outputEl.append(outputText);
	//Empty the input
	$("#nameInput").val('');
}

//This is different when defined with function declaration
function h2MouseEnter() {
	//console.log('in h2MouseEnter');
	//Change the css of the background of using this
	$(this).css("background-color", "red");
	//console.log('this',this);
}

function h2MouseLeave(){
	$(this).css("background-color", "white");
}

function changeColor() {
	$(this).css("color", "blue");
}

//JQuery Time
$(document).ready(readyNow);

