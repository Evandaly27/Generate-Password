// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];


characterNumber = prompt("How many characters would you like to have in your password? 8-128.");
if (characterNumber < 8 || characterNumber > 128) {
  return "Please choose an accurate number.";
} else if (isNaN(characterNumber)) {
  characterNumber = prompt("Please enter an accurate number.");
}
else {
  alert("The password will be " + characterNumber + " characters long.");
}

lowercaseowercase = confirm("Would you like to include lowercase characters?");
if (lowercase) {
  var lowercaseCharacters = alert("The password will include lowercase characters.");
}
else {
  alert("The password will not include lowercase characters.");
}

uppercase = confirm("Would you like to include uppercase characters?");
if (uppercase) {
  alert("The password will include uppercase characters.");
}
else {
  alert("The password will not include uppercase characters.");
}

numbers = confirm("Would you like to include numbers?");
if (numbers) {
  alert("The password will include numbers.");
}
else {
  alert("The password will not include numbers.");
}

specialCharacters = confirm("Would you like to include special characters?");
if (specialCharacters) {
  alert("The password will include special characters.")
}
else {
  alert("The password will not inculde special characters.")
}
if (lowercase === false && uppercase === false && numbers === false && specialCharacters === false){
  return "Please select at least one type of character"
}

if (lowercase) {
  possibleCharacters = possibleCharacters.concat(lowercase);
}
if (uppercase) {
  possibleCharacters = possibleCharacters.concat(uppercase);
}
if (numbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (specialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}

let finalPassword = ""
for (let idx = 0; idx < characterNumber; idx++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  finalPassword = finalPassword + possibleCharacters[rng];
}
return finalPassword;

};

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


//special functions like event listeners 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










