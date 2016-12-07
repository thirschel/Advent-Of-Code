//noprotect
const input = ['Al => ThF', 'Al => ThRnFAr', 'B => BCa', 'B => TiB', 'B => TiRnFAr', 'Ca => CaCa', 'Ca => PB', 'Ca => PRnFAr', 'Ca => SiRnFYFAr', 'Ca => SiRnMgAr', 'Ca => SiTh', 'F => CaF', 'F => PMg', 'F => SiAl', 'H => CRnAlAr', 'H => CRnFYFYFAr', 'H => CRnFYMgAr', 'H => CRnMgYFAr', 'H => HCa', 'H => NRnFYFAr', 'H => NRnMgAr', 'H => NTh', 'H => OB', 'H => ORnFAr', 'Mg => BF', 'Mg => TiMg', 'N => CRnFAr', 'N => HSi', 'O => CRnFYFAr', 'O => CRnMgAr', 'O => HP', 'O => NRnFAr', 'O => OTi', 'P => CaP', 'P => PTi', 'P => SiRnFAr', 'Si => CaSi', 'Th => ThCa', 'Ti => BP', 'Ti => TiTi', 'e => HF', 'e => NAl', 'e => OMg'];
const input_molecule = 'ORnPBPMgArCaCaCaSiThCaCaSiThCaCaPBSiRnFArRnFArCaCaSiThCaCaSiThCaCaCaCaCaCaSiRnFYFArSiRnMgArCaSiRnPTiTiBFYPBFArSiRnCaSiRnTiRnFArSiAlArPTiBPTiRnCaSiAlArCaPTiTiBPMgYFArPTiRnFArSiRnCaCaFArRnCaFArCaSiRnSiRnMgArFYCaSiRnMgArCaCaSiThPRnFArPBCaSiRnMgArCaCaSiThCaSiRnTiMgArFArSiThSiThCaCaSiRnMgArCaCaSiRnFArTiBPTiRnCaSiAlArCaPTiRnFArPBPBCaCaSiThCaPBSiThPRnFArSiThCaSiThCaSiThCaPTiBSiRnFYFArCaCaPRnFArPBCaCaPBSiRnTiRnFArCaPRnFArSiRnCaCaCaSiThCaRnCaFArYCaSiRnFArBCaCaCaSiThFArPBFArCaSiRnFArRnCaCaCaFArSiRnFArTiRnPMgArF';

var possibleMolecules = new Set();

const parseInput = (i )=>{
  const parsed = i.match(/(\w+) => (\w+)/);
  return {molecule:parsed[1], replacement:parsed[2]};
}

input.forEach(i=>{
  var calibrate = parseInput(i);
  var moleculeGeneration = input_molecule;
  var findMolecule = new RegExp(calibrate.molecule,'g');
  var replaceMolecule = new RegExp(calibrate.molecule);
  
  let foundMolecule;
  while (foundMolecule = findMolecule.exec(input_molecule)) {
    possibleMolecules.add(input_molecule.slice(0, foundMolecule.index) + input_molecule.slice(foundMolecule.index).replace(replaceMolecule, calibrate.replacement));
  }
});


let secondPart = 0;
var replacements = input.reduce((map, r) => map.set(r.split(' => ')[1], r.split(' => ')[0]), new Map());
var greedyString = input_molecule;
while (greedyString !== 'e') {
  const randomMolecule = Array.from(replacements.keys())[Math.round(Math.random() * replacements.size)];

  greedyString = greedyString.replace(randomMolecule, match => {
    secondPart++;
    return replacements.get(match);
  });
} 
console.log('First part: ' + possibleMolecules.size)
console.log('Second part: ' + secondPart)