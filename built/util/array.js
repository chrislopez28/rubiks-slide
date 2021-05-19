"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = exports.rearrangeMatrix = exports.arrayEquals = void 0;
function arrayEquals(a, b) {
    return (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function (val, index) { return val === b[index]; }));
}
exports.arrayEquals = arrayEquals;
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
exports.rearrangeMatrix = rearrangeMatrix;
function shuffle(array) {
    var matrixCopy = __spreadArray([], array);
    var randomIndex;
    var temp;
    for (var i = matrixCopy.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        temp = matrixCopy[i];
        matrixCopy[i] = matrixCopy[randomIndex];
        matrixCopy[randomIndex] = temp;
    }
    return matrixCopy;
}
exports.shuffle = shuffle;
