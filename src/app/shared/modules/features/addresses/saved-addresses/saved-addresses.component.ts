import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { KaagazAddress } from 'kaagaz-models';
import { AddressService } from 'kaagaz-services';
import { merge, Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'kaagaz-saved-addresses',
    templateUrl: './saved-addresses.component.html',
    styleUrls: ['./saved-addresses.component.scss'],
    host: { class: 'flex-col' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AddressService]
})
export class SavedAddressesComponent implements OnInit {

    loading: boolean = true;
    addresses$: Observable<KaagazAddress[]>;

    private _refresh$: Subject<void> = new Subject<void>();
    private _refreshers$: Array<Observable<void>> = [this._refresh$.asObservable()];

    @Input() selection: boolean;
    @Input() set refresh$(value: Observable<void>) {
        if (value) { this._refreshers$.push(value); }
    };
    @Output() addressSelected: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();
    constructor(private _addressSer: AddressService, private _modalCt: ModalController,
        private _cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.addresses$ = merge(...this._refreshers$).pipe(
            tap(() => this.loading = true), startWith(null),
            switchMap(() => this._addressSer.addresses()),
            tap(() => this.loading = false)
        );
    }
    refresh() { this._refresh$.next(); }
    dismiss(address: KaagazAddress) { this._modalCt.dismiss(address); }
    onAddressSelection(address: KaagazAddress) {
        this.addressSelected.emit(address); this.dismiss(address);
    }
    deleteAddress(address: KaagazAddress) {
        this.loading = true;
        this._addressSer.deleteAddress(address.addressId).subscribe(
            (success: boolean) => { if (success) { this.refresh(); } },
            (error) => { }, () => { this.loading = false; this._cdr.markForCheck(); }
        );
    }
}
