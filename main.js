// $(document).on('ready', function() {


var FoodItem  = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name 	  	=	name;
	this.calories 	=	calories;
	this.vegan 	  	=	vegan;
	this.glutenFree	=	glutenFree;
	this.citrusFree =	citrusFree;

	this.addElem = function () {
		return $('<div class="food-item">').text(name);
	}

};



FoodItem.prototype.toString= function(){
	return "name: " + this.name + "\n" +
	"calories: " + this.calories +   "\n" +
				 "vegan: " + this.vegan +  "\n" +
				 "gluten_free: " + this.glutenFree + "\n" +
				 "citrus_free: " + this.citrusFree;

}
// FoodItem.prototype.addElem = function () {
// 	return $('<div class="food-item"> </div>').text(name);
// }

var Drink = function (name, description, price) {
	this.name 			= name;
	this.description	= description;
	this.price			=	price;

	this.addElem = function () {
		return $('<div class="drink-item"> ').text(name);
	}
}
Drink.prototype.toString = function() {
return "name: " + this.name + "\n" +
	   "description: " + this.description + "\n" +
	   "price " + this.price;

}
// Drink.prototype.addElem = function(){
// 	return $('div class="drink-item</div>').text(name);
// }

var Plate = function(name, description, price, ingredients) {
	this.name		=	name;
	this.description=	description;
	this.price		=	price;
	this.ingredients=	ingredients;

	this.addElem = function () {
		return $('<div class="plate-item">').text(name);
	}

	
}

// var indianTaco = new Plate ("Indian taco", "seasoned meal", 11, [bean, fryBread]);

// var nachos = new Plate ("Medicine wheel nachos", "mix of chips covered with your choice", 15, [bean, cheese,chips ]);

// Plate.prototype.addElem= function () {
// 	return $('<div class="plate-item"></div>').text(name);
// }
Plate.prototype.toString = function () {
	return  "\n" + "plate " + this.name + "\n" +
	"description: " + this.description + "\n" +
	"price: " + this.price + "\n" +
	"ingredients: " + this.ingredients + "\n";

}

Plate.prototype.isVegan = function () {
	for (var i = 0 ; i< this.ingredients.length; i++) {
		if(!this.ingredients[i].vegan) {
			return false;
		}
	}
			return true;
};

Plate.prototype.isCitrusFree = function () {
	for(var i = 0; i < this.ingredients.length; i++) {
		if(!this.ingredients[i].glutenFree) {
			return false;
		}
	}
	return true;
}

Plate.prototype.isGlutenFree = function () {
	for( var i = 0; i <this.ingredients.length ;i++) {
		if (!this.ingredients [i]) {
			return false;
		}
	}
	return true;
}

// Plate.prototype = {

// 	toString: function (name, description, price, ingredients) {
// 		return "plate " + this.name + "\n" +
// 	"description " + this.description + "\n" +
// 	"price" + this.price + "\n" +
// 	"ingredients " + this.ingredients;
// 	} 

// 	dietaryPref:function (vegan, glutenFree, citrusFree) {
// 		return "available as" + this.vegan " \n" + 
// 		"glutenFree " + this.glutenFree "\n" +
// 		"citrusFree" + this.citrusFree;
// 	}
// }


var Order = function (plates) {
	this.plates	=	plates;
	this.addElem =function() {
		return $('<div class="order-item">').text(plates);
	}
}
Order.prototype.toString = function () {
	return " your order of plates includes " + this.plates;
}
// Order.prototype.addElem = function() {
// 	return $('<div class = "order-item"></div>').text(name);
// }

var Menu = function (plates) {
	this.plates = plates;

	this.addElem = function() {
		return $('<div class="menu-set">').text(plates);
	}
}
Menu.prototype.toString = function (plates) {
	return "plates available: " + "\n" + this.plates;
}
// Menu.prototype.addElem = function(plates) {
// 	// return $('<div class="menu-set"></div>').text(plates);
// 	return "here is my effort" + this.plates;
// }

var Restaurant = function (name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}
Restaurant.prototype.toString = function (name, description, menu) {
	return "Restaurant " + this.name + "\n" +
			"description " +this.description + "\n" +
			"menu " + menu;
}

var Customer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}
Customer.prototype.toString = function () {
	return "dietaryPreference" + this.dietaryPreference;
}

// key ingredients

var cheese	= new FoodItem('chedder', 350, false, false,true);
var bean	= new FoodItem('black bean', 200, true, true, true);
var tomato	= new FoodItem('roma tomato', 100, true, true, false);
var fryBread= new FoodItem('Fry-bread', 1000, false, false, true);
var chips	= new FoodItem('assorted tortilla chips', 500, true, false, true);
var buffalo	= new FoodItem('ground buffalo', 800, false, true, true);
var chicken	= new FoodItem('shredded chicken', 600, false, true, true);

// plate options
var indianTaco = new Plate ("Indian taco", "seasoned meal", 11, [bean, fryBread]);

var nachos = new Plate ("Medicine wheel nachos", "mix of chips covered with your choice", 15, [bean, cheese,chips ]);

var ribs = new Plate ("Buffalo Ribs", "2 smoked and seasoned ribs", 17, [buffalo]);


// drink options

var beer = new Drink ("beer","ice cold ", 6);
var soda = new Drink ("soft drink", "home brewed", 3);



// Menu
var tocabeMenu = new Menu([indianTaco, nachos, ribs]);

// Restaurant
var tocabe = new Restaurant("Tocabe", "Delicious Native American Cuisine", tocabeMenu);

$(document).on('ready', function() {

$('.menu').append('<p>Test </p>');
$('.menu').append(tocabeMenu);






  
});
























