// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
var allChars = [upperCase, lowerCase, numbers, specialChars];

// Write password to the #password input
function writePassword() {

  var criteria = {
    pwLength: prompt("How long would you like your password to be? (Between 8 and 128 characters)"),
    useUpperCase: confirm("Would you like to use upper case characters?"),
    useLowerCase: confirm("Would you like to use lower case characters?"),
    useNumbers: confirm("Would you like to use numeric characters"),
    useSpecialChars: confirm("Would you like to use special characters?")
  }

  // var confirmed = confirm(
  //   "Your password will contain the following:" +
  //   "Password Length = " +
  //   criteria.pwLength +
  //   "\nUse Upper Case Characters = " +
  //   criteria.useUpperCase +
  //   "\nUse Lower Case Characters = " +
  //   criteria.useLowerCase +
  //   "\nUse Number Characters = " +
  //   criteria.useNumbers +
  //   "\nUse Special Characters = " +
  //   criteria.useSpecialChars +
  //   " " +
  //   "\nIs this correct?"
  // );

  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(criteria) {
  var password = "";

  if (criteria.useUpperCase) {
    password += getRandomValue(upperCase);
  }
  if (criteria.useLowerCase) {
    password += getRandomValue(lowerCase);
  }
  if (criteria.useSpecialChars) {
    password += getRandomValue(specialChars);
  }
  if (criteria.useNumbers) {
    password += getRandomValue(numbers);
  }

  var length = parseInt(criteria.pwLength) - password.length

  for (let i = 0; i < length; i++) {
  }

  return password;
}

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

