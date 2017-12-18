const input = ['set i 31', 'set a 1', 'mul p 17', 'jgz p p', 'mul a 2', 'add i -1', 'jgz i -2', 'add a -1', 'set i 127', 'set p 618', 'mul p 8505', 'mod p a', 'mul p 129749', 'add p 12345', 'mod p a', 'set b p', 'mod b 10000', 'snd b', 'add i -1', 'jgz i -9', 'jgz a 3', 'rcv b', 'jgz b -1', 'set f 0', 'set i 126', 'rcv a', 'rcv b', 'set p a', 'mul p -1', 'add p b', 'jgz p 4', 'snd a', 'set a b', 'jgz 1 3', 'snd b', 'set f 1', 'add i -1', 'jgz i -11', 'snd a', 'jgz f -16', 'jgz a -19'];
const alphabet = 'abcdefghijklmnopqrstuvxwyz';
const registers = {'a':0,'b':0,'f':0,'i':0,'p':0};

const programs = [
	{registers:{'a':0,'b':0,'f':0,'i':0,'p':0}, position:0, queue:[], sent:0},
	{registers:{'a':0,'b':0,'f':0,'i':0,'p':1}, position:0, queue:[], sent:0}
];

const parseInput = (i) =>{
	var parsed;
	const instruction = i.split(' ')[0];
	if(instruction === 'snd' || instruction === 'rcv'){
	 return {instruction:instruction, register:i.split(' ')[1], isRegister: true};               
	}
	else {
		parsed = {instruction:instruction, register:i.split(' ')[1], value:i.split(' ')[2], isRegister: true}
		if(alphabet.indexOf(i.split(' ')[2]) < 0){
		  parsed.isRegister = false;
		  parsed.value = +parsed.value;
		}
	}
	return parsed;       
}

var lastFrequency, position=0;
while(input[position]){
var ins = parseInput(input[position]);
  switch(ins.instruction){
      case 'set':
        registers[ins.register] = ins.isRegister ? registers[ins.value] : ins.value;
        position++;
        break;
      case 'mul':
        registers[ins.register] = ins.isRegister ? registers[ins.register] * registers[ins.value] : registers[ins.register] * ins.value;
        position++;
        break;
      case 'jgz':
		if(registers[ins.register] > 0){
        	position += ins.value;
        }
        else{
          position++;
        }
        break;
      case 'add':
        registers[ins.register] = ins.isRegister ? registers[ins.register] + registers[ins.value] : registers[ins.register] + ins.value;
        position++;
        break;
      case 'mod':
        registers[ins.register] = ins.isRegister ? registers[ins.register] % registers[ins.value] : registers[ins.register] % ins.value;
        position++;
        break;
      case 'rcv':
        if(+ins.register || registers[ins.register] > 0){
        	console.log(`First Part: ${lastFreqeuncy}`);
			position = -2;
        }
		position++;
        break;
      case 'snd':
        lastFreqeuncy = registers[ins.register];
		position++;
        break;
    }
}



const set = (registers, ins) => registers[ins.register] = ins.isRegister ? registers[ins.value] : ins.value;
const mul = (registers, ins) => registers[ins.register] = ins.isRegister ? registers[ins.register] * registers[ins.value] : registers[ins.register] * ins.value;
const jgz = (registers, ins) => +ins.register || registers[ins.register] > 0 ? ins.isRegister ? registers[ins.value] : ins.value : 1;
const add = (registers, ins) => registers[ins.register] = ins.isRegister ? registers[ins.register] + registers[ins.value] : registers[ins.register] + ins.value;
const mod = (registers, ins) => registers[ins.register] = ins.isRegister ? registers[ins.register] % registers[ins.value] : registers[ins.register] % ins.value;
const rcv = (registers, ins, queue) => registers[ins.register] = queue.pop();
const snd = (registers, ins, queue) => ins.isRegister ? queue.unshift(registers[ins.register]) : queue.unshift(parseInt(ins.register));

const runProgram = (programs, progIdx, ins) =>{
	switch(ins.instruction){
		case 'set':
        set(programs[progIdx].registers, ins);
        programs[progIdx].position++;
        break;
      case 'mul':
        mul(programs[progIdx].registers, ins);
        programs[progIdx].position++;
        break;
      case 'jgz':
		programs[progIdx].position += jgz(programs[progIdx].registers, ins);
        break;
      case 'add':
		add(programs[progIdx].registers, ins);
		programs[progIdx].position++;
        break;
      case 'mod':
        mod(programs[progIdx].registers, ins);
        programs[progIdx].position++;
        break;
      case 'rcv':
        rcv(programs[progIdx].registers, ins, programs[progIdx].queue);
		programs[progIdx].position++;
        break;
      case 'snd':
		var queue = progIdx === 0 ? programs[1].queue : programs[0].queue;
        snd(programs[progIdx].registers, ins, queue);
		programs[progIdx].sent++;
		programs[progIdx].position++;
        break;
	}
}

const waiting = (program) =>  parseInput(input[program.position]).instruction === 'rcv' && !program.queue.length;

const terminated = (programs) => (!input[programs[0].position] && !input[programs[0].position]) || 	waiting(programs[0]) && waiting(programs[1]);

while(!terminated){
	if(!waiting(programs[0])){
		runProgram(programs, 0, parseInput(input[programs[0].position]));
	}
	if(!waiting(programs[1])){
		runProgram(programs, 1, parseInput(input[programs[1].position]));
	}
}
console.log(`Second Part: ${programs[1].sent}`);