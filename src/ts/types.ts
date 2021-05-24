export enum Difficulty {
  Normal = "normal",
  Hard = "hard",
}

export interface GameType {
  slide(moveType: Movement): void;
  getSolvedStatus(): boolean;
  getMatrix(): number[];
  getTarget(): number[];
  getMoves(): string[];
}

export enum Movement {
  RotateLeft = "rotateLeft",
  RotateRight = "rotateRight",
  MoveUp = "moveUp",
  MoveDown = "moveDown",
  MoveLeft = "moveLeft",
  MoveRight = "moveRight",
  Undefined = "",
}
