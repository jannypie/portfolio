var dragon = {
  hoard: [],
  name: "Smaug",
  age: 3402,
  value_of_hoard: 0
}

var chalice = {
  name: "Chalice of the Gods",
  gold_amt: 14,
  silver_amt: 3,
  ash_amt: 0
}
var armor = {
  name: "Shining Armor of Blessing",
  gold_amt: 56,
  silver_amt: 12,
  ash_amt: 0
}
var necklace = {
  name: "Silver Amulet of Power",
  gold_amt: 0,
  silver_amt: 9,
  ash_amt: 0
}
var coins = {
  name: "Wanderer's Coinpurse",
  gold_amt: 8,
  silver_amt: 0,
  ash_amt: 0
}

function evaluate(item) {
  if (item.gold_amt > 0) {
    console.log("Ahhhhh gooooollddd");
    add_to_hoard(item);
  } else {
    console.log("Worthlessssss");
    incinerate(item);
  }
}

function add_to_hoard(item) {
  dragon.hoard.push([item.name,item.gold_amt]);
}

function incinerate(item) {
  item.gold_amt = 0;
  item.silver_amt = 0;
  item.ash_amt = 1;
}

function calculate_hoard() {
  var value = dragon.value_of_hoard;
  for (var i = dragon.hoard.length - 1; i >= 0; i--) {
    value += dragon.hoard[i][1];
  };
  dragon.value_of_hoard = value;
}

// Test code
calculate_hoard();
console.log(dragon.value_of_hoard);

evaluate(chalice);
evaluate(armor);
evaluate(necklace);
evaluate(coins);

console.log(dragon.hoard);
calculate_hoard();
console.log(dragon.value_of_hoard);


