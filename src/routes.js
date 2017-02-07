import h from 'react-hyperscript';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { App } from './app/components';
import store from './store';

const routes = [
  h(Route, {
    path: '/',
    component: App,
  }, [
    h(IndexRoute, {
      path: '',
      component: App,
    }),
  ]),
];
const history = syncHistoryWithStore(browserHistory, store);
const router = h(Router, { history }, routes);
export default router;

