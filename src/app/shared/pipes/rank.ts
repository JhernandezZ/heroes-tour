// https://angular.io/guide/pipes

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rank' })
export class RankPipe implements PipeTransform {
    transform(index: number): string {
        let prefix: string = '';
    
        switch (index) {
            case 0:
                prefix = 'st';
                break;
            case 1:
                prefix = 'nd';
                break;
            case 2:
                prefix = 'rd';
                break;
        
            default:
                prefix = 'th';
                break;
        }

        return `${(index + 1)}${prefix}`;
    }
}