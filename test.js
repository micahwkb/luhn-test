var assert = require("chai").assert;
var check = require("./luhn").check;
var sum = require("./luhn").sumNonCheckDigits;

describe("Luhn Test", () => {

  it("sum(number) === 28", () => {
    var array = [1,2,3,4,5,6].reverse();
    assert.isTrue(sum(array) === 24);
  });
  it("sum(number) === 67", () => {
    var array = [7,9,9,2,7,3,9,8,7,1].reverse();
    assert.isTrue(sum(array) === 67);
  });
  it("check(number) === 3", () => {
    var number = 7992739871;
    assert.isTrue(check(number) === 3);
  });
});



/*

1. From the rightmost digit, which is the check digit, moving left, double the value of every second digit; if the product of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then sum the digits of the products (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or alternatively subtract 9 from the product (e.g., 16: 16 - 9 = 7, 18: 18 - 9 = 9).

2. Take the sum of all the digits.

3. If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.

Assume an example of an account number "7992739871" that will have a check digit added, making it of the form 7992739871x:

*/