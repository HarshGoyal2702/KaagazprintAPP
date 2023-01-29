import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ToastService } from 'kaagaz-services';
import { CoreService } from 'kaagaz-core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomePage implements OnInit {

    public pages = [
        { title: 'Dashboard', url: '/kaagaz/dashboard', icon: 'dashboard' },
        { title: 'Order', url: '/kaagaz/order', icon: 'print' },
        { title: 'Profile', url: '/kaagaz/profile', icon: 'account_circle' },
    ];
    constructor(private _renderer: Renderer2, private _core: CoreService,
        private _router: NavController, private _toast: ToastService,
        private _alertCT: AlertController) { }

    ngOnInit() { }

    toggleTheme(checked: boolean) {
        checked ? this._renderer.addClass(document.body, 'dark') :
            this._renderer.removeClass(document.body, 'dark');
        this._toast.runToast({ error: false, message: `Theme changed to ${checked ? 'DARK' : 'light'}` }, { color: 'secondary' });
    }
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
