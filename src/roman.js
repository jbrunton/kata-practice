const numerals = [
  { value: 100, string: "C" },
  { value: 50, string: "L" },
  { value: 10, string: "X" },
  { value: 9, string: "IX" },
  { value: 5, string: "V" },
  { value: 4, string: "IV" },
  { value: 1, string: "I" },
];

const roman = (input) => {
  const numeral = numerals.find((numeral) => input >= numeral.value);
  if (numeral) return numeral.string + roman(input - numeral.value);
  return "";
};

module.exports = roman;
