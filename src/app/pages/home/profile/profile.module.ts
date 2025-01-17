import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { UserProfileModule } from 'kaagaz-feature-modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, UserProfileModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage]
})

export class ProfilePageModule { }
