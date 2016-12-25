//noprotect
const input = ['cpy a b', 'dec b', 'cpy a d', 'cpy 0 a', 'cpy b c', 'inc a', 'dec c', 'jnz c -2', 'dec d', 'jnz d -5', 'dec b', 'cpy b c', 'cpy c d', 'dec d', 'inc c', 'jnz d -2', 'tgl c', 'cpy -16 c', 'jnz 1 c', 'cpy 99 c', 'jnz 77 d', 'inc a', 'inc d', 'jnz d -2', 'inc c', 'jnz c -5'];

const parseInput = (i) =>{
  const instruction = i.match(/^(\w{3})/)[1];
  if(instruction === 'inc' || instruction === 'dec' || instruction === 'tgl'){
     const parsed = i.match(/\w{3} (\w)/);
     return {instruction:instruction, register:parsed[1]};               
  }
  else{
    const parsed = i.match(/\w{3} (-?\d+|\w) (-?\d+|\w)/);
    return {instruction:instruction, arg1: parsed[1], arg2: parsed[2]};
  }
}

const performInstructions = (registers, instructions) =>{
  var position=0;
  while(instructions[position]){
  var ins = instructions[position];
  switch(ins.instruction){
    case 'dec':
      registers[ins.register] = registers[ins.register] - 1;
      position++;
      break;
    case 'inc':
      registers[ins.register] = registers[ins.register] + 1;
      position++;
      break;
    case 'jnz':
      const value = Number.isNaN(parseInt(ins.arg1)) ? registers[ins.arg1] : parseInt(ins.arg1);
      position += value !== 0 ? registers[ins.arg2] || parseInt(ins.arg2) : 1;
      break;
    case 'cpy':
      if(Number.isNaN(parseInt(ins.arg2))){
        registers[ins.arg2] = Number.isNaN(parseInt(ins.arg1)) ? registers[ins.arg1] : parseInt(ins.arg1);
      }
      position++;
      break;
    case 'tgl':
      var changeIns = instructions[position + registers[ins.register]];
      if(position + registers[ins.register] !== position && changeIns){
        var newInstruction = changeIns.register ? changeIns.instruction === 'inc' ? 'dec' : 'inc' :  changeIns.instruction === 'jnz' ? 'cpy' : 'jnz';
        instructions[position + registers[ins.register]].instruction = newInstruction;
      }
      position++;
      break;
    }
  }
  return registers.a;
}

console.log('First part: ',performInstructions({a:7,b:0,c:0,d:0}, input.map(i=>parseInput(i))));
console.log('Second part: ',performInstructions({a:12,b:0,c:0,d:0}, input.map(i=>parseInput(i))));