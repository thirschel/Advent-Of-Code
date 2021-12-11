var input = [[8, 2, 6, 1, 3, 4, 4, 6, 5, 6], [7, 7, 7, 3, 3, 5, 1, 1, 7, 5], [7, 5, 2, 7, 8, 5, 6, 8, 5, 2], [1, 7, 6, 3, 6, 1, 4, 6, 7, 3], [8, 6, 7, 4, 5, 5, 6, 7, 4, 3], [6, 8, 5, 3, 3, 8, 2, 1, 5, 3], [4, 1, 3, 5, 8, 5, 2, 3, 8, 8], [2, 8, 4, 6, 7, 1, 5, 5, 2, 2], [7, 4, 7, 7, 4, 2, 5, 8, 6, 3], [4, 7, 2, 3, 8, 8, 8, 8, 8, 8]];
var neighbors = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1, -1], [-1, 1], [1, 1], [1, -1]].map(function (p) { return ({ x: p[0], y: p[1] }); });
var countFlashes = function (octopi, steps) {
    var numberOfFlashes = 0;
    for (var i = 0; i < steps; i++) {
        var state = step(JSON.parse(JSON.stringify(octopi)));
        octopi = state.octopi;
        numberOfFlashes += state.numberOfFlashes;
    }
    return numberOfFlashes;
};
var step = function (octopi) {
    var numberOfFlashes = 0;
    var energyLevelsToReset = new Set();
    var chargedOctopi = new Set();
    for (var y = 0; y < octopi.length; y++) {
        for (var x = 0; x < octopi[y].length; x++) {
            octopi[y][x]++;
            if (octopi[y][x] > 9) {
                energyLevelsToReset.add("".concat(x, ",").concat(y));
                chargedOctopi.add("".concat(x, ",").concat(y));
            }
        }
    }
    while (chargedOctopi.size) {
        var newChargedOctopi = new Set();
        chargedOctopi.forEach(function (octopusStr) {
            numberOfFlashes++;
            var octopus = indexToPoint(octopusStr);
            for (var j = 0; j < neighbors.length; j++) {
                var newX = octopus.x + neighbors[j].x;
                var newY = octopus.y + neighbors[j].y;
                if (octopi[newY] === undefined || octopi[newY][newX] === undefined || energyLevelsToReset.has("".concat(newX, ",").concat(newY))) {
                    continue;
                }
                octopi[newY][newX]++;
                if (octopi[newY][newX] > 9) {
                    energyLevelsToReset.add("".concat(newX, ",").concat(newY));
                    newChargedOctopi.add("".concat(newX, ",").concat(newY));
                }
            }
        });
        chargedOctopi = newChargedOctopi;
    }
    energyLevelsToReset.forEach(function (e) {
        var octopus = indexToPoint(e);
        octopi[octopus.y][octopus.x] = 0;
    });
    return { octopi: octopi, numberOfFlashes: numberOfFlashes };
};
var findFullyIlluminatedStep = function (octopi) {
    var stepCount = 0;
    while (octopi.reduce(function (a, b) { return a + b.reduce(function (c, d) { return c + d; }, 0); }, 0) !== 0) {
        stepCount++;
        var state = step(JSON.parse(JSON.stringify(octopi)));
        octopi = state.octopi;
    }
    return stepCount;
};
var indexToPoint = function (str) {
    var strSplit = str.split(',');
    return { x: parseInt(strSplit[0]), y: parseInt(strSplit[1]) };
};
var firstPart = "First part: ".concat(countFlashes(JSON.parse(JSON.stringify(input)), 100));
var secondPart = "Second part: ".concat(findFullyIlluminatedStep(JSON.parse(JSON.stringify(input))));
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map