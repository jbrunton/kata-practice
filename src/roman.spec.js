const roman = require("./roman");

test("converts 0", () => {
  expect(roman(0)).toEqual("");
});
