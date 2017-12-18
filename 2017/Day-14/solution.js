const input = 'stpzcrnm';
const knotList =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255];
const calculateKnotHash = (knotList, commands, rounds = 1) => {
	var pos = 0, skip = 0;
  for(var r=0;r<rounds;r++){
    commands.forEach(c=>{
      var selected = [];
      var idx = pos;
      for(var i = 0;i<c;i++){
        selected.push(knotList[idx]);
        idx = idx === knotList.length - 1 ? 0 : idx + 1;
      }
      selected.reverse();
      var idx = pos;
      for(var i = 0;i<c;i++){
        knotList[idx] = selected[i];
        idx = idx === knotList.length - 1 ? 0 : idx + 1;
      }
      pos = (pos + c + skip) % knotList.length;
      skip++;
    });
  }
  var tempArr = knotList.map(i=>i);
  var knotHash = '';
  for(var i=0;i<16;i++){
  	var block = tempArr.splice(0,16);
    var hex  = block.reduce((a,b)=>a^b).toString(16);
    knotHash += hex.length === 2 ? hex : `0${hex}`;
  }
  return {knotList, knotHash};
}

var grid = [];

const padBinary = (s) =>{
	while(s.length < 4){
  	s = '0' + s;
  }
  return s;
}
var asciiInput = [];
var totalUsed = 0;
for (var i=0;i<128;i++){
	asciiInput = `${input}-${i}`.split('').map(i=>i.charCodeAt(0));
	asciiInput.push(17, 31, 73, 47, 23);
	
	var knotHash = calculateKnotHash(knotList.map(i=>i), asciiInput, 64).knotHash;
	var binHash = knotHash.split('').reduce((a,k)=>a += padBinary(parseInt(k, 16).toString(2)),'');
  var gridRow = binHash;
	grid.push(gridRow.replace(/1/g,'#').replace(/0/g,'.').split(''));
	totalUsed += binHash.split('').reduce((used,b)=>used+parseInt(b),0);
}

const getValidMoves = (x,y,previousMoves)=>{
  const positions = [{x:x + 1, y}, {x:x - 1, y}, {x, y:y + 1}, {x, y:y - 1}];
  return positions.filter(p => previousMoves.indexOf(p.x+','+p.y) < 0 && grid[p.y] !== undefined && grid[p.y][p.x] !== undefined);
}

const findConnectedRegion = (x,y, previousMoves, regions) =>{
	var moves = getValidMoves(x,y,previousMoves);
  moves.forEach(m=>{
  	previousMoves.push(`${m.x},${m.y}`);
  	if(grid[m.y][m.x] === '#'){
    	grid[m.y][m.x] = regions;
      findConnectedRegion(m.x,m.y,previousMoves,regions);
    }
  })
}

var regions = 0;
grid.forEach((row,y)=>{
	row.forEach((val,x)=>{
  	if(grid[y][x] === '#'){
    	regions++;
      grid[y][x] = regions;
      findConnectedRegion(x,y, [], regions);
    }
  });
});

console.log(`First Part:${totalUsed}`);
console.log(`Second Part: ${regions}`);
