import * as actionTypes from "../actions/actionTypes";

interface Action {
  type: string;
}

const initialState = {
  difficulty: "normal",
  numberSolved: 0,
  numberSkipped: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE_SESSION:
      return {
        difficulty: "normal",
        numberSolved: 0,
        numberSkipped: 0,
      };
    case actionTypes.SET_DIFFICULTY_NORMAL:
      return {
        ...state,
        difficulty: "normal",
      };
    case actionTypes.SET_DIFFICULTY_HARD:
      return {
        ...state,
        difficulty: "hard",
      };
    case actionTypes.INCREMENT_SKIPPED:
      let updatedSkipped = state.numberSkipped + 1;
      return {
        ...state,
        numberSkipped: updatedSkipped,
      };
    case actionTypes.INCREMENT_SOLVED:
      let updatedASolved = state.numberSolved + 1;
      return {
        ...state,
        numberSolved: updatedASolved,
      };
    default:
      return state;
  }
};

export default reducer;
