const input = '410 players; last marble is worth 72059 points';
let players = 410;
let lastMarble = 72059;

const playMarbleGame = (players, lastMarble) => {
	let scores = {};
	let currentMarble = {
	  marble: 0,
	};
	currentMarble.nextMarble = currentMarble;
	currentMarble.previousMarble = currentMarble;
	for(var marble = 1; marble <= lastMarble; marble++) {
		if(marble % 23 === 0) {
			const elfId = marble % players;
		for(var i = 0; i < 6; i ++){
			currentMarble  = currentMarble.previousMarble;
		}
			scores[elfId] = (scores[elfId] || 0) + marble + currentMarble.previousMarble.marble;
		currentMarble.previousMarble.previousMarble.nextMarble = currentMarble;
		currentMarble.previousMarble = currentMarble.previousMarble.previousMarble;
		}
		else{
			const newMarble = {
			marble,
			previousMarble: currentMarble.nextMarble,
			nextMarble: currentMarble.nextMarble.nextMarble,
		};
		currentMarble.nextMarble.nextMarble.previousMarble = newMarble;
		currentMarble.nextMarble.nextMarble = newMarble;
		currentMarble = newMarble;
		}
	}
	return Math.max(...Object.values(scores));
}

console.log(`First part: ${playMarbleGame(players, lastMarble)}`);
console.log(`Second part: ${playMarbleGame(players, lastMarble * 100)}`);