import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocPickerComponent } from './doc-picker/doc-picker.component';
import { IonicModule } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { DocRendererComponent } from './doc-renderer/doc-renderer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DocUploaderDirective } from './doc-uploader.directive';
import { DocsHandlerComponent } from './docs-handler/docs-handler.component';
import { DocsOpenerComponent } from './docs-opener/docs-opener.component';
import { MatIconModule } from '@angular/material/icon';
import { DocTypePipe } from './docs-type.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [DocsHandlerComponent, DocsOpenerComponent, DocPickerComponent, DocRendererComponent, DocUploaderDirective, DocTypePipe],
  imports: [
    CommonModule, IonicModule, MatProgressSpinnerModule, MatIconModule, PdfViewerModule
  ],
  providers: [File, ImagePicker],
  exports: [DocsHandlerComponent, DocsOpenerComponent, DocPickerComponent, DocRendererComponent, DocUploaderDirective, DocTypePipe]
})
export class DocsHandlerModule { }
