const input ={row:3010,column:3019};

var previousCode = 20151125;
const codes = [[previousCode]];
var position = 1;

while(!codes[Math.max.apply(Math,Object.values(input))*2]){
  if(!codes[position]){
    codes.push([]);
  }
  for(var i=position;i>=0;i--){
    previousCode = (previousCode * 252533) % 33554393;
    codes[i].push(previousCode);
  }
  position++;
}

console.log('First part: '+codes[input.row - 1][input.column - 1])