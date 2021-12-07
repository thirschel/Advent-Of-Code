const bingoBallsInput = [46,12,57,37,14,78,31,71,87,52,64,97,10,35,54,36,27,84,80,94,99,22,0,11,30,44,86,59,66,7,90,21,51,53,92,8,76,41,39,77,42,88,29,24,60,17,68,13,79,67,50,82,25,61,20,16,6,3,81,19,85,9,28,56,75,96,2,26,1,62,33,63,32,73,18,48,43,65,98,5,91,69,47,4,38,23,49,34,55,83,93,45,72,95,40,15,58,74,70,89];

const bingoBoardInput = [     [[37,72,60,35,89],     [32,49,4,77,82],     [30,26,27,63,88],     [29,43,16,34,58],     [48,33,96,79,94]],         [[41,94,77,43,87],     [2,17,82,96,25],     [95,49,32,12,9],     [59,33,67,71,64],     [88,54,93,85,30]],         [[78,84,73,64,81],     [6,66,54,21,15],     [72,88,69,5,93],     [11,96,38,95,44],     [13,41,94,55,48]],         [[5,14,2,82,33],     [56,26,0,84,92],     [8,95,24,54,25],     [68,67,15,85,47],     [20,91,36,13,88]],         [[39,26,33,65,32],     [78,72,80,51,0],     [35,64,60,18,31],     [93,59,83,54,74],     [86,5,9,98,69]],         [[0,8,20,18,70],     [5,29,65,21,57],     [68,61,83,63,51],     [91,73,77,75,80],     [35,62,16,32,10]],         [[51,78,58,67,93],     [50,14,99,5,31],     [6,21,48,30,83],     [22,33,23,1,34],     [2,72,57,54,42]],         [[15,68,4,24,49],     [12,9,74,88,51],     [91,19,50,76,75],     [80,84,23,17,53],     [67,42,22,85,36]],         [[41,78,11,69,9],     [90,25,98,65,77],     [97,53,37,84,89],     [58,63,5,55,1],     [24,10,74,20,82]],         [[42,19,95,89,49],     [61,31,50,76,3],     [34,47,32,69,86],     [78,68,99,11,91],     [55,12,73,45,23]],         [[24,53,95,64,14],     [40,29,71,57,97],     [62,70,25,22,2],     [88,68,33,82,59],     [72,38,76,78,43]],         [[73,36,84,90,40],     [16,4,57,9,29],     [38,97,46,51,83],     [86,88,99,44,32],     [54,49,37,43,62]],         [[18,66,17,49,27],     [24,93,91,87,72],     [54,37,77,43,10],     [88,80,60,15,79],     [47,68,12,2,69]],         [[9,23,13,57,68],     [38,97,63,88,98],     [96,62,65,82,58],     [61,83,29,47,40],     [21,86,20,16,56]],         [[27,90,37,97,52],     [14,96,76,21,79],     [0,43,63,81,56],     [42,62,23,55,74],     [45,72,77,44,47]],         [[8,78,63,24,87],     [9,23,12,17,68],     [36,83,45,61,50],     [84,77,18,86,37],     [31,26,19,49,94]],         [[72,84,59,48,40],     [92,98,35,1,80],     [83,15,85,63,39],     [2,64,58,13,20],     [29,88,60,12,74]],         [[21,94,52,6,4],     [89,70,39,23,64],     [96,87,31,54,14],     [88,35,83,13,56],     [84,10,98,48,68]],         [[70,33,48,21,37],     [91,95,65,38,77],     [92,14,26,96,60],     [12,6,73,13,81],     [54,55,2,45,80]],         [[60,11,67,95,28],     [5,32,0,71,12],     [47,78,13,54,43],     [49,89,82,66,77],     [26,53,19,79,3]],         [[81,9,53,72,29],     [56,35,60,44,45],     [42,94,96,88,64],     [15,92,4,6,14],     [97,11,17,61,63]],         [[24,43,33,9,34],     [36,28,69,35,7],     [47,4,14,82,38],     [11,1,52,0,49],     [93,87,98,41,5]],         [[37,79,99,34,77],     [38,26,25,95,70],     [28,78,40,33,86],     [41,57,96,10,24],     [9,74,72,50,81]],         [[18,96,52,29,61],     [38,90,1,48,51],     [78,11,27,55,97],     [33,21,87,93,67],     [79,46,94,45,2]],         [[27,63,6,90,10],     [3,60,24,5,89],     [78,72,76,54,8],     [33,22,87,51,58],     [4,37,64,91,43]],         [[63,73,87,80,89],     [29,14,95,48,3],     [71,55,69,9,67],     [30,99,19,2,86],     [26,72,88,85,37]],         [[12,57,81,78,40],     [35,4,55,15,39],     [33,45,25,60,70],     [86,79,88,52,3],     [90,20,28,59,85]],         [[92,51,98,47,99],     [41,78,65,4,46],     [19,87,39,89,17],     [12,23,36,29,44],     [6,82,71,16,37]],         [[8,34,81,67,80],     [83,92,13,11,41],     [39,89,93,49,43],     [20,69,3,74,76],     [44,72,68,70,45]],         [[66,39,94,98,28],     [72,4,25,77,76],     [56,41,84,59,40],     [36,87,18,44,73],     [29,45,79,55,95]],         [[45,91,2,92,16],     [21,47,86,81,56],     [31,11,62,5,95],     [39,1,30,65,33],     [42,60,17,18,83]],         [[86,11,77,30,43],     [51,88,73,98,94],     [72,63,38,56,10],     [57,92,49,7,41],     [79,75,34,23,54]],         [[56,95,3,43,65],     [39,62,93,19,27],     [61,41,99,96,52],     [4,92,77,98,70],     [16,54,11,17,57]],         [[6,63,10,71,58],     [64,70,50,92,0],     [7,14,99,45,26],     [78,17,44,46,73],     [77,38,62,53,37]],         [[31,82,67,55,27],     [57,58,84,6,15],     [14,41,49,8,85],     [12,32,91,42,19],     [23,1,87,54,29]],         [[54,60,43,26,4],     [78,17,28,67,5],     [87,93,90,71,22],     [13,30,16,21,85],     [55,74,52,1,29]],         [[50,16,70,32,33],     [6,94,52,66,22],     [97,64,98,72,39],     [27,69,99,34,26],     [36,91,37,21,14]],         [[7,97,64,28,18],     [85,80,14,37,34],     [72,1,22,58,73],     [53,3,68,17,0],     [29,44,56,95,32]],         [[30,66,93,24,92],     [48,80,79,86,27],     [89,13,62,94,81],     [70,65,61,8,54],     [96,97,20,90,34]],         [[87,76,4,7,43],     [92,55,80,25,62],     [79,6,88,35,30],     [10,32,5,45,17],     [36,27,33,68,63]],         [[72,69,27,88,41],     [34,53,42,84,3],     [58,18,22,66,65],     [9,47,85,12,62],     [73,90,91,57,33]],         [[67,16,50,58,52],     [68,70,84,98,69],     [4,72,9,64,0],     [93,97,39,26,5],     [3,37,79,7,82]],         [[61,57,88,54,70],     [77,8,94,81,63],     [39,48,18,13,10],     [55,23,27,4,73],     [3,5,64,0,96]],         [[62,27,0,52,19],     [28,57,83,25,41],     [5,59,24,33,80],     [37,85,2,86,43],     [22,94,50,8,20]],         [[54,32,34,47,87],     [71,22,43,85,24],     [11,68,58,36,46],     [35,56,61,67,18],     [70,23,72,5,59]],         [[3,96,41,45,32],     [68,2,56,28,24],     [87,38,40,75,26],     [53,64,73,80,81],     [54,88,20,6,18]],         [[64,55,51,96,47],     [59,35,49,67,71],     [36,91,61,76,68],     [6,94,20,8,27],     [60,88,45,7,82]],         [[87,94,51,91,1],     [96,60,28,97,37],     [26,27,74,53,35],     [88,89,11,77,8],     [73,47,18,59,6]],         [[46,50,19,36,83],     [69,28,4,44,70],     [45,20,63,27,1],     [53,38,9,47,67],     [91,31,79,73,86]],         [[45,3,98,91,60],     [40,7,78,34,83],     [52,73,59,13,4],     [38,15,82,86,79],     [42,11,17,20,62]],         [[65,86,38,20,72],     [78,45,73,74,25],     [62,42,24,75,3],     [81,8,35,50,51],     [44,11,94,85,57]],         [[13,86,55,65,96],     [53,18,43,76,20],     [41,14,32,52,38],     [90,59,80,68,7],     [2,23,92,39,50]],         [[96,62,85,24,14],     [37,5,11,91,45],     [61,28,23,34,77],     [43,48,20,0,21],     [10,35,2,26,97]],         [[89,5,40,34,84],     [90,6,72,68,10],     [13,64,71,31,76],     [53,60,9,92,62],     [69,98,8,50,3]],         [[17,86,10,75,79],     [67,94,78,40,56],     [11,85,82,50,46],     [53,39,22,9,61],     [59,73,72,33,45]],         [[65,22,18,96,95],     [55,86,67,52,69],     [10,2,60,83,98],     [43,61,87,88,66],     [41,24,8,84,33]],         [[31,53,98,70,91],     [33,34,48,83,9],     [40,39,29,71,65],     [69,10,62,30,4],     [52,21,11,93,75]],         [[8,94,53,85,89],     [13,84,58,59,29],     [97,7,21,25,96],     [45,54,34,22,63],     [37,17,49,68,67]],         [[86,87,84,24,10],     [82,32,36,59,50],     [8,62,79,71,43],     [49,23,85,69,58],     [21,66,42,25,56]],         [[65,88,43,25,19],     [26,36,63,5,6],     [37,54,75,1,38],     [95,46,83,66,28],     [4,90,80,99,85]],         [[78,83,7,77,34],     [27,92,93,96,82],     [40,95,52,32,43],     [17,28,69,41,85],     [21,65,39,58,19]],         [[11,84,28,90,36],     [74,4,62,5,46],     [22,8,45,40,98],     [12,6,30,9,82],     [37,2,53,29,41]],         [[17,65,31,86,57],     [73,16,24,67,53],     [60,93,88,45,26],     [14,80,94,7,44],     [55,78,49,8,82]],         [[95,38,81,25,76],     [29,13,83,47,12],     [17,69,4,43,28],     [63,84,39,52,34],     [1,97,41,88,8]],         [[70,40,16,83,3],     [15,49,20,74,48],     [71,30,21,28,84],     [29,10,97,1,18],     [57,50,63,35,69]],         [[40,13,67,9,41],     [71,76,8,54,24],     [15,97,92,49,96],     [61,34,23,81,31],     [11,38,48,37,86]],         [[77,36,32,75,7],     [38,18,84,26,2],     [19,13,99,83,20],     [35,51,74,6,27],     [71,48,15,66,69]],         [[91,57,41,3,99],     [74,55,81,77,43],     [36,52,47,49,45],     [85,65,5,38,50],     [90,68,70,16,0]],         [[1,90,28,86,27],     [73,36,67,11,14],     [71,31,10,65,55],     [78,21,16,69,12],     [87,24,33,83,68]],         [[90,17,10,84,45],     [5,68,69,27,92],     [6,63,98,3,46],     [94,48,59,34,43],     [39,88,12,33,73]],         [[12,31,33,98,63],     [65,51,94,83,92],     [41,38,84,91,66],     [47,28,76,54,3],     [48,36,11,13,27]],         [[51,84,96,16,8],     [64,26,74,30,48],     [29,41,68,97,87],     [9,38,1,15,39],     [98,3,45,53,14]],         [[53,70,90,95,86],     [35,22,85,45,66],     [93,0,83,30,88],     [64,57,68,36,3],     [5,51,19,20,89]],         [[9,36,69,46,44],     [37,7,99,57,45],     [79,10,86,58,30],     [49,98,52,90,27],     [14,51,88,60,81]],         [[73,97,91,19,48],     [76,43,18,83,67],     [62,9,11,82,55],     [24,17,33,53,22],     [75,8,56,1,21]],         [[27,97,53,0,89],     [30,70,3,80,54],     [56,93,40,64,35],     [46,82,1,44,65],     [6,59,45,32,34]],         [[87,58,73,45,69],     [24,49,89,71,83],     [94,6,53,68,50],     [28,25,88,47,0],     [36,13,31,18,55]],         [[52,63,37,66,9],     [34,77,57,6,55],     [85,80,97,78,74],     [95,75,67,96,29],     [22,73,92,69,47]],         [[79,97,80,36,73],     [38,77,35,32,53],     [2,37,29,6,89],     [78,91,15,47,34],     [11,52,64,84,0]],         [[69,30,21,99,46],     [72,4,15,25,42],     [67,98,81,91,63],     [70,20,57,65,14],     [0,78,19,8,87]],         [[20,4,98,33,85],     [76,17,94,65,35],     [95,69,72,52,71],     [23,25,50,38,27],     [43,49,96,53,99]],         [[16,27,34,65,36],     [10,40,84,60,82],     [80,2,54,67,70],     [52,94,79,17,56],     [5,14,77,91,88]],         [[32,90,50,66,39],     [30,16,14,20,10],     [4,42,88,59,12],     [75,84,54,51,48],     [33,24,13,89,43]],         [[78,42,34,65,51],     [75,72,3,99,61],     [15,50,59,8,89],     [71,18,9,54,53],     [43,39,97,56,19]],         [[50,43,83,4,30],     [89,97,58,35,39],     [11,24,61,41,25],     [87,99,93,15,34],     [31,57,3,45,44]],         [[70,21,63,24,38],     [34,23,88,7,51],     [43,18,76,46,49],     [60,78,47,8,12],     [11,66,98,25,74]],         [[30,17,23,10,92],     [12,85,69,81,91],     [47,80,28,29,58],     [73,44,77,50,32],     [76,54,78,75,60]],         [[71,53,86,48,98],     [90,37,79,8,56],     [99,42,97,36,15],     [31,85,34,10,40],     [43,89,57,72,51]],         [[48,0,65,55,90],     [45,76,69,97,4],     [42,52,46,77,56],     [64,62,68,35,72],     [71,10,27,30,16]],         [[41,69,63,88,57],     [25,56,23,78,80],     [8,92,59,66,97],     [48,61,77,15,14],     [87,47,91,12,71]],         [[51,46,15,2,49],     [48,33,23,16,4],     [80,41,43,59,83],     [62,13,20,63,85],     [99,30,7,87,8]],         [[69,80,96,43,47],     [61,75,45,62,15],     [32,22,91,83,58],     [82,13,50,52,8],     [89,20,63,73,14]],         [[40,2,96,52,73],     [25,27,26,43,34],     [60,38,80,78,5],     [83,63,48,10,66],     [97,46,53,74,86]],         [[46,7,0,69,15],     [79,19,85,27,73],     [63,45,5,49,54],     [93,29,84,28,66],     [72,23,99,8,33]],         [[20,72,85,99,49],     [69,0,10,52,23],     [88,56,28,67,21],     [16,91,83,54,81],     [14,73,32,30,59]],         [[31,52,63,12,3],     [96,20,82,6,89],     [55,38,8,95,40],     [5,60,84,81,75],     [51,14,65,27,61]],         [[46,93,1,47,76],     [8,98,7,16,63],     [44,78,17,14,92],     [42,62,20,12,68],     [56,3,74,6,21]],         [[8,94,11,40,44],     [43,92,78,91,18],     [75,80,12,54,26],     [67,9,45,22,21],     [86,1,90,36,30]],         [[21,19,83,90,8],     [50,28,45,65,75],     [59,88,25,29,70],     [58,23,0,95,49],     [36,68,76,78,66]],         [[77,28,43,56,97],     [73,71,8,72,46],     [23,25,70,69,41],     [90,17,34,67,48],     [32,75,81,63,21]]];

