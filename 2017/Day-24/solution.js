const input = ['14/42', '2/3', '6/44', '4/10', '23/49', '35/39', '46/46', '5/29', '13/20', '33/9', '24/50', '0/30', '9/10', '41/44', '35/50', '44/50', '5/11', '21/24', '7/39', '46/31', '38/38', '22/26', '8/9', '16/4', '23/39', '26/5', '40/40', '29/29', '5/20', '3/32', '42/11', '16/14', '27/49', '36/20', '18/39', '49/41', '16/6', '24/46', '44/48', '36/4', '6/6', '13/6', '42/12', '29/41', '39/39', '9/3', '30/2', '25/20', '15/6', '15/23', '28/40', '8/7', '26/23', '48/10', '28/28', '2/13', '48/14'];
const parts = input.map(i=>i.split('/').map(s=>Number(s)));

const buildBridge = (bridge, pieces, connector) => {
    let bridges = [];

    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].a === connector || pieces[i].b === connector) {
            let newBridge = {
                strength: bridge.strength + pieces[i].a + pieces[i].b,
                chainLength: bridge.chainLength + 1
            };

            bridges.push(newBridge);

            let leftpieces = pieces.slice();
            leftpieces.splice(i, 1);

            let newConnector = pieces[i].a === connector ? pieces[i].b : pieces[i].a;

            bridges = bridges.concat(buildBridge(newBridge, leftpieces, newConnector));
        }
    }

    return bridges;
}

let pieces = parts.map(i=>{return {a:i[0],b:i[1]}});
let bridges = buildBridge({ strength: 0, chainLength: 0 }, pieces, 0);
var maxStrengthBridge = bridges.sort((a,b) => b.strength - a.strength)[0];
var maxLength = Math.max(...bridges.filter(b=>b.chainLength > maxStrengthBridge.chainLength).map(b=>b.chainLength));
var maxLengthBridge = bridges.filter(b=>b.chainLength === maxLength).sort((a,b) => b.strength - a.strength)[0];
console.log(`First Part: ${maxStrengthBridge.strength}`);
console.log(`Second Part: ${maxLengthBridge.strength}`);
