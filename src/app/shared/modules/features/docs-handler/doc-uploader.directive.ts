import { ChangeDetectorRef, Directive, EventEmitter, HostBinding, Input, Optional, Output } from '@angular/core';
import { KaagazDocument } from 'kaagaz-models';
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

    ngOnInit() {
        if (!this.file.fileUrl) {
            this._upload(this.file || this._host.file);
        }
    }

    @HostBinding('class.loading') get isUploaded() { return !(!!this.file.fileUrl); }

    private _upload(file: KaagazDocument) {
        this._files.upload(file.formData).subscribe(
            (res: number | { url: string, numberOfPage: number }) => {
                if (typeof res === 'number') {
                    file.progress = res;
                    this._cdr.markForCheck();
                }
                else {
                    file.fileUrl = res.url;
                    file.numberOfPage = res.numberOfPage;
                    this._cdr.markForCheck();
                    this.fileUploaded.emit(file);
                }
            }
        );
    }
}
