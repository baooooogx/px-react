import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {getData} from '../actions/action';

const logger = createLogger({
    predicate: (getState, action) => action.type !== 'FETCHING'
});

let store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

// store.dispatch(getData()).then(() => {
//     console.log()
//     console.log(store.getState())
// })

export default store;
