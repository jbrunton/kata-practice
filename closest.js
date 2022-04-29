const closerToZero = (x, y) => {
  return Math.abs(x) < Math.abs(y);
};

const closest = (xs) => {
  if (xs.length === 0) {
    return null;
  }

  if (closerToZero(xs[1], xs[0])) {
    return xs[1];
  }

  return xs[0];
};

module.exports = closest;
