import { Pipe, PipeTransform } from '@angular/core';
//service 
import { DateFormator } from '../service/dateFarmator.service'

@Pipe({
    name: 'dateHumanReadable'
})
export class DateHumanReadable implements PipeTransform {
    constructor(private dateFormator: DateFormator) {

    }
    transform( dateBase: number) { 
        return this.dateFormator.mounthDayHumanRead(dateBase)
    }

}