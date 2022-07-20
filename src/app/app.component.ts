import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private platform: Platform) { }
    ngOnInit() {
        this.platform.ready().then(() => {
            if (Capacitor.isPluginAvailable('SplashScreen')) {
                SplashScreen.hide();
            }
        });
    }
}
