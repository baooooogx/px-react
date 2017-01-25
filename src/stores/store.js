import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {routerReducer} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import app from '../reducers/app';

const logger = createLogger({
    predicate: (getState, action) => action.type !== 'FETCHING'
});

const reducer = combineReducers({
    ...app,
    routing: routerReducer
});

let store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
)

export default store;
