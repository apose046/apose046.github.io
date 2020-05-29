// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function checkArray(){

	let restrictionsLst = [];

	if (document.getElementById("Organic").checked == true){
		restrictionsLst.push("Organic")
	}
	if (document.getElementById("Vegetarian").checked == true){
		restrictionsLst.push("Vegetarian")
	}
	if (document.getElementById("GlutenFree").checked == true){
		restrictionsLst.push("GlutenFree")
	}
	if (document.getElementById("Lactose").checked == true){
		restrictionsLst.push("Lactose")
	}
	if (document.getElementById("Allergies").checked == true){
		restrictionsLst.push("Allergies")
	}
	if (document.getElementById("None").checked == true){
		restrictionsLst.push("None")
	}
	console.log(restrictionsLst);
	return restrictionsLst;
	
}
	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    //var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var restLst = checkArray();
  
  	let checkNum = document.querySelectorAll('input[type="checkbox"]:checked').length;

  	if (checkNum > 1 && document.getElementById("None").checked == true){
  		document.getElementById("Organic").checked = false;
  		document.getElementById("Vegetarian").checked = false;
  		document.getElementById("GlutenFree").checked = false;
  		document.getElementById("Lactose").checked = false;
  		document.getElementById("Allergies").checked = false;
  		document.getElementById("None").checked = false;
  		alert("You have chosen that you both posses and do not posses dietary limitations. Please reselect your options so that we may better cater to your dietary needs :)");
  	}
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restLst);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		//var productPrice = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}

	}

		//console.log(chosenProducts[i]);
		var res = chosenProducts.toString()
		var split1 = res.split(" - ").toString();
		

		var split2 = split1.split(",");
		
		//var res = chosenProducts[i].split("-");


		let price = [];
		for (i = 0; i < split2.length; i+=2){
			price.push(split2[i]);
		}
	
		//	console.log(price);
	

		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Your total price comes to: $" + getTotalPrice(price)));
		
}