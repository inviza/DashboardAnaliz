import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "truncateWords"
})

export class TruncateWords implements PipeTransform  {
    transform(value: string, length: number) {
        const limit = length != undefined ?  length : 18;
        const trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}