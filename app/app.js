import Polyfill from 'babel-polyfill'; // allows transpilation to work in older browsers
import ReactDOM from 'react-dom'; // contains primary functions to render react components
import React from 'react';  // the react library
import { ReduxApp, configureStore } from './redux.init.js'; // initialization code

/**
 * Configuration of the store for reloading
 */
const store = configureStore({});

/**
 * 
 * @param {*} Component The Redux App
 */
const render = Component => {
    ReactDOM.render(
            <Component store={store}/>,
        document.getElementById('root')
    );
}

/**
 * Initial rendering of the app
 */
render(ReduxApp);



/**
 * Enable Hotloading
 */
if (module.hot) {
    module.hot.accept('./redux.init.js', () => {
        const NextApp = require('./redux.init.js').ReduxApp;
        render(NextApp);
    });
}