import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docType'
})

export class DocTypePipe implements PipeTransform {
  transform(value: string): any {
    return value ? value.substring((value.lastIndexOf('.') + 1)).toLowerCase() : '';
  }
}