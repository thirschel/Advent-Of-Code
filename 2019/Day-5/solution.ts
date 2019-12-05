const input = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 2, 136, 183, 224, 101, -5304, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 224, 223, 223, 1101, 72, 47, 225, 1101, 59, 55, 225, 1101, 46, 75, 225, 1101, 49, 15, 224, 101, -64, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 5, 224, 1, 224, 223, 223, 102, 9, 210, 224, 1001, 224, -270, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 2, 224, 1, 223, 224, 223, 101, 14, 35, 224, 101, -86, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 4, 224, 224, 1, 224, 223, 223, 1102, 40, 74, 224, 1001, 224, -2960, 224, 4, 224, 1002, 223, 8, 223, 101, 5, 224, 224, 1, 224, 223, 223, 1101, 10, 78, 225, 1001, 39, 90, 224, 1001, 224, -149, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 4, 224, 1, 223, 224, 223, 1002, 217, 50, 224, 1001, 224, -1650, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 7, 224, 1, 224, 223, 223, 1102, 68, 8, 225, 1, 43, 214, 224, 1001, 224, -126, 224, 4, 224, 102, 8, 223, 223, 101, 3, 224, 224, 1, 224, 223, 223, 1102, 88, 30, 225, 1102, 18, 80, 225, 1102, 33, 28, 225, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 108, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 329, 1001, 223, 1, 223, 1107, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 1001, 223, 1, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 359, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 374, 101, 1, 223, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 389, 1001, 223, 1, 223, 107, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 404, 1001, 223, 1, 223, 8, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 419, 101, 1, 223, 223, 1107, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 434, 1001, 223, 1, 223, 1107, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 449, 101, 1, 223, 223, 7, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 464, 1001, 223, 1, 223, 1108, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 479, 1001, 223, 1, 223, 8, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 494, 101, 1, 223, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 509, 101, 1, 223, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 524, 101, 1, 223, 223, 8, 226, 677, 224, 1002, 223, 2, 223, 1006, 224, 539, 1001, 223, 1, 223, 1007, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 554, 101, 1, 223, 223, 107, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 569, 1001, 223, 1, 223, 1108, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 584, 1001, 223, 1, 223, 1008, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 599, 101, 1, 223, 223, 1008, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 614, 101, 1, 223, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 629, 1001, 223, 1, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 644, 101, 1, 223, 223, 1007, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 659, 1001, 223, 1, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 674, 101, 1, 223, 223, 4, 223, 99, 226];

const getParameterValue = (parameter: number, program: number[], mode: ParameterMode) => {
    return mode === ParameterMode.Position ? program[parameter] : parameter;
}

const readInstruction = (instructionIndex: number, instructions: number[]): Instruction => {
    const numberSplit = instructions[instructionIndex].toString().split('');
    const numLength = numberSplit.length - 1;
    const instruction = new Instruction();
    instruction.opcode = Number(`${numberSplit[numLength - 1] || 0}${numberSplit[numLength]}`) as Opcode;
    if ([Opcode.Add, Opcode.Multiply, Opcode.JumpTrue, Opcode.JumpFalse, Opcode.LessThen, Opcode.Equals].includes(instruction.opcode)) {
        for (var i = 2; i < 4; i++) {
            const paramMode = numberSplit[numLength - i] ? Number(numberSplit[numLength - i]) : ParameterMode.Position;
            instruction.parameters.push(getParameterValue(instructions[instructionIndex + (i - 1)], instructions, paramMode));
        }
    }
    return instruction;
}

const intComputer = (inputInstructions: number[], input: number) => {
    const instructions = [...inputInstructions];
    let output = '';
    for (var i = 0; i <= instructions.length; i) {
        let positionToWrite = 0;
        let positionToRead = 0;
        const instruction = readInstruction(i, instructions);
        switch (instruction.opcode) {
            case Opcode.Add:
                positionToWrite = instructions[i + 3];
                instructions[positionToWrite] = instruction.parameters[0] + instruction.parameters[1];
                i += 4;
                break;
            case Opcode.Multiply:
                positionToWrite = instructions[i + 3];
                instructions[positionToWrite] = instruction.parameters[0] * instruction.parameters[1];
                i += 4;
                break;
            case Opcode.Halt:
                return output;
            case Opcode.Input:
                positionToWrite = instructions[i + 1];
                instructions[positionToWrite] = input;
                i += 2;
                break;
            case Opcode.Output:
                positionToRead = instructions[i + 1];
                output = instructions[positionToRead].toString();
                i += 2;
                break;
            case Opcode.JumpTrue:
                i = instruction.parameters[0] !== 0 ? instruction.parameters[1] : i + 3;
                break;
            case Opcode.JumpFalse:
                i = instruction.parameters[0] === 0 ? instruction.parameters[1] : i + 3;
                break;
            case Opcode.LessThen:
                positionToWrite = instructions[i + 3];
                instructions[positionToWrite] = instruction.parameters[0] < instruction.parameters[1] ? 1 : 0;
                i += 4;
                break;
            case Opcode.Equals:
                positionToWrite = instructions[i + 3];
                instructions[positionToWrite] = instruction.parameters[0] === instruction.parameters[1] ? 1 : 0;
                i += 4;
                break;
        }
    }
    return output;
}


class Instruction {
    public opcode: Opcode;
    public parameters: number[];
    constructor() {
        this.parameters = [];
    }
}

enum ParameterMode {
    Position = 0,
    Immediate = 1,
}

enum Opcode {
    Add = 1,
    Multiply = 2,
    Halt = 99,
    Input = 3,
    Output = 4,
    JumpTrue = 5,
    JumpFalse = 6,
    LessThen = 7,
    Equals = 8,
}

const firstPart = `First part: ${intComputer(input, 1)}`;
const secondPart = `Second part: ${intComputer(input, 5)}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);