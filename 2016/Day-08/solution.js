//noprotect
const input = ['rect 1x1', 'rotate row y=0 by 5', 'rect 1x1', 'rotate row y=0 by 5', 'rect 1x1', 'rotate row y=0 by 5', 'rect 1x1', 'rotate row y=0 by 5', 'rect 1x1', 'rotate row y=0 by 2', 'rect 1x1', 'rotate row y=0 by 2', 'rect 1x1', 'rotate row y=0 by 3', 'rect 1x1', 'rotate row y=0 by 3', 'rect 2x1', 'rotate row y=0 by 2', 'rect 1x1', 'rotate row y=0 by 3', 'rect 2x1', 'rotate row y=0 by 2', 'rect 1x1', 'rotate row y=0 by 3', 'rect 2x1', 'rotate row y=0 by 5', 'rect 4x1', 'rotate row y=0 by 5', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=0 by 10', 'rotate column x=5 by 2', 'rotate column x=0 by 1', 'rect 9x1', 'rotate row y=2 by 5', 'rotate row y=0 by 5', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=2 by 5', 'rotate row y=0 by 5', 'rotate column x=0 by 1', 'rect 4x1', 'rotate column x=40 by 1', 'rotate column x=27 by 1', 'rotate column x=22 by 1', 'rotate column x=17 by 1', 'rotate column x=12 by 1', 'rotate column x=7 by 1', 'rotate column x=2 by 1', 'rotate row y=2 by 5', 'rotate row y=1 by 3', 'rotate row y=0 by 5', 'rect 1x3', 'rotate row y=2 by 10', 'rotate row y=1 by 7', 'rotate row y=0 by 2', 'rotate column x=3 by 2', 'rotate column x=2 by 1', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=2 by 5', 'rotate row y=1 by 3', 'rotate row y=0 by 3', 'rect 1x3', 'rotate column x=45 by 1', 'rotate row y=2 by 7', 'rotate row y=1 by 10', 'rotate row y=0 by 2', 'rotate column x=3 by 1', 'rotate column x=2 by 2', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=2 by 13', 'rotate row y=0 by 5', 'rotate column x=3 by 1', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=3 by 10', 'rotate row y=2 by 10', 'rotate row y=0 by 5', 'rotate column x=3 by 1', 'rotate column x=2 by 1', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=3 by 8', 'rotate row y=0 by 5', 'rotate column x=3 by 1', 'rotate column x=2 by 1', 'rotate column x=0 by 1', 'rect 4x1', 'rotate row y=3 by 17', 'rotate row y=2 by 20', 'rotate row y=0 by 15', 'rotate column x=13 by 1', 'rotate column x=12 by 3', 'rotate column x=10 by 1', 'rotate column x=8 by 1', 'rotate column x=7 by 2', 'rotate column x=6 by 1', 'rotate column x=5 by 1', 'rotate column x=3 by 1', 'rotate column x=2 by 2', 'rotate column x=0 by 1', 'rect 14x1', 'rotate row y=1 by 47', 'rotate column x=9 by 1', 'rotate column x=4 by 1', 'rotate row y=3 by 3', 'rotate row y=2 by 10', 'rotate row y=1 by 8', 'rotate row y=0 by 5', 'rotate column x=2 by 2', 'rotate column x=0 by 2', 'rect 3x2', 'rotate row y=3 by 12', 'rotate row y=2 by 10', 'rotate row y=0 by 10', 'rotate column x=8 by 1', 'rotate column x=7 by 3', 'rotate column x=5 by 1', 'rotate column x=3 by 1', 'rotate column x=2 by 1', 'rotate column x=1 by 1', 'rotate column x=0 by 1', 'rect 9x1', 'rotate row y=0 by 20', 'rotate column x=46 by 1', 'rotate row y=4 by 17', 'rotate row y=3 by 10', 'rotate row y=2 by 10', 'rotate row y=1 by 5', 'rotate column x=8 by 1', 'rotate column x=7 by 1', 'rotate column x=6 by 1', 'rotate column x=5 by 1', 'rotate column x=3 by 1', 'rotate column x=2 by 2', 'rotate column x=1 by 1', 'rotate column x=0 by 1', 'rect 9x1', 'rotate column x=32 by 4', 'rotate row y=4 by 33', 'rotate row y=3 by 5', 'rotate row y=2 by 15', 'rotate row y=0 by 15', 'rotate column x=13 by 1', 'rotate column x=12 by 3', 'rotate column x=10 by 1', 'rotate column x=8 by 1', 'rotate column x=7 by 2', 'rotate column x=6 by 1', 'rotate column x=5 by 1', 'rotate column x=3 by 1', 'rotate column x=2 by 1', 'rotate column x=1 by 1', 'rotate column x=0 by 1', 'rect 14x1', 'rotate column x=39 by 3', 'rotate column x=35 by 4', 'rotate column x=20 by 4', 'rotate column x=19 by 3', 'rotate column x=10 by 4', 'rotate column x=9 by 3', 'rotate column x=8 by 3', 'rotate column x=5 by 4', 'rotate column x=4 by 3', 'rotate row y=5 by 5', 'rotate row y=4 by 5', 'rotate row y=3 by 33', 'rotate row y=1 by 30', 'rotate column x=48 by 1', 'rotate column x=47 by 5', 'rotate column x=46 by 5', 'rotate column x=45 by 1', 'rotate column x=43 by 1', 'rotate column x=38 by 3', 'rotate column x=37 by 3', 'rotate column x=36 by 5', 'rotate column x=35 by 1', 'rotate column x=33 by 1', 'rotate column x=32 by 5', 'rotate column x=31 by 5', 'rotate column x=30 by 1', 'rotate column x=23 by 4', 'rotate column x=22 by 3', 'rotate column x=21 by 3', 'rotate column x=20 by 1', 'rotate column x=12 by 2', 'rotate column x=11 by 2', 'rotate column x=3 by 5', 'rotate column x=2 by 5', 'rotate column x=1 by 3', 'rotate column x=0 by 4'];
const HEIGHT = 6;
const WIDTH = 50;

