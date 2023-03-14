import { Pipe, PipeTransform } from '@angular/core';
import { KaagazPageOrientation } from 'kaagaz-models';

@Pipe({
    name: 'pageOrientation'
})

export class PageOrientationPipe implements PipeTransform {
    transform(value: KaagazPageOrientation): string {
        return KaagazPageOrientation[value];
    }
}