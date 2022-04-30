const closest = require("./closest");

test("returns null for empty array", () => {
  expect(closest([])).toEqual(null);
});

test("singleton array [0]", () => {
  expect(closest([0])).toEqual(0);
});

test("singleton array [1]", () => {
  expect(closest([1])).toEqual(1);
});
