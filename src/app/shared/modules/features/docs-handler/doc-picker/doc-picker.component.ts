import { Component, ChangeDetectionStrategy, EventEmitter, Inject, Input, OnInit, Output, forwardRef, ChangeDetectorRef } from '@angular/core';
import { PDFDocument } from "pdf-lib";
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from "@angular/common";
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraResultType, Photo, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { KaagazDocument } from 'kaagaz-models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'kaagaz-doc-picker',
    templateUrl: './doc-picker.component.html',
    styleUrls: ['./doc-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DocPickerComponent), multi: true
    }],
})

export class DocPickerComponent implements OnInit, ControlValueAccessor {

    private _onTouch: () => void;
    private _onChange: (_: any) => void;
    private _fileInputEL: HTMLInputElement;

    @Input() multiple: boolean;
    @Input() asProfileImage: boolean;
    @Input() accept: string = `image/*, .doc, .docx, application/msword, 
        application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf`;
    @Output() fileSelected: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    constructor(@Inject(DOCUMENT) private doc: Document, private _plt: Platform,
        private _actionSt: ActionSheetController, private _fileSys: File,
        private imagePicker: ImagePicker, private _santizr: DomSanitizer,
        private _cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this._fileInputEL = this.doc.createElement('input');
        this._fileInputEL.setAttribute('type', 'file');
        if (this.accept) { this._fileInputEL.setAttribute('accept', this.accept); }
        if (this.multiple) { this._fileInputEL.setAttribute('multiple', this.multiple ? 'true' : 'false'); }
        this._fileInputEL.onchange = (event: Event) => {
            for (let i = 0; i < this._fileInputEL.files.length; i++) { this.readFile(<any>this._fileInputEL.files[i]); }
            this.onTouch();
        };
    }
    // @HostListener('click', ['event'])
    onClicked(event: Event) {
        this._plt.is('android') || this._plt.is('ios') ? this.openDocsLibrary4Mobile() : this.openDocsLibrary4Web();
    }

    writeValue(value: any): void {

    }
    onTouch() { if (this._onTouch) { this._onTouch(); } }
    registerOnChange(fn: any): void { this._onChange = fn; }
    registerOnTouched(fn: any): void { this._onTouch = fn; }

    openDocsLibrary4Web() { this._fileInputEL.click(); }
    async openDocsLibrary4Mobile() {
        const actionSheet = await this._actionSt.create({
            header: 'Choose', keyboardClose: true,
            buttons: [
                {
                    text: 'Camera', icon: 'camera',
                    handler: () => { this.takePicture(); }
                }, {
                    text: 'Photo & Library', icon: 'image',
                    handler: () => {
                        // this.takePicture(CameraSource.Photos);
                        this.pickImagesFromPhotoLib();
                    }
                }, {
                    text: 'Document', icon: 'document',
                    handler: () => { this._fileInputEL.click(); }
                }, {
                    text: 'Cancel', icon: 'close', role: 'cancel',
                }
            ]
        });
        await actionSheet.present();
    }
    async takePicture(source: CameraSource = CameraSource.Camera) {
        const originalImage: Photo = await Camera.getPhoto({
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: source, saveToGallery: false,
        });
        this.resolveFile(originalImage.path);
    }
    pickImagesFromPhotoLib() {
        this.imagePicker.getPictures({
            maximumImagesCount: 5, outputType: 0, allow_video: true,
        }).then((results) => {
            for (let i = 0; i < results.length; i++) {
                this.resolveFile(results[i]);
            }
        }, (err) => { });
    }
    resolveFile(imageData: Photo | string) {
        this._fileSys.resolveLocalFilesystemUrl(<string>imageData).then(
            // FileEntry represents a file on a file system.
            (fileEntry: FileEntry) => {
                fileEntry.file(
                    (ifile: IFile) => {
                        this.readFile(ifile,
                            this._santizr.bypassSecurityTrustResourceUrl(Capacitor.convertFileSrc(fileEntry.toURL())));
                    }
                );
            }, (error) => {
            }
        );
    }
    range(start, end) {
        let length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i - 1);
    }
    renderPdf(uint8array) {
        const tempblob = new Blob([uint8array], {
            type: "application/pdf",
        });
        const docUrl = URL.createObjectURL(tempblob);
        // setPdfFileData(docUrl);
    }
    async extractPdfPage(arrayBuff) {
        const pdfSrcDoc = await PDFDocument.load(arrayBuff, { ignoreEncryption: true });
        const pdfNewDoc = await PDFDocument.create();
        const pages = await pdfNewDoc.copyPages(pdfSrcDoc, this.range(2, 3));
        // pages.forEach(page => pdfNewDoc.addPage(page));
        // const newpdf = await pdfNewDoc.save();
        // return newpdf;
    }
    readFile(file: File | IFile, extra?: any) {
        const fileReader = new FileReader();
        const zoneOriginalInstance = this._plt.is('android') || this._plt.is('ios') ?
            <FileReader>((fileReader as any)).__zone_symbol__originalInstance :
            <FileReader>((fileReader as any));
        zoneOriginalInstance.onloadend = () => {
            // this.extractPdfPage(zoneOriginalInstance.result);
            const imgBlob = new Blob([zoneOriginalInstance.result], { type: (<any>file).type });
            const fileName = (<any>file).name.substring(0, (<any>file).name.lastIndexOf('.'));
            const ext = (<any>file).name.substring(((<any>file).name.lastIndexOf('.') + 1));
            const doc: KaagazDocument = new KaagazDocument(fileName, extra ? extra :
                this._santizr.bypassSecurityTrustResourceUrl(URL.createObjectURL(imgBlob)), (<any>file).type,
                ext, ((<any>file).size / 1000000).toPrecision(2) + 'mb');
            const formData = new FormData();
            formData.append('name', fileName + '.' + doc.ext);
            formData.append('file', imgBlob, fileName);
            doc.formData = formData;
            if (this._onChange) { this._onChange(doc); }
            this.fileSelected.emit(doc);
            this._fileInputEL.value = null;
            this._cdr.markForCheck(); this._cdr.detectChanges();
        };
        zoneOriginalInstance.readAsArrayBuffer((<any>file));
        // const fileReader = new FileReader();
        // const zoneOriginalInstance = <FileReader>((fileReader as any));
        // zoneOriginalInstance.onloadend = () => {
        //     const imgBlob = new Blob([zoneOriginalInstance.result], { type: (<any>file).type });
        // const phyFile = new PhyFile((<any>file).name, extra ? extra :
        //     this._santizr.bypassSecurityTrustResourceUrl(URL.createObjectURL(imgBlob)), (<any>file).type,
        //     (<any>file).name.substring(((<any>file).name.lastIndexOf('.') + 1)));
        //     const formData = new FormData();
        //     formData.append('name', (<any>file).name);
        //     formData.append('file', imgBlob, (<any>file).name);
        //     phyFile.formData = formData;
        //     this.fileSelected.emit(phyFile);
        // };
        // zoneOriginalInstance.readAsArrayBuffer((<any>file));
    }

}
