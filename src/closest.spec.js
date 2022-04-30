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

test("two items, positive, desc", () => {
  expect(closest([2, 1])).toEqual(1);
});

test("two items, incl 0, desc", () => {
  expect(closest([1, 0])).toEqual(0);
});

test("two items, positive, asc", () => {
  expect(closest([1, 2])).toEqual(1);
});

test("two items, negative, asc", () => {
  expect(closest([-2, -1])).toEqual(-1);
});

test("two items, same size, mixed signs, asc", () => {
  expect(closest([-1, 1])).toEqual(1);
});
