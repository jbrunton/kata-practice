const closerToZero = (x, y) => {
  const sizeX = Math.abs(x);
  const sizeY = Math.abs(y);
  return sizeX < sizeY || (sizeX === sizeY && x > 0);
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
