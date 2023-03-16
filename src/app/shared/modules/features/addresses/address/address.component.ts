import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CoreService } from 'kaagaz-core';
import { AddressType, KaagazAddress } from 'kaagaz-models';
import { AddressService } from 'kaagaz-services';

@Component({
    selector: 'kaagaz-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AddressService]
})
export class AddressComponent implements OnInit {

    loading: boolean;
    addressFG: FormGroup;
    @Input() address: KaagazAddress;
    constructor(private _core: CoreService, private _fb: FormBuilder, private _addressSer: AddressService,
        private _modalCT: ModalController, private _cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.addressFG = this._fb.group({
            addressLine1: [this.address.addressLine1 || null, [Validators.required]],
            addressLine2: [this.address.addressLine2 || null, [Validators.required]],
            city: [this.address.city || null, [Validators.required]],
            state: [this.address.state || null, [Validators.required]],
            pincode: [this.address.pincode || null, [Validators.required]],
            country: [this.address.country || null, [Validators.required]],
            description: [this.address.description || null],
            fullAddress: [this.address.fullAddress || null],
            type: [this.address.type || AddressType.HOME],
            addressId: [this.address.addressId || null],
            userId: [this._core.user.userId]
        });
    }

    dismiss(address: KaagazAddress = null) { this._modalCT.dismiss(address); }

    saveAddress() {
        this.loading = true;
        this._addressSer.saveAddress(this.addressFG.getRawValue()).subscribe(
            (address: KaagazAddress) => { if (address) { this.dismiss(address); } },
            (error) => { }, () => { this.loading = false; this._cdr.markForCheck(); }
        );
    }
}
