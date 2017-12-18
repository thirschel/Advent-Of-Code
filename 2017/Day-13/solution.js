const input = ['0: 3', '1: 2', '2: 4', '4: 4', '6: 5', '8: 6', '10: 6', '12: 8', '14: 6', '16: 6', '18: 9', '20: 8', '22: 8', '24: 8', '26: 12', '28: 8', '30: 12', '32: 12', '34: 12', '36: 10', '38: 14', '40: 12', '42: 10', '44: 8', '46: 12', '48: 14', '50: 12', '52: 14', '54: 14', '56: 14', '58: 12', '62: 14', '64: 12', '66: 12', '68: 14', '70: 14', '72: 14', '74: 17', '76: 14', '78: 18', '84: 14', '90: 20', '92: 14'];

const parseInput = (i)=>{
  var regex  = /(\d+): (\d+)/;
  const parsed = i.match(regex);
  return [parseInt(parsed[1]), parseInt(parsed[2])];
}

const layers = input.map(i=>parseInput(i));

var delay = 0;
const foundByScanner = (delay, layer) => (delay + layer[0]) % (2 * (layer[1] - 1)) === 0;
const severity = delay => layers.filter(l=>foundByScanner(delay, l)).reduce((n, l) => n + l[0] * l[1], 0);

while(layers.some(l=>foundByScanner(delay,l))){
	delay++;
};

console.log(`First Part: ${severity(0)}`);
console.log(`First Part: ${delay}`);
