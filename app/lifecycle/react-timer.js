'use strict';
import React from 'react';

/**
 * This class represents a React-Only timer based off the one
 * created at https://facebook.github.io/react/docs/react-component.html
 * which allows you to see state transitions on the page,
 * lifecycle calls are logged to the console.
 */
export class ReactTimer extends React.Component { // React.Component is an abstract base class

    /**
     * Stateful components like this one have
     * a constructor and two instance properties: state and props
     * @param {*} props these are props decorating the component
     */
    constructor(props) {

        // must always pass props to the base constructor
        super(props);

        console.log(`constructor called!`);

        // for stateful components, initialiize
        // state in the constructor class method
        this.state = {time: 0, stopped: true};

        // bind functions in class like you normally would
        this.onStop = this.onStop.bind(this);
        this.onStart = this.onStart.bind(this);
        this.tick = this.tick.bind(this);
    }

    //-----------------------
    // Lifecycle Methods
    //-----------------------


    /**
     * After construction, this method is called to 
     * inform you that the component is about to mount
     * Note you do have access to "this", which means you have
     * access to "this.props" as well!
     */
    componentWillMount() {
        console.log(`componentWillMount called!`);

        // this ensures our clock will start automatically
        // when mounting.  note that calling any setState methods
        // will NOT trigger a re-rendering of the component
        this.onStart();
    }

    /**
     * This gets called immediately after componentWillMount()
     */
    componentDidMount() {
        console.log(`componentDidMount called!`);
    }


    /**
     * This gets called when a component receives new props
     * (highly useful to propogate external state changes to internal state
     * i.e. state changes from Redux)
     *
     * @param {*} nextProps the new props passed in
     */
    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps called!`);
        // compare the new props to the old props
        // to determine if you need to make any new state
        // changes using this.setState here
        // this does NOT get called during the mounting process
    }

    /**
     * Should component update gets called for EITHER
     * prop OR state transitions
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate called!`);
        // compare nextProps to this.props
        // compare nextState to this.state
        // determine if you want to trigger a re-rendering

        // this is where optimizations help a lot! 
        // for instance, if we're storing and updating
        // metadata in state and don't care about showing
        // it to the user, we avoid re-renderings by metadata changes

        // note: don't try to update state here. This method should
        // be used only to tell React to skip an update or not.

        // returns true by default
        return true;
    }

    /**
     * This method is invoked before rendering when
     * new props or state are being received
     * This is NOT called for initial render
     * @param {*} nextProps the next props
     * @param {*} nextState the next state
     */
    componentWillUpdate(nextProps, nextState) {
        console.log(`componentWillUpdate called!`);

        // perform prep before update occurs
        // Don't call setState here. Use componentWillReceiveProps!
    }

    /**
     * Calls immediately afte rupdating occurs
     * @param {*} prevProps the previous props
     * @param {*} prevState the previous state
     */
    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate called!`);
        // you have access to the state and props just before the update
        // here.  Do you need to get more data? A network request, maybe?
        // Do it here!
    }

    /**
     * Called just before a component is unmounted and destroyed
     */
    componentWillUnmount() {
        console.log(`componentWillUnmount called!`);

        // free resources you've allocated here.

        if (!this.state.stopped) {
            // note this method clears the interval
            // we set when the timer started
            this.onStop();
        }
    }




    //-----------------------
    // Class methods
    //-----------------------

    /**
     * Updates the timer 
     */
    tick() {
        
        // note we use the function version of this.setState because
        // state updates happen asynchronously.  We want to have access
        // to the previous state's time!
        this.setState((prevState, props) => ({
            time: prevState.time + 1
        }));
    }

    /**
     * Stops the clock
     */
    onStop() {

        // clears the window interval
        clearInterval(this.state.interval);

        // sets the state the same way as tick does
        this.setState((prevState, props) => ({
            interval: undefined,
            stopped: true
        }));
    }

    /**
     * Starts the clock
     */
    onStart() {
        this.setState((prevState, props) => ({
            stopped: false,
            time: prevState.time + 1,
            interval: window.setInterval(this.tick, 1000)
        }));
    }

    render() {
        return (
            <div>
                <strong>
                    {`React Timer: ${this.state.time}`}</strong>
                <br/>
                <button onClick={() => {this.state.stopped ? this.onStart() : this.onStop()}}>
                    Click Me!
                </button>
                <div>{`State: ${JSON.stringify(this.state)}`}</div>
            </div>
        );
    }
}