var display = new Uint8Array(HEIGHT * WIDTH);

const parseInput = (i) =>{
  const instruction = i.match(/(rect|rotate row|rotate column)/);
  const variables = instruction[1] === 'rect' ? i.match(/(\d+)x(\d+)/) : i.match(/(x|y)=(\d+) by (\d+)/);
  return instruction[1] === 'rect' ? {action:instruction[1], width:parseInt(variables[1]), height:parseInt(variables[2])} :
      {action:instruction[1], index:parseInt(variables[2]), offset:parseInt(variables[3])}
}
  
input.forEach(i=>{
  const parsed = parseInput(i);
  switch(parsed.action){
    case 'rect':
      for(var y=0;y<parsed.height;y++){
        for(var x=0;x<parsed.width;x++){
          var index = 50 * y + x;
          display[index] = 1;
        }
      }
      break;
    case 'rotate row':
      var index = 50 * parsed.index;
      var newRow = new Uint8Array(WIDTH);
      for(var i=0;i<WIDTH;i++){
        newRow[(i+parsed.offset) % (WIDTH)] = display[index + i];
      }
      for(var i=0;i<WIDTH;i++){
        display[index + i]=newRow[i];
      }
      break;
    case 'rotate column':
      var index = parsed.index;
      var newColumn = new Uint8Array(HEIGHT);
      for(var i=0;i<HEIGHT;i++){
        newColumn[(i+parsed.offset) % (HEIGHT)] = display[50 * i + index];
      }
      for(var i=0;i<HEIGHT;i++){
        display[50 * i + index]=newColumn[i];
      }
      break;
  }
})

console.log('First part: '+display.reduce((total,i)=>total + i,0))
console.log('Second part:')
for(var y=0;y<HEIGHT;y++){
  var row=''
  for(var x=0;x<WIDTH;x++){
    var index = 50 * y + x;
    row += display[index] ? '#' : ' ';
  }
  console.log(row)
}