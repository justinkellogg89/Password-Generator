// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Write password to the #password input
function writePassword() {
  var criteria = {
    useUpperCase: confirm("Would you like to use upper case characters?"),
    useLowerCase: confirm("Would you like to use lower case characters?"),
    useNumbers: confirm("Would you like to use numeric characters"),
    useSpecialChars: confirm("Would you like to use special characters?")
  }

  while (criteria.pwLength < 8 || criteria.pwLength > 128 || criteria.pwLength === undefined) {
    criteria.pwLength = prompt("How long would you like your password to be? (Between 8 and 128 characters)");
  }

  alert(
    "Your password will contain the following:" +
    "\nPassword Length = " +
    criteria.pwLength +
    "\nUse Upper Case Characters = " +
    criteria.useUpperCase +
    "\nUse Lower Case Characters = " +
    criteria.useLowerCase +
    "\nUse Number Characters = " +
    criteria.useNumbers +
    "\nUse Special Characters = " +
    criteria.useSpecialChars +
    " " +
    "\nAbove are parameters you selected. If these are correct click OK, if not, please click OK and refresh the page (CMD+R on Mac and F5 on Windows)."
  );

  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(criteria) {
  var password = "";
  var length = parseInt(criteria.pwLength)
  var i = 0;

  do {
    if (i < length && criteria.useUpperCase) {
      password += getRandomValue(upperCase);
      i++;
    }
    if (i < length && criteria.useLowerCase) {
      password += getRandomValue(lowerCase);
      i++;
    }
    if (i < length && criteria.useSpecialChars) {
      password += getRandomValue(specialChars);
      i++;
    }
    if (i < length && criteria.useNumbers) {
      password += getRandomValue(numbers);
      i++;
    }
  } while (i < length);

  return password;
}

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

