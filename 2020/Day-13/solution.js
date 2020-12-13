var input = ['19', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '41', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '521', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '23', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '17', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '29', 'x', '523', 'x', 'x', 'x', 'x', 'x', '37', 'x', 'x', 'x', 'x', 'x', 'x', '13'];
var timestamp = 1000495;
var Bus = /** @class */ (function () {
    function Bus(id, offset) {
        this.id = id;
        this.offset = offset;
    }
    return Bus;
}());
var getBusIds = function (input) {
    return input.map(function (i) { return parseInt(i); }).filter(function (i) { return !isNaN(i); });
};
var getBusIdsWithDepatureOffsets = function (input) {
    return input.map(function (bus, i) { return new Bus(parseInt(bus), i); }).filter(function (bus) { return !isNaN(bus.id); });
};
var findFirstAvailableBus = function (timestamp, busIds) {
    var soonestBusId;
    var getSoonestBusTime = function (timestamp, id) { return (id * (Math.floor(timestamp / id) + 1)) - timestamp; };
    busIds.forEach(function (id) {
        soonestBusId = !soonestBusId || getSoonestBusTime(timestamp, id) < getSoonestBusTime(timestamp, soonestBusId) ? id : soonestBusId;
    });
    return soonestBusId * getSoonestBusTime(timestamp, soonestBusId);
};
// I absolutely do not understand Chinese Remainder Theorem
var findAlignedBusTimestamp = function (buses) {
    var multiplier = buses.shift().id;
    var i = 0;
    buses.forEach(function (bus) {
        while (true) {
            if ((i + bus.offset) % bus.id === 0) {
                multiplier *= bus.id;
                break;
            }
            i += multiplier;
        }
    });
    return i;
};
var firstPart = "First part: " + findFirstAvailableBus(timestamp, getBusIds(input));
var secondPart = "Second part: " + findAlignedBusTimestamp(getBusIdsWithDepatureOffsets(input));
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map