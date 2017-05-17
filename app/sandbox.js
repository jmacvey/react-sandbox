import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';
import {Tab, Bio} from './route-components';

/**
 * This is the primary Sandbox. 
 * Play here
 */
export const Sandbox = ({history}) => {
    return (
        <Router history={history}>
            <div>
                <Tab/>
                <Bio/>
                <Route exact path = "/" component={Intro}/>
            </div>
        </Router>
    );
};

/**
 * Introductory component
 */
const Intro = () => {
    return (
        <div>
            <strong>
                    <p>
                    Check out this simple react router demo!<br/>
                    <Link to="/heroes">Go to the Heroes</Link>
                    </p>
            </strong>
        </div>
    );
}