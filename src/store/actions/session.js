import * as actionTypes from './actionTypes';

export const setDifficulty = (difficulty) => {
    let difficultyAction = actionTypes.SET_DIFFICULTY_NORMAL
    
    if (difficulty === 'hard') {
        difficultyAction = actionTypes.SET_DIFFICULTY_HARD
    }

    return {
        type: difficultyAction
    }

}

export const incrementSolved = () => {
    return {
        type: actionTypes.INCREMENT_SOLVED
    }
}