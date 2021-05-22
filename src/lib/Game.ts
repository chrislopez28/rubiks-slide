import { arrayEquals, createMatrix, rearrangeMatrix, shuffle } from "./array";
import { Difficulty, Movement } from "../ts/types";

export class Game {
  matrix: number[];
  target: number[];
  isSolved: boolean;
  moves: Movement[];

  constructor(
    matrix: number[],
    target: number[],
    isSolved: boolean = false,
    moves: Movement[] = []
  ) {
    this.matrix = matrix;
    this.target = target;
    this.isSolved = false;
    this.moves = [];
  }

  slide(moveType: Movement) {
    this.matrix = rearrangeMatrix(this.matrix, moveType);
    this.moves.push(moveType);
    this.checkAndUpdateStatus();
  }

  checkAndUpdateStatus() {
    if (arrayEquals(this.matrix, this.target)) {
      this.isSolved = true;
    }
  }

  static createGame(difficulty: Difficulty) {
    let numberColors = 1;
    let numberSquaresMax = 4;

    if (difficulty === "hard") {
      numberColors = 2;
      numberSquaresMax = 5;
    }

    let numSquaresMax = Math.floor(Math.random() * (numberSquaresMax - 1)) + 2;

    const newMatrix = createMatrix(numSquaresMax, numberColors);

    const updatedMatrix: number[] = shuffle(newMatrix);
    let updatedTarget: number[] = shuffle(newMatrix);

    if (arrayEquals(updatedMatrix, updatedTarget)) {
      while (arrayEquals(updatedMatrix, updatedTarget)) {
        updatedTarget = shuffle(newMatrix);
      }
    }

    return new Game(updatedMatrix, updatedTarget);
  }

  static createGameFromID(gameId: string[]) {
    // TODO
    return;
  }
}
