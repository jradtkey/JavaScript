var quarters = "";
var prize = Math.trunc(Math.random() * 50)+51;

function chance(quarters, leave) {
  while (quarters > leave) {
    var step_1 = Math.floor(Math.random()*100);
    if (step_1 === 5) {
      console.log("Congratulations! You won " + prize +" quarters! Your total is " + (quarters + prize)+"!");
      break;
    } else {
      quarters -= 1;
    }
    if (quarters===leave){
      console.log("You've reached your losing limit of " + leave + " quarters.");
    }
  }
}

chance(1000, 5);
