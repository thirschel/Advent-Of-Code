//noprotect
var input = ['Tristram to AlphaCentauri = 34', 'Tristram to Snowdin = 100', 'Tristram to Tambi = 63', 'Tristram to Faerun = 108', 'Tristram to Norrath = 111', 'Tristram to Straylight = 89', 'Tristram to Arbre = 132', 'AlphaCentauri to Snowdin = 4', 'AlphaCentauri to Tambi = 79', 'AlphaCentauri to Faerun = 44', 'AlphaCentauri to Norrath = 147', 'AlphaCentauri to Straylight = 133', 'AlphaCentauri to Arbre = 74', 'Snowdin to Tambi = 105', 'Snowdin to Faerun = 95', 'Snowdin to Norrath = 48', 'Snowdin to Straylight = 88', 'Snowdin to Arbre = 7', 'Tambi to Faerun = 68', 'Tambi to Norrath = 134', 'Tambi to Straylight = 107', 'Tambi to Arbre = 40', 'Faerun to Norrath = 11', 'Faerun to Straylight = 66', 'Faerun to Arbre = 144', 'Norrath to Straylight = 115', 'Norrath to Arbre = 135', 'Straylight to Arbre = 127'];
var destinations=[];
var distanceLookup= new Map();
var shortestRoute=0;
 
const parseInput = (i) =>{
  const destinations = i.match(/[A-Z][a-zA-Z]*/g);
  const distance = i.match(/\d+/); 
  return {destinations:destinations,distance:parseInt(distance)}
}  
 
input.forEach(i=>{
  var parsedInput = parseInput(i);
  parsedInput.destinations.forEach(dest=>{
    if(destinations.indexOf(dest) < 0 ){
      destinations.push(dest);
    }
  })
  distanceLookup.set(parsedInput.destinations[0]+'=>'+parsedInput.destinations[1],parsedInput.distance);
  distanceLookup.set(parsedInput.destinations[1]+'=>'+parsedInput.destinations[0],parsedInput.distance);
});

const calculateOptimalRoute = (currentDestination, dests)=>{
  if(dests.length){
    return distanceLookup.get(currentDestination+'=>'+dests[0]) + calculateOptimalRoute(dests[0],dests.filter(d=>d !== dests[0]));
  }
  else{
    return 0;
  }
}

const shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
 
var optimalRoute,pessimalRoute;  
for(var i=0;i<100000;i++){
  shuffle(destinations);
  var result = calculateOptimalRoute(destinations[0],destinations.filter(d=>d !== destinations[0]))
  optimalRoute = !optimalRoute || result < optimalRoute ? result : optimalRoute; 
  pessimalRoute = !pessimalRoute || result > pessimalRoute ? result : pessimalRoute; 
}   
console.log('First part: '+optimalRoute);
console.log('Second part: '+pessimalRoute)