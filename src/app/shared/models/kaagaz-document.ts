export class KaagazDocument {
    id: string;
    fileName: string;
    fail: boolean;
    localUrl: string | any;
    type: string;
    ext: string;
    fileUrl: string;
    formData: FormData;
    focus: boolean;
    progress: number = 0;
    fileSize: string;
    thumbnailUrl: string;

    constructor(name: string, localUrl?: string, type?: string, ext?: string, size?: string, fileUrl?: string) {
        this.fileName = name;
        this.type = type;
        this.ext = ext;
        this.localUrl = localUrl;
        this.fileSize = size;
        this.fileUrl = fileUrl;
    }

}
