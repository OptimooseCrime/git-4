array = [1,2,3,4]

function multiply(array) {
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
      sum = sum * array[i];
  }
  return sum;
}