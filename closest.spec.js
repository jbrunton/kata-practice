const closest = require("./closest");

test("returns null for empty array", () => {
  expect(closest([])).toEqual(null);
});

test("singleton list, positive", () => {
  expect(closest([1])).toEqual(1);
});
