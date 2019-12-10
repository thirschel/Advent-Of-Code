 const input = ['##.#..#..###.####...######', '#..#####...###.###..#.###.', '..#.#####....####.#.#...##', '.##..#.#....##..##.#.#....', '#.####...#.###..#.##.#..#.', '..#..#.#######.####...#.##', '#...####.#...#.#####..#.#.', '.#..#.##.#....########..##', '......##.####.#.##....####', '.##.#....#####.####.#.####', '..#.#.#.#....#....##.#....', '....#######..#.##.#.##.###', '###.#######.#..#########..', '###.#.#..#....#..#.##..##.', '#####.#..#.#..###.#.##.###', '.#####.#####....#..###...#', '##.#.......###.##.#.##....', '...#.#.#.###.#.#..##..####', '#....#####.##.###...####.#', '#.##.#.######.##..#####.##', '#.###.##..##.##.#.###..###', '#.####..######...#...#####', '#..#..########.#.#...#..##', '.##..#.####....#..#..#....', '.###.##..#####...###.#.#.#', '.##..######...###..#####.#'];


enum MapData {
    Asteroid = '#',
    Empty = '.'
}
const asteroidLocations: Set<string> = new Set();

for(var y = 0; y < input.length; y++){
    for(var x = 0; x < input[0].length; x++){
        if(input[y][x] === MapData.Empty){
            continue;
        }
        asteroidLocations.add(`${x},${y}`);
    }
}

const getGreatestCommonDenominator = (x:number, y:number) => {
    x = Math.abs(x);
	y = Math.abs(y);
	while (y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
}

const getAngle = (x1, y1, x2, y2) => {
	var angleRadians = (Math.atan2(y1 - y2, x1 - x2) * 180) / Math.PI;
	if (angleRadians < 0) angleRadians += 360;
	angleRadians -= 90;
	if (angleRadians < 0) angleRadians += 360;
	console.log(x1, x2, y1, y2, angleRadians);
	return angleRadians;
}

const hasLineOfSight = (origin: {x: number, y:number}, destintation: {x: number, y:number}, asteroidLocations: Set<string>) => {
    let dy = destintation.y - origin.y; // 4
    let dx = destintation.x - origin.x;
    if ( destintation.y ===  origin.y && destintation.x ===  origin.x) return false;
	if (dx === dy && dy === 0) {
	} else {
		let gcd = getGreatestCommonDenominator(dy, dx);
		dy /= gcd;
		dx /= gcd;
	}
	let x = origin.x + dx;
    let y = origin.y + dy;
	while (y !== origin.y || x !== origin.x) {
		if (asteroidLocations.has(`${x},${y}`)) {
			if (y === destintation.y && x === destintation.x) {
				return true;
            }
			return false;
		}
		y += dy;
		x += dx;
    }
}

const checkLineOfSight = (x1, y1, x2, y2) => {
	if (input[y2][x2] !== "#") return false;
	if (input[y1][x1] !== "#") return false;
	if (y2 === y1 && x2 === x1) return false;
	let dy = y2 - y1; // 4
	let dx = x2 - x1; // 2
	if (dx === dy && dy === 0) {
	} else {
		let gcd = getGreatestCommonDenominator(dy, dx);
		dy /= gcd;
		dx /= gcd;
	}
	let x = x1 + dx;
	let y = y1 + dy;
	let ibtcount = 0;
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
}
let highestCount = 0;
Array.from(asteroidLocations.values()).forEach((location: string) => {
    let count = 0;
    Array.from(asteroidLocations.values()).filter(f => f !== location).forEach((viewedAstroid: string) => {
        const l = location.match(/(\d+),(\d+)/)
        const d = viewedAstroid.match(/(\d+),(\d+)/)
        count += hasLineOfSight({x: Number(l[1]), y: Number(l[2])}, {x:Number(d[1]), y:Number(d[2])}, asteroidLocations) ? 1 : 0;
    })
    highestCount = count > highestCount ? count : highestCount;
})

let i = 19;
let j = 20; // 329 25 31

let count = 0;
let allSlopes = []; // [angle, numInBetween, x, y]
for (let y2 = 0; y2 < input.length; y2++) {
	for (let x2 = 0; x2 < input[0].length; x2++) {
		let los = checkLineOfSight(j, i, x2, y2);
		if (los === false) continue;
		allSlopes.push([getAngle(j, i, x2, y2), los, x2, y2]);
	}
}
allSlopes.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));
console.log(allSlopes[199]);

const firstPart = `First part: ${highestCount}`;
const secondPart = `Second part:`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
