// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  var result = prompt("What's your favorite pets name?", "Buddy");

  var length = prompt("How long should the password be?", "Choose between 8-128 characters");

  var charTypes = prompt("What character types do you want to include?");


  return result;
}