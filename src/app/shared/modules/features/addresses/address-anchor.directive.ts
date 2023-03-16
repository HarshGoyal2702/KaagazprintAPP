import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddressComponent } from './address/address.component';
import { KaagazAddress } from 'kaagaz-models';
@Directive({
    selector: '[kaagazAddressAnchor]'
})
export class AddressAnchorDirective {

    @Input() presentingEL: ElementRef;
    @Input() address: KaagazAddress;

    @Output() addressChange: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();
    constructor(private _modalCT: ModalController, @Optional() private _routerOutlet: IonRouterOutlet) { }

    @HostListener('click', ['evnet'])
    async openAddressForm() {
        console
        const modal = await this._modalCT.create({
            swipeToClose: true,
            component: AddressComponent,
            presentingElement: this._routerOutlet ? this._routerOutlet.nativeEl : await this._modalCT.getTop(),
            componentProps: { address: this.address || new KaagazAddress() },
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) { this.addressChange.emit(data); }
    }

}
