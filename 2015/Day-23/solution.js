const input = ['jio a, +18', 'inc a', 'tpl a', 'inc a', 'tpl a', 'tpl a', 'tpl a', 'inc a', 'tpl a', 'inc a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'tpl a', 'tpl a', 'inc a', 'jmp +22', 'tpl a', 'inc a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'inc a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'inc a', 'inc a', 'tpl a', 'jio a, +8', 'inc b', 'jie a, +4', 'tpl a', 'inc a', 'jmp +2', 'hlf a', 'jmp -7'];
  
const parseInput = (i) =>{
  const parsed = i.match(/^(\w{3})\s(\w{1}|(\+|\-)(\d+)),?\s?((\+|\-)\d+)?/);
  var instruction  = parsed[1];
  if(instruction === 'jio' || instruction === 'jie'){
     return {instruction:instruction, register:parsed[2], offset:parseInt(parsed[5])};               
  }
  if(instruction === 'jmp'){
    return {instruction:instruction, offset:parseInt(parsed[2])};
  }
  return {instruction:instruction, register: parsed[2]};
}

const performInstructions = (registers) =>{
  var position=0;
  while(input[position]){
  var ins = parseInput(input[position]);
  switch(ins.instruction){
    case 'inc':
      registers[ins.register] = registers[ins.register] + 1;
      position++;
      break;
    case 'tpl':
      registers[ins.register] = registers[ins.register] * 3;
      position++;
      break;
    case 'hlf':
      registers[ins.register] = registers[ins.register] / 2;
      position++;
      break;
    case 'jie':
      position += registers[ins.register] % 2 === 0 ? ins.offset : 1;
      break;
    case 'jio':
      position += registers[ins.register] === 1 ? ins.offset : 1;
      break;
    case 'jmp':
      position += ins.offset;

      break;
    }

  }
  return registers.b;
}

console.log('First part: ' +performInstructions({a:0,b:0}));
console.log('Second part: ' +performInstructions({a:1,b:0}));
