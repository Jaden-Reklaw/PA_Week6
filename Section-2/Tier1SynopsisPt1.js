/*
	Tier 1 Synopsis Part 1 and Part 2

	Part 1
	Create and index.html - Default HTML
	Connect this Tier1SynopsisPt1.js to it
	Source JQuery using CDN
	Create Interface
	Current Bugdet
	Two inputs one for item and the price
	One Button that on click adds to a list
	list of the items add
	Remaining Budget

	Part 2
	Calculate Remaining Budget
	Display list items and purchase price

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
	calculateRemainingBudget();
	//Update DOM
	displayPurchases();
}

const calculateRemainingBudget = () => {
	//loop through purchase array
	let totalPrice = 0;
	for(let i = 0; i < purchases.length; i++) {
		//for each purchase, add up total of all prices
		totalPrice += Number(purchases[i].price);
	}
	console.log("total price:", totalPrice);
	//subtract total prices from budget for remainingBudget
	const remainingBudget = budget - totalPrice;
	//display remainingBudget
	let el = $('#remainingBudget');
	el.empty();
	el.append(remainingBudget);
}

const displayPurchases = () => {
	console.log('in displayPurchases');
	//target output by ID
	let el = $('#purchasesOut');
	//Empty
	el.empty();
	//loop through purchases array
	for(let purchase of purchases) {
		el.append(`<li> ${purchase.name}: $${purchase.price}</li>`);
	}
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
