"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = require("../actions/actionTypes");
var initialState = {
    difficulty: 'normal',
    numberSolved: 0,
    numberSkipped: 0
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.INITIALIZE_SESSION:
            return {
                difficulty: 'normal',
                numberSolved: 0,
                numberSkipped: 0
            };
        case actionTypes.SET_DIFFICULTY_NORMAL:
            return __assign(__assign({}, state), { difficulty: 'normal' });
        case actionTypes.SET_DIFFICULTY_HARD:
            return __assign(__assign({}, state), { difficulty: 'hard' });
        case actionTypes.INCREMENT_SKIPPED:
            var updatedSkipped = state.numberSkipped + 1;
            return __assign(__assign({}, state), { numberSkipped: updatedSkipped });
        case actionTypes.INCREMENT_SOLVED:
            var updatedASolved = state.numberSolved + 1;
            return __assign(__assign({}, state), { numberSolved: updatedASolved });
        default:
            return state;
    }
};
exports.default = reducer;
