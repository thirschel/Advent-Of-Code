//noprotect
const input = 1350;

getValidMoves = (x,y,previousMoves)=>{
  const positions = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
  return positions.filter(([x, y]) => {
    if (x < 0 || y < 0) return false;
    const n = (x * x + 3 * x + 2 * x * y + y + y * y) + input;
    return n.toString(2).split('').reduce((isEven, i) => (i === '1' ? !isEven : isEven), true) &&
      previousMoves.indexOf(x+','+y)<0;
  });
}
var secondPart = new Map();
var firstPart;

const navigateMaze=(x, y, previousMoves, moves, moveLimit)=>{
  if(moveLimit){
      secondPart.set(x+','+y,1);
      if(moveLimit <= moves){
        return
      }
  }
  if((x == 31 && y==39)||(firstPart && firstPart<moves)){
    return moves;
  }
  previousMoves.push(x+','+y);
  var validMoves = getValidMoves(x,y, previousMoves);
  validMoves.forEach(vm=>{
    var value = navigateMaze(vm[0], vm[1] ,JSON.parse(JSON.stringify(previousMoves)), moves + 1, moveLimit);
    firstPart = !firstPart || value < firstPart ? value : firstPart;
  })
}

navigateMaze(1,1,[],0);
console.log('First part: ' + firstPart);
navigateMaze(1,1,[],0, 50);
console.log('Second part: '+ [...secondPart.keys()].length);