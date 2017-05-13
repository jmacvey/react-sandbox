import { createAction } from 'redux-actions';

export const ReduxTimerActions = {
    TICK : `TICK`,
    TOGGLE: `TOGGLE`
}

/**
 * Redux actions allows you to create an action individually.
 */
const tick = createAction(ReduxTimerActions.TICK, 
    time => time);

/**
 * Note the identity is returned if no default is given
 */
const toggle = createAction(ReduxTimerActions.TOGGLE)

/**
 * We export the actions so we can dispatch them
 * continuously
 */
export default {
    tick,
    toggle
}