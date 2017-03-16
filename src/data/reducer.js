import { combineReducers } from 'redux';
import * as actions from './actions';


export const Shifts = (state = [], action) => {
    switch (action.type) {
      case actions.ADD_SHIFT:
        debugger;
        return [...state,action.payload];
     default:
       return state;
   }
};

export const Days = (state = [], action) => {
    switch (action.type) {
      case actions.ADD_DAY:
        debugger;
        return [...state,action.payload];
     default:
       return state;
   }
};

export const Month = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_MONTH:
      return [...state,action.payload];
    default: 
      return state;  
  }
}

// export const addShift = (state = [], action) => {
    
//     switch(action.type) {
//         case actions.ADD_SHIFT:
//             debugger;
//             return [...state,Shifts(undefined,action.payload)];
//         default:
//             return state;    

//     }
// }


export default combineReducers({
    Shifts,
    Days,
});
