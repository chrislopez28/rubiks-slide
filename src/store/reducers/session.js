import * as actionTypes from '../actions/actionTypes';

const initialState = {
    difficulty: 'normal',
    numberSolved: 0,
    numberAttempted: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIALIZE_SESSION:
            return {
                difficulty: 'normal',
                numberSolved: 0,
                numberAttempted: 0
            }
        case actionTypes.SET_DIFFICULTY_NORMAL:
            return {
                ...state,
                difficulty: 'normal'
            }
        case actionTypes.SET_DIFFICULTY_HARD:
            return {
                ...state,
                difficulty: 'hard'
            }
        case actionTypes.INCREMENT_ATTEMPTED:
            let updatedAttempted = state.numberAttempted + 1;
            return {
                ...state,
                numberAttempted: updatedAttempted
            }
        case actionTypes.INCREMENT_SOLVED:
            let updatedASolved = state.numberSolved + 1;
            return {
                ...state,
                numberSolved: updatedASolved
            }
        default:
            return state;
    }
};

export default reducer;