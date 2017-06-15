var hour = 8;
var minute = 31;
var period = "PM";
var nexthour = hour + 1;



if (minute < 31 && period === "AM") {
  console.log("It's just after " + hour +  " in the morning");
} else if (minute > 30 && period === "AM") {
  console.log("It's almost " + nexthour + " in the morning");
} else if (minute < 31 && period === "PM") {
  console.log("It's just after " + hour + " in the evening");
} else if (minute > 30 && period === "PM") {
  console.log("It's almost " + nexthour + " in the evening");
}
