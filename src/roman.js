const numerals = [
  [10, "X"],
  [5, "V"],
  [1, "I"],
];

const roman = (input) => {
  const numeral = numerals.find(([value, _]) => input >= value);
  if (numeral) return numeral[1] + roman(input - numeral[0]);
  return "";
};

module.exports = roman;
