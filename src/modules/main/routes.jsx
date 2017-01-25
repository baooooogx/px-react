
// import React from 'react';
// import { Match } from 'react-router';
// import { ConnectedRouter } from 'connected-react-router';
// import { history } from '../../app/stores/store';
// import App from '../index/index';
// import Layout from '../index/layout';


// const routes = (
//   <ConnectedRouter history={history}>
//     <Layout>
//       <Match exactly pattern="/" component={App} />
//     </Layout>
//   </ConnectedRouter>
// );

// export default routes;


import React from 'react';
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router';

// containers
import Index from '../index/index';
import Detail from '../detail/detail';

const routes = (
    <Route path='/' component={Index}>
        <IndexRoute component={Index} />
        <Route path='index' component={Index} />
        <Route path='detail' component={Index} />
    </Route>
);

export default routes;
