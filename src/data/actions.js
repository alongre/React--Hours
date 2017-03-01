export const INIT_SHIFTS = `${'data'}/INIT_SHIFTS`;
export const ADD_SHIFT = `${'data'}/ADD_SHIFT`;

export const initShifts = () => ({
  type: INIT_SHIFTS,
  payload: []
});


export const addShift = (Shift) => ({
  type: ADD_SHIFT,
  payload: Shift,
});