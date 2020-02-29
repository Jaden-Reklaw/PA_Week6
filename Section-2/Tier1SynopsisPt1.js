/*
	Tier 1 Synopsis Part 1

	Create and index.html - Default HTML
	Connect this Tier1SynopsisPt1.js to it
	Source JQuery using CDN
	Create Interface
	Current Bugdet
	Two inputs one for item and the price
	One Button that on click adds to a list
	list of the items add
	Remaining Budget
*/

//Test Connection
console.log("Test!")

//Global Variable
const budget = 25000;
const purchases = [];

const addPurchase = () => {
	console.log("addPurchase");
	//Get User to input creating a new object
	let newPurchase = {
		name: $('#item').val(),
		price: $('#price').val()
	};
	//Push the New Purchases into the array
	purchases.push(newPurchase);
	//empty the inputs
	$('#item').val('');
	$('#price').val('');
	//calculate remaining budget
}

const readyNow = () => {
	//Dispay Budget and target budget by id
	let el = $('#budget');
	el.empty();
	el.append(budget);
	//Handle Click Event
	$("#add").on("click", addPurchase);
}

//Run JQuery
$(document).ready(readyNow);
