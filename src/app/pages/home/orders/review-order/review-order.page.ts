import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { KaagazAddress, KaagazOrder, KaagazOrderBill } from 'kaagaz-models';
import { OrdersService } from 'kaagaz-services';

@Component({
    selector: 'kaagaz-review-order',
    templateUrl: './review-order.page.html',
    styleUrls: ['./review-order.page.scss'],
})
export class ReviewOrderPage implements OnInit {

    order$: Promise<KaagazOrder>;
    constructor(private _ordersSer: OrdersService, private _menu: MenuController,
        public hostEL: ElementRef,private router:Router) { }

    ngOnInit() {
        this.order$ = this._ordersSer.getCurrentOrder();
    }
    toggleMenu() { this._menu.toggle(); }
    onAddressSelection(address: KaagazAddress) {
        console.log(address);
    }
    payBill(order: KaagazOrder, bill: KaagazOrderBill) {
        order.bill = bill;
        console.log(order);
        console.log(bill)
        this.router.navigate(['/payment'], { 
            state: { order, bill } 
        });
    }
}
