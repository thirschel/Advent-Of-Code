const input = [[8,2,6,1,3,4,4,6,5,6], [7,7,7,3,3,5,1,1,7,5], [7,5,2,7,8,5,6,8,5,2], [1,7,6,3,6,1,4,6,7,3], [8,6,7,4,5,5,6,7,4,3], [6,8,5,3,3,8,2,1,5,3], [4,1,3,5,8,5,2,3,8,8], [2,8,4,6,7,1,5,5,2,2], [7,4,7,7,4,2,5,8,6,3], [4,7,2,3,8,8,8,8,8,8]];

type Point = { x: number; y: number; };
type OctopusStepState = { octopi: Array<Array<number>>; numberOfFlashes: number; };
const neighbors: readonly Point[] = [[-1, 0], [0, -1], [1, 0], [0, 1], [-1,-1], [-1, 1], [1,1], [1,-1]].map(p => ({ x: p[0], y: p[1] }));

const countFlashes = (octopi: Array<Array<number>>, steps: number): number => {
    let numberOfFlashes = 0;
    for(var i =0; i < steps; i++) {
        let state = step(JSON.parse(JSON.stringify(octopi)));
        octopi = state.octopi;
        numberOfFlashes += state.numberOfFlashes;
    }
    return numberOfFlashes;
}

const step = (octopi: Array<Array<number>>) => {
    let numberOfFlashes = 0;
    let energyLevelsToReset = new Set<string>();
    let chargedOctopi = new Set<string>();
    for(var y =0; y < octopi.length; y++) {
        for(var x = 0; x < octopi[y].length; x++) {
            octopi[y][x]++;
            if(octopi[y][x] > 9) {
                energyLevelsToReset.add(`${x},${y}`);
                chargedOctopi.add(`${x},${y}`);
            }
        }
    }
    while(chargedOctopi.size) {
        var newChargedOctopi = new Set<string>();
        chargedOctopi.forEach(octopusStr => {
            numberOfFlashes++;
            const octopus = indexToPoint(octopusStr);
            for(var j = 0; j < neighbors.length; j++) {
                var newX = octopus.x + neighbors[j].x;
                var newY = octopus.y + neighbors[j].y;
                if(octopi[newY] === undefined || octopi[newY][newX] === undefined || energyLevelsToReset.has(`${newX},${newY}`)) {
                    continue;
                }
                octopi[newY][newX]++;
                if(octopi[newY][newX] > 9) {
                    energyLevelsToReset.add(`${newX},${newY}`);
                    newChargedOctopi.add(`${newX},${newY}`);
                }
            }
        });
        chargedOctopi = newChargedOctopi;
    }
    energyLevelsToReset.forEach(e => {
        const octopus = indexToPoint(e);
        octopi[octopus.y][octopus.x] = 0;
    });
    return {octopi, numberOfFlashes};
}

const findFullyIlluminatedStep = (octopi: Array<Array<number>>) => {
    let stepCount = 0;
    while(octopi.reduce((a,b) => a + b.reduce((c,d) => c + d, 0),0) !== 0) {
        stepCount++;
        let state = step(JSON.parse(JSON.stringify(octopi)));
        octopi = state.octopi;
    }
    return stepCount;
}

const indexToPoint = (str: string) => {
    var strSplit = str.split(',');
    return {x: parseInt(strSplit[0]), y: parseInt(strSplit[1])} 
}

const firstPart = `First part: ${countFlashes(JSON.parse(JSON.stringify(input)), 100)}` ;
const secondPart = `Second part: ${findFullyIlluminatedStep(JSON.parse(JSON.stringify(input)))}` ;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);


