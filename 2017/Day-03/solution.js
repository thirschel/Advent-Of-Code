const input = 312051;
var spiral = [[1]];
var spiral2 = [[1]];

const generateSquare = (currentSquare)=>{
  var middle = Math.floor(currentSquare.length / 2);
  var nextLength = currentSquare.length + 2;
  var nextNum = currentSquare[currentSquare.length - 1][ currentSquare[currentSquare.length - 1].length - 1];
  var x,y= null;
  nextNum++;
  
  // Right Side
  for(var i=0;i<currentSquare.length;i++){
    currentSquare[currentSquare.length - 1 - i].push(nextNum);
    y = nextNum === input ? currentSquare.length - 1 - i : y;
    x = nextNum === input ? currentSquare[currentSquare.length - 1 - i].length : x;
    nextNum++;
  }
  
  // Top
  var top = [];
  for(var i=0;i<nextLength;i++){
    top.unshift(nextNum);
    y = nextNum === input ? 0 : y;
    x = nextNum === input ? i : 0;
    nextNum++;
  }
  
  // Left
  for(var i=0;i<currentSquare.length;i++){
    currentSquare[i].unshift(nextNum);
    y = nextNum === input ? nextLength - 1 - i : y;
    x = nextNum === input ? 0 : x;
    nextNum++;
  }
  
  // Bottom
  var bottom = [];
  for(var i=0;i<nextLength;i++){
    bottom.push(nextNum);
    y = nextNum === input ? nextLength - 1 : y;
    x = nextNum === input ? i : x;
    nextNum++;
  }
  
  currentSquare.unshift(top);
  currentSquare.push(bottom);
  if(nextNum >= input){
  var xDiff = Math.abs(x - Math.floor(currentSquare.length / 2));
  var yDiff = Math.abs(y - Math.floor(currentSquare.length / 2));
    console.log(`First Part: ${xDiff + yDiff} `);
	return true;
  }
}

const generateStressSquare = (currentSquare)=>{
  var middle = Math.floor(currentSquare.length / 2);
  var nextLength = currentSquare.length + 2;
  var nextNum = null;
  
  // Right Side
  for(var i=0;i<currentSquare.length;i++){
  	var left = currentSquare[currentSquare.length - 1 - i][currentSquare[currentSquare.length - 1 - i].length - 1];
    var botLeft = currentSquare[currentSquare.length - i] ? currentSquare[currentSquare.length - i][currentSquare.length - 1] : 0;
    var topLeft = currentSquare[currentSquare.length - i - 2] ? currentSquare[currentSquare.length - i - 2][currentSquare.length - 1] : 0;
    var bot = currentSquare[currentSquare.length - i] ? currentSquare[currentSquare.length - i][currentSquare[currentSquare.length - i].length - 1] : 0;
    nextNum = left + botLeft + topLeft + bot;
    currentSquare[currentSquare.length - 1 - i].push(nextNum);
	if(nextNum >= input){
    	console.log(`Second Part: ${nextNum}`);
		return true;
  	}
  }
  
  // Top
  var top = [];
  for(var i=0;i<nextLength;i++){
    var right = top.length ? top[top.length - i] : 0;
    var botRight = currentSquare[0][currentSquare.length - i + 1] ? currentSquare[0][currentSquare.length - i + 1] : 0;
    var bot = currentSquare[0][currentSquare.length - i] ? currentSquare[0][currentSquare.length - i] : 0;
    var botLeft = currentSquare[0][currentSquare.length - i - 1] ? currentSquare[0][currentSquare.length - i - 1] : 0;
    nextNum = right + botRight + bot + botLeft;
    top.unshift(nextNum);
        if(nextNum >= input){
    	console.log(`Second Part: ${nextNum}`);
      return true;
  	}
  }
  
  // Left
  for(var i=0;i<currentSquare.length;i++){
    var tp = i===0 ? top[0] : currentSquare[i - 1][0];
    var topRight = i===0 ? top[1] : currentSquare[i - 1][1];
    var right = currentSquare[i][0];
    var botRight = currentSquare[i + 1] ? currentSquare[i + 1][0] : 0;
    nextNum = tp + topRight + right + botRight;
    currentSquare[i].unshift(nextNum);
	if(nextNum >= input){
    	console.log(`Second Part: ${nextNum}`);
		return true;
  	}
  }
  
  // Bottom
  var bottom = [];
  for(var i=0;i<nextLength;i++){
    var left = bottom.length ? bottom[i -1] : 0;
    var topLeft = currentSquare[currentSquare.length - 1][i - 1] ? currentSquare[currentSquare.length - 1][i - 1] : 0;
    var tp = currentSquare[currentSquare.length - 1][i];
    var topRight = currentSquare[currentSquare.length - 1][i + 1] ? currentSquare[currentSquare.length - 1][i + 1] : 0;
    nextNum = left + topLeft +tp + topRight;
    bottom.push(nextNum);
    if(nextNum >= input){
		console.log(`Second Part: ${nextNum}`);
		return true;
  	}
  }
  
  currentSquare.unshift(top);
  currentSquare.push(bottom);
}

while(!generateSquare(spiral)){

}

while(!generateStressSquare(spiral2)){

}

