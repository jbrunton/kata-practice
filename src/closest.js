const closest = (xs) => {
  if (xs.length === 0) return null;
  if (xs.length === 2) {
    if (xs[1] < xs[0]) {
      return xs[1];
    }
  }
  return xs[0];
};

module.exports = closest;
