const closest = require("./closest");

describe("closest", () => {
  test("empty array", () => {
    expect(closest([])).toEqual(null);
  });

  test("singleton list, positive", () => {
    expect(closest([1])).toEqual(1);
  });
});
