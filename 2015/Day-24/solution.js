var Combinatorics = require('js-combinatorics');
const input = [1, 3, 5, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
const firstPartGroupWeight = input.reduce((total, x) => total + x, 0) / 3;
const secondPartGroupWeight = input.reduce((total, x) => total + x, 0) / 4;
const firstGroups = [];
const secondGroups = [];
var minGroupSize;
var total=0;

for(var i=input.length -1;i>=0;i--){
  total += input[i];
  if(total >= secondPartGroupWeight){
    minGroupSize = input.length - i;
    break;
  }
}
for (var i = minGroupSize; firstGroups.length === 0 || secondGroups.length === 0; i++) {
  var combinations = Combinatorics.combination(input, i);
   combinations.forEach(combo=> {
    if (combo.reduce((present, x) => present + x,0) === firstPartGroupWeight){
      firstGroups.push(combo);
    } 
    if (combo.reduce((present, x) => present + x,0) === secondPartGroupWeight){
      secondGroups.push(combo);
    } 
  })
}

const firstPart = Math.min.apply(Math,firstGroups.map(pkg => pkg.reduce((acc, x) => acc * x)));
const secondPart = Math.min.apply(Math,secondGroups.map(pkg => pkg.reduce((acc, x) => acc * x)));

console.log('First part: '+firstPart);
console.log('Second part: '+secondPart);