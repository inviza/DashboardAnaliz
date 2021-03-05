import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateDifferance'
})
export class DateDifferance implements PipeTransform {
    transform( dateBase: number, dateTo: number) { 
        let dateBaseCopy = new Date(dateBase),
        dateToDateCopy = new Date(dateTo),
        daysDifference = Math.floor((dateToDateCopy.getTime() - dateBaseCopy.getTime())/(1000*60*60*24));

        if(Math.floor(daysDifference / 7)) {
            return Math.floor(daysDifference / 7) + ' неділь'
        } else {
            return daysDifference + 'днів'
        }
    }

}