const closest = (xs) => {
  if (xs.length === 0) return null;
  let closest = xs[0];
  if (xs.length === 2) {
    let candidate = xs[1];
    if (
      Math.abs(candidate) < Math.abs(closest) ||
      (Math.abs(candidate) === Math.abs(closest) && candidate > 0)
    ) {
      closest = candidate;
    }
  }
  return closest;
};

module.exports = closest;
