const closest = (xs) => {
  if (xs.length === 0) return null;

  var closest = xs[0];
  for (const candidate of xs) {
    if (closerToZero(candidate, closest)) {
      closest = candidate;
    }
  }

  return closest;
};

const closerToZero = (candidate, closest) => {
  const candidateSize = Math.abs(candidate);
  const closestSize = Math.abs(closest);
  return (
    candidateSize < closestSize ||
    (candidateSize === closestSize && candidate >= 0)
  );
};

module.exports = closest;
