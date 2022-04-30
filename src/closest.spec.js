const closest = require("./closest");

test("returns null for empty array", () => {
  expect(closest([])).toEqual(null);
});
