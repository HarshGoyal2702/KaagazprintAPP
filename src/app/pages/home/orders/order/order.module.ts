import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import { KaagazFormsFieldModule } from 'kaagaz-widgets';
import { DocsHandlerModule, OrdersModule, PrintSettingsModule } from 'kaagaz-feature-modules';

@NgModule({
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, KaagazFormsFieldModule,
    OrderPageRoutingModule, DocsHandlerModule, PrintSettingsModule, OrdersModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule { }
