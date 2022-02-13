export class HttpResponse {
    error: boolean;
    message: string;
    code: string;
    totalCount?: number;
}
export class Response<T> extends HttpResponse {
    data: T;
    constructor(error: boolean, message: string, code: string, data: any) {
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