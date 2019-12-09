var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var input = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 38, 55, 80, 97, 118, 199, 280, 361, 442, 99999, 3, 9, 101, 2, 9, 9, 1002, 9, 5, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 102, 2, 9, 9, 1001, 9, 5, 9, 4, 9, 99, 3, 9, 1001, 9, 4, 9, 102, 5, 9, 9, 101, 4, 9, 9, 102, 4, 9, 9, 1001, 9, 4, 9, 4, 9, 99, 3, 9, 1001, 9, 3, 9, 1002, 9, 2, 9, 101, 3, 9, 9, 4, 9, 99, 3, 9, 101, 5, 9, 9, 1002, 9, 2, 9, 101, 3, 9, 9, 1002, 9, 5, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 99];
var getParameterValue = function (parameter, program, mode) {
    return mode === ParameterMode.Position ? program[parameter] : parameter;
};
var readInstruction = function (instructionIndex, instructions) {
    var numberSplit = instructions[instructionIndex].toString().split('');
    var numLength = numberSplit.length - 1;
    var instruction = new Instruction();
    instruction.opcode = Number("" + (numberSplit[numLength - 1] || 0) + numberSplit[numLength]);
    if ([Opcode.Add, Opcode.Multiply, Opcode.JumpTrue, Opcode.JumpFalse, Opcode.LessThen, Opcode.Equals].includes(instruction.opcode)) {
        for (var i = 2; i < 4; i++) {
            var paramMode = numberSplit[numLength - i] ? Number(numberSplit[numLength - i]) : ParameterMode.Position;
            instruction.parameters.push(getParameterValue(instructions[instructionIndex + (i - 1)], instructions, paramMode));
        }
    }
    return instruction;
};
var intComputer = function (currentState, input, inputInstructions) {
    if (inputInstructions === void 0) { inputInstructions = null; }
    var state = !!currentState ? currentState : new ComputerState(inputInstructions);
    for (var i = state.instructionIndex; i <= state.instructions.length; i) {
        var positionToWrite = 0;
        var positionToRead = 0;
        var instruction = readInstruction(i, state.instructions);
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
};
var ComputerState = /** @class */ (function () {
    function ComputerState(instructions) {
        this.outputValue = 0;
        this.halted = false;
        this.instructionIndex = 0;
        this.instructions = __spreadArrays(instructions);
    }
    return ComputerState;
}());
var Instruction = /** @class */ (function () {
    function Instruction() {
        this.parameters = [];
    }
    return Instruction;
}());
var ParameterMode;
(function (ParameterMode) {
    ParameterMode[ParameterMode["Position"] = 0] = "Position";
    ParameterMode[ParameterMode["Immediate"] = 1] = "Immediate";
})(ParameterMode || (ParameterMode = {}));
var Opcode;
(function (Opcode) {
    Opcode[Opcode["Add"] = 1] = "Add";
    Opcode[Opcode["Multiply"] = 2] = "Multiply";
    Opcode[Opcode["Halt"] = 99] = "Halt";
    Opcode[Opcode["Input"] = 3] = "Input";
    Opcode[Opcode["Output"] = 4] = "Output";
    Opcode[Opcode["JumpTrue"] = 5] = "JumpTrue";
    Opcode[Opcode["JumpFalse"] = 6] = "JumpFalse";
    Opcode[Opcode["LessThen"] = 7] = "LessThen";
    Opcode[Opcode["Equals"] = 8] = "Equals";
})(Opcode || (Opcode = {}));
var getCombinations = function (array) {
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
};
var getHighestThrust = function () {
    var phaseSettings = [0, 1, 2, 3, 4];
    var allPhaseSettingCombinations = getCombinations(phaseSettings).filter(function (c) { return c.length === 5; });
    var highestThrustValue = 0;
    allPhaseSettingCombinations.forEach(function (phaseSetting) {
        var outputVal = 0;
        for (var i = 0; i < phaseSetting.length; i++) {
            outputVal = intComputer(null, [phaseSetting[i], outputVal], input).outputValue;
        }
        highestThrustValue = outputVal > highestThrustValue ? outputVal : highestThrustValue;
    });
    return highestThrustValue;
};
var getFeedbackLoopThrust = function () {
    var phaseSettings = [5, 6, 7, 8, 9];
    var allPhaseSettingCombinations = getCombinations(phaseSettings).filter(function (c) { return c.length === 5; });
    var highestThrustValue = 0;
    allPhaseSettingCombinations.forEach(function (phaseSetting) {
        var computerStates = new Map();
        var outputVal = 0;
        var hasHalted = false;
        while (!hasHalted) {
            for (var i = 0; i < phaseSetting.length; i++) {
                var currentState = computerStates.get(i);
                var inputs = !currentState ? [phaseSetting[i]] : [];
                inputs.push(outputVal);
                var output = intComputer(computerStates.get(i), inputs, input);
                outputVal = output.outputValue;
                highestThrustValue = i === phaseSettings.length - 1 && outputVal > highestThrustValue ? outputVal : highestThrustValue;
                if (output.halted && i === phaseSetting.length - 1) {
                    hasHalted = output.halted;
                }
                else {
                    computerStates.set(i, output);
                }
            }
        }
    });
    return highestThrustValue;
};
var firstPart = "First part: " + getHighestThrust();
var secondPart = "Second part: " + getFeedbackLoopThrust();
var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
//# sourceMappingURL=solution.js.map