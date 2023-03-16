import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import {
    kaagazPageLayout, KaagazDocument, KaagazPageOrientation, KaagazPageType,
    KaagazPrintType, KaagazOrder, KaagazOrderStatus, fileUploadedValidator
} from 'kaagaz-models';
import { OrdersService } from 'kaagaz-services';

@Component({
    selector: 'kaagaz-order',
    templateUrl: './order.page.html',
    styleUrls: ['./order.page.scss'],
    host: { class: 'orders' },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPage implements OnInit, OnDestroy {

    orderFG: FormGroup;
    docs: KaagazDocument[] = [];

    get fileToPrintCT(): FormControl { return this.orderFG.get('fileToPrint') as FormControl; }
    constructor(private _fb: FormBuilder, private _menu: MenuController,
        private _cdr: ChangeDetectorRef, private _router: NavController,
        private _ordersSer: OrdersService) {
    }
    ngOnDestroy(): void {
        this._ordersSer.setCurrentOrder(null);
    }
    ngOnInit() {
        this.orderFG = this._fb.group({
            copies: [1, [Validators.required]],
            pageType: [KaagazPageType.A4, [Validators.required]],
            printType: [KaagazPrintType.ONE_SIDED, [Validators.required]],
            pageLayout: [kaagazPageLayout.ONE_on_ONE, [Validators.required]],
            collateType: [null, [Validators.required]],
            pagesToPrint: [{ all: true }, [Validators.required]],
            fileToPrint: [null, [Validators.required, fileUploadedValidator()]], orderStatus: [KaagazOrderStatus.PLACING],
            pageOrientation: [KaagazPageOrientation.PORTRAIT, [Validators.required]],
        });
        this._ordersSer.getCurrentOrder().then((order: KaagazOrder) => {
            if (order) { this.orderFG.patchValue(order); this._cdr.markForCheck(); }
        });
    }
    voidFn() { }
    resetFG() {
        this.orderFG.reset({
            copies: null,
            collateType: null,
            fileToPrint: null,
            pagesToPrint: { all: true },
            pageType: KaagazPageType.A4,
            printType: KaagazPrintType.ONE_SIDED,
            orderStatus: KaagazOrderStatus.PLACING,
            pageLayout: kaagazPageLayout.ONE_on_ONE,
            pageOrientation: KaagazPageOrientation.PORTRAIT
        });
    }
    toggleMenu() { this._menu.toggle(); }
    onDocRendered() { this.fileToPrintCT.updateValueAndValidity(); }
    reviewOrder() {
        this._ordersSer.setCurrentOrder(this.orderFG.getRawValue());
        this._router.navigateForward(['/kaagaz/orders/review']);
    }
}
