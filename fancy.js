var count = 0;
var names = ["James", "Jill", "Jane", "Jack"];

for(var i = 0; i < names.length; i++){
  console.log(i + " -> " + names[i]);
  count++;

}

var count_1 = 0;
var names_1 = ["James", "Jill", "Jane", "Jack"];

function user(symbol) {
  for(var j = 0; j < names_1.length; j++){
    if (symbol == true) {
      console.log(names_1[names_1.length - (j+1)]);
    } else {
      console.log(j + symbol + names_1[j]);
      count_1++;
    }
  }
}

user(true);
