// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// write characters needed for each set variable
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["!","@","#","$","%","^","&","*","+"];
var pool = [];
var newpassword = [];
// Invalid Password if letters or special characters are inserted
function genPASS () {
  var plength = prompt("How long would you like your password to be?")
  if(plength===null){
    alert("Invalid Password")
    return "";
  }
  if(!(plength<=128 && plength>=8)){
    alert("Password must be between 8 and 128 characters")
    return ""
  }
  // special var names for each confirm messsage 
  var confirmoL = confirm("Would you like lowercase characters in your password?")
  var confirmoU = confirm("Would you like uppercase characters in your password?")
  var numeros = confirm("Would you like numbers in your password?")
  var especial = confirm("Would you like special characters in your password?")

  if(confirmoL===true){
    pool = pool.concat(lowercase)
  }
  if(confirmoU===true){
    pool = pool.concat(uppercase)
  }
  if(numeros===true){
    pool = pool.concat(numbers)
  }
  if(especial===true){
    pool = pool.concat(special)
  }
console.log(pool)
// setting i value to true value 
for(var i= 0; i < plength; i++){
  var indexvalue = Math.floor(Math.random()*pool.length)
  var charactervalue= pool[indexvalue]
  newpassword.push(charactervalue)
  console.log(newpassword)
}



  return newpassword.join("")
}
function writePassword() {
  var password = genPASS();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
