import { ChangeDetectorRef, Directive, EventEmitter, HostBinding, Input, Optional, Output } from '@angular/core';
import { KaagazDocument } from '../../models/kaagaz-document';
import { DocRendererComponent } from './doc-renderer/doc-renderer.component';
import { DocHandlerService } from './services/doc-handler.service';

@Directive({
    selector: '[kaagazDocUploader]',
    providers: [DocHandlerService]
})

export class DocUploaderDirective {

    @Input() file: KaagazDocument;
    @Output() fileUploaded: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    constructor(@Optional() private _host: DocRendererComponent,
        private _files: DocHandlerService, private _cdr: ChangeDetectorRef) { }

    ngOnInit() { console.log('uploading directive'); if (!this.file.fileUrl) { this._upload(this.file || this._host.file); } }

    @HostBinding('class.loading') get isUploaded() { return !(!!this.file.fileUrl); }

    private _upload(file: KaagazDocument) {
        console.log('uploading file');
        this._files.upload(file.formData).subscribe(
            (res: any) => {
                if (typeof res === 'number') {
                    console.log('uploading progress');
                    file.progress = res;
                    this._cdr.markForCheck();
                }
                else {
                    console.log('file uploaded', res);
                    file.fileUrl = res;
                    this._cdr.markForCheck();
                    this.fileUploaded.emit(file);
                }
            }
        );
    }
}
