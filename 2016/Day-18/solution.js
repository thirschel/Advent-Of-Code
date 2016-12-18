//noprotect
const input = '^^.^..^.....^..^..^^...^^.^....^^^.^.^^....^.^^^...^^^^.^^^^.^..^^^^.^^.^.^.^.^.^^...^^..^^^..^.^^^^';

const isTrap = (pr,idx) =>{
  if(pr[idx-1] === '^' && pr[idx] === '&' && pr[idx+1] !== '^'){
    return true;
  }
  if(pr[idx-1] !== '^' && pr[idx] === '&' && pr[idx+1] === '^'){
    return true;
  }
  if(pr[idx-1] !== '^' && pr[idx] !== '&' && pr[idx+1] === '^'){
    return true;
  }
  if(pr[idx-1] === '^' && pr[idx] !== '&' && pr[idx+1] !== '^'){
    return true;
  }
  return false;
}

const mapFloor = (previousRow,rows) =>{
  var safeTiles=0;
  for(var j=0;j<rows;j++){
    var newRow='';
    for(var i=0;i<previousRow.length;i++){
      safeTiles += isTrap(previousRow,i) ? 0 : 1;
      newRow += isTrap(previousRow,i) ? '^' : '.';
    }
    previousRow = newRow;
  }
  return safeTiles;
}
console.log('First part: '+ mapFloor(input,40));
console.log('Second part: '+ mapFloor(input,400000));
