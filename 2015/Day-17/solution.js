const input=['43', '3', '4', '10', '21', '44', '4', '6', '47', '41', '34', '17', '17', '44', '36', '31', '46', '9', '27', '38'];

const getCombinations = (chars) => {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix.concat(parseInt(chars[i])));
      f(prefix.concat(parseInt(chars[i])), chars.slice(i + 1));
    }
  }
  f([], chars);
  return result;
}

const combinations = getCombinations(input);

var secondPart = {};
var firstPart = 0;
combinations.forEach(combo=>{
  if(combo.reduce((goal,c)=>goal + c,0) === 150){
    firstPart++;
    secondPart[combo.length] = secondPart[combo.length] ? secondPart[combo.length] + 1 : 1;
  }
});

console.log('First part: '+ firstPart);
console.log('Second part: '+ secondPart[Math.min.apply(Math, Object.keys(secondPart).map(i=>parseInt(i)))]);