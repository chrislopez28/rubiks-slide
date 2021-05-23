import { Game } from "../../lib/Game";

jest.mock("../../lib/Game");

// beforeEach(() => {
//   Game.mockClear();
// });

describe("Game class", () => {
  it("should call the class constructor", () => {
    const NewGame = new Game(
      [0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0]
    );
    expect(Game).toHaveBeenCalledTimes(1);
  });
});
