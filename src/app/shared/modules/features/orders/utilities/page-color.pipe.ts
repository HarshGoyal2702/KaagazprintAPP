import { Pipe, PipeTransform } from '@angular/core';
import { KaagazPageColor } from 'kaagaz-models';

@Pipe({
  name: 'pageColor'
})
export class PageColorPipe implements PipeTransform {

  transform(value: KaagazPageColor): string {
    return KaagazPageColor[value];
}
}
