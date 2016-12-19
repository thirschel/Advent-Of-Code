//https://youtu.be/uCsD3ZGzMgE

const input = 3018458;

const secondPart = (input) =>{
    var highestPower = Math.pow(3, Math.floor(Math.log(input) / Math.log(3)));
    if (highestPower === input){
      return highestPower;
    } 
    else if (highestPower >= input / 2){
      return input - highestPower;
    } 
    return highestPower + (2 * (input - 2 * highestPower));
}
    
console.log('First part: ' + parseInt((input).toString(2).slice(1) + (input).toString(2).slice(0, 1), 2));
console.log('Second part: ' + secondPart(input))