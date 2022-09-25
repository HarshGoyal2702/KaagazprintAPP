import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
    selector: 'kaagaz-doc-renderer',
    templateUrl: './doc-renderer.component.html',
    styleUrls: ['./doc-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocRendererComponent implements OnInit {

    @Input() file: KaagazDocument;
    @Input() handleFocus: boolean;
    @Output() fileFocus: EventEmitter<void> = new EventEmitter<void>();
    @Output() fileDelete: EventEmitter<void> = new EventEmitter<void>();
    constructor() { }

    ngOnInit() { console.log(this.file); }
    selectFile() {
        this.file.focus = !this.file.focus;
        this.fileFocus.emit();
    }
    deleteFile() { this.fileDelete.emit(); }
}
