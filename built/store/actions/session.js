"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSession = exports.incrementSolved = exports.incrementSkipped = exports.setDifficulty = void 0;
var actionTypes = require("./actionTypes");
var setDifficulty = function (difficulty) {
    var difficultyAction = actionTypes.SET_DIFFICULTY_NORMAL;
    if (difficulty === 'hard') {
        difficultyAction = actionTypes.SET_DIFFICULTY_HARD;
    }
    return {
        type: difficultyAction
    };
};
exports.setDifficulty = setDifficulty;
var incrementSkipped = function () {
    return {
        type: actionTypes.INCREMENT_SKIPPED
    };
};
exports.incrementSkipped = incrementSkipped;
var incrementSolved = function () {
    return {
        type: actionTypes.INCREMENT_SOLVED
    };
};
exports.incrementSolved = incrementSolved;
var initializeSession = function () {
    return {
        type: actionTypes.INITIALIZE_SESSION
    };
};
exports.initializeSession = initializeSession;
