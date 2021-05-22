import { Game } from "../../lib/Game";

describe("Game class", () => {
  it("should be defined", () => {
    expect(
      new Game([0, 0, 0, 0, 0, 0, 1, 1, 1], [1, 1, 1, 0, 0, 0, 0, 0, 0])
    ).toBeDefined();
  });
});
