import { Pipe, PipeTransform } from '@angular/core';
import { kaagazPageLayout } from 'kaagaz-models';

@Pipe({
    name: 'pageLayout'
})

export class PageLayoutPipe implements PipeTransform {
    transform(value: kaagazPageLayout): string {
        return kaagazPageLayout[value];
    }
}