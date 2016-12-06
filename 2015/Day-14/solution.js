//noprotect
const input = ['Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.', 'Rudolph can fly 3 km/s for 15 seconds, but then must rest for 28 seconds.', 'Donner can fly 19 km/s for 9 seconds, but then must rest for 164 seconds.', 'Blitzen can fly 19 km/s for 9 seconds, but then must rest for 158 seconds.', 'Comet can fly 13 km/s for 7 seconds, but then must rest for 82 seconds.', 'Cupid can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.', 'Dasher can fly 14 km/s for 3 seconds, but then must rest for 38 seconds.', 'Dancer can fly 3 km/s for 16 seconds, but then must rest for 37 seconds.', 'Prancer can fly 25 km/s for 6 seconds, but then must rest for 143 seconds.'];
const time = 2503;

const parseInput = (input) =>{
  var parsed = input.match(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./);
  var reindeer = {
    name:parsed[1],
    speed:parseInt(parsed[2]),
    duration:parseInt(parsed[3]), 
    cooldown: parseInt(parsed[4])
  };
  reindeer.distance = Math.ceil(time / (reindeer.duration + reindeer.cooldown)) * (reindeer.speed * reindeer.duration);
  reindeer.distancePerSecond = (i) => ((Math.floor(i/(reindeer.duration + reindeer.cooldown))) * (reindeer.speed * reindeer.duration)) + 
                                        (i % (reindeer.duration + reindeer.cooldown) <= reindeer.duration ?
                                        (i % (reindeer.duration + reindeer.cooldown)) * reindeer.speed : reindeer.speed * reindeer.duration)
  return reindeer;
}

const firstPart = input.reduce((max, i) => parseInput(i).distance > max ? parseInput(i).distance : max, 0);
var secondPart={};

for(var i=1;i<=time;i++){
  var furthest = input.reduce((max, rd) => parseInput(rd).distancePerSecond(i) > max ? parseInput(rd).distancePerSecond(i) : max, 0);
  var leadReindeer = input.filter(rd=>parseInput(rd).distancePerSecond(i) === furthest).map(rd=>parseInput(rd));
  leadReindeer.forEach(lr=>{ 
    secondPart[lr.name] = secondPart[lr.name] ? secondPart[lr.name]+1 : 1;
  })
}
console.log('First part: '+firstPart);
console.log('Second part: ' + Math.max.apply( Math, Object.values(secondPart)));