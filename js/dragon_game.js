// javascript game by jan dennison, feb 2015

// character
var dragon = {
  hoard: [],
  name: "Smaug",
  age: 3402,
  value_of_hoard: 603590458674
}

// items
var item = function(name,gold_amt,silver_amt,ash_amt) {
  this.name = name,
  this.gold_amt = gold_amt,
  this.silver_amt = silver_amt,
  this.ash_amt = ash_amt || 0
};
var chalice = new item("Chalice of the Gods",14,3,0);
var armor = new item("Shining Armor of Blessing",0,32,0);
var necklace = new item("Golden Amulet of Power",9,9,0);
var coinpurse = new item("Wanderer's Coinpurse",8,3,0);
var ring = new item("Ring of Solitude",3,0,0);

// character methods
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

// dom methods
$('item').hover

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


