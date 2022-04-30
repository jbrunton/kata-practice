const closest = require("./closest");

test("returns null for empty array", () => {
  expect(closest([])).toEqual(null);
});

test("singleton array [0]", () => {
  expect(closest([0])).toEqual(0);
});
