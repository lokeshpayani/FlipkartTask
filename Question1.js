function sum(input) {

  //  if (toString.call(input) !== "[object Array]")
  //     return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}
console.log(sum([9, 3, '7', '3']));
console.log(sum(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sum(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));