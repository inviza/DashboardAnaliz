import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class DateFormator {
    constructor() { 

    }
    fromTimestampToDate(value: number) {
      let date = new Date(value);
      return date.toISOString().slice(0, 10)
    }

    mounthDayHumanRead(value: number) {
        let date = new Date(value);
        let resultString: string;
        switch(date.getMonth()){
            case 0: 
              resultString = 'Січень'
              break;
            case 1: 
            resultString = 'Лютий'
              break;
            case 2: 
            resultString = 'Березень'
              break;
            case 3: 
            resultString = 'Квітень'
              break;
            case 4: 
            resultString = 'Травень'
              break;
            case 5: 
            resultString = 'Червень'
              break;
            case 6: 
            resultString = 'Липень'
              break;
            case 7: 
            resultString = 'Серпень'
              break;
            case 8: 
            resultString = 'Вересень'
              break;
            case 9: 
            resultString = 'Жовтень'
              break;
            case 10: 
            resultString = 'Листопад'
              break;
            case 11: 
            resultString = 'Грудень'
              break;
        }
        resultString += ', ' + date.getDate()
        return resultString
    }

}