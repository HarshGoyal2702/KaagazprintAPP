import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ReviewOrderPageRoutingModule } from './review-order-routing.module';

import { ReviewOrderPage } from './review-order.page';
import { AddressesModule, OrdersModule, PrintSettingsModule } from 'kaagaz-feature-modules';

@NgModule({
  imports: [
    CommonModule,
    IonicModule, PrintSettingsModule, AddressesModule,
    ReviewOrderPageRoutingModule, OrdersModule
  ],
  declarations: [ReviewOrderPage]
})
export class ReviewOrderPageModule { }
