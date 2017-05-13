'use strict';
import React from 'react';
import ReduxTimerActions from './redux-timer-actions';
import { connect } from 'react-redux';

/**
 * Stateful react component that corresponds to store.
 * Note I call it a layout because it really is just a layout
 * for the redux store to map props to
 * @param time the current time
 */
class ReduxTimerLayout extends React.Component {

    /**
     * Constructor just binds start and stop methods
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.start.bind(this);
        this.stop.bind(this);
        console.log(props);
    }

    //-----------------------
    // Lifecycle Methods
    //-----------------------

    /**
     * Sets the interval and starts the timer
     */
    componentWillMount() {
        const { toggle, stopped } = this.props;

        // toggle the timer on by default
        if (stopped) {
            // componentWillReceiveProps gets this
            // when redux passes the start flag in
            toggle();
        } else {
            // We need to manually start the timer here
            // as componentWillReceiveProps doesn't
            // fire on first mounting
            this.start();
        }
    }

    /**
     * This receives the start / stop flag from the timer
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        
        // if we're stopping, stop
        if (this.props.stopped != nextProps.stopped) {
            if (nextProps.stopped) {
                this.stop();
            } else {
                this.start()
            }
        }
    }


    //-----------------------
    // Class Methods
    //-----------------------

    /**
     * Starts the timer
     */
    start() {
        const { tick } = this.props;
        this.setState((prevState, props) => ({
            interval: setInterval(tick, 1000)
        }));
        tick();
    }

    /**
     * Stops the timer
     */
    stop() {
        console.log(`interval`, this.state.interval);
        clearInterval(this.state.interval);
        this.setState((prevState, props) => ({
            interval: undefined
        }));
    }

    /**
     * Render
     */
    render() {
        const { time, stopped, toggle } = this.props;
        return (
            <div>
                <strong>
                    {`Redux Timer: ${time}`}</strong>
                <br />
                <button onClick={() => toggle()}>
                    Click Me!
                </button>
                <div>{`Props: ${JSON.stringify(this.props)}`}</div>
            </div>
        );
    }
};

/**
 * This is technically what's referred to as a "container"
 * in Redux.  For simpliciy, I often include it here.
 */
export const ReduxTimer = connect((state, ownProps) => (
    {
        ...state.reduxTimer
    }
),
    (dispatch, ownProps) => (
        {
            toggle: () => dispatch(ReduxTimerActions.toggle()),
            tick: () => dispatch(ReduxTimerActions.tick())
        }
    ),
)(ReduxTimerLayout);

