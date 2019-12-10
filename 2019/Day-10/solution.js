var input = ['##.#..#..###.####...######', '#..#####...###.###..#.###.', '..#.#####....####.#.#...##', '.##..#.#....##..##.#.#....', '#.####...#.###..#.##.#..#.', '..#..#.#######.####...#.##', '#...####.#...#.#####..#.#.', '.#..#.##.#....########..##', '......##.####.#.##....####', '.##.#....#####.####.#.####', '..#.#.#.#....#....##.#....', '....#######..#.##.#.##.###', '###.#######.#..#########..', '###.#.#..#....#..#.##..##.', '#####.#..#.#..###.#.##.###', '.#####.#####....#..###...#', '##.#.......###.##.#.##....', '...#.#.#.###.#.#..##..####', '#....#####.##.###...####.#', '#.##.#.######.##..#####.##', '#.###.##..##.##.#.###..###', '#.####..######...#...#####', '#..#..########.#.#...#..##', '.##..#.####....#..#..#....', '.###.##..#####...###.#.#.#', '.##..######...###..#####.#'];
var MapData;
(function (MapData) {
    MapData["Asteroid"] = "#";
    MapData["Empty"] = ".";
})(MapData || (MapData = {}));
var asteroidLocations = new Set();
for (var y = 0; y < input.length; y++) {
    for (var x = 0; x < input[0].length; x++) {
        if (input[y][x] === MapData.Empty) {
            continue;
        }
        asteroidLocations.add(x + "," + y);
    }
}
var getGreatestCommonDenominator = function (x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
};
var getAngle = function (x1, y1, x2, y2) {
    var angleRadians = (Math.atan2(y1 - y2, x1 - x2) * 180) / Math.PI;
    if (angleRadians < 0)
        angleRadians += 360;
    angleRadians -= 90;
    if (angleRadians < 0)
        angleRadians += 360;
    console.log(x1, x2, y1, y2, angleRadians);
    return angleRadians;
};
var hasLineOfSight = function (origin, destintation, asteroidLocations) {
    var dy = destintation.y - origin.y; // 4
    var dx = destintation.x - origin.x;
    if (destintation.y === origin.y && destintation.x === origin.x)
        return false;
    if (dx === dy && dy === 0) {
    }
    else {
        var gcd = getGreatestCommonDenominator(dy, dx);
        dy /= gcd;
        dx /= gcd;
    }
    var x = origin.x + dx;
    var y = origin.y + dy;
    while (y !== origin.y || x !== origin.x) {
        if (asteroidLocations.has(x + "," + y)) {
            if (y === destintation.y && x === destintation.x) {
                return true;
            }
            return false;
        }
        y += dy;
        x += dx;
    }
};
var checkLineOfSight = function (x1, y1, x2, y2) {
    if (input[y2][x2] !== "#")
        return false;
    if (input[y1][x1] !== "#")
        return false;
    if (y2 === y1 && x2 === x1)
        return false;
    var dy = y2 - y1; // 4
    var dx = x2 - x1; // 2
    if (dx === dy && dy === 0) {
    }
    else {
        var gcd = getGreatestCommonDenominator(dy, dx);
        dy /= gcd;
        dx /= gcd;
    }
    var x = x1 + dx;
    var y = y1 + dy;
    var ibtcount = 0;
    while (input[y] && input[y][x]) {
        if (input[y][x] === "#") {
            if (y === y2 && x === x2) {
                return ibtcount;
            }
            ibtcount++;
            return false;
        }
        y += dy;
        x += dx;
    }
};
var highestCount = 0;
Array.from(asteroidLocations.values()).forEach(function (location) {
    var count = 0;
    Array.from(asteroidLocations.values()).filter(function (f) { return f !== location; }).forEach(function (viewedAstroid) {
        var l = location.match(/(\d+),(\d+)/);
        var d = viewedAstroid.match(/(\d+),(\d+)/);
        count += hasLineOfSight({ x: Number(l[1]), y: Number(l[2]) }, { x: Number(d[1]), y: Number(d[2]) }, asteroidLocations) ? 1 : 0;
    });
    highestCount = count > highestCount ? count : highestCount;
});
var i = 19;
var j = 20; // 329 25 31
var count = 0;
var allSlopes = []; // [angle, numInBetween, x, y]
for (var y2 = 0; y2 < input.length; y2++) {
    for (var x2 = 0; x2 < input[0].length; x2++) {
        var los = checkLineOfSight(j, i, x2, y2);
        if (los === false)
            continue;
        allSlopes.push([getAngle(j, i, x2, y2), los, x2, y2]);
    }
}
allSlopes.sort(function (a, b) { return (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]); });
console.log(allSlopes[199]);
var firstPart = "First part: " + highestCount;
var secondPart = "Second part:";
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map