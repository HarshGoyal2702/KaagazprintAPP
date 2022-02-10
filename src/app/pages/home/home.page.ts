import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    public pages = [{ title: 'Dashboard', url: '/home/dashboard', icon: 'mail' }];
    constructor(private _renderer: Renderer2) { }

    ngOnInit() { }

    toggleTheme(checked: boolean) {
        checked ? this._renderer.addClass(document.body, 'dark') :
            this._renderer.removeClass(document.body, 'dark');
    }
}
