// Assignment Code
var generateBtn = document.querySelector("#generate");

//TODO: write 4 arrays: one for lowercase, one upper, and special
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'V'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-', '_', '='];


var include = [];

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
//TODO: ask the user how many characters they want in the password -- use a prompt which will be set to a var -- make sure the infromation is correct -- number -- 8+ or 128-

var lengthChoice = window.prompt("How long do you want your password to be? Answer MUST be between 8 and 128");
if (lengthChoice > 128 || lengthChoice < 8) {
alert("number is not in the parameters");
} else {
console.log(lengthChoice);
}

  
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

//TODO:  write a series of 4 confirms --set these to be a var -- to check if the user wants
var capChoice = confirm("Do you want uppercase letters in your password? Press Okay for yes, or Cancel for no.");
if (capChoice === true) {
  //TODO: check that the prompts true or false --using a var for this -- add the associated arrays to a "holding array" upperConfirm -- true -- upperCase[] -- add to holding []
  include.push('capAlpha')
  console.log("Wants uppercase letters");
} else {
  console.log("No uppercase letters");
}

var lowerChoice = confirm("Do you want any lowercase letters in your password? Press Okay for yes, or Cancel for no.")
if (lowerChoice === true) {
  include.push('lowerAlpha');
  console.log("Wants lowercase letters");
} else {
  console.log("No lowercase letters");
}

var numChoice = confirm("Do you want any numbers in your password? Press Okay for yes, or Cancel for no.")
if (numChoice === true) {
  include.push('num');
  console.log("Wants numbers");

} else {
  console.log("No numbers");
}
// WHEN asked for character types to include in the password

var specialChoice = confirm("Do you want any special characters in your password? Press Okay for yes, or Cancel for no.")
if (specialChoice === true) {
  include.push('symbol');
  console.log("Wants special characters");
} else {
  console.log("No special characters");
}

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters



function generatePassword() {

  return "password"
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//TODO: write the generatePassword function








// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
//TODO: check that we have at least one of the types
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
//TODO: take our holding array and randomize the characters -- adding to a second array

//TODO: take the randomized characters and select the amount that the user has chosen for the password length -- add these to a "return array" -- create a for loop -- the length for this will be the user password length
// WHEN the password is generated
// THEN the password is either displayed written to the page
//TODO:  take our return array and use array methods to convert to a string -- have a var for this and return string