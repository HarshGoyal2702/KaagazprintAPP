import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KaagazUser } from 'kaagaz-models';
import { UserService } from 'kaagaz-services';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'kaagaz-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    host: { class: 'container full-height' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserService]
})
export class UserProfileComponent implements OnInit {

    loading: boolean;
    userProfileFG: FormGroup;
    private _refreshAddresses$: Subject<void> = new Subject<void>();

    @Input() user: KaagazUser;
    get refreshAddresses$(): Observable<void> { return this._refreshAddresses$.asObservable(); }
    constructor(private _fb: FormBuilder, private _userSer: UserService,
        public hostEL: ElementRef, private _cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.userProfileFG = this._fb.group({
            image: [this.user.image || ''],
            name: [this.user.name || '', [Validators.required]],
            phoneNumber: [{ value: this.user.phoneNumber || '', disabled: true }, [Validators.required]],
            role: [this.user.role || ''],
            userId: [this.user.userId || ''],
            emailId: [this.user.emailId || '', [Validators.required, Validators.email]],
        });
    }
    refreshAddresses() { this._refreshAddresses$.next(); }
    saveProfile() {
        this.loading = true;
        this._userSer.saveUser(this.userProfileFG.getRawValue()).subscribe(
            (success: boolean) => { this.loading = false; this._cdr.markForCheck(); },
        );
    }
}
