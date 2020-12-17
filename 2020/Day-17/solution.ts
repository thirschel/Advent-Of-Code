const input = ['#.#.#.##', '.####..#', '#####.#.', '#####..#', '#....###', '###...##', '...#.#.#', '#.##..##'];

const test = ['.#.',
'..#',
'###'];
class PocketDimension {
    public cubes: Map<string,string>;
    public minW:number;
    public maxW:number;
    public minZ:number;
    public maxZ:number;
    public minY:number;
    public maxY:number;
    public minX:number;
    public maxX:number;
    constructor() {
        this.cubes = new Map<string,string>();
        this.minW = 0;
        this.maxW = 0;
        this.minZ = 0;
        this.maxZ = 0;
        this.minY = 0;
        this.maxY = 0;
        this.minX = 0;
        this.maxX = 0;
    }

    setMinsAndMaxs(w:number, z:number, y:number, x: number) {
        this.minZ = z < this.minZ ? z : this.minZ;
        this.minY = z < this.minY ? y : this.minY;
        this.minX = z < this.minX ? x : this.minX;
        this.maxZ = z > this.maxZ ? x : this.maxZ;
        this.maxY = y > this.maxY ? y : this.maxY;
        this.maxX = x > this.maxX ? x : this.maxX;
        this.minW = w < this.minW ? w : this.minW;
        this.maxW = w > this.maxW ? w : this.maxW;
    }

    key3D = (z:number, y:number, x:number) => `${z},${y},${x}`;
    key4D = (w:number, z:number, y:number, x:number) => `${w},${z},${y},${x}`;
}

const bootUp3D = (initialState: Array<string>, cycles: number) => {
    let state = new PocketDimension();
    initialState.forEach((r, row) => {
        r.split('').forEach((c, column) => {
            state.cubes.set(state.key3D(0, row, column), initialState[row][column]);
            if(initialState[row][column] === '#') {
                state.setMinsAndMaxs(0, 0, row, column);
            }
        })
    });
    let cycleCount = 0;
    while(cycleCount !== cycles) {
        state = runCycle3D(state);
        cycleCount++;
    }
    return Array.from(state.cubes.values()).filter(c => c === '#').length;
}

const bootUp4D = (initialState: Array<string>, cycles: number) => {
    let state = new PocketDimension();
    initialState.forEach((r, row) => {
        r.split('').forEach((c, column) => {
            state.cubes.set(state.key4D(0, 0, row, column), initialState[row][column]);
            if(initialState[row][column] === '#') {
                state.setMinsAndMaxs(0, 0, row, column);
            }
        })
    });
    let cycleCount = 0;
    while(cycleCount !== cycles) {
        state = runCycle4D(state);
        cycleCount++;
    }
    return Array.from(state.cubes.values()).filter(c => c === '#').length;
}

const getActiveNeighborCount3D = (state: PocketDimension, z:number, y: number, x:number) => {
    let activeNeighborCount = 0;
    for(var zIndex = z - 1; zIndex <= z + 1; zIndex++) {
        for(var yIndex = y - 1; yIndex <= y + 1; yIndex++) {
            for(var xIndex = x - 1; xIndex <= x + 1; xIndex++) {
                if(zIndex === z && yIndex === y && xIndex === x) {
                    continue;
                }
                if(state.cubes.get(state.key3D(zIndex,yIndex,xIndex)) === '#'){
                    activeNeighborCount++;
                }
            }
        }
    }
    return activeNeighborCount;
}

const getActiveNeighborCount4D = (state: PocketDimension, w:number, z:number, y: number, x:number) => {
    let activeNeighborCount = 0;
    for(var wIndex = w - 1; wIndex <= w + 1; wIndex++) {
        for(var zIndex = z - 1; zIndex <= z + 1; zIndex++) {
            for(var yIndex = y - 1; yIndex <= y + 1; yIndex++) {
                for(var xIndex = x - 1; xIndex <= x + 1; xIndex++) {
                    if(wIndex === w && zIndex === z && yIndex === y && xIndex === x) {
                        continue;
                    }
                    if(state.cubes.get(state.key4D(wIndex, zIndex,yIndex,xIndex)) === '#'){
                        activeNeighborCount++;
                    }
                }
            }
        }
    }
    return activeNeighborCount;
}

const runCycle3D = (state: PocketDimension) => {
    const newState = new PocketDimension();
    for(var zIndex = state.minZ - 1; zIndex <= state.maxZ + 1; zIndex++) {
        for(var yIndex = state.minY - 1; yIndex <= state.maxY + 1; yIndex++) {
            for(var xIndex = state.minX - 1; xIndex <= state.maxX + 1; xIndex++) {
                const currentState = state.cubes.get(state.key3D(zIndex,yIndex,xIndex));
                let activeNeighborCount = getActiveNeighborCount3D(state, zIndex, yIndex, xIndex);
                if(currentState === '#'){
                    newState.cubes.set(state.key3D(zIndex,yIndex,xIndex), activeNeighborCount === 2 || activeNeighborCount === 3 ? '#' : '.');
                }
                else {
                    newState.cubes.set(state.key3D(zIndex,yIndex,xIndex), activeNeighborCount === 3 ? '#' : '.');
                }
                newState.setMinsAndMaxs(0, zIndex, yIndex, xIndex);
            }
        }
    }
    return newState;
}

const runCycle4D = (state: PocketDimension) => {
    const newState = new PocketDimension();
    for(var wIndex = state.minW - 1; wIndex <= state.maxW + 1; wIndex++) {
        for(var zIndex = state.minZ - 1; zIndex <= state.maxZ + 1; zIndex++) {
            for(var yIndex = state.minY - 1; yIndex <= state.maxY + 1; yIndex++) {
                for(var xIndex = state.minX - 1; xIndex <= state.maxX + 1; xIndex++) {
                    const currentState = state.cubes.get(state.key4D(wIndex,zIndex,yIndex,xIndex));
                    let activeNeighborCount = getActiveNeighborCount4D(state, wIndex, zIndex, yIndex, xIndex);
                    if(currentState === '#'){
                        newState.cubes.set(state.key4D(wIndex,zIndex,yIndex,xIndex), activeNeighborCount === 2 || activeNeighborCount === 3 ? '#' : '.');
                    }
                    else {
                        newState.cubes.set(state.key4D(wIndex,zIndex,yIndex,xIndex), activeNeighborCount === 3 ? '#' : '.');
                    }
                    newState.setMinsAndMaxs(wIndex, zIndex, yIndex, xIndex);
                }
            }
        }
    }
    return newState;
}

const firstPart = `First part: ${bootUp3D(input, 6)}` ;
const secondPart = `Second part: ${bootUp4D(input, 6)}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);