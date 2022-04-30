const roman = require("./roman");

[
  [0, ""],
  [1, "I"],
  [2, "II"],
  [3, "III"],
  [4, "IV"],
  [5, "V"],
  [6, "VI"],
  [9, "IX"],
  [10, "X"],
  [11, "XI"],
  [15, "XV"],
  [20, "XX"],
  [26, "XXVI"],
  [50, "L"],
  [100, "C"],
].forEach(([input, expected]) => {
  test(`converts ${input}`, () => {
    expect(roman(input)).toEqual(expected);
  });
});
