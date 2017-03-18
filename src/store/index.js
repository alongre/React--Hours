import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import * as dataAction from '../data/actions';
import saga from './saga';

const loggerMiddleware = createLogger({
  colors: {},
  collapsed: () => true,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  loggerMiddleware,
  sagaMiddleware,
  reduxImmutableStateInvariant(),
  routerMiddleware(browserHistory));

const store = createStore(reducer, composeWithDevTools(middleware));

sagaMiddleware.run(saga);

store.dispatch(dataAction.initMonth());


export default store;
