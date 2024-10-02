import { Injectable } from '@angular/core';
import { OrdersPageModule } from 'src/app/pages/home/orders/orders.module';
import { StorageService } from 'kaagaz-core';
import { APIURLS, KaagazOrder, KaagazStorageKeys } from 'kaagaz-models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: OrdersPageModule })

export class OrdersService {

    private _currentOrder: KaagazOrder;

    constructor(private _storage: StorageService,private http:HttpClient) { }

    async getCurrentOrder(): Promise<KaagazOrder> {
        return this._currentOrder ? this._currentOrder :
            (this._currentOrder = await this._storage.getItem<KaagazOrder>(KaagazStorageKeys.CURRENT_ORDER, KaagazOrder),
                this._currentOrder);
    }

    setCurrentOrder(order: KaagazOrder) {
        this._currentOrder = order;
        this._storage.setItem<KaagazOrder>(KaagazStorageKeys.CURRENT_ORDER, this._currentOrder);
    }

    saveOrder(order: KaagazOrder) {

    }


    getUserOrders(userId: string): Observable<any> {
        console.log(userId,typeof(userId))
        const url = `${APIURLS.ALL_ORDER}?filter=userId:"${userId}"`;
        console.log(url)

        return this.http.get(url);
      }
}
