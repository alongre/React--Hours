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
    this._date = new Date(date);
    this._year = this._date.getFullYear();
    this._month = this._date.getMonth();
    this._dayNum = this.date.getDay();
    this._dayName = this.setDayName();
    this._hoursPerDay = 0;
    this._isWorkingDay = true;
  }
    /** Properties */
  get hoursPerDay() {
    return this._hoursPerDay;
  }
  set hoursPerDay(newValue) {
    this._hoursPerDay = newValue;
  }
  get isWorkingDay() {
    if (Day.isWeekened(this._year, this._month, this._dayNum)) {
      return false;
    }
    return this._isWorkingDay;
  }

    set isWorkingDay(newValue) {
        _isWorkingDay = newValue;
    }
    get dayName() {
       
    }

    setDayName() {
        switch(this._dayNum) {
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

   static isWeekened(year,month,day) {
        const date = new Date(year,month,day);
        const selectedDay = date.getDay();
        if (selectedDay === '5' || selectedDay === '6') {
            return true;
        }
        return false;
    }

}