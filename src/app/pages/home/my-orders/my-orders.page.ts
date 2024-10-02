import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { OrdersService } from 'kaagaz-services';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  orders: any[] = [];
  isLoading = true;

  constructor(
    private orderService: OrdersService,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    const user = JSON.parse(localStorage.getItem('user')).id
    console.log(user);
    if (user) {
      this.loadOrders(user);
    } else {
      console.error('User ID not found');
      this.isLoading = false;
    }
  }

  loadOrders(userId: string) {
    this.orderService.getUserOrders(userId).subscribe(
      (response: any) => {
        if (response && !response.error && response.data) {
          this.orders = response.data;

          console.log(response);
          this.isLoading = false
        } else {
          console.error('Error fetching orders');
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching orders', error);
        this.isLoading = false;
      }
    );
  }
}
