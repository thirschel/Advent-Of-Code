var input = [17, 1, 3, 16, 19, 0];
var playNumberGame = function (startingNumbers, rounds) {
    var spokenNumbers = new Map();
    var lastNumberSpoken;
    for (var i = 0; i < rounds; i++) {
        if (i < startingNumbers.length) {
            spokenNumbers.set(startingNumbers[i], i + 1);
            lastNumberSpoken = startingNumbers[i];
        }
        else {
            if (spokenNumbers.has(lastNumberSpoken) && spokenNumbers.get(lastNumberSpoken) !== i) {
                var newNumber = i - spokenNumbers.get(lastNumberSpoken);
                spokenNumbers.set(lastNumberSpoken, i);
                lastNumberSpoken = newNumber;
            }
            else {
                spokenNumbers.set(lastNumberSpoken, i);
                lastNumberSpoken = 0;
            }
        }
    }
    return lastNumberSpoken;
};
var firstPart = "First part: " + playNumberGame(input, 2020);
var secondPart = "Second part: " + playNumberGame(input, 30000000);
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map