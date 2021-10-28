// Author: DearSO
// GitHub: https://github.com/soph-k
// Description: Sophk Security Password Generator 

var generateBtn = document.querySelector("#generate");

// Determins how long the password your would like to be from a range of 8 to 128 characters
function generatePassword() {
  var passwordLength = window.prompt("Choose a password that is between 8 and 128 characters long."); // Ask user user their preference
  var characterLimit = parseInt(passwordLength); 
  if(isNaN(characterLimit) || characterLimit < 8 || characterLimit > 128) { //Makes sure that the user in put is a number between 8 and 128 characters
    alert("Error! You must choose a passwood that is between 8 and 128 numbers long.");
      return generatePassword ; //If user entered incorrect input it will return user
  }
  else { //If user enters correct selection than it will continue user to the next part of the function
  }

  // Asks user about what kind of characters they would like to have for their password through a ok or cancel interface 
  var upperCaseCharactersQuestion = window.confirm("Would you like to have upper case characters in your password?");  // Asks user if they would like to have upper case characters
  var lowerCaseCharactersQuestion = window.confirm("Would you like to have lower case characters in your password?"); // Asks user if they would like to have lower case characters
  var numericalCharactersQuestion = window.confirm("Would you like to have you want numbers in your password?"); // Asks user if they would like to have numerical characters
  var speicalCharactersQuestion = window.confirm("Would you like to have special characters in your password?"); // Asks user if they would like to have special characters
  // If user did not select and option it will give the user an error message
  if (upperCaseCharactersQuestion === false && lowerCaseCharactersQuestion === false && numericalCharactersQuestion === false && speicalCharactersQuestion === false) { 
    alert("Use at least one character type.");
      return generatePassword; //If user choses zero character types than it will returen user to the first question 
  }
  else {//If user enters correct selection than it will continue user to the next part of the function
  }

  // Array of options for each of the four different type of character that the user can select
  var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseCharacters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numercialCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", ".", ",", ":", ";", "/", "|", "?", "{", "}", "'", "]", "[", "!", "~", "~"];
  
  var charactersGenerated = [];
  if (upperCaseCharactersQuestion){
    charactersGenerated = charactersGenerated.concat(upperCaseCharacters);
  }
  if (lowerCaseCharactersQuestion){
    charactersGenerated = charactersGenerated.concat(lowerCaseCharacters);
  }
  if (numericalCharactersQuestion){
    charactersGenerated = charactersGenerated.concat(numercialCharacters);
  }
  if (speicalCharactersQuestion){
    charactersGenerated = charactersGenerated.concat(specialCharacters);
  }

  // Creates random password based upon criteria and password length that was choosen by the user
  var finalPassword = [];
  for (var i = 0; i < characterLimit; i++) {
    finalPassword += charactersGenerated[Math.floor(Math.random() * charactersGenerated.length)];
    window.alert("Your password has been created");
    return finalPassword;
  } 
}


// Add event listener to generate button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
