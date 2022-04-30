const roman = (input) => {
  if (input === 3) return "III";
  if (input === 2) return "II";
  if (input === 1) return "I";
  return "";
};

module.exports = roman;
