import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
    constructor(private _menu: MenuController) { }

    ngOnInit() { }
    toggleMenu() { this._menu.toggle(); }

    onFileSelection(doc: KaagazDocument) {
        this.docs.push(doc);
    }
}
