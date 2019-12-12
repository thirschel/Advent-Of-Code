const input = [3,8,1005,8,330,1106,0,11,0,0,0,104,1,104,0,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,102,1,8,29,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,0,10,4,10,101,0,8,51,1,1103,2,10,1006,0,94,1006,0,11,1,1106,13,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,1,10,4,10,1001,8,0,87,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,1001,8,0,109,2,1105,5,10,2,103,16,10,1,1103,12,10,2,105,2,10,3,8,102,-1,8,10,1001,10,1,10,4,10,108,1,8,10,4,10,1001,8,0,146,1006,0,49,2,1,12,10,2,1006,6,10,1,1101,4,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,1001,8,0,183,1,6,9,10,1006,0,32,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,1,10,4,10,101,0,8,213,2,1101,9,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,101,0,8,239,1006,0,47,1006,0,4,2,6,0,10,1006,0,58,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,0,10,4,10,102,1,8,274,2,1005,14,10,1006,0,17,1,104,20,10,1006,0,28,3,8,102,-1,8,10,1001,10,1,10,4,10,108,1,8,10,4,10,1002,8,1,309,101,1,9,9,1007,9,928,10,1005,10,15,99,109,652,104,0,104,1,21101,0,937263411860,1,21102,347,1,0,1105,1,451,21101,932440724376,0,1,21102,1,358,0,1105,1,451,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21101,0,29015167015,1,21101,0,405,0,1106,0,451,21102,1,3422723163,1,21101,0,416,0,1106,0,451,3,10,104,0,104,0,3,10,104,0,104,0,21101,0,868389376360,1,21101,0,439,0,1105,1,451,21102,825544712960,1,1,21102,1,450,0,1106,0,451,99,109,2,21201,-1,0,1,21101,0,40,2,21102,482,1,3,21102,1,472,0,1106,0,515,109,-2,2106,0,0,0,1,0,0,1,109,2,3,10,204,-1,1001,477,478,493,4,0,1001,477,1,477,108,4,477,10,1006,10,509,1101,0,0,477,109,-2,2106,0,0,0,109,4,2101,0,-1,514,1207,-3,0,10,1006,10,532,21102,1,0,-3,22101,0,-3,1,22102,1,-2,2,21102,1,1,3,21101,551,0,0,1106,0,556,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,579,2207,-4,-2,10,1006,10,579,22102,1,-4,-4,1106,0,647,21201,-4,0,1,21201,-3,-1,2,21202,-2,2,3,21102,1,598,0,1106,0,556,22101,0,1,-4,21101,1,0,-1,2207,-4,-2,10,1006,10,617,21102,0,1,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,639,21201,-1,0,1,21102,639,1,0,105,1,514,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2105,1,0];

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
    state.outputValue = [];
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
                writeIndex = getWriteParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                state.instructions.set(writeIndex, input.shift());
                state.instructionIndex += 2;
                break;
            case Opcode.Output:
                firstParameter = getReadParameterValue(state.instructionIndex + 1, state, instruction.parameterModes[0]);
                state.outputValue.push(firstParameter);
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
    public outputValue: number[] = [];
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


let state = null;
let inputValues = 0;
let direction = 'U';
let x = 0,y = 0;
let grid = new Map();
while(!state || !state.halted){
    state = intComputer(state, [inputValues], input);
    grid.set(`${x},${y}`, state.outputValue[0])
    if(state.outputValue[1] === 0){
        if(direction === 'U'){
            direction = 'L';
            x--;
        }
        else if(direction === 'L'){
            direction = 'D';
            y++;
        }
        else if(direction === 'D'){
            direction = 'R';
            x++;
        }
        else if(direction === 'R'){
            direction = 'U';
            y--;
        }
    }
    else {
        if(direction === 'U'){
            direction = 'R';
            x++;
        }
        else if(direction === 'R'){
            direction = 'D';
            y++;
        }
        else if(direction === 'D'){
            direction = 'L';
            x--;
        }
        else if(direction === 'L'){
            direction = 'U';
            y--;
        }
    }
    inputValues = grid.get(`${x},${y}`) || 0;
}

const drawImage = () => {
  let state = null;
  let inputValues = 1;
  let direction = 'U';
  let x = 0, y = 0, minX = 0, maxX = 0, minY = 0, maxY = 0;
  let grid = new Map();
  while(!state || !state.halted){
      state = intComputer(state, [inputValues], input);
      grid.set(`${x},${y}`, state.outputValue[0])
      if(state.outputValue[1] === 0){
          if(direction === 'U'){
              direction = 'L';
              x--;
          }
          else if(direction === 'L'){
              direction = 'D';
              y++;
          }
          else if(direction === 'D'){
              direction = 'R';
              x++;
          }
          else if(direction === 'R'){
              direction = 'U';
              y--;
          }
      }
      else {
          if(direction === 'U'){
              direction = 'R';
              x++;
          }
          else if(direction === 'R'){
              direction = 'D';
              y++;
          }
          else if(direction === 'D'){
              direction = 'L';
              x--;
          }
          else if(direction === 'L'){
              direction = 'U';
              y--;
          }
      }
      minX = Math.min(...[x, minX]);
      minY = Math.min(...[y, minY]);
      maxX = Math.max(...[x, maxX]);
      maxY = Math.max(...[y, maxY]);
      inputValues = grid.get(`${x},${y}`) || 0;
  }
  let image = Array((maxY - minY) + 1).fill(Array((maxX - minX) + 1).fill(1));
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      image[y][x] = (Number(grid.get(`${x},${y}`)) || 0);
    }
    console.log(image[y].join('').replace(/1/g,'#').replace(/0/g,' '))
  }
  for (let y = 0; y <= 5; y++) {
    console.log(image[y].join('').replace(/1/g,'#').replace(/0/g,' '))
  }
  return image;
}

const sec = drawImage();
const firstPart = `First part: ${grid.size}`;
const secondPart = `Second part: ${'intComputer(null, [2], input).outputValue'}`;

const canvasRender = (canvas, decodedImage) => {
  canvas.width = decodedImage[0].length;
  canvas.height = decodedImage.length;
  canvas.style.zoom = '400%';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const drawPoint = (x, y) => ctx.fillRect(x, y, 1, 1);

  for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
          const pix = decodedImage[y][x];
          if (pix === 1) drawPoint(x, y);
      }
  }
}

var node1 = document.createElement("div");
var textnode1 = document.createTextNode(firstPart);
node1.appendChild(textnode1);
document.getElementById("output-1").appendChild(node1);

var canvas = document.createElement("canvas");
var node2 = document.createElement("div");
var textnode2 = document.createTextNode(secondPart);
node2.appendChild(textnode2);
document.getElementById("output-2").appendChild(node2);
document.getElementById("output-2").appendChild(canvas);

canvasRender(canvas, sec);