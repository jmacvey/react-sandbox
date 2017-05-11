import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { ReduxApp, configureStore } from './redux.init.js';

const store = configureStore({});

const render = Component => {
    ReactDOM.render(
            <Component store={store}/>,
        document.getElementById('root')
    );
}

render(ReduxApp);



// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./redux.init.js', () => {
        const NextApp = require('./redux.init.js').ReduxApp;
        render(NextApp);
    });
}