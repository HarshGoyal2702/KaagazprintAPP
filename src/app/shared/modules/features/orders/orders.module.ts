import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRendererComponent } from './order-renderer/order-renderer.component';
import { DocsHandlerModule } from 'kaagaz-feature-modules';



@NgModule({
  declarations: [OrderRendererComponent],
  imports: [
    CommonModule, DocsHandlerModule
  ],
  exports: [OrderRendererComponent]
})
export class OrdersModule { }
