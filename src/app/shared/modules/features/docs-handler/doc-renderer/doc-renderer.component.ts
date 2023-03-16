import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter,
    Input, OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';
import { KaagazDocument } from 'kaagaz-models';
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
        console.log('ng on changes of doc renderer -', changes);
    }
    ngOnInit() { }

    private _markAsFail() { this.file.fail = true; this.file.progress = 0; }

    upload() {
        this.loading = true; this._cdr.markForCheck();
        this._files.upload(this.file.formData).subscribe(
            (res: number | KaagazDocument) => {
                if (typeof res === 'number') { this.file.fail = false; this.file.progress = res; }
                else if (res && typeof res === 'object') {
                    this.file.fileUrl = res.fileUrl;
                    this.file.fail = false;
                    this.file.numberOfPage = res.numberOfPage;
                } else { this._markAsFail(); }
                this._cdr.markForCheck();
            }, (error) => { this._markAsFail(); },
            () => {
                this.loading = false;
                this.file.formData = null;
                this.fileUploaded.emit(this.file);
                this._cdr.markForCheck();
            }
        );
    }
    private _download() {

    }
}
