const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,9,23,1,23,5,27,2,6,27,31,1,31,5,35,1,35,5,39,2,39,6,43,2,43,10,47,1,47,6,51,1,51,6,55,2,55,6,59,1,10,59,63,1,5,63,67,2,10,67,71,1,6,71,75,1,5,75,79,1,10,79,83,2,83,10,87,1,87,9,91,1,91,10,95,2,6,95,99,1,5,99,103,1,103,13,107,1,107,10,111,2,9,111,115,1,115,6,119,2,13,119,123,1,123,6,127,1,5,127,131,2,6,131,135,2,6,135,139,1,139,5,143,1,143,10,147,1,147,2,151,1,151,13,0,99,2,0,14,0];
const setInput = (program: number[], noun: number, verb: number) : number[] => {
    const newProgram = program.map(i => i);
    newProgram[1] = noun;
    newProgram[2] = verb;
    return newProgram;
}

const runProgram = (program: number[]): number => {
    for(var i = 0; i <= program.length; i += 4) {
        const positionToWrite = program[i + 3];
        switch(program[i]) {
            case Opcode.Add:
                const firstNumberToAdd = program[i + 1];
                const secondNumberToAdd = program[i + 2];
                program[positionToWrite] = program[firstNumberToAdd] + program[secondNumberToAdd];
                break;
            case Opcode.Multiply:
                const firstNumberToMultiply = program[i + 1];
                const secondNumberToMultiply = program[i + 2];
                program[positionToWrite] = program[firstNumberToMultiply] * program[secondNumberToMultiply];
                break;
            case Opcode.Halt:
                return program[0];
        }
    }
    return program[0];
}

const determineGravityAssist = (program: number[]) => {
    for(var noun = 0; noun < 100; noun++) {
        for(var verb = 0; verb < 100; verb++) {
            const output = runProgram(setInput(input, noun, verb));
            if(output === 19690720) {
                return 100 * noun + verb;
            }
        }
    }
}

enum Opcode {
    Add = 1,
    Multiply = 2,
    Halt = 99
}

const firstPart = `First part: ${runProgram(setInput(input, 12, 2))}` ;
const secondPart = `Second part: ${determineGravityAssist(input)}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart); 
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart); 
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);