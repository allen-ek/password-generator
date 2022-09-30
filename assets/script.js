// Assignment code here




function generatePassword(){
  var passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  while (passSize<8 || passSize>128){
    alert("Incorrect size selection please pick between 8 to 128 characters");
    passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  }
  
  var lowercase= confirm("Click ok to include lowecase click cancel to exclude");
  var uppercase= confirm("Click ok to include uppercase click cancel to exclude");
  var numeric= confirm("Click ok to include numbers click cancel to exclude");
  var specialChar=confirm("Click ok to include special characters click cancel to exclude");
  
  while(lowercase==false&&uppercase==false&&numeric==false&&specialChar==false){
    alert("You must choose at least one case of characters");
    var lowercase= confirm("Click ok to include lowecase click cancel to exclude");
    var uppercase= confirm("Click ok to include uppercase click cancel to exclude");
    var numeric= confirm("Click ok to include numbers click cancel to exclude");
    var specialChar=confirm("Click ok to include special characters click cancel to exclude");
  }
  
  if(lowercase==true){

  }
  else if(uppercase==true){

  }
  else if(numeric==true){

  }
  else if(specialChar==true){

  }

  else{

  }

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
