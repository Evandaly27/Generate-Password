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

// Arrays with every character to be used in the password.
function generatePassword() {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = []; // used later to store the character sets from the preferences selected.


characterNumber = prompt("How many characters would you like to have in your password? 8-128."); // prompts user to pick how many characters they would like
if (characterNumber < 8 || characterNumber > 128) {
  return "Please choose an accurate number."; // if the user pick a number outside 8 - 128 the message "Please choose an accurate number will appear"
} else if (isNaN(characterNumber)) {
  characterNumber = prompt("Please enter an accurate number."); // another check to make sure an accurate number was inputed.
}
else {
  alert("The password will be " + characterNumber + " characters long."); // alerts the user how many character long the password will be after going through the if and else if checks. 
}

hasLowercase = confirm("Would you like to include lowercase characters?"); // gives the user a choice to choose if they would like lowercase letters in the password.
if (hasLowercase) {
   alert("The password will include lowercase characters."); // this message will appear if the user pressed "okay" and wants to include lowercase characters
}
else {
  alert("The password will not include lowercase characters."); // if the user clicked cancel meaning they did not want the lowercase characters, this message will appear. 
}

hasUppercase = confirm("Would you like to include uppercase characters?"); // Prompts the user to select if they would like uppercase letters included.
if (hasUppercase) {
  alert("The password will include uppercase characters."); // this message will appear if the user pressed "okay"
}
else {
  alert("The password will not include uppercase characters."); // this message will appear if the user pressed "cancel"
}

hasNumbers = confirm("Would you like to include numbers?"); // prompts the user to select if they would like to include numbers
if (hasNumbers) {
  alert("The password will include numbers."); // message will appear if the user pressed "okay"
}
else {
  alert("The password will not include numbers."); // this message will appear if the user pressed "cancel"
}

hasSpecial = confirm("Would you like to include special characters?"); // Prompts the user to select if they would like special characters included.
if (hasSpecial) {
  alert("The password will include special characters."); // message will appear if the user pressed "okay"
}
else {
  alert("The password will not inculde special characters."); // this message will appear if the user pressed "cancel"
}
if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false){ // checks to see if any of the following statements are true. if all the statements are false the return message will display. 
  return "Please select at least one type of character"
}

if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercase); // checks if lowercase is true. concat then adds the lowercase characters to the possibleCharacters array
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercase); // checks if uppercase is true. concat adds that to the possibleCharacters array 
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers); // checks if numbers is true. concat adds that to the possibleCharacters array
}
if (specialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters); // checks if special characters is true. concat adds that to the possibleCharacters array
}  // if any are false they are not added to the possibleCharacters array

let finalPassword = ""; // this is an empty string. the generated password is stored here 
for (let idx = 0; idx < characterNumber; idx++) { // let idx = 0 sets the variable to 0 and keeps track of the current iteration of the loop. the loop will continue to run as long as idx is less than the characterNumber. 
  let rng =[Math.floor(Math.random() * possibleCharacters.length)]; // rng generates a random number between 0 and the possibleCharacters array. math.random generates a random number between 0 and 1. math.floor takes the nearest whole number and multiplies it by the possibleCharacters.length.
  finalPassword = finalPassword + possibleCharacters[rng]; // adds the character at random from the possibleCharacters array 
}
return finalPassword; // password is generated 

};

var generateBtn = document.querySelector("#generate"); // generateBtn is decalred using 'var'. generateBtn references the html element id 'generate' and will be used with the eventListener towards the bottom. 


function writePassword() { // declares a new function. 
  var password = generatePassword(); // generatePassword function generates a new password and is stored in the password variable.
  var passwordText = document.querySelector("#password"); // uses querySelector to find the id 'password' in the html doc. takes the css selector and returns the matching element.
  
  passwordText.value = password; // passwordText = id password. password is the variable where the password is generated from the generatePassword() function.
  
}


//special functions like event listeners 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // generateBtn is the variable that represents the button. addEvenetListener gets attached the that button. "click" is the event type and responds on a click. writePassword is activated when the click event occurs and the event is called. 










