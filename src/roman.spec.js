const roman = require("./roman");

test("converts 0", () => {
  expect(roman(0)).toEqual("");
});

test("converts 1", () => {
  expect(roman(1)).toEqual("I");
});

test("converts 2", () => {
  expect(roman(2)).toEqual("II");
});
