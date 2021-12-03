const input = ['forward 9', 'forward 7', 'down 7', 'down 3', 'forward 2', 'forward 3', 'forward 7', 'down 6', 'forward 7', 'down 7', 'forward 9', 'down 9', 'up 2', 'down 5', 'up 1', 'forward 5', 'forward 6', 'up 4', 'down 3', 'down 4', 'down 5', 'up 6', 'down 3', 'forward 6', 'forward 4', 'down 4', 'forward 5', 'down 2', 'up 1', 'up 8', 'down 1', 'down 6', 'forward 8', 'down 4', 'forward 8', 'forward 6', 'forward 2', 'forward 2', 'forward 3', 'forward 8', 'up 9', 'up 2', 'down 3', 'up 3', 'forward 5', 'forward 2', 'up 5', 'forward 9', 'down 7', 'down 2', 'up 7', 'down 4', 'down 6', 'up 2', 'down 9', 'forward 7', 'down 8', 'forward 6', 'up 1', 'forward 6', 'forward 4', 'down 5', 'forward 6', 'down 8', 'down 3', 'forward 7', 'down 8', 'up 7', 'down 1', 'up 1', 'forward 9', 'down 7', 'up 3', 'down 6', 'down 6', 'down 6', 'down 7', 'down 9', 'down 6', 'down 9', 'down 8', 'down 3', 'down 7', 'down 3', 'up 8', 'down 5', 'down 9', 'up 4', 'forward 5', 'forward 5', 'forward 2', 'up 1', 'forward 6', 'down 6', 'down 2', 'forward 1', 'forward 8', 'down 4', 'down 1', 'down 8', 'down 7', 'forward 6', 'forward 8', 'down 8', 'up 1', 'up 1', 'forward 1', 'forward 3', 'up 8', 'down 1', 'forward 4', 'down 3', 'forward 3', 'forward 4', 'forward 3', 'down 3', 'down 9', 'down 3', 'up 6', 'forward 6', 'forward 8', 'forward 2', 'up 1', 'up 4', 'up 4', 'down 2', 'down 2', 'down 2', 'forward 7', 'up 9', 'down 9', 'up 1', 'down 5', 'forward 4', 'down 2', 'down 4', 'forward 3', 'down 7', 'down 9', 'forward 1', 'up 5', 'down 5', 'down 5', 'forward 2', 'down 6', 'forward 8', 'up 4', 'forward 6', 'up 1', 'down 4', 'forward 2', 'down 9', 'forward 5', 'down 7', 'down 8', 'down 9', 'forward 6', 'up 6', 'forward 9', 'forward 9', 'down 7', 'forward 7', 'forward 5', 'up 9', 'forward 3', 'down 9', 'down 1', 'down 8', 'down 4', 'forward 5', 'forward 6', 'forward 8', 'forward 8', 'down 4', 'down 3', 'down 8', 'forward 3', 'down 6', 'down 8', 'down 2', 'up 8', 'up 9', 'down 6', 'forward 3', 'down 4', 'down 6', 'forward 9', 'forward 6', 'up 2', 'down 8', 'forward 2', 'down 7', 'forward 9', 'up 9', 'down 9', 'down 2', 'forward 9', 'down 4', 'down 9', 'up 4', 'forward 6', 'down 2', 'down 9', 'forward 8', 'forward 2', 'up 8', 'forward 9', 'forward 2', 'forward 3', 'down 2', 'up 3', 'forward 9', 'down 6', 'down 3', 'down 1', 'forward 9', 'forward 8', 'down 9', 'up 7', 'down 8', 'up 7', 'forward 1', 'forward 1', 'forward 7', 'down 2', 'down 1', 'up 1', 'up 6', 'down 5', 'up 9', 'up 7', 'forward 1', 'forward 6', 'forward 1', 'up 4', 'down 6', 'forward 2', 'up 7', 'down 2', 'up 8', 'forward 9', 'forward 6', 'forward 3', 'forward 8', 'down 1', 'forward 8', 'up 3', 'forward 1', 'forward 1', 'up 9', 'down 1', 'down 8', 'down 2', 'forward 8', 'down 8', 'forward 7', 'down 5', 'forward 8', 'forward 3', 'forward 6', 'forward 7', 'up 5', 'down 5', 'forward 8', 'down 2', 'forward 3', 'down 4', 'down 9', 'forward 6', 'forward 5', 'up 4', 'forward 7', 'down 3', 'forward 9', 'forward 5', 'down 3', 'up 5', 'forward 4', 'forward 8', 'down 7', 'up 2', 'forward 7', 'down 5', 'up 2', 'down 9', 'forward 4', 'down 3', 'forward 5', 'forward 4', 'down 3', 'forward 6', 'up 1', 'forward 8', 'down 1', 'up 7', 'forward 8', 'up 1', 'up 1', 'forward 2', 'down 8', 'forward 4', 'forward 8', 'up 6', 'forward 5', 'forward 7', 'up 6', 'up 4', 'up 6', 'down 1', 'forward 3', 'down 1', 'down 1', 'down 8', 'forward 8', 'down 5', 'down 5', 'forward 5', 'forward 9', 'down 9', 'forward 7', 'down 3', 'down 5', 'forward 6', 'down 1', 'down 5', 'up 8', 'down 9', 'forward 3', 'down 6', 'up 2', 'down 2', 'forward 2', 'up 2', 'forward 8', 'down 2', 'forward 9', 'forward 2', 'down 7', 'down 5', 'forward 1', 'forward 7', 'up 6', 'up 8', 'forward 8', 'forward 8', 'up 3', 'forward 8', 'down 6', 'down 6', 'forward 4', 'down 8', 'down 5', 'down 7', 'forward 1', 'forward 9', 'forward 9', 'up 5', 'down 9', 'down 1', 'forward 4', 'forward 1', 'up 9', 'forward 6', 'down 6', 'forward 2', 'up 6', 'forward 9', 'up 1', 'down 2', 'up 3', 'forward 2', 'forward 1', 'forward 6', 'down 9', 'up 1', 'forward 7', 'up 3', 'forward 6', 'forward 6', 'up 2', 'down 8', 'forward 4', 'down 4', 'forward 2', 'forward 2', 'down 4', 'down 7', 'down 4', 'down 5', 'forward 3', 'down 1', 'forward 1', 'forward 8', 'down 7', 'up 1', 'forward 7', 'forward 2', 'down 9', 'down 2', 'up 2', 'forward 3', 'down 4', 'down 7', 'down 8', 'forward 4', 'forward 5', 'forward 3', 'up 3', 'down 6', 'forward 4', 'forward 4', 'forward 8', 'forward 1', 'up 2', 'up 3', 'down 4', 'up 9', 'forward 1', 'forward 1', 'forward 9', 'down 2', 'down 5', 'up 9', 'down 7', 'down 9', 'down 2', 'down 4', 'forward 1', 'forward 1', 'forward 8', 'down 9', 'down 6', 'forward 2', 'up 3', 'down 8', 'forward 1', 'forward 8', 'forward 4', 'up 7', 'forward 5', 'forward 2', 'forward 2', 'up 8', 'down 5', 'forward 6', 'down 3', 'up 5', 'forward 8', 'forward 3', 'forward 9', 'down 1', 'down 3', 'forward 8', 'down 2', 'forward 6', 'forward 2', 'down 3', 'down 3', 'forward 6', 'forward 4', 'forward 7', 'forward 2', 'up 7', 'up 4', 'up 6', 'forward 9', 'down 3', 'down 3', 'up 7', 'down 4', 'up 3', 'up 3', 'down 5', 'forward 1', 'up 3', 'down 1', 'forward 2', 'up 9', 'forward 7', 'down 6', 'forward 4', 'forward 8', 'up 1', 'forward 6', 'down 7', 'down 4', 'up 9', 'forward 4', 'down 7', 'up 1', 'forward 9', 'down 4', 'down 7', 'forward 1', 'down 6', 'down 6', 'forward 3', 'up 8', 'forward 3', 'down 1', 'down 5', 'down 8', 'forward 2', 'up 5', 'forward 2', 'up 7', 'forward 5', 'forward 1', 'forward 3', 'forward 4', 'forward 5', 'up 1', 'forward 9', 'down 5', 'down 7', 'up 9', 'down 9', 'forward 7', 'up 6', 'up 7', 'forward 2', 'forward 1', 'up 4', 'forward 6', 'forward 9', 'down 1', 'forward 4', 'down 5', 'forward 4', 'down 3', 'down 5', 'forward 6', 'forward 3', 'down 3', 'down 8', 'down 2', 'down 4', 'down 6', 'down 4', 'forward 2', 'up 9', 'down 3', 'forward 1', 'forward 9', 'forward 5', 'forward 5', 'forward 9', 'up 1', 'down 4', 'down 4', 'up 7', 'down 3', 'up 3', 'up 4', 'forward 3', 'forward 1', 'forward 8', 'up 6', 'down 8', 'down 4', 'forward 7', 'forward 9', 'forward 2', 'forward 8', 'up 2', 'down 4', 'down 5', 'forward 9', 'down 6', 'down 7', 'down 8', 'up 8', 'forward 3', 'forward 7', 'forward 8', 'up 2', 'down 9', 'down 6', 'forward 3', 'forward 4', 'down 4', 'forward 2', 'up 6', 'forward 1', 'forward 7', 'down 2', 'down 1', 'forward 2', 'forward 2', 'down 2', 'forward 2', 'forward 7', 'up 4', 'down 3', 'forward 9', 'down 7', 'down 7', 'down 6', 'forward 3', 'forward 9', 'down 9', 'forward 2', 'down 5', 'down 4', 'down 9', 'up 9', 'down 6', 'down 8', 'down 1', 'forward 8', 'up 4', 'up 4', 'down 8', 'forward 6', 'down 2', 'forward 4', 'forward 3', 'forward 2', 'forward 4', 'down 4', 'forward 6', 'down 9', 'up 7', 'up 5', 'down 7', 'down 4', 'up 3', 'forward 4', 'down 9', 'forward 6', 'forward 4', 'forward 4', 'down 9', 'forward 3', 'forward 2', 'up 7', 'forward 3', 'down 1', 'down 3', 'up 5', 'down 8', 'down 3', 'down 4', 'forward 7', 'forward 9', 'up 2', 'forward 3', 'up 4', 'down 5', 'up 3', 'up 9', 'down 6', 'down 2', 'down 5', 'up 4', 'up 6', 'forward 4', 'forward 6', 'up 5', 'up 5', 'forward 8', 'down 6', 'forward 6', 'down 7', 'down 5', 'down 3', 'down 8', 'forward 6', 'forward 9', 'forward 9', 'up 9', 'down 3', 'up 5', 'forward 4', 'down 7', 'forward 5', 'down 7', 'down 4', 'forward 2', 'forward 9', 'down 8', 'up 3', 'up 7', 'down 7', 'up 7', 'forward 3', 'down 2', 'forward 7', 'down 4', 'forward 1', 'down 6', 'forward 1', 'up 4', 'down 7', 'up 3', 'forward 7', 'forward 5', 'forward 7', 'forward 6', 'up 2', 'down 4', 'down 8', 'down 4', 'up 3', 'forward 3', 'up 3', 'up 3', 'down 7', 'down 2', 'down 3', 'forward 7', 'down 6', 'down 9', 'up 1', 'down 8', 'down 6', 'down 3', 'up 2', 'up 6', 'forward 9', 'forward 5', 'forward 4', 'forward 9', 'down 9', 'forward 2', 'up 7', 'down 4', 'down 8', 'up 2', 'forward 6', 'up 6', 'up 4', 'down 2', 'forward 6', 'forward 4', 'up 3', 'down 6', 'forward 5', 'forward 3', 'up 4', 'down 7', 'down 2', 'down 6', 'up 7', 'forward 2', 'forward 1', 'forward 3', 'down 2', 'forward 1', 'forward 2', 'forward 4', 'down 2', 'down 5', 'down 7', 'down 8', 'down 1', 'up 1', 'up 1', 'forward 9', 'down 3', 'down 1', 'forward 4', 'up 6', 'up 8', 'forward 7', 'forward 9', 'down 3', 'forward 9', 'down 9', 'forward 6', 'down 1', 'forward 7', 'down 9', 'forward 1', 'down 8', 'forward 8', 'up 7', 'forward 4', 'up 5', 'up 9', 'forward 1', 'forward 4', 'forward 3', 'down 3', 'down 8', 'up 3', 'forward 1', 'up 5', 'forward 5', 'up 6', 'forward 8', 'forward 1', 'down 7', 'forward 2', 'down 9', 'forward 3', 'forward 7', 'forward 2', 'down 4', 'forward 2', 'up 6', 'down 7', 'up 3', 'forward 7', 'down 8', 'down 3', 'forward 2', 'up 7', 'down 2', 'down 8', 'up 6', 'forward 7', 'forward 1', 'down 3', 'forward 2', 'forward 8', 'down 8', 'forward 1', 'down 7', 'down 1', 'up 5', 'up 3', 'forward 5', 'down 5', 'up 9', 'up 9', 'down 3', 'up 3', 'down 4', 'down 6', 'up 7', 'forward 3', 'up 5', 'down 3', 'forward 4', 'down 1', 'up 1', 'up 6', 'down 8', 'forward 5', 'up 2', 'down 5', 'forward 6', 'forward 4', 'forward 9', 'down 9', 'down 5', 'forward 5', 'down 7', 'down 7', 'down 8', 'forward 3', 'down 6', 'forward 5', 'forward 5', 'down 6', 'forward 3', 'down 7', 'up 4', 'up 3', 'down 5', 'forward 9', 'forward 9', 'up 9', 'down 1', 'up 2', 'up 3', 'down 7', 'forward 3', 'down 7', 'down 4', 'down 5', 'down 1', 'down 4', 'up 9', 'forward 1', 'up 8', 'forward 7', 'up 6', 'down 1', 'up 2', 'forward 2', 'up 9', 'down 6', 'forward 4', 'down 2', 'up 5', 'forward 1', 'forward 4', 'down 6', 'down 2', 'up 8', 'forward 2', 'forward 8', 'forward 4', 'down 9', 'up 3', 'forward 5', 'forward 9', 'forward 4', 'down 2', 'up 4', 'up 9', 'down 5', 'up 2', 'forward 6', 'up 2', 'down 6', 'up 5', 'up 3', 'up 9', 'forward 8', 'down 2', 'forward 7', 'up 8', 'down 9', 'forward 2', 'forward 2', 'down 6', 'forward 9', 'forward 2', 'forward 8', 'up 3', 'forward 5', 'down 4', 'forward 2', 'down 7', 'up 6', 'forward 7', 'down 6', 'down 8', 'down 3', 'up 4', 'up 5', 'down 2', 'down 9', 'forward 2', 'down 7', 'forward 2', 'forward 3', 'forward 9', 'down 6', 'down 1', 'forward 6', 'down 5', 'forward 2', 'down 5', 'down 1', 'forward 5', 'down 4', 'down 6', 'down 5', 'forward 9', 'up 6', 'up 5', 'up 2', 'down 1', 'down 8', 'forward 4', 'down 2', 'forward 5', 'down 1', 'forward 7', 'down 8', 'down 9', 'down 7', 'up 1', 'forward 2', 'up 8', 'down 9', 'down 2', 'down 1', 'down 9', 'down 2', 'down 5', 'forward 9', 'forward 1', 'down 1', 'forward 9', 'forward 7', 'down 6', 'down 1', 'down 7', 'forward 4', 'forward 1', 'forward 4', 'forward 5', 'forward 5', 'down 2', 'forward 7', 'forward 6', 'forward 3', 'forward 9', 'up 1', 'down 5', 'down 4', 'down 2', 'forward 1', 'up 7', 'forward 2'];

