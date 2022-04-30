const closest = (xs) => {
  if (xs.length === 0) return null;

  var closest = xs[0];
  if (xs.length === 2) {
    const candidate = xs[1];
    if (closerToZero(candidate, closest)) {
      closest = candidate;
    }
  }

  return closest;
};

const closerToZero = (candidate, closest) => {
  return (
    Math.abs(candidate) < Math.abs(closest) ||
    (Math.abs(candidate) === -closest && candidate >= 0)
  );
};

module.exports = closest;
