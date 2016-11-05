
function makeTestArray(n) {
  var arr = n.toString().split("");
  var revArray = arr.slice(0, arr.length - 1).reverse();
  console.log(revArray);
  return revArray;
}

// ...

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
  return Number(checkTotal.toString().split("").length);
}

// ** standalone tests **
// var number = 7992739871;
// console.log(check(number));
var number = 79927398714;
console.log(check(number));
// var numTwo = 123456;
// console.log(check(numTwo));

module.exports = {
  totalNonCheck: totalNonCheck,
  check: check
};