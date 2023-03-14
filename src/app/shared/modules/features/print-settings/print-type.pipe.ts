import { Pipe, PipeTransform } from '@angular/core';
import { KaagazPrintType } from 'kaagaz-models';

@Pipe({
    name: 'printType'
})

export class PrintTypePipe implements PipeTransform {
    transform(value: KaagazPrintType, ...args: any[]): any {
        return KaagazPrintType[value];
    }
}