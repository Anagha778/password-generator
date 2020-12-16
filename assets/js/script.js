// Assignment code here

//Function to accept length from user and validate it

var acceptLength = function()
{ //Provide prompt to user to enter password length
  var promptLength = window.prompt("Please enter length of the password, length can be between 8 to 128 characters");
  
  while(promptLength===null)//If user select Cancel, come out of program
  { return 1;
  }
  
  if (parseInt(promptLength) < 8 || parseInt(promptLength) > 128 || promptLength ==="")
  {
    window.alert("Please enter number between 8 to 128.");
    return 0;
  }

  return promptLength;
};

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
