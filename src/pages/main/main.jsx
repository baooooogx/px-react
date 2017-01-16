import React from 'react';
import ReactDom from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from '../../app/stores/store';
// import Routes from './routes';
import Index from '../index/index';
// import {Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDom.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('px-main')
)
