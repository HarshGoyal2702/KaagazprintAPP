import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import { DocsHandlerModule } from 'src/app/shared/feature-modules/docs-handler/docs-handler.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule, DocsHandlerModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule { }
