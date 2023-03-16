import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { KaagazUser } from '../models/user';
import { StorageService } from './storage.service';

@Injectable()
export class CoreService {

    constructor(private _storage: StorageService) { }

    set user(user: KaagazUser) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }
    get user(): KaagazUser {
        return plainToClass(KaagazUser, JSON.parse(window.localStorage.getItem('user')) as KaagazUser);
    }
    set authToken(token: string) {
        window.localStorage.setItem('authToken', token);
    }
    get authToken(): string {
        return window.localStorage.getItem('authToken');
    }

    clearStorage() {
        window.localStorage.clear();
        this._storage.clearStorage();
    }

}
