function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function rearrangeMatrix(matrix, moveType) {
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

function shuffle(array) {
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

export { arrayEquals, rearrangeMatrix, shuffle };
