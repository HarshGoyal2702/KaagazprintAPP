import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopiesComponent } from './copies/copies.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BindingLocationComponent } from './binding-location/binding-location.component';
import { CollateTypeComponent } from './collate-type/collate-type.component';
import { OrientationComponent } from './orientation/orientation.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageSizeComponent } from './page-size/page-size.component';
import { PagesComponent } from './pages/pages.component';
import { PrintSideTypeComponent } from './print-side-type/print-side-type.component';
import { PageCollatePipe } from './collate.pipe';
import { PrintTypePipe } from './print-type.pipe';
import { PageLayoutPipe } from './page-layout.pipe';
import { PageOrientationPipe } from './orientation.pipe';
import { PaperSizePipe } from './paper-size.pipe';

const declarations: Array<Type<any> | any[]> = [CopiesComponent, BindingLocationComponent, CollateTypeComponent, OrientationComponent,
  PageLayoutComponent, PageSizeComponent, PagesComponent, PrintSideTypeComponent, PageCollatePipe, PrintTypePipe, PageLayoutPipe,
  PageOrientationPipe, PaperSizePipe]

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule
  ],
  exports: declarations
})

export class PrintSettingsModule { }