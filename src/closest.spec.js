const closest = require("./closest");

describe("closest", () => {
  test("empty array", () => {
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

  test("two items, negative", () => {
    expect(closest([-1, -2])).toEqual(-1);
  });

  test("two items, same size, different signs", () => {
    expect(closest([-1, 1])).toEqual(1);
  });
});
