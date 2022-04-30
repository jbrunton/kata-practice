const closerToZero = (x, y) => {
  const sizeX = Math.abs(x);
  const sizeY = Math.abs(y);
  return sizeX < sizeY || (sizeX === sizeY && x > 0);
};

const closest = (xs) => {
  if (xs.length === 0) {
    return null;
  }

  var closest = xs[0];
  for (const candidate of xs.slice(1)) {
    if (closerToZero(candidate, closest)) {
      closest = candidate;
    }
  }

  return closest;
};

module.exports = closest;
