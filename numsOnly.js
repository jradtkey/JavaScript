var newArray = [];
var arr = [1, "apple", -3, "orange", 0.5];
var newArr = [];

  function numsOnly(arr) {

    for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArray.push(arr[i]);
      }
    }

    console.log(newArray);
  }

  numsOnly(arr);


    function noNums(arr) {

      for (var j = 0; j < arr.length; j++) {
      if (typeof arr[j] !== "number") {
        newArr.push(arr[j]);
        }
      }

      console.log(newArr);
    }

    noNums(arr);
