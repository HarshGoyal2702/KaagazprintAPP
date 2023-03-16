export class HttpResponse {
    error: boolean;
    message: string;
    code: string | number;
    totalCount?: number;
}
export class Response<T = any> extends HttpResponse {
    data: T;
    constructor(error: boolean, message: string, code: string | number, data: any) {
        super();
        this.error = error;
        this.message = message;
        this.data = data;
        this.code = code;
    }
}
export class FileResponse extends HttpResponse {
    data: Blob | ArrayBuffer | string;
    constructor(error: boolean, message: string, code: string, fileObj: Blob | ArrayBuffer | string) {
        super();
        this.error = error;
        this.message = message;
        this.code = code;
        this.data = fileObj;
    }
}
