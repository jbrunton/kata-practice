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
});
