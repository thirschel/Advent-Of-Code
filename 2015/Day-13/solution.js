const input = ['Alice would gain 2 happiness units by sitting next to Bob.', 'Alice would gain 26 happiness units by sitting next to Carol.', 'Alice would lose 82 happiness units by sitting next to David.', 'Alice would lose 75 happiness units by sitting next to Eric.', 'Alice would gain 42 happiness units by sitting next to Frank.', 'Alice would gain 38 happiness units by sitting next to George.', 'Alice would gain 39 happiness units by sitting next to Mallory.', 'Bob would gain 40 happiness units by sitting next to Alice.', 'Bob would lose 61 happiness units by sitting next to Carol.', 'Bob would lose 15 happiness units by sitting next to David.', 'Bob would gain 63 happiness units by sitting next to Eric.', 'Bob would gain 41 happiness units by sitting next to Frank.', 'Bob would gain 30 happiness units by sitting next to George.', 'Bob would gain 87 happiness units by sitting next to Mallory.', 'Carol would lose 35 happiness units by sitting next to Alice.', 'Carol would lose 99 happiness units by sitting next to Bob.', 'Carol would lose 51 happiness units by sitting next to David.', 'Carol would gain 95 happiness units by sitting next to Eric.', 'Carol would gain 90 happiness units by sitting next to Frank.', 'Carol would lose 16 happiness units by sitting next to George.', 'Carol would gain 94 happiness units by sitting next to Mallory.', 'David would gain 36 happiness units by sitting next to Alice.', 'David would lose 18 happiness units by sitting next to Bob.', 'David would lose 65 happiness units by sitting next to Carol.', 'David would lose 18 happiness units by sitting next to Eric.', 'David would lose 22 happiness units by sitting next to Frank.', 'David would gain 2 happiness units by sitting next to George.', 'David would gain 42 happiness units by sitting next to Mallory.', 'Eric would lose 65 happiness units by sitting next to Alice.', 'Eric would gain 24 happiness units by sitting next to Bob.', 'Eric would gain 100 happiness units by sitting next to Carol.', 'Eric would gain 51 happiness units by sitting next to David.', 'Eric would gain 21 happiness units by sitting next to Frank.', 'Eric would gain 55 happiness units by sitting next to George.', 'Eric would lose 44 happiness units by sitting next to Mallory.', 'Frank would lose 48 happiness units by sitting next to Alice.', 'Frank would gain 91 happiness units by sitting next to Bob.', 'Frank would gain 8 happiness units by sitting next to Carol.', 'Frank would lose 66 happiness units by sitting next to David.', 'Frank would gain 97 happiness units by sitting next to Eric.', 'Frank would lose 9 happiness units by sitting next to George.', 'Frank would lose 92 happiness units by sitting next to Mallory.', 'George would lose 44 happiness units by sitting next to Alice.', 'George would lose 25 happiness units by sitting next to Bob.', 'George would gain 17 happiness units by sitting next to Carol.', 'George would gain 92 happiness units by sitting next to David.', 'George would lose 92 happiness units by sitting next to Eric.', 'George would gain 18 happiness units by sitting next to Frank.', 'George would gain 97 happiness units by sitting next to Mallory.', 'Mallory would gain 92 happiness units by sitting next to Alice.', 'Mallory would lose 96 happiness units by sitting next to Bob.', 'Mallory would lose 51 happiness units by sitting next to Carol.', 'Mallory would lose 81 happiness units by sitting next to David.', 'Mallory would gain 31 happiness units by sitting next to Eric.', 'Mallory would lose 73 happiness units by sitting next to Frank.', 'Mallory would lose 89 happiness units by sitting next to George.'];
const MYSELF = 'Myself';

var guests = [];
var guestLookup = new Map();

const parseInput = (input) =>{
  var affectedGuest = input.split(' ')[0];
  var deltaGuest = input.split(' ')[input.split(' ').length-1].replace('.','');
  var changeAction = input.match(/(gain|lose)/g)[0];
  var changeAmount = parseInt(input.match(/(\d{1,})/g)[0]);
  return {affectedGuest:affectedGuest,deltaGuest:deltaGuest,changeAmount:changeAction === 'gain' ? changeAmount : changeAmount * -1}
}

input.forEach(i=>{
  var parsedInput = parseInput(i);
    if(guests.indexOf(parsedInput.affectedGuest) < 0 ){
      guests.push(parsedInput.affectedGuest);
    }
    guestLookup.set(parsedInput.affectedGuest+'=>'+parsedInput.deltaGuest,parsedInput.changeAmount);
})

const calculateOptimalSeats = (currentGuest, previousGuest, guests)=>{
  var left = previousGuest ? guestLookup.get(currentGuest+'=>'+previousGuest) : 0; 
  if(guests.length){
    return left + guestLookup.get(currentGuest+'=>'+guests[0]) + calculateOptimalSeats(guests[0],currentGuest,guests.filter(d=>d !== guests[0]));
  }
  else{
    return left; 
  }
}

const shuffle = (a) => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]]; 
    } 
} 

var firstPart, secondPart;  
for(var i=0;i<100000;i++){  
  shuffle(guests);   
  var result = calculateOptimalSeats(guests[0],guests[guests.length -1],guests.filter(d=>d !== guests[0])) +guestLookup.get(guests[guests.length -1]+'=>'+guests[0]); 
  firstPart = !firstPart || result > firstPart ? result : firstPart; 
}   


guests.forEach(g=>{
  guestLookup.set(MYSELF+'=>'+g,0);
  guestLookup.set(g+'=>'+MYSELF,0);
})
guests.push(MYSELF);
for(var i=0;i<100000;i++){  
  shuffle(guests);   
  var result = calculateOptimalSeats(guests[0],guests[guests.length -1],guests.filter(d=>d !== guests[0])) +guestLookup.get(guests[guests.length -1]+'=>'+guests[0]); 
  secondPart = !secondPart || result > secondPart ? result : secondPart; 
} 
  
console.log('First part: ' + firstPart); 
console.log('Second part: ' + secondPart); 