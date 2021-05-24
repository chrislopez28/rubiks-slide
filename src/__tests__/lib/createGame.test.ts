import { createGame } from "../../lib/createGame";

describe("createGame", () => {
  it("should return an object with slide() and getters as properties", () => {
    expect(createGame()).toEqual(
      expect.objectContaining({
        slide: expect.any(Function),
        getSolvedStatus: expect.any(Function),
        getMatrix: expect.any(Function),
        getTarget: expect.any(Function),
        getMoves: expect.any(Function),
      })
    );
  });
});
