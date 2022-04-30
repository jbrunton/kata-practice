const roman = (input) => {
  if (input === 5) return "V";
  if (input >= 1) return "I" + roman(input - 1);
  return "";
};

module.exports = roman;
