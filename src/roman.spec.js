const roman = require("./roman");

[
  [0, ""],
  [1, "I"],
  [2, "II"],
  [3, "III"],
].forEach(([input, expected]) => {
  test(`converts ${input}`, () => {
    expect(roman(input)).toEqual(expected);
  });
});