class BingoBoard {
    board: Array<Array<number>>;
    winningCombos: Array<Set<number>>;
}

const findFirstBingo = (balls: Array<number>, cards: Array<Array<Array<number>>>) => {
    var bingoCards = cards.map(x => parseBingoBoard(x));
    var calledBalls = new Set([...balls].slice(0,5));
    for(var i = 5; i < balls.length; i++) {
        calledBalls.add(balls[i]);
        for( var x = 0; x < bingoCards.length; x++) {
            for( var y = 0; y < bingoCards[x].winningCombos.length; y++) {
                if(Array.from(bingoCards[x].winningCombos[y].keys()).reduce((a,b) => calledBalls.has(b) ? a : false, true)) {
                    return bingoCards[x].board.map(board => board.reduce((a,b) => calledBalls.has(b) ? a : a + b,0)).reduce((a,b) =>a + b,0) * balls[i];
                }
            }
        } 
    }
}

const findLastBingo = (balls: Array<number>, cards: Array<Array<Array<number>>>) => {
    var bingoCards = cards.map(x => parseBingoBoard(x));
    var calledBalls = new Set([...balls].slice(0,5));
    for(var i = 5; i < balls.length; i++) {
        calledBalls.add(balls[i]);
        var nonWinningBingoCards = Array<BingoBoard>();
        for(var x = 0; x < bingoCards.length; x++) {
            var isWinningCard = false;
            for(var y = 0; y < bingoCards[x].winningCombos.length; y++) {
                if(Array.from(bingoCards[x].winningCombos[y].keys()).reduce((a,b) => calledBalls.has(b) ? a : false, true)) {
                    if(bingoCards.length === 1) {
                        return bingoCards[x].board.map(board => board.reduce((a,b) => calledBalls.has(b) ? a : a + b,0)).reduce((a,b) =>a + b,0) * balls[i];
                    }
                    else {
                        isWinningCard = true;
                        break;
                    }
                }
            }
            if(!isWinningCard) {
                nonWinningBingoCards.push(bingoCards[x]);
            }
        }
        bingoCards = nonWinningBingoCards;
    }
}

const parseBingoBoard = (board: Array<Array<number>>): BingoBoard => {
    var winningCombos = [];
    var winningDiagonal = new Set<number>();
    var winningRows:Array<Set<number>> = [];
    for (var x = 0; x < board.length; x++) {
        var winningColumn = new Set<number>();
        for (var y = 0; y < board[x].length; y++) {
            winningColumn.add(board[x][y]);
            if(x === y) {
                winningDiagonal.add(board[x][y]);
            }
            if(winningRows.length <= y && y !== board[x].length) {
                winningRows.push(new Set<number>([board[x][y]]));
            }
            else {
                winningRows[y].add(board[x][y]);
            }
        }
        winningCombos.push(winningColumn);
    }
    winningCombos.push(winningDiagonal);
    winningCombos.push(...winningRows);
    
    return { board, winningCombos } as BingoBoard
}



const firstPart = `First part: ${findFirstBingo(bingoBallsInput,bingoBoardInput)}` ;
const secondPart = `Second part: ${findLastBingo(bingoBallsInput,bingoBoardInput)}` ;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);