import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaagazFormsFieldComponent } from './kaagaz-forms-field/kaagaz-forms-field.component';

@NgModule({
  declarations: [KaagazFormsFieldComponent],
  imports: [
    CommonModule
  ],
  exports: [KaagazFormsFieldComponent]
})

export class KaagazFormsFieldModule { }
