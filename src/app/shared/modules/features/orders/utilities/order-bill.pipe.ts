import { Pipe, PipeTransform } from '@angular/core';
import { KaagazOrderBill } from 'kaagaz-models';

@Pipe({
    name: 'orderBill'
})

export class OrderBillPipe implements PipeTransform {
    transform(numberOfPages: number, numberOfCopies: number = 1, pricePerPage: number = 1.5): any {
        return new KaagazOrderBill(pricePerPage * numberOfPages * numberOfCopies);
    }
}