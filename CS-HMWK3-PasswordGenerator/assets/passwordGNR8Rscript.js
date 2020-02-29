// Variables & Arrays
var inputLength 
var confirmNumber 
var confirmSpecAscii
var confirmUpperCase 
var confirmLowerCase 
var pwCriteria

var number ="1234567890".split("")
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("") 
var specAscii = "!#$%&()*+,-./:;<=>?@[\]^_{|}~".split("")

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

// Initial prompt for password length
  inputLength= prompt("Please choose a length between 8 and 128 characters for your password");

// If no value entered
  if (!inputLength) {
    alert("Value needed");
  }
  // Check if password length valid
  else if (inputLength < 8 || inputLength > 128) {
    prompt("Please choose between 8 and 128");
  }  
  // Confirm specific password characters
  else {
    confirmNumber= confirm("Will your password contain numbers?");
    confirmSpecAscii= confirm("Will you password contain special characters?"); 
    confirmUpperCase= confirm("Will your password contain uppercase letters?");
    confirmLowerCase= confirm("Will your password contain lowercase letters?");
  }; 
  // If all the confirm options are false/negative
  if (!confirmNumber && !confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria= alert("At least one option must be chosen!");
  } 
  // If ALL the confirm options are chosen
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(specAscii,upperCase,lowerCase);
  }
  // If only three confirm options are chosen
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && !confirmLowerCase) {
    pwCriteria= number.concat(specAscii,upperCase);
  }
  else if (confirmNumber && confirmSpecAscii && !confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(specAscii,lowerCase);
  }
  else if (confirmNumber && !confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= number.concat(upperCase,lowerCase);
  } 
  else if (!confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria= specAscii.concat(upperCase,lowerCase);
  } 
  // If only two confirm options are chosen
  else if (confirmNumber && confirmSpecAscii && !confirmUpperCase && !confirmLowerCase) {
    pwCriteria = number.concat(specAscii);
  }
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria = ;
  }
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria = ;
  }
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria =;
  }
  else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria = ;
  }
   else if (confirmNumber && confirmSpecAscii && confirmUpperCase && confirmLowerCase) {
    pwCriteria = ;
  }
}