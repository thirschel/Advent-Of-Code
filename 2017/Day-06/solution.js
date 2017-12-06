const input = [0,5,10,0,11,14,13,4,11,8,8,7,1,4,12,11];

const findInfiniteLoop = (arr) =>{
  var configurations = new Set();
  var cycles = 0;
  while(!configurations.has(arr.toString())){
    configurations.add(arr.toString());
    var idx,redistribution = 0;
    for(var i=0;i<arr.length;i++){
    	idx = redistribution < arr[i] ? i : idx;
      redistribution = redistribution < arr[i] ? arr[i] : redistribution;
    }
    arr[idx] = 0;
    idx = (idx + 1) % arr.length;
    while(redistribution > 0){
      arr[idx] += 1;
      redistribution--;
      idx = (idx + 1) % arr.length;
    }
    cycles++;
  }
  return {cycles:cycles, arr:arr};
}
var firstOccurence = findInfiniteLoop(input, true);
console.log(`First Part: ${firstOccurence.cycles}`);
console.log(`Second Part: ${findInfiniteLoop(firstOccurence.arr,false).cycles}`);
