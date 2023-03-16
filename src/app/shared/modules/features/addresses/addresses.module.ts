import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressAnchorDirective } from './address-anchor.directive';
import { AddressComponent } from './address/address.component';
import { AddressRendererComponent } from './address-renderer/address-renderer.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'kaagaz-widgets';
import { SavedAddressesComponent } from './saved-addresses/saved-addresses.component';
import { AddressPickerDirective } from './address-picker.directive';



@NgModule({
  declarations: [
    AddressAnchorDirective, AddressComponent, AddressRendererComponent, SavedAddressesComponent, AddressPickerDirective
  ],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, SpinnerModule
  ],
  exports: [AddressAnchorDirective, AddressRendererComponent, SavedAddressesComponent, AddressPickerDirective]
})

export class AddressesModule { }
