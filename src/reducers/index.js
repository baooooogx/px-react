import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import app from './app';
import test from './test';

const rootReducer = combineReducers({
    app,
    test,
    routing: routerReducer
});

export default rootReducer;
