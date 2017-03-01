import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import * as mockShifts from './mockShifts';


export function* fetchMockShifts() {
  const shifts = mockShifts.Shifts;
  debugger;
  yield shifts.map(shift => put(actions.addShift(shift)));
}

 
export default function* saga() {
  yield [
    
    //takeLatest(appActions.SIDEBAR_ITEM_SELECTED, shouldFetchMockSite),
    takeLatest(actions.INIT_SHIFTS, fetchMockShifts),
   
  ];
}
