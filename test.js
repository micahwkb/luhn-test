var assert = require("chai").assert;
var check = require("./luhn").check;
var sum = require("./luhn").totalNonCheck;

describe("Luhn Test", () => {

  it("sum(number) === 216", () => {
    var array = [1,2,3,4,5,6].reverse();
    assert.isTrue(sum(array) === 216);
  });
  it("sum(number) === 603", () => {
    var array = [7,9,9,2,7,3,9,8,7,1].reverse();
    assert.isTrue(sum(array) === 603);
  });
  it("check(number) === 3", () => {
    var number = 7992739871;
    assert.isTrue(check(number) === 3);
  });
  it("check(number) === 3", () => {
    var number = 79927398714;
    assert.isTrue(check(number) === 3);
  });
});