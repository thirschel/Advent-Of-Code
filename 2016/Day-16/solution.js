//noprotect
const input = '10001001100000001';


const produceCheckSum = (input,length) =>{
  var value = input;
  while(value.split('').length < length){
    var original = value;
    value = original + '0' + value.split('').reverse().map(v=>v==='0' ? '1' : '0').join('');
  }
  var checksum = value.substring(0,length);
  while(checksum === value.substring(0,length - 1) || checksum.split('').length % 2 === 0){
    checksum = checksum.split('').reduce((chk,v,i)=> chk = i % 2 === 0 ? checksum[i]===checksum[i+1]? chk+'1' :chk+'0': chk,    '')
  }
  return checksum;
}

console.log('First part: ' + produceCheckSum(input,272));
console.log('First part: ' + produceCheckSum(input,35651584));