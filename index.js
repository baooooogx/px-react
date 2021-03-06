import React from 'react';
import ReactDom from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './src/stores/store';
import Index from './src/modules/index/index';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

// Provider写在一行，就报错：react Element need only one child
// ReactDom.render(
//     <Provider store={store}>
//         <Index />
//     </Provider>,
//     document.getElementById('px-main')
// );


ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Index}>
                <Route path='/index' component={Index} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('px-main')
);
