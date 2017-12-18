var genAValue = 883;
var genBValue = 879;
const divider = 2147483647;
const genAFactor = 16807;
const genBFactor = 48271;
const nextValue = (prev, factor) => prev * factor % divider;

var matchingPairs = 0;
var secondMatchingPairs = 0;
for(var i=0;i<40000000;i++){
	genAValue = nextValue(genAValue,genAFactor);
	genBValue = nextValue(genBValue,genBFactor);
	matchingPairs += (genAValue & 0xFFFF) === (genBValue &0xFFFF);
}

genAValue = 883;
genBValue = 879;
for(var i=0;i<5000000;i++){
	do {genAValue = nextValue(genAValue,genAFactor);}while(genAValue & 3);	
	do {genBValue = nextValue(genBValue,genBFactor);}while(genBValue & 7);
	secondMatchingPairs += (genAValue & 0xFFFF) === (genBValue &0xFFFF);
}
console.log(`First Part: ${matchingPairs}`);
console.log(`Second Part: ${secondMatchingPairs}`);