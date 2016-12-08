const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');

var firstPart = 0;
var secondPart = 0;

input.split('\n').forEach(i) {
	part1 += i.length - eval(i).length;
	part2 += JSON.stringify(i).length - i.length;
})
console.log('First part: "+firstPart);
console.log('Second part: "+secondPart);