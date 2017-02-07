import { takeLatest } from 'redux-saga';
import { select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as selectors from './selectors';

function* handleURLChange() {
  const locations = yield select(selectors.getRouting);
  const path = locations.locationBeforeTransitions.pathname;
  if (path === '/') return;
}

export default function* saga() {
  yield [
    takeLatest(LOCATION_CHANGE, handleURLChange),
  ];
}
