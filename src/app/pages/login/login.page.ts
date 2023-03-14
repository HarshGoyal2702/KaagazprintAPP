import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { CoreService } from 'kaagaz-core';
import { User } from 'kaagaz-models';
import { LoginService, ToastService } from 'kaagaz-services';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    providers: [LoginService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit, AfterViewInit {

    loader: boolean;
    @ViewChild(IonSlides) private _slides: IonSlides;
    otp: FormControl = new FormControl('', [Validators.required,
    Validators.maxLength(4), Validators.minLength(4)]);
    phoneNumber: FormControl = new FormControl('', [Validators.required,
    Validators.maxLength(10), Validators.minLength(10)]);
    constructor(private _login: LoginService, private _core: CoreService,
        private _router: NavController, private _cdr: ChangeDetectorRef) { }

    ngOnInit() { }
    ngAfterViewInit() { this._slides.lockSwipes(true); }
    reset() {
        this.otp.reset(); this.phoneNumber.reset();
        this._slides.lockSwipes(false); this._slides.slidePrev();
        this._slides.lockSwipes(true);
    }
    login() {
        this.loader = true;
        this._login.generateOTP(this.phoneNumber.value).subscribe(
            (success: boolean) => {
                if (success) {
                    this._slides.lockSwipes(false); this._slides.slideNext();
                    this._slides.lockSwipes(true);
                }
            },
            (error) => { },
            () => { this.loader = false; this._cdr.markForCheck(); }
        );
    }
    verifyOTP() {
        this.loader = true;
        this._login.verifyOTP(this.phoneNumber.value, this.otp.value).subscribe(
            (user: User) => {
                if (user) {
                    this._core.user = user;
                    this._core.authToken = user.loginToken;
                    this._router.navigateRoot(['/kaagaz']);
                } else {
                    this.otp.reset();
                }
            },
            (error) => { },
            () => { this.loader = false; }
        );
    }
}
