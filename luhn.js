var inputArr = [];

function makeTestArray(n) {
  inputArr = n.toString().split("");
  var revArray = inputArr.slice(0, inputArr.length - 1).reverse();
  console.log(inputArr);
  return revArray;
}

function totalNonCheck(arr) {
  var total = 0;
  arr.forEach(function(each, i) {
    var n = Number(each);
    if (i % 2 === 0 && n * 2 > 9) {
      total += n * 2 - 9;
    } else if (i % 2 === 0 && n * 2 <= 9) {
      total += n * 2;
    } else total += n;
  });
  return total * 9;
}

function check(num) {
  var checkTotal = totalNonCheck(makeTestArray(num));
  var checkDigit = Number(checkTotal.toString().split("").length);
  console.log(checkDigit);
  return checkDigit == inputArr[inputArr.length - 1];
}

// ** standalone tests **
var numTrue = 79927398713;
console.log(check(numTrue));
var numFalse = 79927398714;
console.log(check(numFalse));
// var numTwo = 123456;
// console.log(check(numTwo));

module.exports = {
  totalNonCheck: totalNonCheck,
  check: check
};