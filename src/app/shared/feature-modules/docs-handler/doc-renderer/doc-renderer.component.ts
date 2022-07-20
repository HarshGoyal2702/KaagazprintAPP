import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
    selector: 'kaagaz-doc-renderer',
    templateUrl: './doc-renderer.component.html',
    styleUrls: ['./doc-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocRendererComponent implements OnInit {

    @Input() doc: KaagazDocument;
    constructor() { }

    ngOnInit() {
        console.log(this.doc);
    }

}
