import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
    selector: 'kaagaz-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPage implements OnInit {

    docs: KaagazDocument[] = [];
    constructor(private _menu: MenuController, private _cdr: ChangeDetectorRef) { }

    ngOnInit() { }
    toggleMenu() { this._menu.toggle(); }
    onFileUploaded(file: KaagazDocument) {
        // this.docs = files;
        console.log(file);
    }
}
