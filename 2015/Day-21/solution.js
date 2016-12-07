const generatePlayer = (equipment) => Object.assign({},{
  hp:100, 
  armor:equipment.reduce((total,e)=>e.armor+total,0), 
  damage: equipment.reduce((total,e)=>e.damage+total,0),
  cost: equipment.reduce((total,e)=>e.cost+total,0)
});
const generateBoss = () => Object.assign({},{hp:109, armor:2, damage: 8});

const POTION_SELLER = {
  weapons:[
    {name:'Dagger',cost:8,damage:4,armor:0},
    {name:'Shortsword',cost:10,damage:5,armor:0},
    {name:'Warhammer',cost:25,damage:6,armor:0},
    {name:'Longsword',cost:40,damage:7,armor:0},
    {name:'Greataxe',cost:74,damage:8,armor:0}
  ],
  armor:[
    {name:'None',cost:0,damage:0,armor:0},
    {name:'Leather',cost:13,damage:0,armor:1},
    {name:'Chainmail',cost:31,damage:0,armor:2},
    {name:'Splintmail',cost:53,damage:0,armor:3},
    {name:'Bandedmail',cost:75,damage:0,armor:4},
    {name:'Platemail',cost:102,damage:0,armor:5}
  ],
  rings:[
    {name:'None',cost:0,damage:0,armor:0},
    {name:'Damage+1',cost:25,damage:1,armor:0},
    {name:'Damage+2',cost:50,damage:2,armor:0},
    {name:'Damage+3',cost:100,damage:3,armor:0},
    {name:'Defense+1',cost:20,damage:0,armor:1},
    {name:'Defense+2',cost:40,damage:0,armor:2},
    {name:'Defense+3',cost:80,damage:0,armor:3}
  ]
}

const finalShowdown = (player, boss, turn) =>{
  if(turn === 1){
    boss.hp -= player.damage - boss.armor > 0 ? player.damage - boss.armor : 1;
  }
  else{
    player.hp -= boss.damage - player.armor > 0 ? boss.damage - player.armor : 1;
  }
  if(player.hp <= 0){
    console.log('You Died.');
    return false;
  }
  if(boss.hp <= 0){
    return true;
  }
  return finalShowdown(player,boss, (turn + 1) % 2)
}

var winningSets = new Map();
var losingSets = new Map();

POTION_SELLER.weapons.forEach(w=>{
  POTION_SELLER.armor.forEach(a=>{
    POTION_SELLER.rings.forEach(r1=>{
      POTION_SELLER.rings.forEach(r2=>{
        if(r2.name !== r1.name || r2.name == 'None'){
          var player = generatePlayer([w,a,r1,r2]);
          if(finalShowdown(player,generateBoss(),1)){
            winningSets.set(player.cost, player);
          }
          else{
            losingSets.set(player.cost, player);
          }
        }
      });
    });
  });
});

console.log('First part: '+Math.min.apply(Math,[...winningSets.keys()]))
console.log('Second part: '+Math.max.apply(Math,[...losingSets.keys()]))