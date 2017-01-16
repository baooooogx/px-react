
import React from 'react';
import { Match } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../app/stores/store';
import App from '../index/index';
import Layout from '../index/layout';


const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Match exactly pattern="/" component={App} />
    </Layout>
  </ConnectedRouter>
);

export default routes;
