import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as mockData from './mockData';


export function* fetchMockData() {
  const days = mockData.Days;
  debugger;
  yield days.map(day => put(actions.addDay(day)));
}
 
export default function* saga() {
  yield [
    
    //takeLatest(appActions.SIDEBAR_ITEM_SELECTED, shouldFetchMockSite),
    takeLatest(actions.INIT_DAYS, fetchMockData),
   
  ];
}
