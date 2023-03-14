import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CoreService } from '../core/core.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanLoad, CanActivate {

    constructor(private _core: CoreService, private _toast: ToastController,
        private _router: NavController) { }

    canLoad(route: Route) {
        return this._isLogin();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._isLogin();
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._isLogin();
    }

    private _isLogin(): boolean {
        return true;
        // if (this._core.user && this._core.authToken) {
        //     return true;
        // } else {
        //     this._toast.create({
        //         message: 'Not Authorise....please login again.',
        //         duration: 5000
        //     }).then(el => el.present());
        //     this._router.navigateRoot(['/login']);
        //     return false;
        // }
    }
}
