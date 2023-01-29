import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KaagazAddress, User } from 'kaagaz-models';

@Component({
    selector: 'kaagaz-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

    userProfileFG: FormGroup;

    @Input() user: User;
    constructor(private _fb: FormBuilder, public hostEL: ElementRef) { }

    ngOnInit() {
        console.log(this.user);
        this.userProfileFG = this._fb.group({
            image: [this.user.image || ''],
            name: [this.user.name || '', [Validators.required]],
            phoneNumber: [this.user.phoneNumber || '', [Validators.required]],
            role: [this.user.role || ''],
            userId: [this.user.userId || ''],
            emailId: [this.user.emailId || '', [Validators.required, Validators.email]],
            addresses: [[]]
        });
    }

    get addressesFC(): FormControl { return this.userProfileFG.get('addresses') as FormControl; }

    addAddress(address: KaagazAddress) {
        console.log(address);
        console.log(this.addressesFC);
        this.addressesFC.value.push(address);
        console.log(this.userProfileFG.getRawValue());
    }
    deleteAddress(index: number) {
        console.log('index to be deleted -', index);
        (this.addressesFC.value as []).splice(index, 1);
        console.log(this.addressesFC.value);
    }
    onAddressEdit(address: KaagazAddress, index: number) {
        this.addressesFC.value[index] = address;
    }
}
