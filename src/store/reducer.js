import { combineReducers } from 'redux';
import routing from '../routing';
import app from '../app';
import data from '../data';

export default combineReducers({
  routing: routing.reducer,
  data: data.reducer,
  
});
