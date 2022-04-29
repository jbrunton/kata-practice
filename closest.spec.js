const closest = require("./closest");

test("returns null for empty array", () => {
  expect(closest([])).toEqual(null);
});

test("singleton list, positive", () => {
  expect(closest([1])).toEqual(1);
});

test("singleton list, negative", () => {
  expect(closest([-1])).toEqual(-1);
});

test("two items, desc", () => {
  expect(closest([2, 1])).toEqual(1);
});

test("two items, asc", () => {
  expect(closest([1, 2])).toEqual(1);
});

test("two items, negative, asc", () => {
  expect(closest([-1, -2])).toEqual(-1);
});

test("same magnitude, different signs", () => {
  expect(closest([-1, 1])).toEqual(1);
});