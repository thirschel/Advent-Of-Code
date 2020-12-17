var input = ['#.#.#.##', '.####..#', '#####.#.', '#####..#', '#....###', '###...##', '...#.#.#', '#.##..##'];
var test = ['.#.',
    '..#',
    '###'];
var PocketDimension = /** @class */ (function () {
    function PocketDimension() {
        this.key3D = function (z, y, x) { return z + "," + y + "," + x; };
        this.key4D = function (w, z, y, x) { return w + "," + z + "," + y + "," + x; };
        this.cubes = new Map();
        this.minW = 0;
        this.maxW = 0;
        this.minZ = 0;
        this.maxZ = 0;
        this.minY = 0;
        this.maxY = 0;
        this.minX = 0;
        this.maxX = 0;
    }
    PocketDimension.prototype.setMinsAndMaxs = function (w, z, y, x) {
        this.minZ = z < this.minZ ? z : this.minZ;
        this.minY = z < this.minY ? y : this.minY;
        this.minX = z < this.minX ? x : this.minX;
        this.maxZ = z > this.maxZ ? x : this.maxZ;
        this.maxY = y > this.maxY ? y : this.maxY;
        this.maxX = x > this.maxX ? x : this.maxX;
        this.minW = w < this.minW ? w : this.minW;
        this.maxW = w > this.maxW ? w : this.maxW;
    };
    return PocketDimension;
}());
var bootUp3D = function (initialState, cycles) {
    var state = new PocketDimension();
    initialState.forEach(function (r, row) {
        r.split('').forEach(function (c, column) {
            state.cubes.set(state.key3D(0, row, column), initialState[row][column]);
            if (initialState[row][column] === '#') {
                state.setMinsAndMaxs(0, 0, row, column);
            }
        });
    });
    var cycleCount = 0;
    while (cycleCount !== cycles) {
        state = runCycle3D(state);
        cycleCount++;
    }
    return Array.from(state.cubes.values()).filter(function (c) { return c === '#'; }).length;
};
var bootUp4D = function (initialState, cycles) {
    var state = new PocketDimension();
    initialState.forEach(function (r, row) {
        r.split('').forEach(function (c, column) {
            state.cubes.set(state.key4D(0, 0, row, column), initialState[row][column]);
            if (initialState[row][column] === '#') {
                state.setMinsAndMaxs(0, 0, row, column);
            }
        });
    });
    var cycleCount = 0;
    while (cycleCount !== cycles) {
        state = runCycle4D(state);
        cycleCount++;
    }
    return Array.from(state.cubes.values()).filter(function (c) { return c === '#'; }).length;
};
var getActiveNeighborCount3D = function (state, z, y, x) {
    var activeNeighborCount = 0;
    for (var zIndex = z - 1; zIndex <= z + 1; zIndex++) {
        for (var yIndex = y - 1; yIndex <= y + 1; yIndex++) {
            for (var xIndex = x - 1; xIndex <= x + 1; xIndex++) {
                if (zIndex === z && yIndex === y && xIndex === x) {
                    continue;
                }
                if (state.cubes.get(state.key3D(zIndex, yIndex, xIndex)) === '#') {
                    activeNeighborCount++;
                }
            }
        }
    }
    return activeNeighborCount;
};
var getActiveNeighborCount4D = function (state, w, z, y, x) {
    var activeNeighborCount = 0;
    for (var wIndex = w - 1; wIndex <= w + 1; wIndex++) {
        for (var zIndex = z - 1; zIndex <= z + 1; zIndex++) {
            for (var yIndex = y - 1; yIndex <= y + 1; yIndex++) {
                for (var xIndex = x - 1; xIndex <= x + 1; xIndex++) {
                    if (wIndex === w && zIndex === z && yIndex === y && xIndex === x) {
                        continue;
                    }
                    if (state.cubes.get(state.key4D(wIndex, zIndex, yIndex, xIndex)) === '#') {
                        activeNeighborCount++;
                    }
                }
            }
        }
    }
    return activeNeighborCount;
};
var runCycle3D = function (state) {
    var newState = new PocketDimension();
    for (var zIndex = state.minZ - 1; zIndex <= state.maxZ + 1; zIndex++) {
        for (var yIndex = state.minY - 1; yIndex <= state.maxY + 1; yIndex++) {
            for (var xIndex = state.minX - 1; xIndex <= state.maxX + 1; xIndex++) {
                var currentState = state.cubes.get(state.key3D(zIndex, yIndex, xIndex));
                var activeNeighborCount = getActiveNeighborCount3D(state, zIndex, yIndex, xIndex);
                if (currentState === '#') {
                    newState.cubes.set(state.key3D(zIndex, yIndex, xIndex), activeNeighborCount === 2 || activeNeighborCount === 3 ? '#' : '.');
                }
                else {
                    newState.cubes.set(state.key3D(zIndex, yIndex, xIndex), activeNeighborCount === 3 ? '#' : '.');
                }
                newState.setMinsAndMaxs(0, zIndex, yIndex, xIndex);
            }
        }
    }
    return newState;
};
var runCycle4D = function (state) {
    var newState = new PocketDimension();
    for (var wIndex = state.minW - 1; wIndex <= state.maxW + 1; wIndex++) {
        for (var zIndex = state.minZ - 1; zIndex <= state.maxZ + 1; zIndex++) {
            for (var yIndex = state.minY - 1; yIndex <= state.maxY + 1; yIndex++) {
                for (var xIndex = state.minX - 1; xIndex <= state.maxX + 1; xIndex++) {
                    var currentState = state.cubes.get(state.key4D(wIndex, zIndex, yIndex, xIndex));
                    var activeNeighborCount = getActiveNeighborCount4D(state, wIndex, zIndex, yIndex, xIndex);
                    if (currentState === '#') {
                        newState.cubes.set(state.key4D(wIndex, zIndex, yIndex, xIndex), activeNeighborCount === 2 || activeNeighborCount === 3 ? '#' : '.');
                    }
                    else {
                        newState.cubes.set(state.key4D(wIndex, zIndex, yIndex, xIndex), activeNeighborCount === 3 ? '#' : '.');
                    }
                    newState.setMinsAndMaxs(wIndex, zIndex, yIndex, xIndex);
                }
            }
        }
    }
    return newState;
};
var firstPart = "First part: " + bootUp3D(input, 6);
var secondPart = "Second part: " + bootUp4D(input, 6);
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map