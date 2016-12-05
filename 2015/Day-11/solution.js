//noprotect

String.prototype.replaceAt=function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length);
}
 
var input = 'hepxcrrq';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var testPassword = (potentialPassword) =>{  
    var foundSequential = false;
    potentialPassword.split('').map(char => char.charCodeAt(0)).forEach((char,i, arr)=>{ 
        if (char + 1 === arr[i+1] && char + 2 === arr[i+2]){
          foundSequential = true;  
        } 
    });  
    if(/(l|i|o)/.test(potentialPassword)) return false;
    if(!potentialPassword.match(/([a-zA-Z])\1/g) || potentialPassword.match(/([a-zA-Z])\1/g).length < 2) return false;
    if(potentialPassword === input) return false;
    return foundSequential && true;   
}

var generateNewPassword = (currentPassword)=>{
    var currentLetter = currentPassword.slice(-1);
    var nextLetter = currentLetter === 'z' ? 'a' : String.fromCharCode(currentLetter.charCodeAt(0) + 1);
    return nextLetter === 'a' ? generateNewPassword(currentPassword.slice(0, -1)) + 'a' : currentPassword.slice(0, -1) + nextLetter;
}

var firstPart = input;
var secondPart = 'hepxxyzz';
while(!testPassword(firstPart)){
  firstPart = generateNewPassword(firstPart);
}
while(!testPassword(secondPart) || secondPart === 'hepxxyzz'){
  secondPart = generateNewPassword(secondPart);
}
console.log('First part: ' + firstPart)
console.log('Second part: ' + secondPart)
