"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeGame = exports.decodeGame = void 0;
function decodeGame(gameId) {
    if ((gameId.length !== 18) || (typeof gameId === 'string')) {
        throw new Error('gameId should should be a string of length 18.');
    }
    var startGrid = [];
    var targetGrid = [];
    for (var i = 0; i < 18; i++) {
        if (i < 9) {
            startGrid.push(gameId[i]);
        }
        else {
            targetGrid.push(gameId[i]);
        }
    }
    return { startGrid: startGrid, targetGrid: targetGrid };
}
exports.decodeGame = decodeGame;
function encodeGame(startGrid, targetGrid) {
    if ((!Array.isArray(startGrid)) ||
        (!Array.isArray(targetGrid)) ||
        (startGrid.length !== 9) ||
        (targetGrid.length !== 9)) {
        throw new Error('startGrid and targetGrid should be arrays of length 9.');
    }
    var gameId = "";
    startGrid.forEach(function (digit) {
        gameId += digit;
    });
    targetGrid.forEach(function (digit) {
        gameId += digit;
    });
    return gameId;
}
exports.encodeGame = encodeGame;
