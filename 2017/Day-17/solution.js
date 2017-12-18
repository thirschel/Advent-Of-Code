const input = 329;
const spinLock = [0]; 

var currentPos = 0;
for (var i=1;i < 2018; i++){
	currentPos = (currentPos + input) % spinLock.length;
	if(spinLock[currentPos + 1] !== undefined){
		spinLock.splice(currentPos + 1, 0, i);
	}
	else{
		spinLock.push(i);
	}
	currentPos += 1;
}
console.log(`Second Part: ${spinLock[spinLock.findIndex(i=>i===0) + 1]}`);

currentPos = 0;
var secondPart;
for (var i=0;i < 50000000; i++){
	currentPos = (currentPos + input + 1) % (i + 1);
	secondPart = currentPos === 0 ? i + 1 : secondPart;
}

console.log(`Second Part: ${secondPart}`);