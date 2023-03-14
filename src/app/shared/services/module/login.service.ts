import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpRequestService } from 'kaagaz-core';
import { User, UserRes, APIURLS, Response } from 'kaagaz-models';
import { ToastService } from 'kaagaz-services';

@Injectable()
export class LoginService {

    constructor(private _http: HttpRequestService, private _toastSer: ToastService) { }
    /**
     * Generate OTP by phonenumber.
     * @phoneNumber required to generate the OTP.
     */
    generateOTP(phoneNumber: string): Observable<boolean> {
        const url = APIURLS.GENERATE_OTP_BY_PHONE_NUMBER;
        return this._http.postResponse<Response<boolean>>(Response, url, { phoneNumber: phoneNumber }).pipe(
            map((res: Response<boolean>) => res.data)
        );
    }
    /**
     * Validate OTP by phoneNumber, and entered otp by user.
     * @param phoneNumber required
     * @param otp required
     */
    verifyOTP(phoneNumber: string, otp: string): Observable<User> {
        const body = { otp: otp, phoneNumber: phoneNumber }
        const url = APIURLS.VERIFY_OTP;
        return this._http.postResponse<UserRes>(UserRes, url, body).pipe(
            tap((res: UserRes) => {
                this._toastSer.runToast({
                    error: res.error, code: res.code,
                    message: `${res.error ? `${res.message}!! Login Failed, Please try again..` : 'Logged In Successfully!!'}`
                });
            }),
            map((res: UserRes) => { return !res.error && res.data ? res.data : null; })
        );
    }
}