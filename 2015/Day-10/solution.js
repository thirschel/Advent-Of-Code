var sayLookResult = '1113122113';
var firstPart,secondPart;

for(var i=0;i<50;i++){
  var builtString='';
  var results = sayLookResult.match(/(\d)\1*/g);
  results.forEach(r=>{
    builtString += r.length + r[0];
  });
  sayLookResult = builtString;
  firstPart = i === 39 ?  sayLookResult.length : firstPart;
  secondPart = i === 49 ?  sayLookResult.length : secondPart;
}
console.log('Part part: '+firstPart)
console.log('Second part: '+secondPart)
