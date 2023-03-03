import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { plainToClass } from 'class-transformer';
import { ClassType } from './http-request.service';

@Injectable()
export class StorageService {

    constructor(private _storage: Storage) {
        this.init();
    }

    async init() {
        // If using, define drivers here: await this.storage.defineDriver(/*...*/);
        const storage = await this._storage.create();
        this._storage = storage;
    }

    async getItem<T>(key: string, classType: ClassType<T>, callback?: (savedData: T) => void) {
        const data: T = await this._storage.get(key);
        const classObj: T = plainToClass(classType, data);
        if (typeof callback === 'function') {
            callback((<any>classObj));
        }
        return classObj;
    }
    async setItem<T>(key: string, dataToSave: any, callback?: (savedData: T) => void) {
        const data: T = await this._storage.set(key, dataToSave);
        if (typeof callback === 'function') {
            callback(data);
        }
        return data;
    }
    removeItem(key: string): Promise<any> { return this._storage.remove(key); }
    clearStorage() { this._storage.clear(); }
}
