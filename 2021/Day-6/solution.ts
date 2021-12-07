const input = [3,5,1,5,3,2,1,3,4,2,5,1,3,3,2,5,1,3,1,5,5,1,1,1,2,4,1,4,5,2,1,2,4,3,1,2,3,4,3,4,4,5,1,1,1,1,5,5,3,4,4,4,5,3,4,1,4,3,3,2,1,1,3,3,3,2,1,3,5,2,3,4,2,5,4,5,4,4,2,2,3,3,3,3,5,4,2,3,1,2,1,1,2,2,5,1,1,4,1,5,3,2,1,4,1,5,1,4,5,2,1,1,1,4,5,4,2,4,5,4,2,4,4,1,1,2,2,1,1,2,3,3,2,5,2,1,1,2,1,1,1,3,2,3,1,5,4,5,3,3,2,1,1,1,3,5,1,1,4,4,5,4,3,3,3,3,2,4,5,2,1,1,1,4,2,4,2,2,5,5,5,4,1,1,5,1,5,2,1,3,3,2,5,2,1,2,4,3,3,1,5,4,1,1,1,4,2,5,5,4,4,3,4,3,1,5,5,2,5,4,2,3,4,1,1,4,4,3,4,1,3,4,1,1,4,3,2,2,5,3,1,4,4,4,1,3,4,3,1,5,3,3,5,5,4,4,1,2,4,2,2,3,1,1,4,5,3,1,1,1,1,3,5,4,1,1,2,1,1,2,1,2,3,1,1,3,2,2,5,5,1,5,5,1,4,4,3,5,4,4];

const researchFishCycles = (fishAge: Array<number>, numberOfDays: number) => {
    var schoolsOfFish = new Map<number, number>();
    for (let i = 0; i < 9; i++) {
        schoolsOfFish.set(i, 0);
    }
    fishAge.forEach(fish =>{
        schoolsOfFish.set(fish, schoolsOfFish.get(fish) + 1);
    });
    for(var i =0; i < numberOfDays; i++) {
        var zeroAgeCount = schoolsOfFish.get(0);
        for (let i = 0; i < 8; i++) {
            schoolsOfFish.set(i, schoolsOfFish.get(i + 1));
          }
          schoolsOfFish.set(8, zeroAgeCount);
          schoolsOfFish.set(6, schoolsOfFish.get(6) + zeroAgeCount);
    }
    return Array.from(schoolsOfFish.values()).reduce((a,b) => a + b, 0);
}

const firstPart = `First part: ${researchFishCycles(input, 80)}` ;
const secondPart = `Second part: ${researchFishCycles(input, 256)}` ;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);