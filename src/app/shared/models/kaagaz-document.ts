export class KaagazDocument {
    id: number;
    name: string;
    fail: boolean;
    localUrl: string;
    type: string;
    ext: string;
    serverUrl: string;
    formData: FormData;
    isSelected: boolean;
    progress: number = 0;
    constructor(name: string, localUrl?: string, type?: string, ext?: string) {
        this.name = name;
        this.type = type;
        this.ext = ext;
        this.localUrl = localUrl;
    }
}
