const roman = (input) => {
  if (input >= 5) return "V" + roman(input - 5);
  if (input >= 1) return "I" + roman(input - 1);
  return "";
};

module.exports = roman;
