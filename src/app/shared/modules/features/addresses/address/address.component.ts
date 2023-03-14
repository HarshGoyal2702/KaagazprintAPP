import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddressType, KaagazAddress } from 'kaagaz-models';

@Component({
    selector: 'kaagaz-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {

    addressFG: FormGroup;
    @Input() address: KaagazAddress;
    constructor(private _fb: FormBuilder, private _modalCT: ModalController) { }

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
        });
    }

    dismiss(address: KaagazAddress = null) { this._modalCT.dismiss(address); }

    saveAddress() { this.dismiss(this.addressFG.getRawValue()); }

}
