import React from 'react';
import { render } from 'react-dom';
import { Router, Link, Route, browserHistory, Redirect} from 'react-router';

import Detail from './js/detail';

let App = React.createClass({
    render() {
        return (
            <div className='nav'>
                <Link to='/entry/detail'>详情页</Link>
                <Link to='/entry/my'>随便什么吧</Link>
            </div>
        );
    }
});


render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='detail' component={detail}/>
        </Route>
    </Router>,
    document.getElementById('px-main')
);

