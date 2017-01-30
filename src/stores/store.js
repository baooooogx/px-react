import {createStore, applyMiddleware, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import {getData} from '../actions/action';

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const logger = createLogger({
    predicate: (getState, action) => action.type !== 'FETCHING'
});

let store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

// store.dispatch(getData()).then(() => {
//     console.log()
//     console.log(store.getState())
// })

export default store;
