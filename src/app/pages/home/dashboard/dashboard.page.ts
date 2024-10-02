import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../../../modal-page/modal-page.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit {
  showValues: boolean;
  showValue: boolean;
  PrintType: string = 'Standard';

  constructor(private _menu: MenuController,public modalController: ModalController) { }

  ngOnInit() {
  }
  toggleMenu() {
    this._menu.enable(true);
    this._menu.toggle();
  }

  show(){
    this.showValues = !this.showValues;
  }
  show2(){
    this.showValue = !this.showValue;
    
  }

  showInstituteInfo: boolean = false;
  showInstituteDeliveryInfo: boolean = false;

  toggleInstituteInfo() {
    this.showInstituteInfo = !this.showInstituteInfo;
  }

  toggleInstituteDeliveryInfo() {
    this.showInstituteDeliveryInfo = !this.showInstituteDeliveryInfo;
  }
  showOfficialInfo: boolean = false;
  showOfficialDeliveryInfo: boolean = false;

  toggleOfficialInfo() {
    this.showOfficialInfo = !this.showOfficialInfo;
  }

  toggleOfficialDeliveryInfo() {
    this.showOfficialDeliveryInfo = !this.showOfficialDeliveryInfo;
  }




  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPageComponent,
    });
    return await modal.present();
  }
}


