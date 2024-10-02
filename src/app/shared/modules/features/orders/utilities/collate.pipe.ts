import { Pipe, PipeTransform } from '@angular/core';
import { KaagazCollateType } from 'kaagaz-models';

@Pipe({
    name: 'pageCollate'
})

export class PageCollatePipe implements PipeTransform {
    transform(value: KaagazCollateType): any {
        return KaagazCollateType[value];
    }
}   