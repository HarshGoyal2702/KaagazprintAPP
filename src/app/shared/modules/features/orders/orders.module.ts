import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRendererComponent } from './order-renderer/order-renderer.component';
import { DocsHandlerModule } from 'kaagaz-feature-modules';
import { IonicModule } from '@ionic/angular';
import { PageCollatePipe } from './utilities/collate.pipe';
import { PrintTypePipe } from './utilities/print-type.pipe';
import { PageLayoutPipe } from './utilities/page-layout.pipe';
import { PageOrientationPipe } from './utilities/orientation.pipe';
import { PaperSizePipe } from './utilities/paper-size.pipe';
import { OrderStatusPipe } from './utilities/order-status.pipe';
import { OrderBillPipe } from './utilities/order-bill.pipe';
import { PageColorPipe } from './utilities/page-color.pipe';



@NgModule({
  declarations: [OrderRendererComponent, PageCollatePipe, PrintTypePipe, PageLayoutPipe,
    PageOrientationPipe, PaperSizePipe, OrderStatusPipe, OrderBillPipe, PageColorPipe],
  imports: [
    CommonModule, DocsHandlerModule, IonicModule
  ],
  exports: [OrderRendererComponent, PageCollatePipe, PrintTypePipe, PageLayoutPipe,
    PageOrientationPipe, PaperSizePipe, OrderStatusPipe, OrderBillPipe,PageColorPipe]
})
export class OrdersModule { }
