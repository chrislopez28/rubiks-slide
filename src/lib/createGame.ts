import { arrayEquals, createMatrix, rearrangeMatrix, shuffle } from "./array";
import { Difficulty, GameType, Movement } from "../ts/types";

export const createGame = (
  difficulty: Difficulty = Difficulty.Normal
): GameType => {
  let numColors = 1;
  let numberSquaresMax = 4;

  if (difficulty === Difficulty.Hard) {
    numColors = 2;
    numberSquaresMax = 5;
  }

  let numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;

  let matrix = createMatrix(numSquaresMax, numColors);
  let target = shuffle(matrix);

  while (arrayEquals(matrix, target)) {
    target = shuffle(matrix);
  }

  let isSolved = false;
  let moves: Movement[] = [];

  return {
    slide(moveType: Movement) {
      matrix = rearrangeMatrix(matrix, moveType);
      moves.push(moveType);
      if (arrayEquals(matrix, target)) {
        isSolved = true;
      }
    },
    getSolvedStatus() {
      return isSolved;
    },
    getMatrix() {
      return matrix;
    },
    getTarget() {
      return target;
    },
    getMoves() {
      return moves;
    },
  };
};
