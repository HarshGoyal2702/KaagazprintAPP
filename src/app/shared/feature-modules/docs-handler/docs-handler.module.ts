import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocPickerComponent } from './doc-picker/doc-picker.component';
import { IonicModule } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { DocRendererComponent } from './doc-renderer/doc-renderer.component';

@NgModule({
  declarations: [DocPickerComponent, DocRendererComponent],
  imports: [
    CommonModule, IonicModule
  ],
  providers: [File, ImagePicker],
  exports: [DocPickerComponent, DocRendererComponent]
})
export class DocsHandlerModule { }
