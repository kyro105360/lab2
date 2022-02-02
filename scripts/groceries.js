// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	
	{
		name: "Tomato - 0.49$ ",
		vegetarian: true,
		glutenFree: true,
		nonorganic: true,
		price: 0.49,
		// img: src="../imgs/tomato.png"
	},
	{
		name: "Organic Tomato - 1.00$ ",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.00
	},
	{
		name: "Onion - 0.59$",
		vegetarian: true,
		glutenFree: true,
		nonorganic: true,
		price: 0.59
	},
	{
		name: "Organic Onion - 1.25$",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.25
	},
	{
		name: "Brocoli - 1.99$",
		vegetarian: true,
		glutenFree: true,
		nonorganic: true,
		price: 1.99
	},
		{
		name: "Organic Brocoli - 4.00$",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	},
	{
		name: "Milk - 2.35$",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonorganic: true,
		price: 2.35
	},
	{
		name: "Bread - 2.35$",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		nonorganic: true,
		price: 2.35
	},
	{
		name: "Peanut butter - 4.00$",
		vegetarian: true,
		glutenFree: true,
		nonorganic: true,
		price: 4.00
	},
		{
		name: "Organic Peanut butter - 8.00$",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 8.00
	},
	{
		name: "Cherries - 6.00$",
		vegetarian: true,
		glutenFree: true,
		nonorganic: true,
		price: 6.00
	},
		{
		name: "Organic Cherries - 10.00$",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "Beef - 9.90$",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		nonorganic: true,
		price: 9.90
	},
	{
		name: "Salmon - 10.00$",
		vegetarian: false,
		glutenFree: true,
		nonorganic: true,
		price: 10.00
	},
		{
		name: "Organic Salmon - 23.00$",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 23.00
	},
	{
		name: "Rice - 20.00$",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		nonorganic: true,
		price: 20.00
	}
];
	

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Organic") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			// product_names.push(prods[i].img);
		}
		else if ((restriction == "Non-Organic") && (prods[i].nonorganic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true) &&(prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Non-Organic") && (prods[i].nonorganic == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true) && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Non-Organic") && (prods[i].nonorganic == true) && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
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
	for (let i=0; i<products.length; i++) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}