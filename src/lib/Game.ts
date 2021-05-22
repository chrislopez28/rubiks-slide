import { arrayEquals, rearrangeMatrix } from "./array";
import { Movement } from "../ts/types";

export class Game {
  matrix: number[];
  target: number[];
  isSolved: boolean;
  moves: Movement[];

  constructor(
    matrix: number[],
    target: number[],
    isSolved: boolean,
    moves: Movement[]
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

  static createGameFromID(gameId: string[]) {
    // TODO
    return;
  }
}
