import {
    Component, ChangeDetectionStrategy, EventEmitter,
    HostListener, Inject, Input, OnInit, Output
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from "@angular/common";
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraResultType, Photo, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
    selector: '[kaagaz-doc-picker], kaagaz-doc-picker',
    templateUrl: './doc-picker.component.html',
    styleUrls: ['./doc-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DocPickerComponent implements OnInit {

    @Input() multiple: boolean;
    private _fileInputEL: HTMLInputElement;
    @Output() selectedFile: EventEmitter<KaagazDocument> = new EventEmitter<KaagazDocument>();
    constructor(@Inject(DOCUMENT) private doc: Document, private _plt: Platform,
        private _actionSt: ActionSheetController, private _fileSys: File,
        private imagePicker: ImagePicker, private _santizr: DomSanitizer) { }
    ngOnInit() {
        this._fileInputEL = this.doc.createElement('input');
        this._fileInputEL.setAttribute('type', 'file');
        if (this.multiple) { this._fileInputEL.setAttribute('multiple', this.multiple ? 'true' : 'false'); }
        this._fileInputEL.onchange = (event: Event) => {
            for (let i = 0; i < this._fileInputEL.files.length; i++) { this.readFile(<any>this._fileInputEL.files[i]); }
        };
    }
    @HostListener('click', ['event'])
    onClicked(event: Event) { this._plt.is('android') || this._plt.is('ios') ? this.openDocsLibrary4Mobile() : this.openDocsLibrary4Web(); }
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
    readFile(file: File | IFile, extra?: any) {
        const fileReader = new FileReader();
        const zoneOriginalInstance = this._plt.is('android') || this._plt.is('ios') ?
            <FileReader>((fileReader as any)).__zone_symbol__originalInstance :
            <FileReader>((fileReader as any));
        zoneOriginalInstance.onloadend = () => {
            const imgBlob = new Blob([zoneOriginalInstance.result], { type: (<any>file).type });
            const doc: KaagazDocument = new KaagazDocument((<any>file).name, extra ? extra :
                this._santizr.bypassSecurityTrustResourceUrl(URL.createObjectURL(imgBlob)), (<any>file).type,
                (<any>file).name.substring(((<any>file).name.lastIndexOf('.') + 1)));
            const formData = new FormData();
            formData.append('name', (<any>file).name);
            formData.append('file', imgBlob, (<any>file).name);
            doc.formData = formData;
            this.selectedFile.emit(doc);
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
        //     this.selectedFile.emit(phyFile);
        // };
        // zoneOriginalInstance.readAsArrayBuffer((<any>file));
    }

}
