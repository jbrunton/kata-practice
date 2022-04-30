const roman = require("./roman");

[
  [0, ""],
  [1, "I"],
  [2, "II"],
  [3, "III"],
  [5, "V"],
  [6, "VI"],
  [10, "X"],
  [11, "XI"],
].forEach(([input, expected]) => {
  test(`converts ${input}`, () => {
    expect(roman(input)).toEqual(expected);
  });
});
