//noprotect
const input = ['Disc #1 has 13 positions; at time=0, it is at position 10.', 'Disc #2 has 17 positions; at time=0, it is at position 15.', 'Disc #3 has 19 positions; at time=0, it is at position 17.', 'Disc #4 has 7 positions; at time=0, it is at position 1.', 'Disc #5 has 5 positions; at time=0, it is at position 0.', 'Disc #6 has 3 positions; at time=0, it is at position 1.'];

const parseInput = (i) =>{
  const parsed = i.match(/Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)./);
  return {numPositions:parseInt(parsed[2]), startPosition:parseInt(parsed[3])};
}

const plinko = (discs) =>{
  var firstTime;
  for(var i=0;firstTime===undefined;i++){
    var canFall = true;
    for(j=0;j<discs.length;j++){
      canFall = (discs[j].startPosition + (i+j+1)) % discs[j].numPositions === 0 ? canFall : false;
      if(!canFall)break;
      firstTime = canFall && j ===discs.length - 1 ? i : firstTime;
    }
  }
  return firstTime;
}


console.log('First part: '+plinko(input.map(i=>parseInput(i))));

var secondPart =input.map(i=>parseInput(i));
secondPart.push({numPositions:11, startPosition:0});

console.log('Second part: '+plinko(secondPart));a