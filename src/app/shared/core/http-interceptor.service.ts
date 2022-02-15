import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { CommonService } from './common.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()

export class HeaderInterceptorService implements HttpInterceptor {
    constructor(private _router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(tap((res: any) => {
            // if (res instanceof HttpResponse) {
            //     if (res.body.error && res.body.code === '401') {
            //         // this._comSer.clearLocalStorage();
            //         this._router.navigate(['login']);
            //     }

            // }
            return res;
        }, (error) => {
        }));
    }
}
