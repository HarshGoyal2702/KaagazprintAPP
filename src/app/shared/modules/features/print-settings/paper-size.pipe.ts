import { Pipe, PipeTransform } from '@angular/core';
import { KaagazPageType } from 'kaagaz-models';

@Pipe({
    name: 'paperSize'
})

export class PaperSizePipe implements PipeTransform {
    transform(value: KaagazPageType): string {
        return KaagazPageType[value];
    }
}