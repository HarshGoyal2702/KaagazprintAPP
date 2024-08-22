import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { OrdersService } from 'kaagaz-services';
import { OrdersModule } from 'kaagaz-feature-modules';
import { KaagazOrder } from 'kaagaz-models';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule, OrdersModule
  ],
  providers:[OrdersService,KaagazOrder],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
