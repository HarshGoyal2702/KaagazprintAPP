import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { KaagazOrder } from 'kaagaz-models';

@Component({
    selector: 'kaagaz-order-renderer',
    templateUrl: './order-renderer.component.html',
    styleUrls: ['./order-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OrderRendererComponent implements OnInit, OnDestroy {

    @Input() doUpload: boolean;
    @Input() doDownload: boolean;
    @Input() order: KaagazOrder;

    @Output() docRendered: EventEmitter<void> = new EventEmitter<void>();
    constructor() { }
    ngOnDestroy(): void { }

    ngOnInit() { }

    onFileUploaded(value: any) { this.docRendered.emit(); }
}
