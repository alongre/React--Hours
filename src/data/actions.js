export const INIT_MONTH = `${'data'}/INIT_MONTH`;
export const ADD_SHIFT = `${'data'}/ADD_SHIFT`;
export const ADD_DAY = `${'data'}/ADD_DAY`;
export const ADD_MONTH = `${'data'}/ADD_MONTH`;


export const initMonth = () => ({
  type: INIT_MONTH,
});


export const addShift = Shift => ({
  type: ADD_SHIFT,
  payload: Shift,
});

export const addDay = Day => ({
  type: ADD_DAY,
  payload: Day,
});

export const addMonth = Month => ({
  type: ADD_MONTH,
  payload: Month,
});
