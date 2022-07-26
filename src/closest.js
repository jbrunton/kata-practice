const closest = (xs) => {
  if (xs.length === 0) return null;
  if (xs.length === 2) {
    if (xs[0] > xs[1]) {
      return xs[1];
    }
  }
  return xs[0];
};

module.exports = closest;
