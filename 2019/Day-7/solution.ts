const input = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 38, 55, 80, 97, 118, 199, 280, 361, 442, 99999, 3, 9, 101, 2, 9, 9, 1002, 9, 5, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 102, 2, 9, 9, 1001, 9, 5, 9, 4, 9, 99, 3, 9, 1001, 9, 4, 9, 102, 5, 9, 9, 101, 4, 9, 9, 102, 4, 9, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 1001, 9, 3, 9, 1002, 9, 2, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 1002, 9, 2, 9, 101, 3, 9, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99];

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

const intComputer = (currentState: ComputerState, input: number[], inputInstructions: number[] = null): ComputerState => {
    const state = !!currentState ? currentState : new ComputerState(inputInstructions);
    for (var i = state.instructionIndex; i <= state.instructions.length; i) {
        let positionToWrite = 0;
        let positionToRead = 0;
        const instruction = readInstruction(i, state.instructions);
        switch (instruction.opcode) {
            case Opcode.Add:
                positionToWrite = state.instructions[i + 3];
                state.instructions[positionToWrite] = instruction.parameters[0] + instruction.parameters[1];
                i += 4;
                break;
            case Opcode.Multiply:
                positionToWrite = state.instructions[i + 3];
                state.instructions[positionToWrite] = instruction.parameters[0] * instruction.parameters[1];
                i += 4;
                break;
            case Opcode.Halt:
                state.halted = true;
                return state;
            case Opcode.Input:
                if (!input.length) {
                    state.instructionIndex = i;
                    return state;
                }
                positionToWrite = state.instructions[i + 1];
                state.instructions[positionToWrite] = input.shift();
                i += 2;
                break;
            case Opcode.Output:
                positionToRead = state.instructions[i + 1];
                state.outputValue = state.instructions[positionToRead];
                i += 2;
                break;
            case Opcode.JumpTrue:
                i = instruction.parameters[0] !== 0 ? instruction.parameters[1] : i + 3;
                break;
            case Opcode.JumpFalse:
                i = instruction.parameters[0] === 0 ? instruction.parameters[1] : i + 3;
                break;
            case Opcode.LessThen:
                positionToWrite = state.instructions[i + 3];
                state.instructions[positionToWrite] = instruction.parameters[0] < instruction.parameters[1] ? 1 : 0;
                i += 4;
                break;
            case Opcode.Equals:
                positionToWrite = state.instructions[i + 3];
                state.instructions[positionToWrite] = instruction.parameters[0] === instruction.parameters[1] ? 1 : 0;
                i += 4;
                break;
        }
    }
    return state;
}

class ComputerState {
    public outputValue: number = 0;
    public halted: boolean = false;
    public instructionIndex: number = 0;
    public instructions: number[];
    constructor(instructions: number[]) {
        this.instructions = [...instructions];
    }
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

const getCombinations = (array) => {
    function p(array, temp) {
        var i, x;
        if (!array.length) {
            result.push(temp);
        }
        for (i = 0; i < array.length; i++) {
            x = array.splice(i, 1)[0];
            p(array, temp.concat(x));
            array.splice(i, 0, x);
        }
    }

    var result = [];
    p(array, []);
    return result;
}

const getHighestThrust = () => {
    const phaseSettings = [0, 1, 2, 3, 4];
    const allPhaseSettingCombinations = getCombinations(phaseSettings).filter(c => c.length === 5);

    let highestThrustValue = 0;
    allPhaseSettingCombinations.forEach(phaseSetting => {
        let outputVal = 0;
        for (var i = 0; i < phaseSetting.length; i++) {
            outputVal = intComputer(null, [phaseSetting[i], outputVal], input).outputValue;
        }
        highestThrustValue = outputVal > highestThrustValue ? outputVal : highestThrustValue;
    })
    return highestThrustValue;
}


const getFeedbackLoopThrust = () => {
    const phaseSettings = [5, 6, 7, 8, 9];
    let allPhaseSettingCombinations = getCombinations(phaseSettings).filter(c => c.length === 5);
    let highestThrustValue = 0;
    allPhaseSettingCombinations.forEach(phaseSetting => {
        const computerStates = new Map();
        let outputVal = 0;
        let hasHalted = false;
        while (!hasHalted) {
            for (var i = 0; i < phaseSetting.length; i++) {
                const currentState = computerStates.get(i);
                let inputs = !currentState ? [phaseSetting[i]] : [];
                inputs.push(outputVal);
                
                let output = intComputer(computerStates.get(i), inputs, input);
                outputVal = output.outputValue;
                highestThrustValue = i === phaseSettings.length - 1 && outputVal > highestThrustValue ? outputVal : highestThrustValue;
                if (output.halted && i === phaseSetting.length - 1) {
                    hasHalted = output.halted;
                }
                else{
                    computerStates.set(i, output);
                }
            }
        }
    });
    return highestThrustValue;
}

const firstPart = `First part: ${getHighestThrust()}`;
const secondPart = `Second part: ${getFeedbackLoopThrust()}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);