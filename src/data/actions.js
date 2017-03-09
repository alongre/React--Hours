export const INIT_DAYS = `${'data'}/INIT_DAYS`;
export const ADD_SHIFT = `${'data'}/ADD_SHIFT`;
export const ADD_DAY = `${'data'}/ADD_DAY`;


export const initDays = () => ({
  type: INIT_DAYS,
  payload: []
});


export const addShift = (Shift) => ({
  type: ADD_SHIFT,
  payload: Shift,
});

export const addDay = (Day) => ({
  type: ADD_DAY,
  payload: Day,
});