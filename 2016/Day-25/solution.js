//noprotect
const input = ['cpy a d', 'cpy 11 c', 'cpy 231 b', 'inc d', 'dec b', 'jnz b -2', 'dec c', 'jnz c -5', 'cpy d a', 'jnz 0 0', 'cpy a b', 'cpy 0 a', 'cpy 2 c', 'jnz b 2', 'jnz 1 6', 'dec b', 'dec c', 'jnz c -4', 'inc a', 'jnz 1 -7', 'cpy 2 b', 'jnz c 2', 'jnz 1 4', 'dec b', 'dec c', 'jnz 1 -4', 'jnz 0 0', 'out b', 'jnz a -19', 'jnz 1 -21'];

const parseInput = (i) =>{
  const instruction = i.match(/^(\w{3})/)[1];
  if(instruction === 'inc' || instruction === 'dec' || instruction === 'out'){
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
  var initial = registers.a;
  var output ='';

  while(instructions[position]){
    if(output.length > 9){
      return output.substring(0,10) === '0101010101' ? initial : undefined;
    }
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
      case 'out':
        output += registers[ins.register];
        console.log(output);
        position++;
        break;
    }
  }
}

var firstPart,counter = 0;

while(!firstPart){
  firstPart = performInstructions({a:counter,b:0,c:0,d:0}, input.map(i=>parseInput(i)));
  counter++;
}

console.log('First part: ', firstPart);
