import Day from '../dayView/day';

export class Month {
    constructor(month,year) {
        this._month = month;
        this._year = year;
        this._date = new Date(year,month);
        this._workDays = workDays();
       
    }

    /**Properties */
    get daysCountInMonth() {
        return new Date(this._year,this._month + 1,0).getDate();
    }
    /**Get the working and off days of the selected month */
    workDays(){
        let workingDays = new Array(daysCountInMonth());
        for (let i = 0;i < workingDays.length; i++) {
            let day = new Day(new Date(this._year,this._month + 1,i),9);
            workingDays[i] = {
                day: (i+1) + '.' + (this._month+1) + "." + this._year,
                isWorkingDay = day.isWorkingDay(this._year,this._month,i),
            }
        }

    }
    getCurrentMonth = () => {
     const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const days = new Date(year,month + 1,0).getDate();
        var array = new Array(days);
        var index = 1;
        for (var i =0 ;i < days ; i++){
            array[i] = (i+1) + '.' + (month+1) + "." + year; 
        }
    }

    static getCurrentMonth() {
        return new Date().getMonth();
    }
    static getCurrentYear() {
        return new Date().getFullYear();
    }
    static getDaysInCurrentMonth() {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        return new Date(this.year,this.month + 1,0).getDate();
    }


}