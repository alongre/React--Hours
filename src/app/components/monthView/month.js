import _ from 'lodash';
import { format, getDaysInMonth } from 'date-fns';
import { Day } from '../dayView/day';
import * as Constants from '../../constants';

export class Month {
  constructor(month, year) {
    debugger;
    this._month = month;
    this._year = year;
    this._date = format(new Date(year, month, 1), 'DD/MM/YYYY');
    this._workDays = this.workDays();
  }

    /** Properties */
    /** get the number of days in a month*/
  get daysCountInMonth() {
    return new Date(this._year, this._month + 1, 0).getDate();
  }
    /** Get the working and off days of the selected month */
  workDays() {
    const workingDays = new Array(this.daysCountInMonth);
    const workingHours = Constants.DEFAULT_REQUIERD_HOURS;
    for (let i = 0; i < workingDays.length; i += 1) {
      const day = new Day(format(new Date(this._year, this._month, i + 1), 'YYYY/MM/DD'), workingHours);
      workingDays[i] = {
        day,
      };
    }
    return workingDays;
  }

  get Days() {
    return this._workDays;
  }
  /** get day according to te date */
  getDay(date) {
    const idx = _.findIndex(this._workDays, (day) => {
      return day.dateToString === date;
    });
    return this._workDays[idx];
  }
  /** Update day according to the date */
  updateDay(newDay) {
    const idx = _.findIndex(this._workDays, (day) => {
      return day.dateToString === newDay.dateToString;
    });
    this._workDays[idx] = newDay;
  }
  static getCurrentMonth() {
    return new Date().getMonth();
  }
  static getCurrentYear() {
    return new Date().getFullYear();
  }
  static getDaysCountInCurrentMonth() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    return getDaysInMonth(new Date(year, month));
  }
}
