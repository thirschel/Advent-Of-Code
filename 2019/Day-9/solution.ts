const input = [1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1101,0,3,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,904,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1102,1,29,1011,1102,1,27,1009,1101,23,0,1008,1101,0,25,1017,1102,1,36,1016,1101,0,31,1018,1102,35,1,1012,1101,28,0,1004,1101,779,0,1024,1102,403,1,1026,1101,0,33,1010,1102,37,1,1015,1101,32,0,1014,1101,0,752,1023,1101,0,30,1013,1102,21,1,1001,1102,1,1,1021,1102,1,34,1002,1102,400,1,1027,1101,0,22,1007,1102,1,567,1028,1101,558,0,1029,1102,26,1,1006,1102,39,1,1005,1102,1,0,1020,1101,0,38,1000,1101,0,755,1022,1102,1,770,1025,1102,1,24,1003,1102,20,1,1019,109,28,21107,40,41,-9,1005,1019,199,4,187,1106,0,203,1001,64,1,64,1002,64,2,64,109,-30,2107,38,7,63,1005,63,221,4,209,1105,1,225,1001,64,1,64,1002,64,2,64,109,-5,2102,1,8,63,1008,63,21,63,1005,63,251,4,231,1001,64,1,64,1106,0,251,1002,64,2,64,109,21,1207,-7,21,63,1005,63,267,1105,1,273,4,257,1001,64,1,64,1002,64,2,64,109,-1,1201,-7,0,63,1008,63,29,63,1005,63,293,1106,0,299,4,279,1001,64,1,64,1002,64,2,64,109,-4,1202,-3,1,63,1008,63,28,63,1005,63,319,1106,0,325,4,305,1001,64,1,64,1002,64,2,64,109,14,1206,-3,343,4,331,1001,64,1,64,1106,0,343,1002,64,2,64,109,-14,2108,21,-8,63,1005,63,361,4,349,1105,1,365,1001,64,1,64,1002,64,2,64,109,-9,1201,9,0,63,1008,63,27,63,1005,63,391,4,371,1001,64,1,64,1106,0,391,1002,64,2,64,109,27,2106,0,0,1106,0,409,4,397,1001,64,1,64,1002,64,2,64,109,-20,2101,0,0,63,1008,63,22,63,1005,63,431,4,415,1105,1,435,1001,64,1,64,1002,64,2,64,109,-7,1202,7,1,63,1008,63,22,63,1005,63,457,4,441,1105,1,461,1001,64,1,64,1002,64,2,64,109,8,1208,0,23,63,1005,63,479,4,467,1106,0,483,1001,64,1,64,1002,64,2,64,109,20,1205,-8,495,1105,1,501,4,489,1001,64,1,64,1002,64,2,64,109,-26,1208,4,28,63,1005,63,521,1001,64,1,64,1105,1,523,4,507,1002,64,2,64,109,15,21102,41,1,-2,1008,1015,41,63,1005,63,545,4,529,1106,0,549,1001,64,1,64,1002,64,2,64,109,18,2106,0,-7,4,555,1001,64,1,64,1106,0,567,1002,64,2,64,109,-30,1207,-3,35,63,1005,63,585,4,573,1105,1,589,1001,64,1,64,1002,64,2,64,109,14,1206,2,605,1001,64,1,64,1106,0,607,4,595,1002,64,2,64,109,-3,1205,5,621,4,613,1106,0,625,1001,64,1,64,1002,64,2,64,109,-5,21107,42,41,2,1005,1013,645,1001,64,1,64,1106,0,647,4,631,1002,64,2,64,109,-11,2108,42,5,63,1005,63,663,1106,0,669,4,653,1001,64,1,64,1002,64,2,64,109,4,21102,43,1,9,1008,1013,40,63,1005,63,693,1001,64,1,64,1106,0,695,4,675,1002,64,2,64,109,-1,2107,22,-2,63,1005,63,715,1001,64,1,64,1106,0,717,4,701,1002,64,2,64,109,7,21101,44,0,0,1008,1010,45,63,1005,63,741,1001,64,1,64,1106,0,743,4,723,1002,64,2,64,109,9,2105,1,4,1106,0,761,4,749,1001,64,1,64,1002,64,2,64,109,10,2105,1,-5,4,767,1001,64,1,64,1105,1,779,1002,64,2,64,109,-22,21108,45,43,10,1005,1017,799,1001,64,1,64,1105,1,801,4,785,1002,64,2,64,109,16,21101,46,0,-8,1008,1015,46,63,1005,63,827,4,807,1001,64,1,64,1105,1,827,1002,64,2,64,109,-7,2101,0,-7,63,1008,63,29,63,1005,63,851,1001,64,1,64,1106,0,853,4,833,1002,64,2,64,109,-5,2102,1,-3,63,1008,63,22,63,1005,63,877,1001,64,1,64,1106,0,879,4,859,1002,64,2,64,109,9,21108,47,47,-5,1005,1015,897,4,885,1105,1,901,1001,64,1,64,4,64,99,21102,27,1,1,21101,0,915,0,1105,1,922,21201,1,61784,1,204,1,99,109,3,1207,-2,3,63,1005,63,964,21201,-2,-1,1,21101,942,0,0,1105,1,922,22102,1,1,-1,21201,-2,-3,1,21102,1,957,0,1106,0,922,22201,1,-1,-2,1105,1,968,22101,0,-2,-2,109,-3,2105,1,0];

