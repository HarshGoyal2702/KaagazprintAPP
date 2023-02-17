import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import { DocsHandlerModule } from 'src/app/shared/feature-modules/docs-handler/docs-handler.module';
import { PrintSettingsModule } from 'src/app/shared/feature-modules/print-settings/print-settings.module';
import { KaagazFormsFieldModule } from 'kaagaz-widgets';

@NgModule({
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, KaagazFormsFieldModule,
    OrderPageRoutingModule, DocsHandlerModule, PrintSettingsModule
  ],
  declarations: [OrderPage]
})
export class OrderPageModule { }
