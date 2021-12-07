var input = [3, 5, 1, 5, 3, 2, 1, 3, 4, 2, 5, 1, 3, 3, 2, 5, 1, 3, 1, 5, 5, 1, 1, 1, 2, 4, 1, 4, 5, 2, 1, 2, 4, 3, 1, 2, 3, 4, 3, 4, 4, 5, 1, 1, 1, 1, 5, 5, 3, 4, 4, 4, 5, 3, 4, 1, 4, 3, 3, 2, 1, 1, 3, 3, 3, 2, 1, 3, 5, 2, 3, 4, 2, 5, 4, 5, 4, 4, 2, 2, 3, 3, 3, 3, 5, 4, 2, 3, 1, 2, 1, 1, 2, 2, 5, 1, 1, 4, 1, 5, 3, 2, 1, 4, 1, 5, 1, 4, 5, 2, 1, 1, 1, 4, 5, 4, 2, 4, 5, 4, 2, 4, 4, 1, 1, 2, 2, 1, 1, 2, 3, 3, 2, 5, 2, 1, 1, 2, 1, 1, 1, 3, 2, 3, 1, 5, 4, 5, 3, 3, 2, 1, 1, 1, 3, 5, 1, 1, 4, 4, 5, 4, 3, 3, 3, 3, 2, 4, 5, 2, 1, 1, 1, 4, 2, 4, 2, 2, 5, 5, 5, 4, 1, 1, 5, 1, 5, 2, 1, 3, 3, 2, 5, 2, 1, 2, 4, 3, 3, 1, 5, 4, 1, 1, 1, 4, 2, 5, 5, 4, 4, 3, 4, 3, 1, 5, 5, 2, 5, 4, 2, 3, 4, 1, 1, 4, 4, 3, 4, 1, 3, 4, 1, 1, 4, 3, 2, 2, 5, 3, 1, 4, 4, 4, 1, 3, 4, 3, 1, 5, 3, 3, 5, 5, 4, 4, 1, 2, 4, 2, 2, 3, 1, 1, 4, 5, 3, 1, 1, 1, 1, 3, 5, 4, 1, 1, 2, 1, 1, 2, 1, 2, 3, 1, 1, 3, 2, 2, 5, 5, 1, 5, 5, 1, 4, 4, 3, 5, 4, 4];
var researchFishCycles = function (fishAge, numberOfDays) {
    var schoolsOfFish = new Map();
    for (var i_1 = 0; i_1 < 9; i_1++) {
        schoolsOfFish.set(i_1, 0);
    }
    fishAge.forEach(function (fish) {
        schoolsOfFish.set(fish, schoolsOfFish.get(fish) + 1);
    });
    for (var i = 0; i < numberOfDays; i++) {
        var zeroAgeCount = schoolsOfFish.get(0);
        for (var i_2 = 0; i_2 < 8; i_2++) {
            schoolsOfFish.set(i_2, schoolsOfFish.get(i_2 + 1));
        }
        schoolsOfFish.set(8, zeroAgeCount);
        schoolsOfFish.set(6, schoolsOfFish.get(6) + zeroAgeCount);
    }
    return Array.from(schoolsOfFish.values()).reduce(function (a, b) { return a + b; }, 0);
};
var firstPart = "First part: ".concat(researchFishCycles(input, 80));
var secondPart = "Second part: ".concat(researchFishCycles(input, 256));
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map