import { Pipe, PipeTransform } from '@angular/core';
import { KaagazPageType } from '../../models/kaagaz-order';

@Pipe({
    name: 'paperSize'
})

export class PaperSizePipe implements PipeTransform {
    transform(value: KaagazPageType): string {
        return KaagazPageType[value];
    }
}