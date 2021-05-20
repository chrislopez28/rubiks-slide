import { Difficulty } from "../../ts/types";
import * as actionTypes from "./actionTypes";

export const setDifficulty = (difficulty: Difficulty) => {
  let difficultyAction = actionTypes.SET_DIFFICULTY_NORMAL;

  if (difficulty === "hard") {
    difficultyAction = actionTypes.SET_DIFFICULTY_HARD;
  }

  return {
    type: difficultyAction,
  };
};

export const incrementSkipped = () => {
  return {
    type: actionTypes.INCREMENT_SKIPPED,
  };
};

export const incrementSolved = () => {
  return {
    type: actionTypes.INCREMENT_SOLVED,
  };
};

export const initializeSession = () => {
  return {
    type: actionTypes.INITIALIZE_SESSION,
  };
};
