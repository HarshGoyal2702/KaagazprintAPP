import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { KaagazOrder } from 'kaagaz-models';
import { Observable } from 'rxjs';

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

    constructor() { }
    ngOnDestroy(): void {
    }
    ngOnInit() {
    }

    onFileUploaded(value: any) {
        console.log('on file uploading completion -', this.order.fileToPrint);
    }
}
