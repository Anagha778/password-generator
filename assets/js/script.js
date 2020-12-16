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


//Function to accept Character type from user and validate it 
var acceptcharType = function()
{ //Provide choice to user to select character type
  var promptcharType = window.prompt("Please enter type of characters, select from following choices (1 or 2):\n"+
                                      "1 : lowercase,uppercase characters and numbers\n"+
                                      "2 : lowercase,uppercase characters, numbers and special characters ");
  while (promptcharType===null)//If user select Cancel, come out of program
  { 
   return 1;
  }

  switch (parseInt(promptcharType)){
    case 1:
      var promptPassStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return promptPassStr;
      break;
    case 2:
      var promptPassStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      return promptPassStr;
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      return 0;
      break;
  }  
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
