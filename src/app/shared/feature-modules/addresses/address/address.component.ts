import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { KaagazAddress } from 'kaagaz-models';

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
            addressLine1: [this.address.addressLine1 || null, []],
            addressLine2: [this.address.addressLine2 || null],
            city: [this.address.city || null],
            state: [this.address.state || null],
            pincode: [this.address.pincode || null],
            country: [this.address.country || null],
            description: [this.address.description || null],
            fullAddress: [this.address.fullAddress || null],
            type: [this.address.type || null],
        });
    }
    dismiss() { this._modalCT.dismiss(); }

    saveAddress() {

    }
}
