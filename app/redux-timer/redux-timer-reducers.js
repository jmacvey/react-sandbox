import { handleActions } from 'redux-actions';
import { ReduxTimerActions } from './redux-timer-actions';

/**
 * Initial state for our timer
 */
const timerInitialState = {
    stopped: true,
    time: 0
};

/**
 * A reducer map specifying how to handle actions
 */
const reducerMap = {
    [ReduxTimerActions.TICK]: {
        next(state, action) {
            return { ...state, time: state.time + 1 }
        }
    },
    [ReduxTimerActions.TOGGLE]: {
        next(state, action) {
            return { ...state, stopped: !state.stopped }
        }
    }
};

/**
 * The actual reducer returned by handle actions
 */
export const reduxTimer = handleActions(
    reducerMap,
    timerInitialState
);