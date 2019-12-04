var lowerLimit = 235741;
var upperLimit = 706948;
var firstBruteForce = function (lowerLimit, upperLimit) {
    var possiblePasswords = [];
    for (var i = lowerLimit; i <= upperLimit; i++) {
        if (containsRepeatedNumbers(i) && isNumberIncreasing(i)) {
            possiblePasswords.push(i);
        }
    }
    return possiblePasswords.length;
};
var secondBruteForce = function (lowerLimit, upperLimit) {
    var possiblePasswords = [];
    for (var i = lowerLimit; i <= upperLimit; i++) {
        if (containsRepeatedNumbersInSingleGroup(i) && isNumberIncreasing(i)) {
            possiblePasswords.push(i);
        }
    }
    return possiblePasswords.length;
};
var containsRepeatedNumbers = function (num) {
    return /(.)\1+/.test(num.toString());
};
var containsRepeatedNumbersInSingleGroup = function (num) {
    var _a;
    var matches = (_a = num.toString().match(/(.)\1+/g), (_a !== null && _a !== void 0 ? _a : []));
    for (var i = 0; i < matches.length; i++) {
        if (matches[i].length === 2) {
            return true;
        }
    }
    return false;
};
var isNumberIncreasing = function (num) {
    var numbers = num.toString().split('');
    for (var i = 0; i < numbers.length; i++) {
        if (i !== 0 && Number(numbers[i]) < Number(numbers[i - 1])) {
            return false;
        }
    }
    return true;
};
var firstPart = "First part: " + firstBruteForce(lowerLimit, upperLimit);
var secondPart = "Second part: " + secondBruteForce(lowerLimit, upperLimit);
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map