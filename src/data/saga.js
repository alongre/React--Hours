import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as mockData from './mockData';
import { Month, Day } from '../app/components';


export function* fetchMockData() {
  const days = mockData.Days;
  debugger;
  yield days.map(day => put(actions.addDay(day)));
}
export function* showCurrentMonth() {
  debugger;
  const date = new Date();
  const month = new Month(date.getMonth(), date.getFullYear());
  yield put(actions.addMonth(month));
}
export default function* saga() {
  yield [

    // takeLatest(appActions.SIDEBAR_ITEM_SELECTED, shouldFetchMockSite),
    takeLatest(actions.INIT_MONTH, showCurrentMonth),

  ];
}
