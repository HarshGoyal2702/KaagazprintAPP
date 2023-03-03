import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { kaagazPageLayout, KaagazDocument, KaagazPageOrientation, KaagazPageType, KaagazPrintType, KaagazOrder } from 'kaagaz-models';
import { OrdersService } from 'kaagaz-services';

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
        private _cdr: ChangeDetectorRef, private _router: NavController,
        private _ordersSer: OrdersService) {
    }

    ngOnInit() {
        this.orderFG = this._fb.group({
            copies: [null, [Validators.required]],
            pageType: [KaagazPageType.A4, [Validators.required]],
            printType: [KaagazPrintType.ONE_SIDED, [Validators.required]],
            pageLayout: [kaagazPageLayout.ONE_on_ONE, [Validators.required]],
            collateType: [null, [Validators.required]],
            pagesToPrint: [{ all: true }, [Validators.required]],
            fileToPrintUrl: [null],
            pageOrientation: [KaagazPageOrientation.PORTRAIT, [Validators.required]],
        });
        this._ordersSer.getCurrentOrder().then((order: KaagazOrder) => {
            if (order) { this.orderFG.patchValue(order); }
        })
    }
    voidFn() { }
    toggleMenu() { this._menu.toggle(); }
    onFileUploaded(file: KaagazDocument) { }
    reviewOrder() {
        console.log(this.orderFG.getRawValue());
        this._ordersSer.setCurrentOrder(this.orderFG.getRawValue());
        this._router.navigateForward(['/kaagaz/orders/review']);
    }
}
