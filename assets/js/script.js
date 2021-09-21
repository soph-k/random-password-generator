var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordLength = prompt("Choose a password that is between 8 and 128 characters long.");
  var characterLimit = parseInt(passwordLength, 10);
  if(isNaN(characterLimit) || characterLimit < 8 || characterLimit > 128) {
    alert("Error! You must choose a passwood that is between 8 and 128 numbers long.");
      return "Error, generate password again";
  }
  else {
  }

  var upperCaseCharactersQuestion = confirm("Would you like to have upper case characters in your password?");
  var lowerCaseCharactersQuestion = confirm("Would you like to have lower case characters in your password?");
  var numericalCharactersQuestion = confirm("Would you like to have you want numbers in your password?");
  var speicalCharactersQuestion = confirm("Would you like to have special characters in your password?");
  if (upperCaseCharactersQuestion === false && lowerCaseCharactersQuestion === false && numericalCharactersQuestion === false && speicalCharactersQuestion === false) {
    alert("Use at least one character type.");
      return "Error, generate password again";
  }
  else {
  }

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

  var finalPassword;
  for (var i = 0; i < characterLimit; i++) {
    finalPassword = charactersGenerated[Math.floor(Math.random() * charactersGenerated.length)];
      return finalPassword;
  }
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


