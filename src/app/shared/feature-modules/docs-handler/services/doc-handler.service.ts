import { HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { HttpRequestService } from 'src/app/shared/core/http-request.service';
import { APIURLS } from 'src/app/shared/models/api-urls';
import { Response } from 'src/app/shared/models/http-response';

@Injectable()
export class DocHandlerService {

    constructor(@Optional() private _http: HttpRequestService, private _toast: ToastController) { }
    upload(fd: FormData) {
        return this._http.httpUploadLDRequest<Response>(Response, 'POST', APIURLS.UPLOAD_FILE,
            fd, { reportProgress: true, headers: new HttpHeaders({}) }).pipe(
                map((res: number | Response) => {
                    if (typeof res === 'number') { return res; }
                    else {
                        if (!(<Response>res).error) { return (<Response>res).data; }
                        else {
                            this._toast.create({
                                message: 'Some Issue in File Uploading, please try again later....',
                                duration: 3000, position: 'top', color: 'danger'
                            }).then(el => el.present());
                            return null;
                        }
                    }
                })
            );
    }

}