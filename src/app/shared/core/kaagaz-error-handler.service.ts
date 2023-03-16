import { ErrorHandler, Injectable } from '@angular/core';
import { ToastService } from 'kaagaz-services';

@Injectable()

export class KaagazErrorHandlerService implements ErrorHandler {

    constructor(private _toaster: ToastService) { }

    handleError(error: Error): void {
        console.log(error);
        this._toaster.runToast({ error: true, message: error.message });
    }
    //     handleError(error) {
    //         const loggingService = this.injector.get(LoggingService);
    //         const location = this.injector.get(LocationStrategy);
    //         const message = error.message ? error.message : error.toString();
    //         const url = location instanceof PathLocationStrategy
    //             ? location.path() : '';
    //         // get the stack trace, lets grab the last 10 stacks only
    //         StackTrace.fromError(error).then(stackframes => {
    //             const stackString = stackframes
    //                 .splice(0, 20)
    //                 .map(function (sf) {
    //                     return sf.toString();
    //                 }).join('\n');
    //             // log on the server
    //             loggingService.log({ message, url, stack: stackString });
    //         });
    //         throw error;
    //     }    
}
