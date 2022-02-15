import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CoreService } from 'src/app/shared/core/core.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    public pages = [{ title: 'Dashboard', url: '/home/dashboard', icon: 'mail' }];
    constructor(private _renderer: Renderer2, private _core: CoreService,
        private _router: NavController) { }

    ngOnInit() { }

    toggleTheme(checked: boolean) {
        checked ? this._renderer.addClass(document.body, 'dark') :
            this._renderer.removeClass(document.body, 'dark');
    }
    logout() {
        this._core.clearStorage();
        this._router.navigateRoot(['/login']);
    }
}