const getReadParameterValue = (index: number, state: ComputerState, mode: ParameterMode) => {
    if(mode === ParameterMode.RelativeMode) {
        return state.instructions.get(state.relativeBase + state.instructions.get(index) || 0) || 0;
    }
    if(mode === ParameterMode.Position) {
        return state.instructions.get(state.instructions.get(index) || 0) || 0;
    }
    return state.instructions.get(index) || 0;
}

const getWriteParameterValue = (index: number, state: ComputerState, mode: ParameterMode) => {
    if(mode === ParameterMode.RelativeMode) {
        return state.relativeBase + state.instructions.get(index) || 0; 
    }
    if(mode === ParameterMode.Position) {
        return state.instructions.get(index) || 0;
    }
    return index;
}

const readInstruction = (state: ComputerState): Instruction => {
    const numberSplit = state.instructions.get(state.instructionIndex).toString().split('');
    const numLength = numberSplit.length - 1;
    const instruction = new Instruction();
    instruction.opcode = Number(`${numberSplit[numLength - 1] || 0}${numberSplit[numLength]}`) as Opcode;
    for (var i = 2; i < 5; i++) {
        const paramMode = numberSplit[numLength - i] ? Number(numberSplit[numLength - i]) : ParameterMode.Position;
        instruction.parameterModes.push(paramMode);
    }
    return instruction;
}

const intComputer = (currentState: ComputerState, input: number[], inputInstructions: number[] = null): ComputerState => {
    const state = !!currentState ? currentState : new ComputerState(inputInstructions);
    while (!state.halted) {
        const instruction = readInstruction(state);
        let writeIndex = 0;
        let firstParameter = 0;
        let secondParameter = 0;
        switch (instruction.opcode) {
            case Opcode.Add:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                writeIndex = getWriteParameterValue(state.instructionIndex + 3, state, instruction.parameterModes[2]);
                state.instructions.set(writeIndex, firstParameter + secondParameter);
                state.instructionIndex += 4;
                break;
            case Opcode.Multiply:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                writeIndex = getWriteParameterValue(state.instructionIndex + 3, state, instruction.parameterModes[2]);
                state.instructions.set(writeIndex, firstParameter * secondParameter);
                state.instructionIndex += 4;
                break;
            case Opcode.Halt:
                state.halted = true;
                return state;
            case Opcode.Input:
                if (!input.length) {
                    return state;
                }
                writeIndex = getWriteParameterValue(state.instructionIndex + 3, state, instruction.parameterModes[2]);
                state.instructions.set(writeIndex, input.shift());
                state.instructionIndex += 2;
                break;
            case Opcode.Output:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                state.outputValue = firstParameter;
                state.instructionIndex += 2;
                break;
            case Opcode.JumpTrue:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                state.instructionIndex = firstParameter !== 0 ? secondParameter : state.instructionIndex + 3;
                break;
            case Opcode.JumpFalse:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                state.instructionIndex = firstParameter === 0 ? secondParameter : state.instructionIndex + 3;
                break;
            case Opcode.LessThen:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                writeIndex = getWriteParameterValue(state.instructionIndex + 3, state, instruction.parameterModes[2]);
                state.instructions.set(writeIndex, firstParameter < secondParameter ? 1 : 0);
                state.instructionIndex += 4;
                break;
            case Opcode.Equals:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                secondParameter = getReadParameterValue(state.instructionIndex + 2, state, instruction.parameterModes[1]);
                writeIndex = getWriteParameterValue(state.instructionIndex + 3, state, instruction.parameterModes[2]);
                state.instructions.set(writeIndex, firstParameter === secondParameter ? 1 : 0);
                state.instructionIndex += 4;
                break;
            case Opcode.RelatveBaseAdjust:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                state.relativeBase += firstParameter;
                state.instructionIndex += 2;
                break;
        }
    }
    return state;
}


class ComputerState {
    public outputValue: number = 0;
    public halted: boolean = false;
    public instructionIndex: number = 0;
    public instructions: Map<number, number> = new Map();
    public relativeBase: number = 0;
    constructor(instructions: number[]) {
        [...instructions].forEach((instruction, i) => this.instructions.set(i, instruction));
    }
}


class Instruction {
    public opcode: Opcode;
    public parameterModes: ParameterMode[];
    constructor() {
        this.parameterModes = [];
    }
}

enum ParameterMode {
    Position = 0,
    Immediate = 1,
    RelativeMode = 2,
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
    RelatveBaseAdjust = 9,
}

const firstPart = `First part: ${intComputer(null, [1], input).outputValue}`;
const secondPart = `Second part: ${intComputer(null, [2], input).outputValue}`;

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);