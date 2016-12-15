//noprotect
const generateBoss = (boss)=>{return {
        hp:boss ? boss.hp : 58, 
        damage:boss ? boss.damage : 9
    };
 };
const generatePlayer = (player)=>{
  var history =[], activeSpells=[];
  if(player){
    player.activeSpells.forEach(as=>{
      activeSpells.push({cost:as.cost, duration: as.duration, idx:as.idx, start:as.start,end:as.end,effect:as.effect})
    })
    player.history.forEach(h=>{
      history.push(h);
    })
  }
  return {
    mana:player ? player.mana :500,
    hp:player ? player.hp : 50,
    activeSpells:activeSpells,
    history: history,
    manaSpent:player ? player.manaSpent : 0,
    armor:player ? player.armor : 0,
    tick:(p,b)=>{
      p.activeSpells.forEach(as=>{
        as.duration--;
        as.effect && as.effect(p,b);
        as.duration === 0 && as.end && as.end(p,b);
      });
      p.activeSpells = p.activeSpells.filter(as=> as.duration > 0);
    },
    cast:(p,b, idx)=>{
      var spell = spells[idx];
      p.mana -= spell.cost;
      p.manaSpent += spell.cost;
      p.history.push(idx);
      if(spell.action){
        spell.action(p,b);
      }
      if(spell.start || spell.effect){
        p.activeSpells.push({cost:spell.cost, duration: spell.duration, idx:idx, start:spell.start,end:spell.end,effect:spell.effect});
        spell.start && spell.start(p,b);
      }
    }
  };
}

const spells = [
  {
    cost:53,
    action:(p,b)=>b.hp -= 4
  },
  {
    cost:73,
    action:(p,b)=>{b.hp -= 2; p.hp += 2;}
  },
  {
    cost:113,
    duration:6,
    start:(p,b)=>p.armor += 7,
    end:(p,b)=>p.armor -= 7
  },
  {
    cost:173,
    duration:6,
    effect:(p,b)=>b.hp -=3
  },
  {
    cost:229,
    duration:5,
    effect:(p,b)=>p.mana += 101
  },
];

var cost;
const battle = (p,b, depth, prepareToDieMode) =>{
  for(var i=0;i<spells.length;i++){
    var player = generatePlayer(p);
    var boss = generateBoss(b);

    //Player Turn
    player.hp = prepareToDieMode ? player.hp - 1 : player.hp;
    player.tick(player,boss);
    
    var spell =  spells[i];
    if(player.mana < spell.cost || player.activeSpells.some(as=> as.idx === i)){
      continue;
    }
    player.cast(player,boss,i)
    
    //Boss turn
    player.tick(player,boss);
    player.hp -= Math.max(1,boss.damage - player.armor);

    if(boss.hp<=0){
      cost = !cost || player.manaSpent < cost ? player.manaSpent : cost;
    }
    if(player.hp > 0 && boss.hp > 0 && (!cost || cost > player.manaSpent)){
      battle(player,boss, depth + 1, prepareToDieMode)
    }
  }
}

battle(generatePlayer(), generateBoss(),1);
console.log('First part: '+cost);
cost = undefined;
battle(generatePlayer(), generateBoss(),1, true);
console.log('Second part: '+cost);