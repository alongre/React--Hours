import _ from 'lodash';
import { format, getDaysInMonth, getDay, isFriday, isSaturday, getDate, getYear, getMonth, parse } from 'date-fns';
import Shift from './shift';

/** Day name enum */
export const DayName = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saterday: 6,
};
/**
 * Create new instance of day
 */
export class Day {
    /**
     * @param {*date for the day} date
     * @param {*required hours to work in day} requiredHours
    */
  constructor(date, requiredHours) {
    this._requiredHours = requiredHours;
    this._date = parse(date);
    this._year = getYear(this._date);
    this._month = getMonth(this._date);
    this._dayInWeek = getDay(this._date);
    this._dayInMonth = getDate(this._date);
    this._dayName = this.setDayName();
    this._hoursCompleted = 0;
    this._isWorkingDay = this.isWorkingDay;

    this.Shifts = [
      new Shift('08:00', '17:00'),
      new Shift(undefined, undefined),
      new Shift(undefined, undefined),
    ];
  }
    /** Properties */
  get hoursCompleted() {
    return _.sumBy(this._shifts, (shift) => { return shift.totalHours; });
  }
  get isWorkingDay() {
    if (isFriday(this._date) || isSaturday(this._date)) {
      return false;
    }
    if (this._isWorkingDay === undefined) {
      return true;
    }
    return this._isWorkingDay;
  }
  get dateToString() {
    return `${this._dayInMonth}/${this._month + 1}/${this._year}`;
  }

  set isWorkingDay(newValue) {
    this._isWorkingDay = newValue;
  }
  get dayName() {
    return this._dayName;
  }

  addShift({ start, end }) {
    if (!_.findIndex(this._shifts, { start, end })) {
      this._shifts.push({ start, end });
    }
  }
  removeShift({ start, end }) {
    const indexToRemove = _.findIndex(this._shifts, { start, end });
    if (indexToRemove > -1) {
      this._shifts.splice(indexToRemove, 1);
    }
  }
  setDayName() {
    switch (this._dayInWeek) {
      case DayName.Sunday:
        return 'Sunday';
      case DayName.Monday:
        return 'Monday';
      case DayName.Tuesday:
        return 'Tuesday';
      case DayName.Wednesday:
        return 'Wednesday';
      case DayName.Thursday:
        return 'Thursday';
      case DayName.Friday:
        return 'Friday';
      case DayName.Saterday:
        return 'Saterday';
      default:
        return '';
    }
  }

  static isWeekened(year, month, day) {
    const date = new Date(year, month, day + 1, 0, 0, 0, 0);
    const selectedDay = date.getDay();
    if (selectedDay === 5 || selectedDay === 6) {
      return true;
    }
    return false;
  }

}
