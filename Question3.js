function comp(baseArray, squaredArray) {

  var newArray = [];
  for (var i = 0; i < baseArray.length; i++) {
    newArray.push(baseArray[i] * baseArray[i]);
  }

  if (newArray === null || squaredArray === null || newArray.length !== squaredArray.length) {
    return false
  }

 
  if (newArray.sort().join('') === squaredArray.sort().join('')) {
    return true;

  } else {
    return false;
  }

}


console.log(comp([1,2,3], [1,4,9]))
