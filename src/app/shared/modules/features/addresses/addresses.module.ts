import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressAnchorDirective } from './address-anchor.directive';
import { AddressComponent } from './address/address.component';
import { AddressRendererComponent } from './address-renderer/address-renderer.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddressAnchorDirective, AddressComponent, AddressRendererComponent
  ],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule
  ],
  exports: [AddressAnchorDirective, AddressRendererComponent]
})

export class AddressesModule { }
