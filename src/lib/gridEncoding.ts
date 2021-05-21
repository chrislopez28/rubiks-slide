export function decodeGame(gameId: string) {
  if (gameId.length !== 18 || typeof gameId === "string") {
    throw new Error("gameId should should be a string of length 18.");
  }

  let startGrid: string[] = [];
  let targetGrid: string[] = [];

  for (let i = 0; i < 18; i++) {
    if (i < 9) {
      startGrid.push(gameId[i]);
    } else {
      targetGrid.push(gameId[i]);
    }
  }

  return { startGrid, targetGrid };
}

export function encodeGame(startGrid: number[], targetGrid: number[]) {
  if (
    !Array.isArray(startGrid) ||
    !Array.isArray(targetGrid) ||
    startGrid.length !== 9 ||
    targetGrid.length !== 9
  ) {
    throw new Error("startGrid and targetGrid should be arrays of length 9.");
  }

  let gameId = "";

  startGrid.forEach((digit) => {
    gameId += digit;
  });

  targetGrid.forEach((digit) => {
    gameId += digit;
  });

  return gameId;
}
