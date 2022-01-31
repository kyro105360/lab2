// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	
	{
		name: "tomato - 0.49$ ",
		vegetarian: true,
		glutenFree: true,
		price: 0.49
	},
	{
		name: "onion - 0.59$",
		vegetarian: true,
		glutenFree: true,
		price: 0.59
	},
	{
		name: "brocoli - 1.99$",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "milk - 2.35$",
		vegetarian: true,
		glutenFree: true,
		price: 2.35
	},
	{
		name: "bread - 2.35$",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "peanut butter - 4.00$",
		vegetarian: true,
		glutenFree: true,
		price: 4.00
	},
	{
		name: "cherries - 6.00$",
		vegetarian: true,
		glutenFree: true,
		price: 6.00
	},
	{
		name: "beef - 9.90$",
		vegetarian: false,
		glutenFree: true,
		price: 9.90
	},
	{
		name: "salmon - 10.00$",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	},
	{
		name: "rice - 20.00$",
		vegetarian: true,
		glutenFree: true,
		price: 20.00
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}