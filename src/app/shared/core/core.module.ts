import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderInterceptorService } from './http-interceptor.service';
import { HttpRequestService } from './http-request.service';
import { CoreService } from './core.service';
import { StorageService } from './storage.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { KaagazErrorHandlerService } from './kaagaz-error-handler.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, IonicStorageModule.forRoot({
        name: '__kaagaz_db',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })],
    exports: []
})

export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                CoreService, HttpRequestService, StorageService,
                { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
                { provide: ErrorHandler, useClass: KaagazErrorHandlerService }
            ]
        };
    }
}
