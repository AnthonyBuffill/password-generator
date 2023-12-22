// Assignment Code
var generateBtn = document.querySelector("#generate");


const generateButton = document.getElementById('generateBtn')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  const passwordLength = prompt("Please enter the number of characters you want for you new password.  *MUST BE BETWEEN 8 and 128 Characters");
     
  var numberchars = confirm("Do you want numbers in your password?");

  var includedlowerCases = confirm("Do you want lowercases in your password?");

  var includeupperCases = confirm("Do you want uppercases in your password?");

  var includedspecial = confirm("Do you want special characters in your password?");


  const numbers = ["1","2","3","4","5","6","7","8","9","0"];
  
  const lowercases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  const uppercases = ["A","B","C","D","E","F","G","H","J","K","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  const specialCharacters = ["!","@","#","$","%","&","*"];
   
  let allcharacters = numbers.concat(lowercases, uppercases, specialCharacters) ;
  let charLength = Math.floor(Math.random()[7,127]);
  
 console.log(allcharacters)  


  function createpassword() {
    let password = "";
    
     for (let i= 0; i < passwordLength; i++){
      
      password += allcharacters[Math.floor(Math.random() * allcharacters.length)]
     }
     
     return password}


  while(length = charLength) {
    password += allcharacters[Math.floor(Math.random() * allcharacters.lengh)]
  }
return createpassword()

}