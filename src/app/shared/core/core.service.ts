import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { User } from '../models/user';

@Injectable()
export class CoreService {

    constructor() { }

    set user(user: User) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }
    get user(): User {
        return plainToClass(User, JSON.parse(window.localStorage.getItem('user')) as User);
    }
    set authToken(token: string) {
        window.localStorage.setItem('authToken', token);
    }
    get authToken(): string {
        return window.localStorage.getItem('authToken');
    }

    clearStorage() {
        window.localStorage.clear();
    }
}
