import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressesModule } from '../addresses/addresses.module';
import { DocsHandlerModule } from '../docs-handler/docs-handler.module';
import { SpinnerModule } from '../../widgets/spinner/spinner.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, DocsHandlerModule, AddressesModule, SpinnerModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
