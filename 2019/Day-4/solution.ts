const lowerLimit = 235741;
const upperLimit = 706948;


const firstBruteForce = (lowerLimit: number, upperLimit: number) => {
    const possiblePasswords: number[] = [];
    for (var i = lowerLimit; i <= upperLimit; i++){
        if (containsRepeatedNumbers(i) && isNumberIncreasing(i)) {
            possiblePasswords.push(i);     
        }
    }
    return possiblePasswords.length;
};

const secondBruteForce = (lowerLimit: number, upperLimit: number) => {
    const possiblePasswords: number[] = [];
    for (var i = lowerLimit; i <= upperLimit; i++) {
        if (containsRepeatedNumbersInSingleGroup(i) && isNumberIncreasing(i)) {
            possiblePasswords.push(i);
        }
    }
    return possiblePasswords.length;
};

const containsRepeatedNumbers = (num: number) => {
    return /(.)\1+/.test(num.toString());
}

const containsRepeatedNumbersInSingleGroup = (num: number) => {
    var matches = num.toString().match(/(.)\1+/g) ?? [];
    for (var i = 0; i < matches.length; i++) {
        if (matches[i].length === 2) {
            return true;
        }
    }
    return false;
}

const isNumberIncreasing = (num: number) => {
    var numbers = num.toString().split('');
    for(var i = 0; i < numbers.length; i++){
        if (i !== 0 && Number(numbers[i]) < Number(numbers[i-1])) {
            return false;
        }
    }
    return true;
}


const firstPart = `First part: ${firstBruteForce(lowerLimit, upperLimit)}` ;
const secondPart = `Second part: ${secondBruteForce(lowerLimit, upperLimit)}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);