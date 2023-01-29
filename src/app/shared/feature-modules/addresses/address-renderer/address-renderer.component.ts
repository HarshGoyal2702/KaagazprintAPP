import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KaagazAddress } from 'kaagaz-models';

@Component({
    selector: 'kaagaz-address-renderer',
    templateUrl: './address-renderer.component.html',
    styleUrls: ['./address-renderer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressRendererComponent implements OnInit {

    @Input() address: KaagazAddress;

    @Output() addressDelete: EventEmitter<void> = new EventEmitter<void>();
    @Output() addressChange: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();

    constructor(public hostEL: ElementRef) { }

    ngOnInit() { }

    deleteAdd() { this.addressDelete.emit(); }
    onAddressChange(address: KaagazAddress) {
        console.log(address);
        this.address = address;
        this.addressChange.emit(this.address);
    }
}
