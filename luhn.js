function check(num) {
  var revArray = num.toString().split("").reverse();
  var checkTotal = 9 * sumNonCheckDigits(revArray);
  var checkDigit = Number(checkTotal.toString().split("").length);
  console.log(typeof checkDigit, checkDigit);
  return checkDigit;
}

function sumNonCheckDigits(arr) {
  var total = 0;
  arr.forEach(function(each, i) {
    var n = Number(each);
    if (i % 2 === 0 && (n * 2) > 9) {
      total += ((n * 2) - 9);
    } else if (i % 2 === 0 && (n * 2) <= 9) {
      total += (n * 2);
    } else total += n;
  });
  console.log(total)
  return total;
}

var number = 7992739871;
var numTwo = 123456;
// 3 + 5 + 8 + 6 + 4 + 2 = 28 * 9 = 252
console.log(check(number));
console.log(check(numTwo));


module.exports = {
  sumNonCheckDigits: sumNonCheckDigits,
  check: check
};