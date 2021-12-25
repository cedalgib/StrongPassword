"use strict";
/* Cederick Gibbs
   Password Generator
   October 24, 2021
*/
var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    var input = $("num").value; //Variable for user input
	var pword=""; //Variable for password output
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
	
	if(isNaN(input) || input=="") { //Data validation
		//If value entered is invalid
		alert("Please enter a valid number");
		clearFields();
	}else{// Value is valid
		for(let i = 0; i < input; i++) { //Loop for random char
			var ranNum = getRandomNumber(chars.length-1); //Gets random char from char variable
			pword += chars[ranNum]; //Concatenates char to password variable
		}
	}
	$("password").value = pword; 
};

var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};