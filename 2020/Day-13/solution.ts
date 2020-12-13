const input = ['19','x','x','x','x','x','x','x','x','41','x','x','x','x','x','x','x','x','x','521','x','x','x','x','x','x','x','23','x','x','x','x','x','x','x','x','17','x','x','x','x','x','x','x','x','x','x','x','29','x','523','x','x','x','x','x','37','x','x','x','x','x','x','13'];
const timestamp = 1000495;

class Bus {
    public id: number;
    public offset: number;
    constructor(id: number, offset: number) {
        this.id = id;
        this.offset = offset;
    }
}

const getBusIds = (input: Array<string>): Array<number> => {
    return input.map(i => parseInt(i)).filter(i => !isNaN(i));
}

const getBusIdsWithDepatureOffsets = (input: Array<string>): Array<Bus> => {
    return input.map((bus, i) => new Bus(parseInt(bus), i)).filter(bus => !isNaN(bus.id));
}

const findFirstAvailableBus = (timestamp: number, busIds: Array<number>) => {
    let soonestBusId: number;
    let getSoonestBusTime = (timestamp: number, id: number) => (id * (Math.floor(timestamp / id) + 1)) - timestamp;
    busIds.forEach(id => {
        soonestBusId = !soonestBusId || getSoonestBusTime(timestamp, id) < getSoonestBusTime(timestamp, soonestBusId) ? id : soonestBusId;
    });
    return soonestBusId * getSoonestBusTime(timestamp, soonestBusId);
}

// I absolutely do not understand Chinese Remainder Theorem
const findAlignedBusTimestamp = (buses: Array<Bus>) => {
    let multiplier = buses.shift().id;
    let i = 0;

    buses.forEach(bus => {
        while (true) {
            if ((i + bus.offset) % bus.id === 0) {
                multiplier *= bus.id;
                break;
            }
            i += multiplier;
        }
    });

    return i;
}

const firstPart = `First part: ${findFirstAvailableBus(timestamp, getBusIds(input))}` ;
const secondPart = `Second part: ${findAlignedBusTimestamp(getBusIdsWithDepatureOffsets(input))}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);