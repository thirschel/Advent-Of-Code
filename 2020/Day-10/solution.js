var input = [71, 30, 134, 33, 51, 115, 122, 38, 61, 103, 21, 12, 44, 129, 29, 89, 54, 83, 96, 91, 133, 102, 99, 52, 144, 82, 22, 68, 7, 15, 93, 125, 14, 92, 1, 146, 67, 132, 114, 59, 72, 107, 34, 119, 136, 60, 20, 53, 8, 46, 55, 26, 126, 77, 65, 78, 13, 108, 142, 27, 75, 110, 90, 35, 143, 86, 116, 79, 48, 113, 101, 2, 123, 58, 19, 76, 16, 66, 135, 64, 28, 9, 6, 100, 124, 47, 109, 23, 139, 145, 5, 45, 106, 41];
[71, 30, 134, 33, 51, 115, 122, 38, 61, 103, 21, 12, 44, 129, 29, 89, 54, 83, 96, 91, 133, 102, 99, 52, 144, 82, 22, 68, 7, 15, 93, 125, 14, 92, 1, 146, 67, 132, 114, 59, 72, 107, 34, 119, 136, 60, 20, 53, 8, 46, 55, 26, 126, 77, 65, 78, 13, 108, 142, 27, 75, 110, 90, 35, 143, 86, 116, 79, 48, 113, 101, 2, 123, 58, 19, 76, 16, 66, 135, 64, 28, 9, 6, 100, 124, 47, 109, 23, 139, 145, 5, 45, 106, 41];
var findAdapterOrder = function (adapters) {
    adapters = JSON.parse(JSON.stringify(adapters));
    var outletJolts = 0;
    var adapaterOrder = [outletJolts];
    while (adapters.length) {
        var availableAdapters = adapters.filter(function (a) { return adapaterOrder[adapaterOrder.length - 1] >= a - 3; });
        availableAdapters.sort(function (a, b) { return a - b; });
        adapaterOrder.push(availableAdapters[0]);
        adapters.splice(adapters.indexOf(availableAdapters[0]), 1);
    }
    return adapaterOrder;
};
var findAllAdapaterCombinations = function (adapters) {
    var _a;
    var combinations = (_a = {}, _a[adapters[adapters.length - 1]] = 1, _a);
    var _loop_1 = function (i) {
        if (adapters.indexOf(i) > -1) {
            combinations[i] = [1, 2, 3].map(function (joltDifference) { var _a; return (_a = combinations[i + joltDifference]) !== null && _a !== void 0 ? _a : 0; }).reduce(function (a, b) { return a + b; });
        }
    };
    for (var i = adapters[adapters.length - 1] - 1; i >= 0; i--) {
        _loop_1(i);
    }
    return combinations[0];
};
var adapters = findAdapterOrder(input);
// Adding 1 to the 3 jolts for the device jump
var firstPart = "First part: " + adapters.reduce(function (a, b, i) { return b === adapters[i + 1] - 3 ? a + 1 : a; }, 1) * adapters.reduce(function (a, b, i) { return b === adapters[i + 1] - 1 ? a + 1 : a; }, 0);
var secondPart = "Second part: " + findAllAdapaterCombinations(adapters);
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map