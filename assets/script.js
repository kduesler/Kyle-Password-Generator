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

  if (passwordLength <= 7 || passwordLength >=129 || isNaN(passwordLength)) {
    alert("Your password must be between 8 and 128 characters.");
    return(textcontent[placeholder])
  };

  var lowerCase = confirm("Click OK to use lowercase characters in your password. Click cancel to avoid the use of lowercase characters.");
  var upperCase = confirm("Click OK to use uppercase characters in your password. Click cancel to avoid the use of uppercase characters.");
  var numeric = confirm("Click OK to use numeric characters in your password. Click cancel to avoid the use of numberic characters.");
  var specialChars = confirm("Click OK to use special characters in your password. Click cancel to avoid the use of special characters.");
  var chars = "";
  var genPassword = "";

  if (lowerCase === false && upperCase === false && numeric === false && specialChars === false) {
    alert("Your password must include at least one character type.");
    return(textcontent.placeholder)
  };

  if (lowerCase === true) {
    chars = "abcdefghijklmnopqrstuvwxyz";
  };
 
  if (upperCase === true) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };

  if (numeric === true) {
    chars += "1234567890"
  };

  if (specialChars === true) {
    chars += "!@#$%^&*()_+?><:"
  };

  for (let i = 0; i < passwordLength; i++) {
    const randomChars = chars[Math.floor(Math.random() * chars.length)];
    genPassword = genPassword + randomChars;
  }

  return genPassword;
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