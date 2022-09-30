// Assignment code here
const lowerList=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericList=["0","1","2","3","4","5","6","7","8","9"];
const specialList=[];
var passString= "";



function generatePassword(){
  var charGenerator=0;
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
  while(charGenerator<passSize){
    if(lowercase==true){
      charGenerator++;
      passString+=lowerList[Math.floor(Math.random()*lowerList.length)];
      console.log(passString);

    }
    else if(uppercase==true){
      charGenerator++;
      passString+=upperList[Math.floor(Math.random()*upperList.length)];
      
    }
    else if(numeric==true){
      charGenerator++;
      var tempChar=[Math.floor(Math.random()*numericList.length)];
      passString.push(tempChar);

    }
    else if(specialChar==true){
      charGenerator++;
      var tempChar=[Math.floor(Math.random()*specialList.length)];
      passString.push(tempChar);

    }

  }
  return passString;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value);
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
