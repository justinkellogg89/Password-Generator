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

var pwLength = prompt(
  "How long would you like your password to be? (Between 8 and 128 characters)"
);
var useUpperCase = confirm("Would you like to use upper case letters?");
var useLowerCase = confirm("Would you like to use lower case letters?");
var useNumbers = confirm("Would you like to use numbers?");
var useSpecials = confirm("Would you like to use special characters?");

confirm(
  "Your password will contain the following:" +
    "Password Length = " +
    pwLength +
    "\nUse Upper Case Characters = " +
    useUpperCase +
    "\nUse Lower Case Characters = " +
    useLowerCase +
    "\nUse Number Characters = " +
    useNumbers +
    "\nUse Special Characters = " +
    useSpecials +
    " " +
    "\nIs this correct?"
);

function generatePassword(pwLength, passwordCriteria) {
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numberCharacters = "123456789";
  var specialCharacters = "!@#$%^&*()-=";

  var passwordCriteria = useUpperCase + useLowerCase + useNumbers + useSpecials;

  for (i = 0; i < pwLength; i++) {
    var character = Math.floor(Math.random() * passwordCriteria.pwlength);
    passwordText.value += passwordCriteria.substring(character, character + 1);

    return password;
  }
}
