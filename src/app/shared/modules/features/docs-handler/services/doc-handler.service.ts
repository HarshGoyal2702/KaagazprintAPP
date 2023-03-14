import { HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastService } from 'kaagaz-services';
import { HttpRequestService } from 'kaagaz-core';
import { Response, APIURLS, KaagazDocument } from 'kaagaz-models';

@Injectable()

export class DocHandlerService {

    constructor(@Optional() private _http: HttpRequestService, private _toast: ToastService) { }

    upload(fd: FormData): Observable<{ url: string, numberOfPage: number }> {
        return this._http.httpUploadLDRequest<Response>(Response, 'POST', APIURLS.UPLOAD_FILE,
            fd, { reportProgress: true, headers: new HttpHeaders({}) }).pipe(
                map((res: number | Response<KaagazDocument>) => {
                    if (typeof res === 'number') { return res; }
                    else {
                        if (!(<Response>res).error) { return (<Response>res).data; }
                        else {
                            this._toast.runToast({
                                message: 'Some Issue in File Uploading, please try again later....',
                                error: res.error, code: res.code
                            }, { duration: 3000, position: 'top', color: 'danger' });
                            return null;
                        }
                    }
                })
            );
    }

}
