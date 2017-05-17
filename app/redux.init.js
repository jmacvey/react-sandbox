import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Reducers } from './reducers';
import { AppContainer } from 'react-hot-loader';
import { Sandbox } from './sandbox';

/**
 * Redux initialization file for the sandbox
 * Configures the store and exports the redux app
 */



/**
 * @param initialState the initial state of the app
 * Remarks: This function is exported and a single store is created
 * in the main entry point.
 */
export const configureStore = (initialState = {}) => {
    const logger = createLogger();
    const store = createStore(Reducers, initialState, applyMiddleware(logger));
    
    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').Reducers;
            store.replaceReducer(nextRootReducer);
        });
    } 


    return store;
}

/**
 * The Redux application container
 * @param {} store the Redux store
 */
export const ReduxApp = ({ store, history }) => {
    return (
            <Provider store={store}>
                <AppContainer>
                    <Sandbox history={history}/>
                </AppContainer>
            </Provider>
    );
};