import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderInterceptorService } from './http-interceptor.service';
import { HttpRequestService } from './http-request.service';
import { CoreService } from './core.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: []
})

export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                CoreService, HttpRequestService,
                { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }]
        };
    }
}
