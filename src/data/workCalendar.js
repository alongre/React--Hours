

class Mo

export const getCurrentMonth = () => {
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