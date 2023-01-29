import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsHandlerModule } from '../docs-handler/docs-handler.module';
import { AddressesModule } from '../addresses/addresses.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, DocsHandlerModule, AddressesModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
