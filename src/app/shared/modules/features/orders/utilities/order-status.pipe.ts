import { Pipe, PipeTransform } from '@angular/core';
import { KaagazOrderStatus } from 'kaagaz-models';

@Pipe({
    name: 'orderStatus'
})

export class OrderStatusPipe implements PipeTransform {

    transform(value: KaagazOrderStatus): string {
        return KaagazOrderStatus[value];
    }
}
