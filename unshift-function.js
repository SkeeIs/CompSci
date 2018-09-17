function unshift(arr, val) {
  var temp;
  for (var i = arr.length - 1; i > -1; i--) {
    arr[i+1] = arr[i];
  }  
  arr[0] = val;
  return arr;
}


var numArray = [1, 2, 3, 4, 5];

var newVal = 6;

console.log(unshift(numArray, newVal));