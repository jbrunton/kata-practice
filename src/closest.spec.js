const closest = require("./closest");

describe("closest", () => {
  test("empty array", () => {
    expect(closest([])).toEqual(null);
  });
});
