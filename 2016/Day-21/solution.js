//noprotect

const input  = ['rotate right 4 steps', 'swap letter b with letter e', 'swap position 1 with position 3', 'reverse positions 0 through 4', 'rotate left 5 steps', 'swap position 6 with position 5', 'move position 3 to position 2', 'move position 6 to position 5', 'reverse positions 1 through 4', 'rotate based on position of letter e', 'reverse positions 3 through 7', 'reverse positions 4 through 7', 'rotate left 1 step', 'reverse positions 2 through 6', 'swap position 7 with position 5', 'swap letter e with letter c', 'swap letter f with letter d', 'swap letter a with letter e', 'swap position 2 with position 7', 'swap position 1 with position 7', 'swap position 6 with position 3', 'swap letter g with letter h', 'reverse positions 2 through 5', 'rotate based on position of letter f', 'rotate left 1 step', 'rotate right 2 steps', 'reverse positions 2 through 7', 'reverse positions 5 through 6', 'rotate left 6 steps', 'move position 2 to position 6', 'rotate based on position of letter a', 'rotate based on position of letter a', 'swap letter f with letter a', 'rotate right 5 steps', 'reverse positions 0 through 4', 'swap letter d with letter c', 'swap position 4 with position 7', 'swap letter f with letter h', 'swap letter h with letter a', 'rotate left 0 steps', 'rotate based on position of letter e', 'swap position 5 with position 4', 'swap letter e with letter h', 'swap letter h with letter d', 'rotate right 2 steps', 'rotate right 3 steps', 'swap position 1 with position 7', 'swap letter b with letter e', 'swap letter b with letter e', 'rotate based on position of letter e', 'rotate based on position of letter h', 'swap letter a with letter h', 'move position 7 to position 2', 'rotate left 2 steps', 'move position 3 to position 2', 'swap position 4 with position 6', 'rotate right 7 steps', 'reverse positions 1 through 4', 'move position 7 to position 0', 'move position 2 to position 0', 'reverse positions 4 through 6', 'rotate left 3 steps', 'rotate left 7 steps', 'move position 2 to position 3', 'rotate left 6 steps', 'swap letter a with letter h', 'rotate based on position of letter f', 'swap letter f with letter c', 'swap position 3 with position 0', 'reverse positions 1 through 3', 'swap letter h with letter a', 'swap letter b with letter a', 'reverse positions 2 through 3', 'rotate left 5 steps', 'swap position 7 with position 5', 'rotate based on position of letter g', 'rotate based on position of letter h', 'rotate right 6 steps', 'swap letter a with letter e', 'swap letter b with letter g', 'move position 4 to position 6', 'move position 6 to position 5', 'rotate based on position of letter e', 'reverse positions 2 through 6', 'swap letter c with letter f', 'swap letter h with letter g', 'move position 7 to position 2', 'reverse positions 1 through 7', 'reverse positions 1 through 2', 'rotate right 0 steps', 'move position 5 to position 6', 'swap letter f with letter a', 'move position 3 to position 1', 'move position 2 to position 4', 'reverse positions 1 through 2', 'swap letter g with letter c', 'rotate based on position of letter f', 'rotate left 7 steps', 'rotate based on position of letter e', 'swap position 6 with position 1'];
const password = 'abcdefgh';

const parseInput = (i) =>{
  const action = i.match(/(rotate right|rotate left|rotate|swap letter|swap position|move|reverse)/)[1];
  if(/left|right/.test(i)){
    var parsed = action === 'rotate left' ? i.match(/left (\d+)/) : i.match(/right (\d+)/);
    return {action:action, amount:parseInt(parsed[1])};
  }
  if(/based/.test(i)){
    var parsed = i.match(/based on position of letter (\w)/);
    return {action:action, amount:parsed[1]};
  }
  if(/position \d+/.test(i)){
    var parsed = i.match(/position (\d+) (with|to) position (\d+)/);
    return {action:action, first:parseInt(parsed[1]), second:parseInt(parsed[3])};
  }
  if(/positions \d+/.test(i)){
    var parsed = i.match(/positions (\d+) through (\d+)/);
    return {action:action, first:parseInt(parsed[1]), second:parseInt(parsed[2])};
  }
  if(/letter (\w) with/.test(i)){
    var parsed = i.match(/letter (\w) with letter (\w)/);
    return {action:action,first:parsed[1], second:parsed[2]};
  }
}

const actions = {
  'rotate': (passArr,ins)=> actions['rotate right'](passArr, {amount:passArr.indexOf(ins.amount) + 1 + (passArr.indexOf(ins.amount) >=4 ? 1 : 0)}),
  'rotate left': (passArr,ins)=> actions['rotate right'](passArr, {amount:-ins.amount}),
  'rotate right': (passArr,ins)=> passArr.map((c, i) => passArr[(passArr.length + i - (ins.amount % passArr.length)) % passArr.length]),
  'swap letter': (passArr,ins)=> passArr.map(c => c === ins.first ? ins.second : c === ins.second ? ins.first : c),
  'swap position': (passArr,ins)=> passArr.map((c, i) => i === ins.first  ? passArr[ins.second] : i === ins.second ? passArr[ins.first] : c),
  'reverse': (password,ins)=> [...password.slice(0, ins.first),...[...password.slice(ins.first, ins.second + 1)].reverse(),...password.slice(ins.second + 1)],
  'move': (passArr,ins)=> {passArr.splice(ins.second, 0, passArr.splice(ins.first, 1)[0]); return passArr;},
    'unrotate': (passArr,ins)=>{
      let dest = passArr;
      while(passArr.join('') !== actions['rotate'](dest, {amount:ins.amount}).join('')){
        dest = actions['rotate right'](dest,{amount:1});
      }
      return dest;
    }
}

const scrammble = (password,instructions) =>{
  instructions.forEach(ins=>{
    const parsed = parseInput(ins);
    password = actions[parsed.action](password.split(''),parsed).join('');
  })
  return password;
}

const unscrammble = (password,instructions) =>{
  instructions.forEach(ins=>{
    var parsed = parseInput(ins);
    if(parsed.amount !== undefined){
      parsed.action = parsed.action === 'rotate left' ? 'rotate right' : parsed.action === 'rotate right' ? 'rotate left' :  parsed.action;
      if(parsed.action === 'rotate'){
        parsed.action = 'unrotate';
      }
    }
    else if(parsed.action === 'move'){
      parsed = Object.assign({},{action:parsed.action, first:parsed.second,second:parsed.first});
    }
    password = actions[parsed.action](password.split(''),parsed).join('');
  })
  return password;
}

console.log('First part: ', scrammble(password,input))
console.log('Second part: ', unscrammble('fbgdceah',input.reverse()));
