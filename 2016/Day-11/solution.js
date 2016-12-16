//noprotect
const input = ['The first floor contains a thulium generator, a thulium-compatible microchip, a plutonium generator, and a strontium generator.', 'The second floor contains a plutonium-compatible microchip and a strontium-compatible microchip.', 'The third floor contains a promethium generator, a promethium-compatible microchip, a ruthenium generator, and a ruthenium-compatible microchip.', 'The fourth floor contains nothing relevant.'];

var startingFloors = {};

const parseInput = (i) =>{
  var floor = i.match(/(\w+) floor/)[1];
  var equipment = i.match(/((\w+) generator)|((\w+)-compatible microchip)/g);
  return {floor:floor, equipment:equipment};
}

input.forEach((i,j)=>{
  var parsed = parseInput(i);
  startingFloors[j+1] = parsed.equipment || [];
})
console.log(startingFloors);

const isFloorsValid = (floors, elevator, previousFloors) =>{
  for(var f=1;f<=4;f++){
    var chips = floors[f].filter(i=>i.includes('microchip'));
    var generators = floors[f].filter(i=>!i.includes('microchip'));
    for(var c=0;c<chips.length;c++){
      if(generators.length > 0 && !generators.some(g=>g.includes(chips[c].split('-')[0]))){
        return false
      }
    }
  }
  return previousFloors.indexOf(getHash(floors,elevator)) < 0;
}

const getHash = (floors,elevator) =>{
  var pairs =[];
  for(var f=1;f<=4;f++){
    var chips = floors[f].filter(i=>i.includes('microchip'));
    chips.forEach(c=>{
        for(var f1=1;f1<=4;f1++){
            if(floors[f1].includes(c.split('-')[0]+' generator')){
            	pairs.push({m:f, g:f1})
            }
        }
    })

  };
	pairs.sort((a,b)=>{
  	if(b.m > a.m){
    return -1;
    }
    if(b.m === a.m){
    	if(b.g > a.g){
      return -1;
      }
      if(b.g === a.g){
      return 0;
      }
      return 1;
    }
    return 1;
  })
  return pairs.map(p=>'('+p.m+','+p.g+')').toString()+elevator;
}


function* powerSet(array, n) {
  if (n == 0 || array.length == 0 || n > array.length) {
    yield []
    return
  }

  for (let i = 0; i < array.length - n + 1; i++) {
    for (let rest of powerSet(array.slice(i + 1), n - 1)) {
      rest.unshift(array[i])
      yield rest
    }
  }
}

getValidMoves = (floors, elevator, previousFloors)=>{
  const positions = [{elevator:elevator + 1,items:2},{elevator:elevator + 1,items:1}, {elevator:elevator - 1,items:2},{elevator:elevator - 1,items:1}];
  var moves=[];
  positions.forEach(p=>{
    if(p.elevator > 0 && p.elevator < 5){
      for (let objects of powerSet(floors[elevator], p.items)) {
        var newFloors = JSON.parse(JSON.stringify(floors));
        newFloors[elevator] = newFloors[elevator].filter(i=>!objects.some(o=>i===o));
        newFloors[p.elevator] = newFloors[p.elevator].concat(objects);
        if(isFloorsValid(newFloors,p.elevator,previousFloors)){
          previousFloors.push(getHash(floors,elevator));
          moves.push({floors:newFloors,elevator:p.elevator});
        }
      }
    }
  })
  return moves;
}

var firstPart;
const moveEquipment = (floors, elevator, previousFloors, moves) =>{
  var queue = [];
  queue.push({floors:floors,elevator:elevator,moves:moves});
  
  while(queue.length){
    var step = queue.shift();
    if(Object.keys(step.floors).reduce((total,i)=>i!==4 ? step.total + step.floors[i].length : total,0) === 0 || firstPart < step.moves){
      console.log('Found',step.moves)
      return step.moves;
    }
    var validMoves=getValidMoves(step.floors,step.elevator,previousFloors);
    console.log(step.moves)
    validMoves.forEach(vm=>{
      queue.push({floors:vm.floors,elevator:vm.elevator,moves:step.moves+1});
    })
  }
}

moveEquipment(startingFloors, 1, [], 0);
