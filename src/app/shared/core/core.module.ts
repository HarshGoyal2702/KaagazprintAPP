import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderInterceptorService } from './http-interceptor.service';

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
                { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }]
        };
    }
}
