// Pseudocode
/*
1. Click button
2. Prompt password criteria
  2a. choose length of password (8 - 128 characters)
  2b. confirm use of lowercase, 
  2c. cofirm uppercase, 
  2d. numberic, 
  2e. and/or special charaters
3. Validate inputs
4. Generate password matching selected criteria
5. Password displays in an alert or on written page
*/

function generatePassword() {
  var passwordLength = prompt("Choose length of password. Enter a number between 8 - 128 characters");
  var lowerCase = confirm("Click ok to use lowercase characters in your password.");
  var upperCase = confirm("Click OK to use uppercase characters in your password.");
  var numeric = confirm("Click OK to use numeric characters in your password.");
  var specialChars = confirm("Click OK to use special characters in your password.");
  var chars = "";
  var genPassword = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);