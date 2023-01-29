import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddressComponent } from './address/address.component';
import { KaagazAddress } from 'kaagaz-models';
@Directive({
    selector: '[kaagazAddressAnchor]'
})
export class AddressAnchorDirective {

    @Input() presentingEL: ElementRef;
    @Input() address: KaagazAddress;

    @Output() addressChange: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();
    constructor(private _modalCT: ModalController) { }

    @HostListener('click', ['evnet'])
    async openAddressForm() {
        const modal = await this._modalCT.create({
            swipeToClose: true,
            component: AddressComponent,
            presentingElement: this.presentingEL.nativeElement,
            componentProps: { address: this.address || new KaagazAddress() },
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) { this.addressChange.emit(data); }
    }

}
