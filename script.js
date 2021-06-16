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

  // Get user length input
  var length = parseFloat(prompt("How long do you want your password be?\nPlease choose an integer value in the range of [8, 128]."));

  // If user cancels out of the prompt, return to home without displaying anything new
  if (!length) {
    return ("");
  }

  // Validate that the input for the length is between the given range and is an integer 
  // value, else provide an error message as to what had been done wrong.
  if (length < 8 || length > 128) {
    alert("Error: Please choose a value in the given range.");
    return "";
  } else if (!Number.isInteger(length)) {
    alert("Error: Please choose an integer value.");
    return "";
  }

  // Get user input for character types. Set to lowercase to compare strings easily.
  var charTypes = prompt("What types of characters do you want to include?\nPlease list at least one of the following:\nLowercase, Uppercase, Numeric, Special");

// If user cancels out of the prompt, return to home without displaying anything new
  if (!charTypes) {
    return ("");
  }

  // Get a string of all possible chars to use in password generation
  var useableChars = getUseableChars(charTypes.toLowerCase());

  // Generate a password using random chars from the string, only to the given length
  var generatedPassword = "";
  for (var i = 0; i < length; i++) {
    generatedPassword += useableChars.charAt(Math.floor(Math.random() * useableChars.length));
  }

  // Return the generated password to display
  return generatedPassword;
}

// Function to evaluate user's input and return a string with all useable chars for password generation
function getUseableChars(userInput) {

  // Declare vars to remember what to include in password generation
  var [lower, upper, numeric, special] = [false, false, false, false];

  // Check input string for char types and assign vars accordingly
  if (userInput.includes('lowercase')) { lower = true; }
  if (userInput.includes('uppercase')) { upper = true; }
  if (userInput.includes('numeric')) { numeric = true; }
  if (userInput.includes('special')) { special = true; }

  // If the user inputs none of the char types, give an error
  if (lower === false && upper === false && numeric === false && special === false) {
    alert("Error: Please inlcude at least one type of character");
    return "";
  }

  // Create char strings to combine based on user criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*(){}[]-?/.,<>";

  // Initialize empty char string to populate
  var useableChars = "";

  // Append char strings to useableChars string based on recorded user input
  if (lower) { useableChars = useableChars + lowercaseChars; }
  if (upper) { useableChars = useableChars + uppercaseChars; }
  if (numeric) { useableChars = useableChars + numericChars; }
  if (special) { useableChars = useableChars + specialChars; }

  // Return the final string containing all valid chars to build the password from
  return useableChars;
}