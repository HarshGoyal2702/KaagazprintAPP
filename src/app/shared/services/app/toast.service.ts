import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Response } from 'kaagaz-models';

export interface ToastRequisites {
    error: boolean;
    code?: number | string;
    message: string;
}

export interface ToastOptions {
    message?: string, duration?: number, position?: 'top' | 'bottom', color?: string
}

@Injectable({ providedIn: 'root' })

export class ToastService {

    constructor(private _toast: ToastController) { }

    async runToast(requisites: ToastRequisites, options?: ToastOptions) {
        const opts: ToastOptions = {
            message: `${requisites.message} ${requisites.error ?
                requisites.code ? '(Error Code -' + requisites.code + ')' : '--' : ''}`,
            color: requisites.error ? 'danger' : 'success',
            duration: requisites.error ? 5000 : 3000,
            position: 'bottom',
            ...options
        }
        const toastEL: HTMLIonToastElement = await this._toast.create(opts);
        await toastEL.present();
    }
}
