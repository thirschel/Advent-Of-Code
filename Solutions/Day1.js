var direction = 1;
var x=0,y=0;
var locations = [];
var input = ['L2','L3','L3','L4','R1','R2','L3','R3','R3','L1','L3','R2','R3','L3','R4','R3','R3','L1','L4','R4','L2','R5','R1','L5','R1','R3','L5','R2','L2','R2','R1','L1','L3','L3','R4','R5','R4','L1','L189','L2','R2','L5','R5','R45','L3','R4','R77','L1','R1','R194','R2','L5','L3','L2','L1','R5','L3','L3','L5','L5','L5','R2','L1','L2','L3','R2','R5','R4','L2','R3','R5','L2','L2','R3','L3','L2','L1','L3','R5','R4','R3','R2','L1','R2','L5','R4','L5','L4','R4','L2','R5','L3','L2','R4','L1','L2','R2','R3','L2','L5','R1','R1','R3','R4','R1','R2','R4','R5','L3','L5','L3','L3','R5','R4','R1','L3','R1','L3','R3','R3','R3','L1','R3','R4','L5','L3','L1','L5','L4','R4','R1','L4','R3','R3','R5','R4','R3','R3','L1','L2','R1','L4','L4','L3','L4','L3','L5','R2','R4','L2'];
input.forEach(i=>{
  var turn = i[0];
  var blocks = parseInt(i.substring(1));
  direction = turn === "L" ? ((direction - 1) + 4)%4 : ((direction + 1) + 4)%4;
  switch(direction){
    case 0:
      for(var i=1;i<blocks+1;i++){
          locations.push((x-i)+','+y)
      }
      x -= blocks;
      break;
    case 1:
      for(var i=1;i<blocks+1;i++){
          locations.push(x+','+(y+i))
      }
      y += blocks;
      break;
    case 2:
      for(var i=1;i<blocks+1;i++){
          locations.push(x+i+','+y)
      }
      x += blocks;
      break;
    case 3:
      for(var i=1;i<blocks+1;i++){
          locations.push(x+','+(y-i))
      }
      y -= blocks;
      break;
  }
})
var first, len=locations.length, i=0;

for (i; i<len; i++) {
	if (locations.lastIndexOf(locations[i]) !== i) {
    	first = locations[i].split(',');
        break;
    }
}
console.log('First part: '+(Math.abs(x)+Math.abs(y))+' blocks away')
console.log('Second part: '+(Math.abs(first[0])+Math.abs(first[1]))+' blocks away'); 
