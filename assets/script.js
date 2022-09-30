// Arrays variables for the different cases allowed and empty password string 
const lowerList=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericList=["0","1","2","3","4","5","6","7","8","9"];
const specialList=[" ","!",'"',"#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",'\\',"]","^","_","`","{",
"|","}","~"]
var passString= "";


//Function to generate password that prompts user
function generatePassword(){
  var charGenerator=0;
  var passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  //checks to see if inputted password size is allowed
  while (passSize<8 || passSize>128){
    alert("Incorrect size selection please pick between 8 to 128 characters");
    passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  }
  
  var lowercase= confirm("Click ok to include lowecase click cancel to exclude");
  var uppercase= confirm("Click ok to include uppercase click cancel to exclude");
  var numeric= confirm("Click ok to include numbers click cancel to exclude");
  var specialChar=confirm("Click ok to include special characters click cancel to exclude");
  //checks to see if at least one of the character sets allowed was selected
  while(lowercase==false&&uppercase==false&&numeric==false&&specialChar==false){
    alert("You must choose at least one case of characters");
    var lowercase= confirm("Click ok to include lowecase click cancel to exclude");
    var uppercase= confirm("Click ok to include uppercase click cancel to exclude");
    var numeric= confirm("Click ok to include numbers click cancel to exclude");
    var specialChar=confirm("Click ok to include special characters click cancel to exclude");
  }
  //loop to add a random char from the allowed lists until password length is reached
  while(charGenerator<passSize){
    if(lowercase==true){
      charGenerator++;
      passString+=lowerList[Math.floor(Math.random()*lowerList.length)];
      

    };
   if(uppercase==true){
      charGenerator++;
      passString+=upperList[Math.floor(Math.random()*upperList.length)];
      
      
    };
    if(numeric==true){
      charGenerator++;
      passString+=numericList[Math.floor(Math.random()*numericList.length)];
      

    };
    if(specialChar==true){
      charGenerator++;
      passString+=specialList[Math.floor(Math.random()*specialList.length)];
    };

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
