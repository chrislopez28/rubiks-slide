import { arrayEquals, rearrangeMatrix, shuffle } from "../../lib/array";

import { Movement } from "../../ts/types";

describe("arrayEquals", () => {
  it(`should return true when given [1, 2] and [1, 2]`, () => {
    expect(arrayEquals([1, 2], [1, 2])).toBe(true);
  });

  it("should return true when given two empty arrays", () => {
    expect(arrayEquals([], [])).toBe(true);
  });
});

describe("rearrangeMatrix", () => {
  it("should moveLeft", () => {
    expect(
      rearrangeMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], Movement.MoveLeft)
    ).toStrictEqual([2, 3, 1, 5, 6, 4, 8, 9, 7]);
  });

  it("should moveRight", () => {
    expect(
      rearrangeMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], Movement.MoveRight)
    ).toStrictEqual([3, 1, 2, 6, 4, 5, 9, 7, 8]);
  });

  it("should moveUp", () => {
    expect(
      rearrangeMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], Movement.MoveUp)
    ).toStrictEqual([4, 5, 6, 7, 8, 9, 1, 2, 3]);
  });

  it("should moveDown", () => {
    expect(
      rearrangeMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], Movement.MoveDown)
    ).toStrictEqual([7, 8, 9, 1, 2, 3, 4, 5, 6]);
  });
});

describe("shuffle", () => {
  it("should return an array containing the elements in the input array", () => {
    expect(shuffle([1, 2, 3])).toEqual(expect.arrayContaining([1, 2, 3]));
  });
  it("should return an array of the same length as the input", () => {
    expect(shuffle([1, 2, 3]).length).toEqual([1, 2, 3].length);
  });
});
