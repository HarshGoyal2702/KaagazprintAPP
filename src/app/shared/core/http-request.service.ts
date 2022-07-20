import { Injectable, SkipSelf, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, mergeMap, retry } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { FileResponse, Response } from '../models/http-response';

export function create<T>(c: { new(...arg: any[]): T; }): T {
    return new c();
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'roleType': '1'
    }),
    observe: 'body',
    reportProgress: false,
    responseType: 'json',
    withCredentials: false,
};

export type ClassType<T> = {
    new(...arg: any[]): T;
}

@Injectable()
export class HttpRequestService {
    constructor(@Optional() @SkipSelf() private _isExist: HttpRequestService,
        private _http: HttpClient) {
        if (this._isExist) {
            throw new Error('HttpRequestService is already imported, should be imported in App Module only...');
        }
    }
    httpRequest<R>(classType: ClassType<R>, methodType: string,
        url: string, body: any, httpOpt?: any): Observable<HttpEvent<R> | R> {
        const req = new HttpRequest<R>(methodType, url, body, { ...httpOptions, ...httpOpt });
        /** 
         * @example 
         * this request method is for events, does not effect passing {observe: 'body'}
         * always return events if reportProgress: true, use other overloaded methods of request if observing 'body' & 'response' 
         */
        return this._http.request<R>(req).pipe(
            catchError(this.handleError.bind(this)),
            map((res: HttpEvent<R>) => {
                if (res.type === HttpEventType.Response) {
                    const resObj = plainToClass(classType, res.body);
                    return resObj;
                }
                return res;
            })
        );
    }
    httpDownLDRequest<R>(classType: ClassType<R>, methodType: string,
        url: string, body: any, httpOpt?: any): Observable<number | R> {
        const req = new HttpRequest<R>(methodType, url, body, { ...httpOptions, ...httpOpt });
        return this._http.request<R>(req).pipe(
            catchError(this.handleError.bind(this)),
            map((res: HttpEvent<R>) => {
                if (res.type === HttpEventType.Response) {
                    const resObj = plainToClass(classType, res.body);
                    return resObj;
                } else if (res.type === HttpEventType.DownloadProgress) {
                    const percValue = (res.loaded / res.total) * 100;
                    return percValue;
                }
            })
        );
    }
    httpUploadLDRequest<R>(classType: ClassType<R>, methodType: string,
        url: string, body: any, httpOpt?: any): Observable<number | R> {
        const req = new HttpRequest<R>(methodType, url, body, { ...httpOptions, ...httpOpt });
        return this._http.request<R>(req).pipe(
            catchError(this.handleError.bind(this)),
            mergeMap((res: HttpEvent<R>) => {
                if (res.type === HttpEventType.Response) {
                    const resObj = plainToClass(classType, res.body);
                    return of(resObj);
                } else if (res.type === HttpEventType.UploadProgress) {
                    const percValue = (res.loaded / res.total) * 100;
                    return of(percValue);
                }
                return EMPTY;
            })
        );
    }
    download(methodType: string,
        url: string, body: any, httpOpt?: any): Observable<number | FileResponse | never> {
        const req = new HttpRequest(methodType, url, body, { ...httpOptions, ...httpOpt });
        return this._http.request(req).pipe(
            catchError(this.handleError.bind(this)),
            mergeMap((res: HttpEvent<any>) => {
                if (res.type === HttpEventType.Response) {
                    return of(new FileResponse(false, 'Success', null, res.body));
                } else if (res.type === HttpEventType.DownloadProgress) {
                    const percValue = (res.loaded / res.total) * 100;
                    return of(percValue);
                } else if (res instanceof Response) {
                    return of(res);
                } return EMPTY;
            }), retry(1)
        );
    }
    postResponse<R>(classType: ClassType<R>, url: string, body: any, httpOpt?: any): Observable<R> {
        /**
         * @example
         * use { observe: 'events', reportProgress: true }, if want to emit events.
         */
        return this._http.post<R>(url, body, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                const resObj = plainToClass(classType, res);
                return resObj;
            })
        );
    }
    putResponse<R>(classType: ClassType<R>, url: string, body: any, httpOpt?: any): Observable<R> {
        /**
         * @example
         * use { observe: 'events', reportProgress: true }, if want to emit events.
         */
        return this._http.put<R>(url, body, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                const resObj = plainToClass(classType, res);
                return resObj;
            })
        );
    }
    patchResponse<R>(classType: ClassType<R>, url: string, body: any, httpOpt?: any): Observable<R> {
        /**
         * @example
         * use { observe: 'events', reportProgress: true }, if want to emit events.
         */
        return this._http.patch<R>(url, body, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                const resObj = plainToClass(classType, res);
                return resObj;
            })
        );
    }
    deleteResponse<R>(classType: ClassType<R>, url: string, httpOpt?: any): Observable<R> {
        /**
         * @example
         * use { observe: 'events', reportProgress: true }, if want to emit events.
         */
        return this._http.delete<R>(url, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                const resObj = plainToClass(classType, res);
                return resObj;
            })
        );
    }
    getResponse<R>(classType: ClassType<R>, url: string, httpOpt?: any): Observable<R> {
        return this._http.get<R>(url, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                const resObj = plainToClass(classType, res);
                return resObj;
            })
        );
    }
    getBlob<R>(url: string, httpOpt?: any): Observable<R> {
        return this._http.get<R>(url, { ...httpOptions, ...httpOpt }).pipe(
            catchError(this.handleError.bind(this)),
            map((res: R) => {
                // const resObj = plainToClass(classType, res);
                return res;
            })
        );
    }

    // showAlert(options: AlertOptions) { this._alert.showAlert(options); }

    handleError(error: HttpErrorResponse): Observable<Response<any>> {
        // this.showAlert({ status: true, title: 'OOPS!', description: 'Please Check Your Internet Connection' });
        // if (error.error instanceof ErrorEvent) {
        //     this.showAlert({ status: true, title: 'No Internet', description: 'Please Check Your Internet Connection' });
        //     // A client-side or network error occurred. Handle it accordingly.
        //     console.error('An error occurred:', error.error.message);
        // } else {
        //     this.showAlert({ status: true, title: error.status.toString(), description: error.error.message });
        //     // The backend returned an unsuccessful response code.
        //     // The response body may contain clues as to what went wrong,
        //     console.error(
        //         `Backend returned code ${error.status}, ` +
        //         `body was: ${error.error}`);
        // }
        return of(new Response(true, 'No Internet', null, null));
        // return an observable with a user-facing error message
        // return throwError(
        //     'Something bad happened; please try again later.');
    }
}

/**
 * @example
 * how to use the httpRequet method
 * this._httpSer.httpRequest<LoginResponseModel>(LoginResponseModel, 'POST', '/syntagi/physician/login', body,
 * { reportProgress: true }).subscribe((resp) => {  });
 * @example
 * for postRequest
 * this._httpSer.postResponse<LoginResponseModel>(LoginResponseModel, '/syntagi/physician/login', body).subscribe();
 */

/**
 * @example
 * export declare type HttpEvent<T> = HttpSentEvent | HttpHeaderResponse | HttpResponse<T> | HttpProgressEvent | HttpUserEvent<T>;
 */

/**
 * @example
 * for http events
 * pipe(map((res: HttpEvent<any>) => {
 * if (res.type === HttpEventType.Response) {
 * } else if (res.type === HttpEventType.ResponseHeader) {
 * } else if (res.type === HttpEventType.UploadProgress) {
 * } else if (res.type === HttpEventType.DownloadProgress) {
 * } else if (res.type === HttpEventType.Sent) {
 * } else if (res.type === HttpEventType.User)
 * } }) );
 */
