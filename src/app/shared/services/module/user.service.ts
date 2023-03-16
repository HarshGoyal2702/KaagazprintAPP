import { Injectable } from '@angular/core';
import { APIURLS, KaagazUserRes, KaagazUser, Response } from 'kaagaz-models';
import { CoreService, HttpRequestService } from 'kaagaz-core';
import { map, tap } from 'rxjs/operators';
import { ToastService } from 'kaagaz-services';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private _http: HttpRequestService, private _core: CoreService,
        private _toaster: ToastService) { }

    user(userId: string): Observable<KaagazUser> {
        const url = APIURLS.SAVED_ADDRESSES;
        return this._http.getResponse<KaagazUserRes>(KaagazUserRes, url, {
            params: { id: userId }
        }).pipe(map((res: KaagazUserRes) => !res.error && res.data ? res.data : null))
    }

    saveUser(address: KaagazUser): Observable<boolean> {
        const url = APIURLS.SAVE_ADDRESS;
        return this._http.postResponse<Response>(Response, url, address).pipe(
            tap((res: Response) => {
                this._toaster.runToast({ error: res.error, message: res.message, code: res.code }, { position: 'top' });
            }),
            map((res: Response) => !!res.data)
        );
    }

    deleteUser(userId: string): Observable<boolean> {
        const url = APIURLS.DELETE_ADDRESS;
        return this._http.deleteResponse<Response>(Response, url, {
            params: { id: userId }
        }).pipe(
            tap((res: Response) => {
                this._toaster.runToast({ error: res.error, message: res.message, code: res.code }, { position: 'top' });
            }),
            map((res: Response) => !!res.data)
        );
    }
}