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


const isFloorsValid = (floors, previousFloors) =>{
  for(var f=1;f<=4;f++){
    var chips = floors[f].filter(i=>i.includes('microchip'));
    var generators = floors[f].filter(i=>!i.includes('microchip'));
    for(var c=0;c<chips.length;c++){
      if(generators.length > 0 && !generators.some(g=>g.includes(chips[c].split('-')[0]))){
         return false
      }
    }
  };
  return !previousFloors.has(getHash(floors));
}

const getHash = (floors) =>{
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
  return pairs.map(p=>'('+p.m+','+p.g+')').toString();
}

const moveEquipment = (floors,previousFloors, elevator, moves) =>{

  if(moves > 100)return;
  if(floors[1].length === 0  && floors[2].length === 0  && floors[3].length === 0){
        console.log(moves)
    return moves;
  }
  var validMoves=[];
  if(elevator>1){
    for(var i=1;i<3;i++){
      for(var j=0;j<floors[elevator].length;j++){
        var newFloors = JSON.parse(JSON.stringify(floors));
        var itemsToMove;
        if(i>1){
          for(var k=0;k<floors[elevator].length;k++){
            if(k === j) break;
            itemsToMove=[newFloors[elevator][j],newFloors[elevator][k]];
            itemsToMove = itemsToMove.filter(i=>i!==undefined);
            newFloors[elevator].splice(j,2)
            newFloors[elevator - 1] = newFloors[elevator - 1].concat(itemsToMove);
            if(isFloorsValid(newFloors,previousFloors)){
              previousFloors.set(Object.keys(newFloors).map(i=>newFloors[i].toString()).toString(),i);
              validMoves.push({floors:newFloors, elevator: elevator - 1});
            }
          }
        }
        else{
          itemsToMove=[newFloors[elevator][j]];
          newFloors[elevator].splice(j,1);
          newFloors[elevator - 1] = newFloors[elevator - 1].concat(itemsToMove);
          if(isFloorsValid(newFloors,previousFloors)){
            previousFloors.set(Object.keys(newFloors).map(i=>newFloors[i].toString()).toString(),i);
            validMoves.push({floors:newFloors, elevator: elevator - 1});
          }
        }
      }
    }
  }
  if(elevator<4){
    for(var i=1;i<3;i++){
      for(var j=0;j<floors[elevator].length;j++){
        var newFloors = JSON.parse(JSON.stringify(floors));
        var itemsToMove;
        if(i>1){
          for(var k=0;k<floors[elevator].length;k++){
            if(k === j) break;
            itemsToMove=[newFloors[elevator][j],newFloors[elevator][k]];
            itemsToMove = itemsToMove.filter(i=>i!==undefined);
            newFloors[elevator].splice(j,2)
            newFloors[elevator + 1] = newFloors[elevator + 1].concat(itemsToMove);
            if(isFloorsValid(newFloors,previousFloors)){
              previousFloors.set(Object.keys(newFloors).map(i=>newFloors[i].toString()).toString(),i);
              validMoves.push({floors:newFloors, elevator: elevator + 1});
            }
          }
        }
        else{
          itemsToMove=[newFloors[elevator][j]];
          newFloors[elevator].splice(j,1);
          newFloors[elevator + 1] = newFloors[elevator + 1].concat(itemsToMove);
          if(isFloorsValid(newFloors,previousFloors)){
            previousFloors.set(Object.keys(newFloors).map(i=>newFloors[i].toString()).toString(),i);
            validMoves.push({floors:newFloors, elevator: elevator + 1});
          }
        }
      }
    }
  }
  validMoves.forEach(vm=>{
    moveEquipment(vm.floors, previousFloors, vm.elevator, moves + 1);
  })
}

moveEquipment(startingFloors, new Map(), 1, 0);
