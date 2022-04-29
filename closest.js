const closest = (xs) => {
  if (xs.length === 0) {
    return null;
  }

  if (Math.abs(xs[0]) > Math.abs(xs[1])) {
    return xs[1];
  }

  return xs[0];
};

module.exports = closest;
