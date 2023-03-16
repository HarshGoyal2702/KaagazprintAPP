import { Injectable } from '@angular/core';
import { APIURLS, KaagazAddresses, KaagazAddress, Response } from 'kaagaz-models';
import { CoreService, HttpRequestService } from 'kaagaz-core';
import { map, tap } from 'rxjs/operators';
import { ToastService } from 'kaagaz-services';
import { Observable } from 'rxjs';

@Injectable()
export class AddressService {

    constructor(private _http: HttpRequestService, private _core: CoreService,
        private _toaster: ToastService) { }

    address(addressId: string): Observable<KaagazAddress[]> {
        const url = APIURLS.SAVED_ADDRESSES;
        return this._http.getResponse<KaagazAddresses>(KaagazAddresses, url, {
            params: { filter: `addressId:"${addressId}"` }
        }).pipe(map((res: KaagazAddresses) => !res.error && res.data ? res.data : []))
    }

    addresses(userId: number = this._core.user.userId): Observable<KaagazAddress[]> {
        const url = APIURLS.SAVED_ADDRESSES;
        return this._http.getResponse<KaagazAddresses>(KaagazAddresses, url, {
            params: { filter: `userId:"${userId}"` }
        }).pipe(map((res: KaagazAddresses) => !res.error && res.data ? res.data : []))
    }

    saveAddress(address: KaagazAddress): Observable<KaagazAddress> {
        const url = APIURLS.SAVE_ADDRESS;
        return this._http.postResponse<Response>(Response, url, address).pipe(
            tap((res: Response) => {
                this._toaster.runToast({ error: res.error, message: res.message, code: res.code }, { position: 'top' });
            }),
            map((res: Response) => !res.error && res.data ? res.data : null)
        );
    }

    deleteAddress(addressId: string): Observable<boolean> {
        const url = APIURLS.DELETE_ADDRESS;
        return this._http.deleteResponse<Response>(Response, url, {
            params: { id: addressId }
        }).pipe(
            tap((res: Response) => {
                this._toaster.runToast({ error: res.error, message: res.message, code: res.code }, { position: 'top' });
            }),
            map((res: Response) => !!res.data)
        );
    }
}