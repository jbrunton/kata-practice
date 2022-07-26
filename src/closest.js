const closest = (xs) => {
  if (xs.length === 0) return null;
  let closest = xs[0];
  if (xs.length === 2) {
    let candidate = xs[1];
    if (candidate < closest) {
      closest = candidate;
    }
  }
  return closest;
};

module.exports = closest;