enum DirectionCommand {
    forward,
    down,
    up
}

class SubDirections {
    command: DirectionCommand;
    units: number;
}

const determineDestination = (directions: Array<string>) => {
    var destinationX = 0;
    var destinationY = 0;
    directions.forEach(direction => {
        var parsedDirection = parseInput(direction);
        switch(parsedDirection.command) {
            case DirectionCommand.forward:
                destinationX += parsedDirection.units;
                break;
            case DirectionCommand.up:
                destinationY -= parsedDirection.units;
                break;
            case DirectionCommand.down:
                destinationY += parsedDirection.units;
                break;
        }
    })
    return destinationX * destinationY;
}

const determineFinalDepth = (directions: Array<string>) => {
    var destinationX = 0;
    var destinationY = 0;
    var aim = 0;
    directions.forEach(direction => {
        var parsedDirection = parseInput(direction);
        switch(parsedDirection.command) {
            case DirectionCommand.forward:
                destinationX += parsedDirection.units;
                destinationY += aim * parsedDirection.units;
                break;
            case DirectionCommand.up:
                aim -= parsedDirection.units;
                break;
            case DirectionCommand.down:
                aim += parsedDirection.units;
                break;
        }
    })
    return destinationX * destinationY;
}


const parseInput = (inputString: string): SubDirections => {
    var parsedInput = new SubDirections();
    var inputSplit = inputString.split(' ');
    switch(inputSplit[0]) {
        case 'forward':
            parsedInput.command = DirectionCommand.forward;
            break;
        case 'down':
            parsedInput.command = DirectionCommand.down;
            break;
        case 'up':
            parsedInput.command = DirectionCommand.up;
            break;
    }
    parsedInput.units = parseInt(inputSplit[1])
    return parsedInput;
}


const firstPart = `First part: ${determineDestination(input)}` ;
const secondPart = `Second part: ${determineFinalDepth(input)}` ;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);