import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { CoreService } from 'kaagaz-core';
import { KaagazUser } from 'kaagaz-models';
import { ToastService } from 'kaagaz-services';

@Component({
  selector: 'kaagaz-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {

  user: KaagazUser;
  constructor(private _menu: MenuController, private _core: CoreService,private _renderer: Renderer2,
    private _router: NavController, private _toast: ToastService,
    private _alertCT: AlertController) {
    this.user = this._core.user;
  }

  ngOnInit() {
  }
  toggleMenu() { this._menu.toggle(); }
  async logout() {
    const alert = await this._alertCT.create({
        header: 'Logout',
        message: 'Do you want to Logout ?',
        buttons: [
            { text: 'No', role: 'cancel' },
            {
                text: 'Logout',
                handler: () => {
                    this._core.clearStorage();
                    this._router.navigateRoot(['/login']);
                    this._toast.runToast({ error: false, message: 'Logout Successfully!!' });
                },
            },
        ],
    });
    await alert.present();
}
}
