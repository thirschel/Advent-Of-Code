const input = ['63, 142', '190, 296', '132, 194', '135, 197', '327, 292', '144, 174', '103, 173', '141, 317', '265, 58', '344, 50', '184, 238', '119, 61', '329, 106', '70, 242', '272, 346', '312, 166', '283, 351', '286, 206', '57, 225', '347, 125', '152, 186', '131, 162', '45, 299', '142, 102', '61, 100', '111, 218', '73, 266', '350, 173', '306, 221', '42, 284', '150, 122', '322, 286', '346, 273', '75, 354', '68, 124', '194, 52', '92, 44', '77, 98', '77, 107', '141, 283', '87, 306', '184, 110', '318, 343', '330, 196', '303, 353', '268, 245', '180, 220', '342, 337', '127, 107', '203, 127'];

const parse = (i) => {
   const groups = i.match(/(\d+), (\d+)/);
   return {
      x: groups[1],
      y: groups[2]
   }
}
let xRange = 0;
let yRange = 0;
const coordinates = input.map(i => {
   const coordinate = parse(i);
   xRange = Math.max(xRange, coordinate.x);
   yRange = Math.max(yRange, coordinate.y);
   return coordinate;
});
let coordinateCount = {};
let infiniteCoordinates = new Set();

let firstPart = 0;
let secondPart = 0;
const calculateDistance = (x1, x2, y1, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
for (var y = 0; y < yRange + 1; y++) {
   for (var x = 0; x < xRange + 1; x++) {
      const distances = coordinates.map(coordinate => calculateDistance(x, coordinate.x, y, coordinate.y))
      const totalDistance = distances.reduce((a, b) => a + b, 0);
      const shortest = Math.min(...distances)

      if (distances.filter(d => d === shortest).length === 1) {
         let count = coordinateCount[distances.indexOf(shortest)] || 0;
         coordinateCount[distances.indexOf(shortest)] = count + 1;
         if ((y === 0 || y === yRange || x === 0 || x === xRange)) {
            infiniteCoordinates.add(distances.indexOf(shortest));
         }
      }
      if (totalDistance < 10000) {
         secondPart++;
      }
   }
}


Object.keys(coordinateCount).forEach((coor, i) => {
   if (!infiniteCoordinates.has(i)) {
      firstPart = coordinateCount[i] > firstPart ? coordinateCount[i] : firstPart;
   }
})

console.log(`First part: ${firstPart}`);
console.log(`First part: ${secondPart}`);