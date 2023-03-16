import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KaagazAddress } from 'kaagaz-models';

@Component({
    selector: 'kaagaz-address-renderer',
    templateUrl: './address-renderer.component.html',
    styleUrls: ['./address-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddressRendererComponent implements OnInit {

    @Input() select: boolean;
    @Input() address: KaagazAddress;

    @Output() addressDelete: EventEmitter<void> = new EventEmitter<void>();
    @Output() addressChange: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();
    @Output() addressSelected: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();

    constructor(public hostEL: ElementRef) { }

    ngOnInit() {
        console.log(this.address);
    }

    deleteAdd() { this.addressDelete.emit(); }
    selectAdd() { this.addressSelected.emit(); }
    onAddressChange(address: KaagazAddress) {
        this.addressChange.emit(this.address);
    }
}
