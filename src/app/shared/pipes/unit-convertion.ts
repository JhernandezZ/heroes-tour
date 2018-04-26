// https://angular.io/guide/pipes

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mt' })
export class UnitPipe implements PipeTransform {
    transform(value: number): string {
        return `Estatura: ${(value * 0.3048).toFixed(2)}mt`;
    }
}