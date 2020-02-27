var input
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

  input = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128")); 
  
  if (!input) {
    alert("Value needed");
  }
  
  else if (input < 8 || input > 128) {
    parseInt(prompt("You must choose between 8 and 128"));
  }
}
