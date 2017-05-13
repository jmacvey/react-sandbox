import React from 'react';
import {ReactTimer} from './lifecycle/react-timer';
import {ReduxTimer} from './redux-timer/redux-timer';


/**
 * This is the primary Sandbox. 
 * Play here
 */
export const Sandbox = () => {
    return (
        <div>
            <div>{`----React Timer Instances----`}</div>
            <ReactTimer/>
            <ReactTimer/>
            <br/>
            <div>{`----Redux Timer Instances----`}</div>
            <ReduxTimer/>
            <p>
                Try adding another Redux Timer.  What happens?  How can this be fixed? <br/>
                Hint: Every mounted timer might need a key corresponding to their store. <br/>
                Besides altering the store, what else would we need to do in componentWillUnmount?
            </p>
        </div>
    );
}
