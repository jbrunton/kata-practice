const numerals = [
  { value: 10, string: "X" },
  { value: 5, string: "V" },
  { value: 1, string: "I" },
];

const roman = (input) => {
  const numeral = numerals.find((numeral) => input >= numeral.value);
  if (numeral) return numeral.string + roman(input - numeral.value);
  return "";
};

module.exports = roman;
