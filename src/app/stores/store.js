import { createStore } from 'redux';
import app from '../reducers/app';

let store = createStore(app);

export default store;
