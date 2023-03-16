import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output } from '@angular/core';
import { KaagazAddress } from 'kaagaz-models';
import { IonRouterOutlet, ModalController, PopoverController } from '@ionic/angular';
import { SavedAddressesComponent } from './saved-addresses/saved-addresses.component';

@Directive({
    selector: '[kaagazAddressPicker]'
})

export class AddressPickerDirective {

    @Input() presentingEL: ElementRef;
    @Output() addressSelected: EventEmitter<KaagazAddress> = new EventEmitter<KaagazAddress>();
    constructor(private _modalCT: ModalController, @Optional() private _routerOutlet: IonRouterOutlet) { }

    @HostListener('click', ['event'])
    async openAddressForm(event: Event) {
        const modal = await this._modalCT.create({
            swipeToClose: true,
            component: SavedAddressesComponent,
            presentingElement: this._routerOutlet ? this._routerOutlet.nativeEl : await this._modalCT.getTop(),
            componentProps: { selection: true },
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) { this.addressSelected.emit(data); }

        // const modal = await this._modalCT.create({
        //     event: event, translucent: true,
        //     cssClass: 'address-picker',
        //     component: SavedAddressesComponent,
        //     componentProps: { selection: true },
        // });
        // await modal.present();
        // const { data } = await modal.onDidDismiss();
        // if (data) { this.addressSelected.emit(data); }

    }

}
