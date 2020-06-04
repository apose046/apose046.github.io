// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		organic: true,
		vegetarian: true,
		glutenFree: true,
		lactose: true,
		allergies: true,
		price: 1.99,
		fresh: true,
		nonperish: false
	},
	{
		name: "Bread",
		organic: false,
		vegetarian: true,
		glutenFree: false,
		lactose: true,
		allergies: true,
		price: 2.35,
		fresh: true,
		nonperish: false
	},
	{
		name: "Eggs",
		organic: true,
		vegetarian: true,
		glutenFree: true,
		lactose: true,
		allergies: true,
		price: 3.55,
		fresh: false,
		nonperish: false
	},
	{
		name: "Cheese",
		organic: false,
		vegetarian: true,
		glutenFree: true,
		lactose: false,
		allergies: true,
		price: 3.99,
		fresh: false,
		nonperish: false
	},
	{
		name: "Peanut Butter",
		organic: false,
		vegetarian: true,
		glutenFree: true,
		lactose: true,
		allergies: false,
		price: 5.99,
		fresh: false,
		nonperish: true
	},
	{
		name: "Cherries",
		organic: true,
		vegetarian: true,
		glutenFree: true,
		lactose: true,
		allergies: true,
		price: 6.99,
		fresh: true,
		nonperish: false
	},
	{
		name: "Macaroni",
		organic: false,
		vegetarian: true,
		glutenFree: false,
		lactose: true,
		allergies: true,
		price: 7.75,
		fresh: false,
		nonperish: true
	},
	{
		name: "Salmon",
		organic: false,
		vegetarian: false,
		glutenFree: true,
		lactose: true,
		allergies: true,
		price: 9.99,
		fresh: true,
		nonperish: false
	},
	{
		name: "Chicken Nuggets",
		organic: false,
		vegetarian: false,
		glutenFree: false,
		lactose: true,
		allergies: true,
		price: 10.75,
		fresh: false,
		nonperish: false
	},
	{
		name: "Chocolate Hazelnut Cake",
		organic: false,
		vegetarian: true,
		glutenFree: false,
		lactose: false,
		allergies: false,
		price: 15.99,
		fresh: false,
		nonperish: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	//let price = [];
	let restr_names = [];

	for (let a = 0; a<restriction.length; a+=1){

		for (let i=0; i<prods.length; i+=1) {
			
			if ((restriction[a] == "Organic") && (prods[i].organic == true)){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
			if ((restriction[a] == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
			if ((restriction[a] == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
			if ((restriction[a] == "Lactose") && (prods[i].lactose == true)){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
			if ((restriction[a] == "Allergies") && (prods[i].allergies == true)){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
			if (restriction[a] == "None"){
				product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				//price.push(prods[i].price);
			}
		}
		//console.log("pppp"+product_names);
		restr_names.push(product_names);
		
	}

	//console.log(price);
	//console.log(restr_names[0]);
	//final_price = checkDuplicate(price)
	final_name = checkDuplicate(restr_names[0]);
	
	//final_price = checkDuplicate(price[0])
	//console.log(final);

	
	return final_name;;
}

function filterProducts(prods, filter, currentArray) {
	let product_names = [];
	let restr_names = [];

	console.log(currentArray);

	//console.log(filter);
	for (let i=0; i<prods.length; i+=1) {

		if (filter == ""){
			product_names.push(currentArray[i]);
		}
		for (let j=0; j<currentArray.length; j++){

			if (prods[i].name === currentArray[j]){

				//console.log(prods[i].name + " " + currentArray[i]);
				if ((filter == "Fresh") && (prods[i].fresh == true)){
					product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				}
				else if ((filter == "NonPerish") && (prods[i].nonperish == true)){
					product_names.push(prods[i].name + " - $" + prods[i].price + " ");
				}
			}

			restr_names.push(product_names);
		}

		//console.log(product_names[0]);
		
		var final = checkDuplicate(restr_names[0]);
	}
	return final;
}

function checkDuplicate(produce) {

	let dupList = [];
	let count = 0;
	let checkNum = document.querySelectorAll('input[type="checkbox"]:checked').length;

	//console.log("check"+checkNum);

	for (let i = 0; i<produce.length; i+=1){
		for (let j = i+1; j<produce.length; j+=1){

			if (produce[i] === produce[j]){
				count++;
				//console.log(produce[i] + count);
			}
			/*
			if (produce[i] == produce[j]){
				count++;
				//dupList.push(produce[i]);
				console.log(count);
			}
			*/
			
		}

		if (checkNum == (count+1)){
				dupList.push(produce[i]);
				//dupList.push(price[i]);
				//console.log(produce[i]);
		}
		//console.log(dupList);
		count = 0;
		
	}


	//console.log(dupList);
	return dupList;
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