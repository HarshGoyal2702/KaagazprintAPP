import { Component, OnInit } from '@angular/core';
import { KaagazOrder } from 'kaagaz-models';
import { OrdersService } from 'kaagaz-services';

@Component({
  selector: 'kaagaz-review-order',
  templateUrl: './review-order.page.html',
  styleUrls: ['./review-order.page.scss'],
})
export class ReviewOrderPage implements OnInit {

  order$: Promise<KaagazOrder>;
  constructor(private _ordersSer: OrdersService) { }

  ngOnInit() {
    this.order$ = this._ordersSer.getCurrentOrder();
  }

}
