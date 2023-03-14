import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter,
    Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import { KaagazDocument } from 'kaagaz-models';
import { delay } from 'rxjs/operators';
import { DocHandlerService } from '../services/doc-handler.service';

@Component({
    selector: 'kaagaz-doc-renderer',
    templateUrl: './doc-renderer.component.html',
    styleUrls: ['./doc-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DocHandlerService]
})
export class DocRendererComponent implements OnInit, OnChanges {

    loading: boolean;
    @Input() file: KaagazDocument;
    @Output() fileUploaded: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    constructor(private _files: DocHandlerService, private _cdr: ChangeDetectorRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.file.fileUrl && this.file.localUrl) { this.upload(); }
        else { this._download(); }
    }
    ngOnInit() { }

    private _markAsFail() { this.file.fail = true; this.file.progress = 0; }

    upload() {
        this.loading = true; this._cdr.markForCheck();
        this._files.upload(this.file.formData).subscribe(
            (res: number | { url: string, numberOfPage: number }) => {
                if (typeof res === 'number') { this.file.progress = res; }
                else if (res && typeof res === 'object') {
                    this.file.fileUrl = res.url;
                    this.file.numberOfPage = res.numberOfPage;
                    this.fileUploaded.emit(this.file);
                } else { this._markAsFail(); }
                this._cdr.markForCheck();
            }, (error) => { this._markAsFail(); },
            () => {
                this.loading = false; this._cdr.markForCheck();
                console.log('file -', this.file);
            }
        );
    }
    private _download() {

    }
}
