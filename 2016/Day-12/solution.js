//noprotect
const input = ['cpy 1 a', 'cpy 1 b', 'cpy 26 d', 'jnz c 2', 'jnz 1 5', 'cpy 7 c', 'inc d', 'dec c', 'jnz c -2', 'cpy a c', 'inc a', 'dec b', 'jnz b -2', 'cpy c b', 'dec d', 'jnz d -6', 'cpy 14 c', 'cpy 14 d', 'inc a', 'dec d', 'jnz d -2', 'dec c', 'jnz c -5'];
  
const parseInput = (i) =>{
  const instruction = i.match(/^(\w{3})/)[1];
  if(instruction === 'jnz' || instruction === 'cpy'){
     const parsed = i.match(/(\w{3})\s(-?\d+|\w)\s(-?\d+|\w)/);
     return {instruction:instruction, x:parsed[2], y:parsed[3]};               
  }
  else{
    const parsed = i.match(/^(\w{3}) (\w)/);
    return {instruction:instruction, register: parsed[2]};
  }
}

const performInstructions = (registers) =>{
  var position=0;
  while(input[position]){
  var ins = parseInput(input[position]);
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
      const value = Number.isNaN(parseInt(ins.x)) ? registers[ins.x] : parseInt(ins.x);
      position += value !== 0 ? parseInt(ins.y) : 1;
      break;
    case 'cpy':
      registers[ins.y] = Number.isNaN(parseInt(ins.x)) ? registers[ins.x] : parseInt(ins.x);
      position++;
      break;
    }

  }
  return registers.a;
}

console.log('First part: ' +performInstructions({a:0,b:0,c:0,d:0}));
console.log('Second part: ' +performInstructions({a:0,b:0,c:1,d:0}));
