import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'kaagaz-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
