import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpRequestService } from '../core/http-request.service';
import { APIURLS } from '../models/api-urls';
import { Response } from '../models/http-response';
import { User, UserRes } from '../models/user';

@Injectable()
export class LoginService {

    constructor(private _http: HttpRequestService) { }
    /**
     * Generate OTP by phonenumber.
     * 
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
            map((res: UserRes) => {
                console.log(res);
                return !res.error && res.data ? res.data : null;
            })
        );
    }
}