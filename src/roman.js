const roman = (input) => {
  if (input >= 1) return "I" + roman(input - 1);
  return "";
};

module.exports = roman;
