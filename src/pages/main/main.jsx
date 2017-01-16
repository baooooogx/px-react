import React from 'react';
import ReactDom from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from '../../app/stores/store';
// import Routes from './routes';
import Index from '../index/index';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';


// Provider写在一行，就报错：react Element need only one child
ReactDom.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('px-main')
)
