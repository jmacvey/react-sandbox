import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Reducers } from './reducers';
import { AppContainer } from 'react-hot-loader';
import { Sandbox } from './sandbox';

// initialize the logging middleware
const logger = createLogger();

// configure the store
export const configureStore = (initialState) => {

    const store = createStore(Reducers, initialState || {}, applyMiddleware(logger));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').Reducers;
            store.replaceReducer(nextRootReducer);
        });
    }//
    return store;
}

export const ReduxApp = ({ store }) => {
    return (
            <Provider store={store}>
                <AppContainer>
                    <Sandbox/>
                </AppContainer>
            </Provider>
    );
};