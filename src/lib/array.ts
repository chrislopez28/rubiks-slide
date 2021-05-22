import { Movement } from "../ts/types";

function arrayEquals(a: any[], b: any[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function createMatrix(numSquaresMax: number, numColors: number) {
  const newMatrix = [];
  let numSquares = 0;
  let randomColor;

  for (let i = 0; i < 9; i++) {
    if (numSquares < numSquaresMax) {
      randomColor = Math.floor(Math.random() * numColors);

      if (i < 2 && numColors > 1) {
        if (i === 0) {
          randomColor = 0;
        }
        if (i === 1) {
          randomColor = 1;
        }
      }
      switch (randomColor) {
        case 0:
          newMatrix.push(1);
          break;
        case 1:
          newMatrix.push(2);
          break;
        case 2:
          newMatrix.push(3);
          break;
        default:
          newMatrix.push(0);
          break;
      }
      numSquares += 1;
    } else {
      newMatrix.push(0);
    }
  }

  return newMatrix;
}

function rearrangeMatrix(matrix: number[], moveType: Movement) {
  switch (moveType) {
    case "rotateLeft":
      return [
        matrix[1],
        matrix[2],
        matrix[5],
        matrix[0],
        matrix[4],
        matrix[8],
        matrix[3],
        matrix[6],
        matrix[7],
      ];
    case "rotateRight":
      return [
        matrix[3],
        matrix[0],
        matrix[1],
        matrix[6],
        matrix[4],
        matrix[2],
        matrix[7],
        matrix[8],
        matrix[5],
      ];
    case "moveUp":
      return [
        matrix[3],
        matrix[4],
        matrix[5],
        matrix[6],
        matrix[7],
        matrix[8],
        matrix[0],
        matrix[1],
        matrix[2],
      ];
    case "moveDown":
      return [
        matrix[6],
        matrix[7],
        matrix[8],
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5],
      ];
    case "moveLeft":
      return [
        matrix[1],
        matrix[2],
        matrix[0],
        matrix[4],
        matrix[5],
        matrix[3],
        matrix[7],
        matrix[8],
        matrix[6],
      ];
    case "moveRight":
      return [
        matrix[2],
        matrix[0],
        matrix[1],
        matrix[5],
        matrix[3],
        matrix[4],
        matrix[8],
        matrix[6],
        matrix[7],
      ];
    default:
      return matrix;
  }
}

function shuffle(array: any[]) {
  const matrixCopy = [...array];
  let randomIndex;
  let temp;

  for (let i = matrixCopy.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));

    temp = matrixCopy[i];
    matrixCopy[i] = matrixCopy[randomIndex];
    matrixCopy[randomIndex] = temp;
  }

  return matrixCopy;
}

export { arrayEquals, createMatrix, rearrangeMatrix, shuffle };
