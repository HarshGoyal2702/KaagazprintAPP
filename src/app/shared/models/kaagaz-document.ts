export class KaagazDocument {
    id: string;
    fileName: string;
    fail: boolean;
    localUrl: string | any;
    type: string;
    ext: string;
    fileUrl: string;
    numberOfPage: number;
    formData: FormData;
    focus: boolean;
    progress: number = 0;
    fileSize: string;
    thumbnailUrl: string;
    pages: number;

    constructor(name: string, localUrl?: string, type?: string, ext?: string, size?: string, fileUrl?: string) {
        this.fileName = name;
        this.type = type;
        this.ext = ext;
        this.localUrl = localUrl;
        this.fileSize = size;
        this.fileUrl = fileUrl;
    }

}
