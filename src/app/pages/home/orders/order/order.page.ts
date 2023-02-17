import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { KaagazDocument } from 'src/app/shared/models/kaagaz-document';

@Component({
    selector: 'kaagaz-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
    host: { class: 'orders' },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPage implements OnInit {

    orderFG: FormGroup;
    docs: KaagazDocument[] = [];
    constructor(private _fb: FormBuilder, private _menu: MenuController,
        private _cdr: ChangeDetectorRef, private _router: NavController) { }

    ngOnInit() {
        this.orderFG = this._fb.group({
            copies: [null, [Validators.required]],
            pageType: [null, [Validators.required]],
            printType: [null, [Validators.required]],
            pageLayout: [null, [Validators.required]],
            collateType: [null, [Validators.required]],
            pagesToPrint: [null, [Validators.required]],
            fileToPrintUrl: [null, [Validators.required]],
            pageOrientation: [null, [Validators.required]],
        });
    }
    toggleMenu() { this._menu.toggle(); }
    onFileUploaded(file: KaagazDocument) { }
    reviewOrder() {
        // this._router.navigateForward(['/kaagaz/orders/review']);
        console.log(this.orderFG.getRawValue());
    }
}
