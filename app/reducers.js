import { combineReducers } from 'redux';

/**
 * The primary application reducer
 * @param {*} state the state of the app
 * @param {*} action the action
 */
const app = (state = {}, action) => {
    switch (action.type) {
        default:
            return state; 
    }
}

/**
 * Primary reducers object
 */
export const Reducers = combineReducers({
    app
});