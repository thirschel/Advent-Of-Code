//noprotect
const input = ['Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3', 'Butterscotch: capacity 0, durability 5, flavor -3, texture 0, calories 3', 'Chocolate: capacity 0, durability 0, flavor 5, texture -1, calories 8', 'Candy: capacity 0, durability -1, flavor 0, texture 5, calories 8'];

const parseInput=(i)=>{
  const parsed = i.match(/(\w+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/);
  return {
    name:parsed[1],
    capacity: parseInt(parsed[2]),
    durability: parseInt(parsed[3]),
    flavor: parseInt(parsed[4]),
    texture: parseInt(parsed[5]),
    calories: parseInt(parsed[6])
   };                                                                                                                                                                                    
}

var cookies = [];
const attributes = input.map(i=>parseInput(i));

const bakeCookie = (ingredients)=>{
  var capacity = attributes.reduce((max,i)=> max + i.capacity * ingredients[i.name],0);
  var durability = attributes.reduce((max,i)=> max + i.durability * ingredients[i.name],0);
  var flavor = attributes.reduce((max,i)=> max + i.flavor * ingredients[i.name],0);
  var texture = attributes.reduce((max,i)=> max + i.texture * ingredients[i.name],0);
  var calories = attributes.reduce((max,i)=> max + i.calories * ingredients[i.name],0);
  
  return {tastiness:(capacity > 0 ? capacity:0)*(durability > 0 ? durability:0)*(flavor > 0 ? flavor:0)*(texture > 0 ? texture:0),
          calories:calories};
}

for (var sprinkles = 0; sprinkles < 100; sprinkles++) {
  for (var butterscotch = 0; butterscotch < 100 - sprinkles; butterscotch++) {
    for (var chocolate = 0; chocolate < 100 - sprinkles - butterscotch; chocolate++) {
      var candy = 100 - sprinkles - butterscotch - chocolate;
      cookies.push(bakeCookie({
        'Sprinkles': sprinkles,
        'Butterscotch': butterscotch,
        'Chocolate': chocolate,
        'Candy': candy
      }));
    }
  }
}

console.log('First part: '+Math.max.apply( Math, cookies.map(c=>c.tastiness)))
console.log('Second part: '+Math.max.apply( Math, cookies.filter(c=>c.calories === 500).map(c=>c.tastiness)))