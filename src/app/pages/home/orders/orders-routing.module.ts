import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '', component: OrdersPage, children: [
      { path: '', redirectTo: 'new', pathMatch: 'full' },
      { path: 'new', loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule), },
      { path: 'review', loadChildren: () => import('./review-order/review-order.module').then(m => m.ReviewOrderPageModule) }
    ]
  },  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class OrdersPageRoutingModule { }
