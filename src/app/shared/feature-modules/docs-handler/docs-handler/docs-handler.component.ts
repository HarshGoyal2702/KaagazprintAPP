import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';
@Component({
    selector: 'kaagaz-docs-handler',
    templateUrl: './docs-handler.component.html',
    styleUrls: ['./docs-handler.component.scss'],
    host: { class: 'flex-col' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DocsHandlerComponent), multi: true, }
    ]
})
export class DocsHandlerComponent implements OnInit {

    onTouched: () => {};
    onChange: (_: KaagazDocument[]) => {};

    @Input() multiple: boolean;
    @Input() savedFiles: KaagazDocument[] = [];
    @Output() fileReady: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    @Output() fileFocus: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    @Output() filesReady: EventEmitter<KaagazDocument[]> = new EventEmitter<KaagazDocument[]>();
    @Output() fileDeleted: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    constructor() { }

    ngOnInit() { }
    onFileSelection(file: KaagazDocument) {
        if (!this.multiple) { this.savedFiles.length = 0; }
        this.savedFiles.push(file);
    }
    onServerUrlFetched(file: KaagazDocument, fileIndex: number) {
        this.fileReady.emit(file);
        if (this.multiple && this.savedFiles.every((_file: KaagazDocument) => !!_file.fileUrl)) {
            this.filesReady.emit(this.savedFiles);
        }
        if (this.onChange) { this.onChange(this.savedFiles); }
    }

    onFileFocus(file: KaagazDocument) { this.fileFocus.emit(file); }
    onFileDelete(file: KaagazDocument, index: number) {
        this.savedFiles.splice(this._findFile(file.fileName), 1);
        this.fileDeleted.emit(file);
        if (this.onChange) { this.onChange(this.savedFiles); }
    }
    private _findFile(name: string): number {
        for (let i = 0; i < this.savedFiles.length; i++) {
            if (this.savedFiles[i].fileName === name) {
                return i;
            }
        }
        return -1;
    }
    writeValue(value: KaagazDocument[]) { this.savedFiles = value; }

    registerOnChange(callback: (_: any) => {}) { this.onChange = callback; }

    registerOnTouched(callback: () => {}) { this.onTouched = callback; }

}
