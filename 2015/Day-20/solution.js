//noprotect
var input = 29000000 / 10;
var houses = new Uint32Array(input);
var houseNumber = input;

for (var i = 1; i < input; i++) {
  for (var j = i; j < input; j += i) {
    if ((houses[j] += i) >= input && j < houseNumber) houseNumber = j;
  }
}
var houses2 = new Uint32Array(input);
var houseNumber2 = input;

for (var i = 1; i < input; i++) {
  var visits = 0;
  for (var j = i; j < input; j += i) {
    if ((houses2[j] = (houses2[j] || 11) + i * 11) >= input * 10 && j < houseNumber2) houseNumber2 = j;
    visits++;
    if (visits === 50) break;
  }
}

console.log('First part: ' + houseNumber);
console.log('Second part: '+ houseNumber2);